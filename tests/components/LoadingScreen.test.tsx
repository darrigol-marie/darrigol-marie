import { render, screen } from '@testing-library/react';

import LoadingScreen, {
	type LoadingScreenProps,
} from '../../src/components/LoadingScreen';

describe('LoadingScreen', () => {
	function renderComponent({ isLoading, isError }: LoadingScreenProps) {
		render(<LoadingScreen isLoading={isLoading} isError={isError} />);
	}

	it('should display an animation while data are loading', () => {
		renderComponent({ isLoading: true, isError: false });

		expect(screen.getByTitle(/animation/i)).toBeInTheDocument();
	});

	it('should remove the animation when data are loaded', async () => {
		renderComponent({ isLoading: false, isError: false });

		expect(screen.queryByTitle(/animation/i)).not.toBeInTheDocument();
	});

	it('should display a message if an error occured during data fetching', async () => {
		renderComponent({ isLoading: true, isError: true });

		expect(await screen.findByText(/erreur/i)).toBeInTheDocument();
	});
});
