import { render, screen } from '@testing-library/react';

import Post from '../../src/components/Post';

/**
 * Les tests à écrire :
 *
 * - il faut afficher une date
 * - il faut afficher un sous-titre si on en a un
 * - il faut afficher le contenu [comment découper ça ?]
 * - il faut afficher un lien si on en a un
 */
describe('Post', () => {
	it('should display a title', () => {
		const postTitle = 'Title';

		render(<Post title={postTitle} />);
		const postElement = screen.getByRole('heading');

		expect(postElement).toBeInTheDocument();
		expect(postElement).toHaveTextContent(postTitle);
	});
});
