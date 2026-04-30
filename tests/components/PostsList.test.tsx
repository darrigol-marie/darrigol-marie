import {
	render,
	screen,
	within,
	type ByRoleMatcher,
} from '@testing-library/react';

import PostsList, { type Post } from '../../src/components/PostsList';

type ElementValue<T> = T extends undefined ? null : HTMLElement;

type ElementProps = {
	[Key in keyof Post]: ElementValue<Post[Key]>;
};

interface Props {
	noPostMessage: HTMLElement | null;
	postsElements: ElementProps[];
}

type RequiredKeyOfPost = keyof {
	[Key in keyof Post as Omit<Post, Key> extends Post ? never : Key]: Post[Key];
};

describe('PostsList', () => {
	const basicMockupPosts: Post[] = [{ title: 'Post Title', text: 'Post Text' }];

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
			noPostMessage: screen.queryByText(/aucun élément/i),
			postsElements,
		};
	}

	function expectRequiredComponentFeatureToHaveHTMLElement(
		requiredComponentFeature: RequiredKeyOfPost,
		elementType: ByRoleMatcher
	) {
		const postsElements = screen.getAllByRole(elementType);

		expect(postsElements).toHaveLength(basicMockupPosts.length);
		for (let i = 0; i < postsElements.length; i++) {
			expect(postsElements[i]).toHaveTextContent(
				basicMockupPosts[i][requiredComponentFeature]
			);
		}
	}

	function checkHTMLElementsForComponentOptionalFeature(
		postsElements: ElementProps[],
		featureKey: keyof Post,
		renderedPosts: Post[]
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
		renderComponent();

		expectRequiredComponentFeatureToHaveHTMLElement('title', 'heading');
	});

	it('should display a text for each post', () => {
		renderComponent();

		expectRequiredComponentFeatureToHaveHTMLElement('text', 'paragraph');
	});

	it('should display a date if specified for a post', () => {
		const mockupPosts: Post[] = [
			{ title: 'Post Without a Date', text: 'This post should not have a date.' },
			{
				title: 'Post With a Date',
				text: 'This post should have a date.',
				date: '2025-07-18',
			},
			{
				title: 'Another Post With a Date',
				text: 'This post should also have a date.',
				date: '2025-07-10',
			},
		];

		const component = renderComponent(mockupPosts);

		checkHTMLElementsForComponentOptionalFeature(
			component.postsElements,
			'date',
			mockupPosts
		);
	});

	it('should display a subtitle if specified for a post', () => {
		const mockupPosts: Post[] = [
			{
				title: 'Post Without a Subtitle',
				text: 'This post should not have a subtitle.',
			},
			{
				title: 'Post With a SubTitle',
				text: 'This post should have a subtitle.',
				subtitle: 'This is a subtitle',
			},
		];

		const component = renderComponent(mockupPosts);

		checkHTMLElementsForComponentOptionalFeature(
			component.postsElements,
			'subtitle',
			mockupPosts
		);
	});
});
