import PostsList from '../components/PostsList';
import LoadingScreen from '../components/LoadingScreen';
import { usePosts } from '../hooks/usePosts';

function ExperiencePage() {
	const { data = [], isLoading, isError } = usePosts();

	return (
		<LoadingScreen isLoading={isLoading} isError={isError}>
			<PostsList posts={data} />
		</LoadingScreen>
	);
}

export default ExperiencePage;
