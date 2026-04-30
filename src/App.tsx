import './App.css';

import type { Page } from './types/page.type';

interface Props {
	pages: Page[];
}

function App({ pages }: Props) {
	return (
		<>
			<div id="page">
				<main>
					<h1>Accueil</h1>
					<nav>
						<ul>
							{pages.map((page) => {
								return (
									<li>
										<a>{page.name}</a>
									</li>
								);
							})}
						</ul>
					</nav>
					<article>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
							justo sed erat lobortis iaculis in sit amet dui. Mauris porttitor nisi
							eget augue feugiat auctor. Integer egestas leo vel velit pellentesque
							posuere. Donec a venenatis diam, quis tincidunt turpis. Cras vitae enim
							scelerisque risus auctor sollicitudin. Duis a consequat eros. Phasellus
							at venenatis ante. Morbi ut ex id arcu porta placerat ac sed eros.
							Aliquam non enim lectus.
						</p>
						<p>
							Nulla ac tincidunt sapien. Aliquam erat volutpat. Aliquam pulvinar
							tristique tortor quis ultrices. Proin convallis turpis justo, et
							consectetur justo ultrices quis. Maecenas sit amet lacus dui. Aenean eget
							eros gravida, pretium justo nec, aliquam lectus. Pellentesque habitant
							morbi tristique senectus et netus et malesuada fames ac turpis egestas.
							Duis malesuada nisi nec commodo efficitur. Maecenas euismod, est
							hendrerit congue suscipit, urna mi lacinia urna, id iaculis est diam ac
							tortor. Aenean rutrum, dolor vel blandit euismod, mauris risus mattis
							arcu, eget ornare augue eros rutrum eros. Fusce gravida eros magna, sit
							amet porttitor erat facilisis vel. Phasellus ut tellus ac sapien mattis
							ultricies ac vitae enim.
						</p>
						<p>
							Suspendisse efficitur dolor vel metus fermentum faucibus. Nunc eget urna
							est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia curae; Ut luctus tincidunt tellus, ornare condimentum
							arcu volutpat et. Aenean id mi sit amet arcu ultricies finibus vitae id
							arcu. Vestibulum tempor semper justo. Ut libero nisi, pellentesque eget
							scelerisque a, fringilla nec justo. Donec faucibus non dui vel maximus.
							Integer sed dui in mi ultrices auctor. Pellentesque metus arcu, congue a
							ipsum et, lacinia lacinia metus.
						</p>
						<p>
							Fusce pretium justo non volutpat dictum. Proin a volutpat nisi, non
							convallis nunc. Sed sagittis rutrum diam quis varius. Vestibulum id
							lacinia nunc, eu efficitur nunc. In sem est, elementum non tortor et,
							mollis volutpat ipsum. Etiam lacinia pretium nunc, sit amet varius sem
							dignissim ut. Duis consectetur tortor a velit posuere auctor. Praesent
							ullamcorper felis vel mauris pretium pretium. Praesent mattis, magna in
							ultrices commodo, turpis urna mattis enim, sit amet lobortis diam leo vel
							dui.
						</p>
						<p>
							Duis dapibus, dolor in molestie semper, libero dui iaculis leo, sit amet
							blandit magna enim sit amet quam. Pellentesque non venenatis libero. Nunc
							ut imperdiet massa. Fusce at nulla et purus feugiat tincidunt. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare arcu id
							est venenatis egestas. Pellentesque malesuada ex a nisl facilisis, vel
							mollis est rhoncus. Curabitur molestie, ligula sed consectetur congue,
							est dui suscipit neque, ac facilisis erat sem quis tortor. Aliquam quis
							vehicula libero. Nullam vulputate dui consectetur, tincidunt erat vitae,
							commodo ante. Mauris sollicitudin hendrerit dui non tincidunt. Maecenas
							tempus dapibus augue, sit amet consectetur lorem facilisis a.
							Pellentesque maximus, dui eu fermentum laoreet, augue nunc vestibulum
							turpis, vestibulum convallis velit sem sit amet diam.
						</p>
					</article>
				</main>
			</div>
			<footer>© Marie Darrigol</footer>
		</>
	);
}

export default App;
