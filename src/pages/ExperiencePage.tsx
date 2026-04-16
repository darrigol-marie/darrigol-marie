import PostsList from '../components/PostsList';
import LoadingScreen from '../components/LoadingScreen';
import { usePosts } from '../hooks/usePosts';
import { ExperiencePost } from '../types/experience.type';

function ExperiencePage() {
	const {
		data = [],
		isLoading,
		isError,
	} = usePosts({
		queryKey: ['experience'],
		url: '/experiences.json',
		dataMapper: (item) => new ExperiencePost(item),
	});

	return (
		<LoadingScreen isLoading={isLoading} isError={isError}>
			<PostsList posts={data} />
		</LoadingScreen>
	);
}

export default ExperiencePage;
