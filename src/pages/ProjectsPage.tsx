import { useLoaderData } from 'react-router-dom';

export interface Project {
	name: string;
	description: string;
}

function ProjectsPage() {
	const projects: Project[] = useLoaderData();

	return (
		<>
			{projects.length == 0 && <p>Aucun projet à afficher.</p>}
			{projects.map((project) => {
				return (
					<article key={project.name}>
						<h2>{project.name}</h2>
						<p>{project.description}</p>
					</article>
				);
			})}
		</>
	);
}

export default ProjectsPage;
