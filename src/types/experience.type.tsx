import { PostItem, type PostData } from './post.type';

export interface ExperienceData extends PostData {
	company: string;
	position: string;
}

export class ExperiencePost extends PostItem {
	constructor(data: ExperienceData) {
		super(data, data.position);

		this.subtitle = data.company;
	}
}
