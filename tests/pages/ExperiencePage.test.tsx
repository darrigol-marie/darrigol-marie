import { screen, waitFor } from '@testing-library/react';

import ExperiencePage, {
	type Experience,
} from '../../src/pages/ExperiencePage';
import { renderWithRouter } from '../utils/router.helper';

interface Props {
	experiencesList: HTMLElement[];
	noExperienceMessage: HTMLElement | null;
}

describe('ExperiencePage', () => {
	const jobName = 'développeuse|stagiaire';
	const jobTitlePattern = RegExp(`${jobName}`, 'i');
	const companyNamePattern = RegExp(`^((?!${jobName}).)*$`, 'i');
	const noExperiencePattern = /aucune expérience/i;
	const mockupExperiences: Experience[] = [
		{
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

		await waitFor(
			() => screen.queryByText(noExperiencePattern) || screen.getByRole('article')
		);

		return {
			experiencesList: screen.queryAllByRole('article'),
			noExperienceMessage: screen.queryByText(noExperiencePattern),
		};
	}

	it('should display a message when there is no experience to display', async () => {
		const component = await renderComponent();

		expect(component.noExperienceMessage).toBeInTheDocument();
		expect(component.experiencesList).toHaveLength(0);
	});

	it('should display the list of the given experiences', async () => {
		const component = await renderComponent(mockupExperiences);

		expect(component.experiencesList).toHaveLength(mockupExperiences.length);
		expect(component.noExperienceMessage).not.toBeInTheDocument();
	});

	it('should display the date for each experience', async () => {
		await renderComponent(mockupExperiences);

		const experiencesDate = screen.getAllByRole('time');

		expect(experiencesDate).toHaveLength(mockupExperiences.length);
		for (let i = 0; i < experiencesDate.length; i++) {
			expect(experiencesDate[i]).toHaveTextContent(mockupExperiences[i].date);
		}
	});

	it('should display the job position for each experience', async () => {
		await renderComponent(mockupExperiences);

		const positions = screen.getAllByRole('heading', {
			name: jobTitlePattern,
		});

		expect(positions).toHaveLength(mockupExperiences.length);
		for (let i = 0; i < positions.length; i++) {
			expect(positions[i]).toHaveTextContent(mockupExperiences[i].position);
		}
	});

	it('should display the company name for each experience', async () => {
		await renderComponent(mockupExperiences);

		const companyNames = screen.getAllByRole('heading', {
			name: companyNamePattern,
		});

		expect(companyNames).toHaveLength(mockupExperiences.length);
		for (let i = 0; i < companyNames.length; i++) {
			expect(companyNames[i]).toHaveTextContent(mockupExperiences[i].company);
		}
	});

	it('should display the description of each experience', async () => {
		await renderComponent(mockupExperiences);

		const experiencesDescriptions = screen.getAllByRole('paragraph');

		expect(experiencesDescriptions).toHaveLength(mockupExperiences.length);
		for (let i = 0; i < experiencesDescriptions.length; i++) {
			expect(experiencesDescriptions[i]).toHaveTextContent(
				mockupExperiences[i].description
			);
		}
	});
});
