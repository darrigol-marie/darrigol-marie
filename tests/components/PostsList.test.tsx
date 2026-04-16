import { render, screen, within } from '@testing-library/react';

import PostsList from '../../src/components/PostsList';

import { type PostItem } from '../../src/types/post.type';

type ElementValue<T> = T extends undefined ? null : HTMLElement;

type ElementProps = {
	[Key in keyof PostItem as Key extends 'id'
		? never
		: Key]: Key extends 'paragraphs'
		? ElementValue<PostItem[Key]>[]
		: ElementValue<PostItem[Key]>;
};

interface Props {
	loadingMessage: HTMLElement | null;
	noPostMessage: HTMLElement | null;
	postsElements: ElementProps[];
}

describe('PostsList', () => {
	// TODO: export in mocks/data
	const basicMockupPosts: PostItem[] = [
		{ id: 'test', title: 'Post Title', paragraphs: ['Post Text'], date: '202X' },
	];

	function renderComponent(postsToRender: PostItem[] = basicMockupPosts): Props {
		render(<PostsList posts={postsToRender} />);

		const postsElements: ElementProps[] = screen
			.queryAllByRole('article')
			.map((postElement) => {
				const context = within(postElement);

				return {
					title: context.getByRole('heading'),
					paragraphs: context.getAllByRole('paragraph'),
					date: context.getByRole('time'),
					subtitle: context.queryByRole('doc-subtitle'),
				};
			});

		return {
			loadingMessage: screen.queryByText(/chargement/i),
			noPostMessage: screen.queryByText(/aucun élément/i),
			postsElements,
		};
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
});
