import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../src/pages/NotFoundPage';

describe('NotFoundPage', () => {
	it('should display a title stating "404 error"', () => {
		render(<NotFoundPage />);

		expect(screen.getByRole('heading')).toHaveTextContent('Erreur 404');
	});

	it('should display a text stating what happened', () => {
		render(<NotFoundPage />);

		expect(screen.getByRole('article')).toHaveTextContent(
			/la page.+(n'existe pas|a été déplacée)/i
		);
	});
});
