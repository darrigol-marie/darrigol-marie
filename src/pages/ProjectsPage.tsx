import { useLoaderData } from 'react-router-dom';
import PostsList from '../components/PostsList';

export interface Project {
	id: string;
	name: string;
	description: string;
}

function ProjectsPage() {
	const projects: Project[] = useLoaderData();

	return (
		<PostsList
			posts={projects.map((project) => {
				return {
					id: project.id,
					title: project.name,
					text: project.description,
				};
			})}
		/>
	);
}

export default ProjectsPage;
