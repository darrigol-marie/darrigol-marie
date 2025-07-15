import { render, screen } from '@testing-library/react';

import ContactPage from '../../src/pages/ContactPage';

describe('ContactPage', () => {
	it('should display my email address as a link to send me an email', () => {
		render(<ContactPage />);

		const emailLink = screen.getByRole('link', {
			name: /darrigol.marie@gmail.com/i,
		});

		expect(emailLink).toHaveAttribute('href', 'mailto:darrigol.marie@gmail.com');
	});

	it('should display a link to open my LinkedIn profile in another tab', () => {
		render(<ContactPage />);

		const linkedinLink = screen.getByRole('link', {
			name: /linkedin/i,
		});

		expect(linkedinLink).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/marie-darrigol-a7844251/'
		);
		expect(linkedinLink).toHaveAttribute('target', '_blank');
	});
});
