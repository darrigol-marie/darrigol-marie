import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../src/pages/NotFoundPage';

describe('NotFoundPage', () => {
	it('should display a title stating "404 error"', () => {
		render(<NotFoundPage />);

		expect(screen.getByRole('heading')).toHaveTextContent('Erreur 404');
	});
});
