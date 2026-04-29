import { render, screen } from '@testing-library/react';

import LoadingScreen, {
	type LoadingScreenProps,
} from '../../src/components/LoadingScreen';

describe('LoadingScreen', () => {
	function renderComponent({
		isLoading,
		isError,
		isEmpty = false,
		emptyMessage = 'Aucune donnée à afficher.',
		errorMessage = 'Une erreur est survenue.',
		children = null,
	}: LoadingScreenProps) {
		render(
			<LoadingScreen
				isLoading={isLoading}
				isError={isError}
				isEmpty={isEmpty}
				emptyMessage={emptyMessage}
				errorMessage={errorMessage}
			>
				{children}
			</LoadingScreen>,
		);
	}

	it('should display an animation while data are loading', () => {
		renderComponent({ isLoading: true, isError: false });

		expect(screen.getByTitle(/animation/i)).toBeInTheDocument();
	});

	it('should remove the animation when data are loaded', async () => {
		renderComponent({ isLoading: false, isError: false });

		expect(screen.queryByTitle(/animation/i)).not.toBeInTheDocument();
	});

	it('should display a message if no data were found', async () => {
		const emptyMessage = 'Aucun résultat trouvé.';

		renderComponent({
			isLoading: false,
			isError: false,
			isEmpty: true,
			emptyMessage,
		});

		expect(await screen.findByText(emptyMessage)).toBeInTheDocument();
	});

	it('should display a message if an error occured during data fetching', async () => {
		const errorMessage = 'Erreur de chargement.';

		renderComponent({ isLoading: true, isError: true, errorMessage });

		expect(await screen.findByText(errorMessage)).toBeInTheDocument();
	});

	it('should display children if data are loaded and no error occured', () => {
		const childText = 'Contenu chargé';

		renderComponent({
			isLoading: false,
			isError: false,
			children: <p>{childText}</p>,
		});

		expect(screen.getByText(childText)).toBeInTheDocument();
	});
});
