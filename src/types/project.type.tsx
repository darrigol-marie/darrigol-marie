import { PostItem, type PostData } from './post.type';

export interface ProjectData extends PostData {
	name: string;
}

export class ProjectPost extends PostItem {
	constructor(data: ProjectData) {
		super(data, data.name);

		if (data.link) {
			this.setLink(data.link);
		}
	}
}
