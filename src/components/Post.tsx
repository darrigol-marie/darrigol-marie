interface Props {
	title: string;
	date: string;
}

function Post({ title, date }: Props) {
	return (
		<>
			<h1>{title}</h1>
			<time>{date}</time>
		</>
	);
}

export default Post;
