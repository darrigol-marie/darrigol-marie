import { render, screen } from '@testing-library/react';

import ExperiencePage, {
	type Experience,
} from '../../src/pages/ExperiencePage';

describe('ExperiencePage', () => {
	const jobTitlePattern = 'développeuse|stagiaire';
	const experiences: Experience[] = [
		{
			date: '2017 - 2022',
			position: 'Développeuse front-end',
			company: 'Digital Shape Technologies',
			description: 'Description pour ce poste',
		},
	];

	function getHeadingSearchPattern(forJobTitle: boolean): RegExp {
		return forJobTitle
			? RegExp(`${jobTitlePattern}`, 'i')
			: RegExp(`^((?!${jobTitlePattern}).)*$`, 'i');
	}

	function searchForNoExperienceMessage() {
		return screen.queryByText(/aucune expérience/i);
	}

	function renderComponent(experiences: Experience[]): {
		experiences: HTMLElement[];
	} {
		render(<ExperiencePage experiences={experiences} />);

		return { experiences: screen.queryAllByRole('article') || [] };
	}

	it('should display a message when there is no experience to display', () => {
		renderComponent([]);

		expect(searchForNoExperienceMessage()).toBeInTheDocument();
	});

	it('should display the list of the given experiences', () => {
		const component = renderComponent(experiences);

		expect(component.experiences).toHaveLength(experiences.length);
		expect(searchForNoExperienceMessage()).not.toBeInTheDocument();
	});

	it('should display the date for each experience', () => {
		const component = renderComponent(experiences);

		const experiencesDate = screen.getAllByRole('time');

		expect(experiencesDate).toHaveLength(component.experiences.length);
		for (let i = 0; i < experiencesDate.length; i++) {
			expect(experiencesDate[i]).toHaveTextContent(experiences[i].date);
		}
	});

	it('should display the job position for each experience', () => {
		const component = renderComponent(experiences);

		const positions = screen.getAllByRole('heading', {
			name: getHeadingSearchPattern(true),
		});

		expect(positions).toHaveLength(component.experiences.length);
		for (let i = 0; i < positions.length; i++) {
			expect(positions[i]).toHaveTextContent(experiences[i].position);
		}
	});

	it('should display the company name for each experience', () => {
		const component = renderComponent(experiences);

		const companyNames = screen.getAllByRole('heading', {
			name: getHeadingSearchPattern(false),
		});

		expect(companyNames).toHaveLength(component.experiences.length);
		for (let i = 0; i < companyNames.length; i++) {
			expect(companyNames[i]).toHaveTextContent(experiences[i].company);
		}
	});

	it('should display the description of each experience', () => {
		const component = renderComponent(experiences);

		const experiencesDescriptions = screen.getAllByRole('paragraph');

		expect(experiencesDescriptions).toHaveLength(component.experiences.length);
		for (let i = 0; i < experiencesDescriptions.length; i++) {
			expect(experiencesDescriptions[i]).toHaveTextContent(
				experiences[i].description
			);
		}
	});
});
