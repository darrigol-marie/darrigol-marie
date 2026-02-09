interface PropsElement {
	type: string;
	content: string;
}

interface Props {
	title: string;
	date: string;
	content: PropsElement[];
	subtitle?: string;
}

function Post({ title, date, subtitle, content }: Props) {
	return (
		<>
			<h1>{title}</h1>
			<time>{date}</time>
			{subtitle && <p role="doc-subtitle">{subtitle}</p>}
			{content.map((element) => (
				<p>{element.content}</p>
			))}
		</>
	);
}

export default Post;
