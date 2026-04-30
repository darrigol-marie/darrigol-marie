import { render, screen } from '@testing-library/react';

import App from '../src/App';
import { sitePages } from '../src/types/page.type';

describe('App', () => {
	function renderComponent() {
		render(<App pages={sitePages} />);
	}

	it('should display the page', () => {
		renderComponent();

		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('should display a title saying "Accueil"', () => {
		renderComponent();

		expect(screen.getByRole('heading')).toHaveTextContent(/accueil/i);
	});

	it('should display a navigation bar with a link to each page', () => {
		renderComponent();

		const navigationBar = screen.getByRole('navigation');

		expect(navigationBar.getElementsByTagName('a')).toHaveLength(
			sitePages.length
		);
	});

	it('should display the content of the page', () => {
		renderComponent();

		expect(screen.getByRole('article')).toBeInTheDocument();
	});

	it('should display a footer with some credits', () => {
		renderComponent();

		const footer = screen.getByRole('contentinfo');

		expect(footer).toHaveTextContent(/marie darrigol/i);
	});
});
