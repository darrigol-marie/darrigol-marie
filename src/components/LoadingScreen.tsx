import Loader from './Loader';

export interface LoadingScreenProps extends React.PropsWithChildren {
	isLoading: boolean;
	isError: boolean;
	isEmpty?: boolean;
	emptyMessage?: string;
	errorMessage?: string;
}

function LoadingScreen({
	isLoading,
	isError,
	isEmpty = false,
	emptyMessage = 'Aucune donnée à afficher.',
	errorMessage = 'Une erreur est survenue.',
	children,
}: LoadingScreenProps) {
	if (isError) {
		return <p>{errorMessage}</p>;
	}

	if (isLoading) {
		return <Loader />;
	}

	if (isEmpty) {
		return <p>{emptyMessage}</p>;
	}

	return <>{children}</>;
}

export default LoadingScreen;
