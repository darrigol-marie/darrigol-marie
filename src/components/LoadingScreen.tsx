export interface LoadingScreenProps {
	isLoading: boolean;
	isError: boolean;
}

function LoadingScreen({ isLoading, isError }: LoadingScreenProps) {
	if (isError) {
		return <p>Une erreur est survenue.</p>;
	}

	return isLoading ? <p>Chargement...</p> : <></>; // TODO: see how to display view (or child component, don't remember the name)
}

export default LoadingScreen;
