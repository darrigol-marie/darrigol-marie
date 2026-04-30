import PostsList from '../components/PostsList';
import LoadingScreen from '../components/LoadingScreen';
import { usePosts } from '../hooks/usePosts';
import { ExperiencePost, type ExperienceData } from '../types/experience.type';

function ExperiencePage() {
	const {
		data = [],
		isLoading,
		isError,
	} = usePosts<ExperienceData, ExperiencePost>({
		queryKey: ['experience'],
		url: '/experiences.json',
		dataMapper: (item) => new ExperiencePost(item),
	});

	return (
		<LoadingScreen
			isLoading={isLoading}
			isError={isError}
			isEmpty={!isLoading && data.length === 0}
			emptyMessage="Aucune expérience trouvée."
		>
			<PostsList posts={data} />
		</LoadingScreen>
	);
}

export default ExperiencePage;
