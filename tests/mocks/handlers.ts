import { http, HttpResponse } from 'msw';
import { mockupExperiences, mockupProjects } from './data';

export const handlers = [
    http.get('/loading', () => {
        return HttpResponse.json(mockupExperiences);
    }),
    http.get('/experiences.json', () => {
        return HttpResponse.json(mockupExperiences);
    }),
    http.get('/projects.json', () => {
        return HttpResponse.json(mockupProjects);
    })
]