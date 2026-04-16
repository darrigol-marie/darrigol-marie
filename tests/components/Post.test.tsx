import { render, screen } from '@testing-library/react';

import Post from '../../src/components/Post';
import type { PostItem } from '../../src/types/post.type';

describe('Post', () => {
	const postTitle = 'Title';
	const postDate = '202X';
	const postParagraph = 'This is a paragraph';

	const mockupPost: PostItem = {
		id: 'post-id',
		title: postTitle,
		date: postDate,
		paragraphs: [postParagraph],
	};

	it('should display a title', () => {
		render(<Post post={mockupPost} />);

		const titleElement = screen.getByRole('heading');

		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveTextContent(postTitle);
	});

	it('should display a date', () => {
		render(<Post post={mockupPost} />);

		const dateElement = screen.getByRole('time');

		expect(dateElement).toBeInTheDocument();
		expect(dateElement).toHaveTextContent(postDate);
	});

	it('should display a subtitle if provided', () => {
		const postSubtitle = 'Subtitle';
		const postWithSubtitle: PostItem = { ...mockupPost, subtitle: postSubtitle };
		render(<Post post={postWithSubtitle} />);

		const subtitleElement = screen.getByRole('doc-subtitle');

		expect(subtitleElement).toBeInTheDocument();
		expect(subtitleElement).toHaveTextContent(postSubtitle);
	});

	it('should not display a subtitle if not provided', () => {
		render(<Post post={mockupPost} />);

		expect(screen.queryByRole('doc-subtitle')).not.toBeInTheDocument();
	});

	it('should display a paragraph if provided', () => {
		render(<Post post={mockupPost} />);

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
		const postWithParagraphs: PostItem = {
			...mockupPost,
			paragraphs: postParagraphs,
		};

		render(<Post post={postWithParagraphs} />);
		const paragraphsElements = screen.getAllByRole('paragraph');

		expect(paragraphsElements).toHaveLength(postParagraphs.length);
	});

	it('should display a link if provided', () => {
		const linkSource = 'www.toto.com';
		const linkText = 'This is a link';
		const postLink = { source: linkSource, text: linkText };
		const postWithLink: PostItem = { ...mockupPost, link: postLink };
		render(<Post post={postWithLink} />);

		const linkElement = screen.getByRole('link');

		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute('href', linkSource);
		expect(linkElement).toHaveTextContent(linkText);
	});

	it('should not display a link if not provided', () => {
		render(<Post post={mockupPost} />);

		expect(screen.queryByRole('link')).not.toBeInTheDocument();
	});
});
