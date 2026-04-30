import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('App', () => {
	it('should display the main content', () => {
		render(<App />);

		expect(screen.getByRole('main')).toBeInTheDocument();
	});
});
