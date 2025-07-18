import { render, screen, type ByRoleMatcher } from '@testing-library/react';

import PostsList, { type Post } from '../../src/components/PostsList';

interface Props {
	noPostMessage: HTMLElement | null;
	postsElements: HTMLElement[];
}

describe('PostsList', () => {
	const basicMockupPosts: Post[] = [{ title: 'Post Title', text: 'Post Text' }];

	function renderComponent(postsToRender: Post[] = basicMockupPosts): Props {
		render(<PostsList posts={postsToRender} />);
		screen.debug();

		return {
			noPostMessage: screen.queryByText(/aucun élément/i),
			postsElements: screen.queryAllByRole('article'),
		};
	}

	function expectComponentFeatureToHaveHTMLElement(
		componentFeature: keyof Post,
		elementType: ByRoleMatcher
	) {
		const postsElements = screen.getAllByRole(elementType);

		expect(postsElements).toHaveLength(basicMockupPosts.length);
		for (let i = 0; i < postsElements.length; i++) {
			expect(postsElements[i]).toHaveTextContent(
				basicMockupPosts[i][componentFeature]
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

		expectComponentFeatureToHaveHTMLElement('title', 'heading');
	});

	it('should display a text for each post', () => {
		renderComponent();

		expectComponentFeatureToHaveHTMLElement('text', 'paragraph');
	});
});
