import { render, screen } from '@testing-library/react';

import Post from '../../src/components/Post';

/**
 * Les tests à écrire :
 *
 * - il faut afficher un lien si on en a un
 */
describe('Post', () => {
	it('should display a title', () => {
		const postTitle = 'Title';

		render(<Post title={postTitle} date={'XXX'} paragraphs={[]} />);
		const titleElement = screen.getByRole('heading');

		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveTextContent(postTitle);
	});

	it('should display a date', () => {
		const postDate = '202X';

		render(<Post title={'Title'} date={postDate} paragraphs={[]} />);
		const dateElement = screen.getByRole('time');

		expect(dateElement).toBeInTheDocument();
		expect(dateElement).toHaveTextContent(postDate);
	});

	it('should display a subtitle if provided', () => {
		const postSubtitle = 'Subtitle';

		render(
			<Post
				title={'Title'}
				date={'XXX'}
				subtitle={postSubtitle}
				paragraphs={[]}
			/>,
		);
		const subtitleElement = screen.getByRole('doc-subtitle');

		expect(subtitleElement).toBeInTheDocument();
		expect(subtitleElement).toHaveTextContent(postSubtitle);
	});

	it('should not display a subtitle if not provided', () => {
		render(<Post title={'Title'} date={'XXX'} paragraphs={[]} />);

		expect(screen.queryByRole('doc-subtitle')).not.toBeInTheDocument();
	});

	it('should display a paragraph if provided in the content', () => {
		const postParagraph = 'This is a paragraph';
		const postContent = [postParagraph];

		render(<Post title={'Title'} date={'XXX'} paragraphs={postContent} />);
		const paragraphElement = screen.getByRole('paragraph');

		expect(paragraphElement).toBeInTheDocument();
		expect(paragraphElement).toHaveTextContent(postParagraph);
	});

	it('should display as many paragraphs as provided', () => {
		const postParagraphs = [
			'First paragraph',
			'Second paragraph',
			'Third paragraph',
		];

		render(<Post title={'Title'} date={'XXX'} paragraphs={postParagraphs} />);
		const paragraphsElements = screen.getAllByRole('paragraph');

		expect(paragraphsElements).toHaveLength(postParagraphs.length);
	});
});
