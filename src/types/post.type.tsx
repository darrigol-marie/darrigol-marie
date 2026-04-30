interface PostLink {
	source: string;
	text: string;
}

export interface PostProps {
	id: string;
	title: string;
	date: string;
	paragraphs: string[];
	subtitle?: string;
	link?: PostLink;
}
