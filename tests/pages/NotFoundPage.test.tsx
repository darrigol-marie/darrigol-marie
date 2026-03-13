import { render, screen } from '@testing-library/react';

import NotFoundPage from '../../src/pages/NotFoundPage';
import { HashRouter } from 'react-router-dom';
import { navigateTo } from '../utils/router.helper';

describe('NotFoundPage', () => {
	function renderComponent() {
		render(<NotFoundPage />, { wrapper: HashRouter });
	}

	it('should display a title stating "404 error"', () => {
		renderComponent();

		expect(screen.getByRole('heading')).toHaveTextContent('Erreur 404');
	});

	it('should display a text stating what happened', () => {
		renderComponent();

		expect(screen.getByRole('article')).toHaveTextContent(
			/la page.+(n'existe pas|a été déplacée)/i,
		);
	});

	it('should display a link to the home page', async () => {
		navigateTo('/bad-route');

		const returnLink = screen.getByRole('link');
		expect(returnLink).toHaveTextContent(/retour.+accueil/i);

		const linkRoute = returnLink.getAttribute('a') || '';
		navigateTo(linkRoute);
		expect(screen.getByText(/à propos/i));
	});
});
