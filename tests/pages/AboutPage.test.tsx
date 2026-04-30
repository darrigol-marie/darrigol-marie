import { render, screen } from '@testing-library/react';

import AboutPage from '../../src/AboutPage';

describe('AboutPage', () => {
	it('should introduce me', () => {
		render(<AboutPage />);

		expect(screen.getByText(/Marie Darrigol/)).toBeInTheDocument();
		expect(screen.getByText(/développeuse web/i)).toBeInTheDocument();
	});
});
