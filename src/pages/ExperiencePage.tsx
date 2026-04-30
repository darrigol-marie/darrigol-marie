export interface Experience {
	date: string;
	position: string;
	company: string;
	description: string;
}

interface Props {
	experiences: Experience[];
}

function ExperiencePage({ experiences }: Props) {
	return (
		<>
			{experiences.length === 0 && <p>Aucune expérience à afficher.</p>}
			{experiences.map((experience) => {
				return (
					<article>
						<header>
							<time dateTime={experience.date}>{experience.date}</time>
							<h2>{experience.position}</h2>
							<h3>{experience.company}</h3>
						</header>
						<p>{experience.description}</p>
					</article>
				);
			})}
		</>
	);
}

export default ExperiencePage;
