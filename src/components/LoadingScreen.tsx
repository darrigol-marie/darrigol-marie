import Loader from './Loader';

export interface LoadingScreenProps extends React.PropsWithChildren {
	isLoading: boolean;
	isError: boolean;
}

function LoadingScreen({ isLoading, isError, children }: LoadingScreenProps) {
	if (isError) {
		return <p>Une erreur est survenue.</p>;
	}

	return isLoading ? <Loader /> : <>{children}</>;
}

export default LoadingScreen;
