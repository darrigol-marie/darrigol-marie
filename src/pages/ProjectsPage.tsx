import PostsList from '../components/PostsList';
import LoadingScreen from '../components/LoadingScreen';
import { usePosts } from '../hooks/usePosts';
import type { PostLink } from '../types/post.type';
import { ProjectPost, type ProjectData } from '../types/project.type';

export interface Project {
	id: string;
	date: string;
	name: string;
	description: string[];
	link?: PostLink;
}

function ProjectsPage() {
	const {
		data = [],
		isLoading,
		isError,
	} = usePosts<ProjectData, ProjectPost>({
		queryKey: ['projects'],
		url: '/projects.json',
		dataMapper: (item) => new ProjectPost(item),
	});

	return (
		<LoadingScreen isLoading={isLoading} isError={isError}>
			<PostsList posts={data} />
		</LoadingScreen>
	);
}

export default ProjectsPage;
