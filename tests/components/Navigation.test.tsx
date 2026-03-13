import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import { type AppRoute } from '../../src/App.routes';
import Navigation from '../../src/components/Navigation';

describe('Navigation', () => {
	function renderComponent(links: AppRoute[] = []) {
		render(<Navigation links={links} />, { wrapper: HashRouter });
	}

	it('should render a navigation bar', () => {
		renderComponent();

		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('should render a list of links', () => {
		renderComponent();

		expect(screen.getByRole('list')).toBeInTheDocument();
	});

	it('should render a link for each given route and display their name', () => {
		const routes: AppRoute[] = [{ name: 'Test', path: '/test' }];
		renderComponent(routes);

		const links = screen.getAllByRole('link');

		expect(links).toHaveLength(routes.length);
		for (let i = 0; i < links.length; i++) {
			expect(links[i]).toHaveTextContent(routes[i].name);
			expect(links[i]).toHaveAttribute('href');
			expect(links[i].getAttribute('href')).toMatch(
				new RegExp(`${routes[i].path}`),
			);
		}
	});
});
