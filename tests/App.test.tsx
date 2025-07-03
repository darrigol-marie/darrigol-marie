import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('App', () => {
	it('should display the main content', () => {
		render(<App />);

		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('should display a title saying "Accueil"', () => {
		render(<App />);

		expect(screen.getByRole('heading')).toHaveTextContent(/accueil/i);
	});
});
