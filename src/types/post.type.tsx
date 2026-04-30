export interface PostLink {
	source: string;
	text: string;
}

export interface PostData {
	id: string;
	date: string;
	description: string[];
	link?: PostLink;
}

export class PostItem {
	id: string;
	title: string;
	date: string;
	paragraphs: string[];
	subtitle?: string;
	link?: PostLink;

	constructor(data: PostData, title: string) {
		this.id = data.id;
		this.date = data.date;
		this.paragraphs = data.description;

		this.title = title;
	}

	setLink(link: PostLink) {
		this.link = link;
	}
}
