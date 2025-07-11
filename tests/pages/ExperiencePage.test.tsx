import { render, screen } from '@testing-library/react';

import ExperiencePage from '../../src/pages/ExperiencePage';

describe('ExperiencePage', () => {
	const jobTitlePattern = 'développeuse|stagiaire';

	function getHeadingSearchPattern(forJobTitle: boolean): RegExp {
		return forJobTitle
			? RegExp(`${jobTitlePattern}`, 'i')
			: RegExp(`^((?!${jobTitlePattern}).)*$`, 'i');
	}

	function renderComponent(): { experiences: HTMLElement[] } {
		render(<ExperiencePage />);

		return { experiences: screen.getAllByRole('article') };
	}

	it('should display a list of my experiences', () => {
		const component = renderComponent();

		expect(component.experiences).not.toHaveLength(0);
	});

	it('should display the date for each experience', () => {
		const component = renderComponent();

		expect(screen.getAllByRole('time')).toHaveLength(
			component.experiences.length
		);
	});

	it('should display the job title for each experience', () => {
		const component = renderComponent();

		expect(
			screen.getAllByRole('heading', { name: getHeadingSearchPattern(true) })
		).toHaveLength(component.experiences.length);
	});

	it('should display the company name for each experience', () => {
		const component = renderComponent();

		expect(
			screen.getAllByRole('heading', { name: getHeadingSearchPattern(false) })
		).toHaveLength(component.experiences.length);
	});

	it('should display the description of each experience', () => {
		const component = renderComponent();

		expect(screen.getAllByRole('paragraph')).toHaveLength(
			component.experiences.length
		);
	});
});
