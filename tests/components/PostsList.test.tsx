import {
	render,
	screen,
	within,
	type ByRoleMatcher,
} from '@testing-library/react';

import PostsList, { type Post } from '../../src/components/PostsList';

interface ElementProps {
	title: HTMLElement;
	text: HTMLElement;
	date: HTMLElement | null;
}

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

		for (let i = 0; i < component.postsElements.length; i++) {
			const postDate = mockupPosts[i].date;

			if (postDate) {
				expect(component.postsElements[i].date).toHaveTextContent(postDate);
			} else {
				expect(component.postsElements[i].date).not.toBeInTheDocument();
			}
		}
	});
});
