import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import PostsList from '../components/PostsList';
import LoadingScreen from '../components/LoadingScreen';

export interface Project {
	id: string;
	date: string;
	name: string;
	description: string;
}

function ProjectsPage() {
	const {
		data = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['projects'],
		queryFn: () => axios.get('/projects.json').then((response) => response.data),
	});

	return (
		<LoadingScreen isLoading={isLoading} isError={isError}>
			<PostsList
				posts={data.map((project: Project) => {
					return {
						id: project.id,
						date: project.date,
						title: project.name,
						text: project.description,
					};
				})}
			/>
		</LoadingScreen>
	);
}

export default ProjectsPage;
