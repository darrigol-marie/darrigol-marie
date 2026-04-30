import { render, screen } from '@testing-library/react';
import Loader from '../../src/components/Loader';

describe('Loader', () => {
	it('should render an animation', () => {
		render(<Loader />);

		expect(screen.getByTitle('Loader animation')).toBeInTheDocument();
	});
});
