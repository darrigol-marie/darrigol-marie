import { screen, waitFor } from '@testing-library/react';

import ExperiencePage, {
	type Experience,
} from '../../src/pages/ExperiencePage';
import { renderWithRouter } from '../utils/router.helper';

interface Props {
	experiencesList: HTMLElement[];
}

describe('ExperiencePage', () => {
	const mockupExperiences: Experience[] = [
		{
			id: 'experience-test',
			date: '2017 - 2022',
			position: 'Développeuse front-end',
			company: 'Digital Shape Technologies',
			description: 'Description pour ce poste',
		},
	];

	async function renderComponent(
		experiences: Experience[] = []
	): Promise<Props> {
		renderWithRouter(<ExperiencePage />, experiences);

		await waitFor(() => screen.getByRole('article'));

		return {
			experiencesList: screen.queryAllByRole('article'),
		};
	}

	it('should display the date for each experience', async () => {
		await renderComponent(mockupExperiences);

		for (let i = 0; i < mockupExperiences.length; i++) {
			expect(screen.getByText(mockupExperiences[i].date)).toBeInTheDocument();
		}
	});

	it('should display the job position for each experience', async () => {
		await renderComponent(mockupExperiences);

		for (let i = 0; i < mockupExperiences.length; i++) {
			expect(screen.getByText(mockupExperiences[i].position)).toBeInTheDocument();
		}
	});

	it('should display the company name for each experience', async () => {
		await renderComponent(mockupExperiences);

		for (let i = 0; i < mockupExperiences.length; i++) {
			expect(screen.getByText(mockupExperiences[i].company)).toBeInTheDocument();
		}
	});

	it('should display the description of each experience', async () => {
		await renderComponent(mockupExperiences);

		for (let i = 0; i < mockupExperiences.length; i++) {
			expect(
				screen.getByText(mockupExperiences[i].description)
			).toBeInTheDocument();
		}
	});
});
