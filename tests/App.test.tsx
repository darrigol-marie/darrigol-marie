import { render, screen } from '@testing-library/react';

import App from '../src/App';
import type { Page } from '../src/types/page.type';

describe('App', () => {
	function renderComponent(pages: Page[] = []) {
		render(<App pages={pages} />);
	}

	it('should display the main content', () => {
		renderComponent();

		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('should display a title saying "Accueil"', () => {
		renderComponent();

		expect(screen.getByRole('heading')).toHaveTextContent(/accueil/i);
	});

	it('should display a navigation bar with a link to each page', () => {
		const pages: Page[] = [{ name: 'Home' }]; // should be a list of all the available pages
		renderComponent(pages);

		const navigationBar = screen.getByRole('navigation');

		expect(navigationBar.getElementsByTagName('a')).toHaveLength(pages.length);
	});
});
