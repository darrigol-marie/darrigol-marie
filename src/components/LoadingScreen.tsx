export interface LoadingScreenProps extends React.PropsWithChildren {
	isLoading: boolean;
	isError: boolean;
}

function LoadingScreen({ isLoading, isError, children }: LoadingScreenProps) {
	if (isError) {
		return <p>Une erreur est survenue.</p>;
	}

	return isLoading ? <p>Chargement...</p> : <>{children}</>;
}

export default LoadingScreen;
