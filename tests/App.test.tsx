import { render, screen } from '@testing-library/react';

import App from '../src/App';
import { sitePages, type Page } from '../src/types/page.type';

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
		renderComponent(sitePages);

		const navigationBar = screen.getByRole('navigation');

		expect(navigationBar.getElementsByTagName('a')).toHaveLength(
			sitePages.length
		);
	});
});
