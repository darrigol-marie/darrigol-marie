import { render, screen } from '@testing-library/react';

import Header from '../../src/components/Header';

describe('Header', () => {
	const title = 'Header title';

	function renderComponent(subtitle?: string) {
		render(<Header title={title} subtitle={subtitle} />);
	}

	it('should display a title', () => {
		renderComponent();

		const headerTitle = screen.getByRole('heading');

		expect(headerTitle).toHaveTextContent(title);
	});

	it('should not display a subtitle if none is provided', () => {
		renderComponent();

		expect(screen.queryByRole('doc-subtitle')).not.toBeInTheDocument();
	});

	it('should display a subtitle if provided', () => {
		const subtitle = 'Header subtitle';
		renderComponent(subtitle);

		const headerSubtitle = screen.getByRole('doc-subtitle');

		expect(headerSubtitle).toHaveTextContent(subtitle);
	});
});
