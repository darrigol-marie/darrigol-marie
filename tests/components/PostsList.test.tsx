import { render, screen, within } from '@testing-library/react';

import PostsList, { type Post } from '../../src/components/PostsList';

type ElementValue<T> = T extends undefined ? null : HTMLElement;

type ElementProps = {
	[Key in keyof Post as Key extends 'id' ? never : Key]: ElementValue<Post[Key]>;
};

interface Props {
	loadingMessage: HTMLElement | null;
	noPostMessage: HTMLElement | null;
	postsElements: ElementProps[];
}

describe('PostsList', () => {
	// TODO: export in mocks/data
	const basicMockupPosts: Post[] = [
		{ id: 'test', title: 'Post Title', text: 'Post Text' },
	];

	function renderComponent(postsToRender: Post[] = basicMockupPosts): Props {
		render(<PostsList posts={postsToRender} />);

		const postsElements: ElementProps[] = screen
			.queryAllByRole('article')
			.map((postElement) => {
				const context = within(postElement);

				return {
					title: context.getByRole('heading'),
					text: context.getByRole('paragraph'),
					date: context.queryByRole('time'),
					subtitle: context.queryByRole('doc-subtitle'),
				};
			});

		return {
			loadingMessage: screen.queryByText(/chargement/i),
			noPostMessage: screen.queryByText(/aucun élément/i),
			postsElements,
		};
	}

	// TODO: to remove? or simplify?
	function checkHTMLElementsForComponentFeature(
		postsElements: ElementProps[],
		featureKey: keyof ElementProps,
		renderedPosts: Post[] = basicMockupPosts,
	) {
		expect(postsElements).toHaveLength(renderedPosts.length);

		for (let i = 0; i < postsElements.length; i++) {
			const featureElement = postsElements[i][featureKey];
			const featureValue = renderedPosts[i][featureKey];

			featureValue
				? expect(featureElement).toHaveTextContent(featureValue)
				: expect(featureElement).not.toBeInTheDocument();
		}
	}

	it('should display a message if there is no element to display', () => {
		const component = renderComponent([]);

		expect(component.noPostMessage).toBeInTheDocument();
		expect(component.postsElements).toHaveLength(0);
	});

	it('should display a list of posts', () => {
		const component = renderComponent();

		expect(component.postsElements).toHaveLength(basicMockupPosts.length);
		expect(component.noPostMessage).not.toBeInTheDocument();
	});

	it('should display a title for each post', () => {
		const component = renderComponent();

		checkHTMLElementsForComponentFeature(component.postsElements, 'title');
	});

	it('should display a text for each post', () => {
		const component = renderComponent();

		checkHTMLElementsForComponentFeature(component.postsElements, 'text');
	});

	it('should display a date if specified for a post', () => {
		const mockupPosts: Post[] = [
			{
				id: 'post-nodate',
				title: 'Post Without a Date',
				text: 'This post should not have a date.',
			},
			{
				id: 'post-date-1',
				title: 'Post With a Date',
				text: 'This post should have a date.',
				date: '2025-07-18',
			},
			{
				id: 'post-date-2',
				title: 'Another Post With a Date',
				text: 'This post should also have a date.',
				date: '2025-07-10',
			},
		];

		const component = renderComponent(mockupPosts);

		checkHTMLElementsForComponentFeature(
			component.postsElements,
			'date',
			mockupPosts,
		);
	});

	it('should display a subtitle if specified for a post', () => {
		const mockupPosts: Post[] = [
			{
				id: 'post-no-subtitle',
				title: 'Post Without a Subtitle',
				text: 'This post should not have a subtitle.',
			},
			{
				id: 'post-subtitle',
				title: 'Post With a SubTitle',
				text: 'This post should have a subtitle.',
				subtitle: 'This is a subtitle',
			},
		];

		const component = renderComponent(mockupPosts);

		checkHTMLElementsForComponentFeature(
			component.postsElements,
			'subtitle',
			mockupPosts,
		);
	});
});
