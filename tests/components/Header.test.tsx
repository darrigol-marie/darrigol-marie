import { render, screen } from '@testing-library/react';

import Header from '../../src/components/Header';

describe('Header', () => {
	function renderComponent() {
		render(<Header />);
	}

	it('should display my name', () => {
		renderComponent();

		const headerTitle = screen.getByRole('heading');

		expect(headerTitle).toHaveTextContent('Marie Darrigol');
	});

	it('should display my occupation', () => {
		renderComponent();

		const headerSubtitle = screen.getByRole('doc-subtitle');

		expect(headerSubtitle).toHaveTextContent('Développeuse web');
	});
});
