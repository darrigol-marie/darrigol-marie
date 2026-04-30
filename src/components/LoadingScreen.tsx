import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

interface Props {
	query: UseQueryOptions; // TODO: see if we really need to pass the entire query to the component or if it can be created internally
}

function LoadingScreen({ query }: Props) {
	const { isLoading, isError } = useQuery(query);

	if (isError) {
		return <p>Une erreur est survenue.</p>;
	}

	return isLoading ? <p>Chargement...</p> : <></>;
}

export default LoadingScreen;
