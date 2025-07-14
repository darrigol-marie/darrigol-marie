export interface Project {
	name: string;
	description: string;
}

interface Props {
	projects: Project[];
}

function ProjectsPage({ projects }: Props) {
	return (
		<>
			{projects.length == 0 && <p>Aucun projet à afficher.</p>}
			{projects.map((project) => {
				return (
					<article>
						<h2>{project.name}</h2>
						<p>{project.description}</p>
					</article>
				);
			})}
		</>
	);
}

export default ProjectsPage;
