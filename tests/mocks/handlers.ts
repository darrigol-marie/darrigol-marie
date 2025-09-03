import { http, HttpResponse } from 'msw';
import { mockupExperiences } from './data';

export const handlers = [
    http.get('src/data/experiences.json', () => {
        return HttpResponse.json(mockupExperiences);
    })
]