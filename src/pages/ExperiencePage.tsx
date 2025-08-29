import { useLoaderData } from 'react-router-dom';
import PostsList from '../components/PostsList';

export interface Experience {
	id: string;
	date: string;
	position: string;
	company: string;
	description: string;
}

function ExperiencePage() {
	const experiences: Experience[] = useLoaderData() || [];

	return (
		<>
			<div>Chargement...</div>
			<PostsList
				posts={experiences.map((experience) => {
					return {
						id: experience.id,
						title: experience.position,
						subtitle: experience.company,
						date: experience.date,
						text: experience.description,
					};
				})}
			/>
		</>
	);
}

export default ExperiencePage;
