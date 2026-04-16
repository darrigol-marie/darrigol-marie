import type { ExperienceData } from "../../src/types/experience.type";
import type { ProjectData } from "../../src/types/project.type";

export const mockupExperiences: ExperienceData[] = [
    {
        id: 'experience-test',
        date: '2017 - 2022',
        position: 'Développeuse front-end',
        company: 'Digital Shape Technologies',
        description: ['Description pour ce poste'],
    },
];

export const mockupProjects: ProjectData[] = [
		{
			id: 'project-test',
			date: '202X',
			name: 'Project Name',
			description: ['Project description'],
		},
	];