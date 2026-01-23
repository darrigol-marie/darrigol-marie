import { render, screen } from '@testing-library/react';

import LoadingScreen, {
	type LoadingScreenProps,
} from '../../src/components/LoadingScreen';

describe('LoadingScreen', () => {
	function renderComponent({ isLoading, isError }: LoadingScreenProps) {
		render(<LoadingScreen isLoading={isLoading} isError={isError} />);
	}

	// TODO: to replace by an animation with a clear tag (to ensure accessibility and that we can select the animation for tests)
	it('should display a message while data are loading', () => {
		renderComponent({ isLoading: true, isError: false });

		expect(screen.getByText(/chargement/i)).toBeInTheDocument();
	});

	it('should remove the loading message when data are loaded', async () => {
		renderComponent({ isLoading: false, isError: false });

		expect(screen.queryByText(/chargement/i)).not.toBeInTheDocument();
	});

	it('should display a message if an error occured during data fetching', async () => {
		renderComponent({ isLoading: true, isError: true });

		expect(await screen.findByText(/erreur/i)).toBeInTheDocument();
	});
});
