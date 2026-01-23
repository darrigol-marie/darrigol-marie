import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import PostsList from '../components/PostsList';
import LoadingScreen from '../components/LoadingScreen';

export interface Experience {
	id: string;
	date: string;
	position: string;
	company: string;
	description: string;
}

function ExperiencePage() {
	const {
		data = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['experience'],
		queryFn: () =>
			axios.get('/experiences.json').then((response) => response.data),
	});

	return (
		<LoadingScreen isLoading={isLoading} isError={isError}>
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
		</LoadingScreen>
	);
}

export default ExperiencePage;
