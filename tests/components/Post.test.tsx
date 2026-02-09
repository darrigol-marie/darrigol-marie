import { render, screen } from '@testing-library/react';

import Post from '../../src/components/Post';

/**
 * Les tests à écrire :
 *
 * - il faut afficher un sous-titre si on en a un
 * - il faut afficher le contenu [comment découper ça ?]
 * - il faut afficher un lien si on en a un
 */
describe('Post', () => {
	it('should display a title', () => {
		const postTitle = 'Title';

		render(<Post title={postTitle} date={'XXX'} />);
		const titleElement = screen.getByRole('heading');

		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveTextContent(postTitle);
	});

	it('should display a date', () => {
		const postDate = '202X';

		render(<Post title={'Title'} date={postDate} />);
		const dateElement = screen.getByRole('time');

		expect(dateElement).toBeInTheDocument();
		expect(dateElement).toHaveTextContent(postDate);
	});

	it('should display a subtitle if provided', () => {
		const postSubtitle = 'Subtitle';

		render(<Post title={'Title'} date={'XXX'} subtitle={postSubtitle} />);
		const subtitleElement = screen.getByRole('doc-subtitle');

		expect(subtitleElement).toBeInTheDocument();
		expect(subtitleElement).toHaveTextContent(postSubtitle);
	});
});
