import { screen, waitFor } from '@testing-library/react';

import ExperiencePage, {
	type Experience,
} from '../../src/pages/ExperiencePage';
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

	function expectPropToBeRenderedForEachElement(prop: keyof Experience) {
		for (let i = 0; i < mockupExperiences.length; i++) {
			expect(screen.getByText(mockupExperiences[i][prop])).toBeInTheDocument();
		}
	}

	async function renderComponent(): Promise<void> {
		renderWithRouter(<ExperiencePage />, mockupExperiences);

		await waitFor(() => screen.getByRole('article'));
	}

	it('should display the date for each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachElement('date');
	});

	it('should display the job position for each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachElement('position');
	});

	it('should display the company name for each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachElement('company');
	});

	it('should display the description of each experience', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachElement('description');
	});
});
