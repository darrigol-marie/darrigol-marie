import { render, screen } from '@testing-library/react';

import Footer from '../../src/components/Footer';

describe('Footer', () => {
	it('should display a footer container', () => {
		render(<Footer />);

		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('should display the current year', () => {
		render(<Footer />);

		const currentYearRegex = RegExp(`${new Date().getFullYear()}`);

		expect(screen.getByText(currentYearRegex)).toBeInTheDocument();
	});

	it("should display website creator' name", () => {
		render(<Footer />);

		expect(screen.getByText(/marie darrigol/i)).toBeInTheDocument();
	});
});
