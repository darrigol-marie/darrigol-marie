import { useLoaderData } from 'react-router-dom';
import PostsList from '../components/PostsList';

export interface Project {
	id: string;
	date: string;
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
					date: project.date,
					title: project.name,
					text: project.description,
				};
			})}
		/>
	);
}

export default ProjectsPage;
