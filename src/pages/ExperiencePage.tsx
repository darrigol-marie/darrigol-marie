import { useQuery } from '@tanstack/react-query';

import PostsList from '../components/PostsList';

export interface Experience {
	id: string;
	date: string;
	position: string;
	company: string;
	description: string;
}

function ExperiencePage() {
	const { data = [], isLoading } = useQuery({
		queryKey: ['experience'],
		queryFn: () =>
			fetch('src/data/experiences.json').then((response) => response.json()),
	});

	return (
		<>
			{isLoading ? (
				<p>Chargement...</p>
			) : (
				<PostsList
					posts={data.map((experience: Experience) => {
						return {
							id: experience.id,
							title: experience.position,
							subtitle: experience.company,
							date: experience.date,
							text: experience.description,
						};
					})}
				/>
			)}
		</>
	);
}

export default ExperiencePage;
