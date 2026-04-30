import './Header.scss';

type Props = {
	title: string;
	subtitle?: string;
};

function Header({ title, subtitle }: Props) {
	return (
		<div className="header">
			<h1 className="header-title">{title}</h1>
			{subtitle && (
				<p className="header-subtitle" role="doc-subtitle">
					{subtitle}
				</p>
			)}
		</div>
	);
}

export default Header;
