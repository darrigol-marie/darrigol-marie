import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from '../src/App';
import { appRoutes } from '../src/App.routes';

describe('App', () => {
	function renderComponent() {
		render(<App />, { wrapper: BrowserRouter });
	}

	it('should display the page container', () => {
		renderComponent();

		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('should display a title saying "À propos"', () => {
		renderComponent();

		expect(screen.getByRole('heading')).toHaveTextContent(/à propos/i);
	});

	it('should display a navigation bar with a link to each page', () => {
		renderComponent();

		const navigationBar = screen.getByRole('navigation');

		expect(navigationBar.getElementsByTagName('a')).toHaveLength(
			appRoutes.length
		);
	});

	it('should display the page content', () => {
		renderComponent();

		expect(screen.getByRole('article')).toBeInTheDocument();
	});

	it('should display a footer with current year and credits', () => {
		renderComponent();

		const footer = screen.getByRole('contentinfo');
		const currentDate = new Date();

		expect(footer).toHaveTextContent(
			`© ${currentDate.getFullYear()} Marie Darrigol`
		);
	});
});
