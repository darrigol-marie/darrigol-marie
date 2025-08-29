import { screen, waitFor } from '@testing-library/react';

import ExperiencePage, {
	type Experience,
} from '../../src/pages/ExperiencePage';
import { expectPropToBeRenderedForEachComponent } from '../utils/expect.helper';
import { renderWithRouter } from '../utils/router.helper';

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

	async function renderComponent(): Promise<void> {
		renderWithRouter(<ExperiencePage />, mockupExperiences);

		await waitFor(() => screen.getByRole('article'));
	}

	it('should display a loading text while loading data', async () => {
		renderWithRouter(<ExperiencePage />, []);

		await waitFor(() => screen.getByText(/chargement/i));

		expect(screen.getByText(/chargement/i)).toBeInTheDocument();
	});

	it('should display the date for each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('date', mockupExperiences);
	});

	it('should display the job position for each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('position', mockupExperiences);
	});

	it('should display the company name for each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('company', mockupExperiences);
	});

	it('should display the description of each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('description', mockupExperiences);
	});
});
