import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import App from '../src/App';
import { rootRoute } from '../src/App.routes';
import { navigateTo } from './utils/router.helper';

describe('App', () => {
	function renderComponent() {
		render(<App />, { wrapper: HashRouter });
	}

	it('should display a title', () => {
		renderComponent();

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});

	it('should display a navigation bar with a link to each page', () => {
		renderComponent();

		const navigationBar = screen.getByRole('navigation');

		expect(navigationBar.getElementsByTagName('a')).toHaveLength(
			rootRoute.children.length,
		);
	});

	it('should display the page content', () => {
		renderComponent();

		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('should display a footer', () => {
		renderComponent();

		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('should display a 404 error page when the user navigates to a wrong route', () => {
		navigateTo('/bad-route');

		expect(screen.getByText(/404/)).toBeInTheDocument();
	});
});
