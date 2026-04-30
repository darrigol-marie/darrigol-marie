import { Post, type PostData } from './post.type';

export interface ProjectData extends PostData {
	name: string;
}

export class ProjectPost extends Post {
	constructor(data: ProjectData) {
		super(data, data.name);
	}
}
