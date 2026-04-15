import { Post, type PostData } from './post.type';

export interface ExperienceData extends PostData {
	company: string;
	position: string;
}

export class ExperiencePost extends Post {
	constructor(data: ExperienceData) {
		super(data, data.position);

		this.subtitle = data.company;
	}
}
