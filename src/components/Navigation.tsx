import { NavLink } from 'react-router-dom';

import './Navigation.scss';

import type { AppRoute } from '../App.routes';

interface Props {
	links: AppRoute[];
}

function Navigation({ links }: Props) {
	return (
		<nav className="navigation">
			<ul className="navigation-links">
				{links.map((link) => {
					return (
						<li key={link.path} className="navigation-links-item">
							<NavLink to={link.path}>{link.name}</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navigation;
