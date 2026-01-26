import './Loader.scss';

function Loader() {
	return (
		<div className="loader-container">
			<div className="loader" title="Loader animation">
				<div className="loader-element">
					<div className="loader-element-symbol"></div>
				</div>
				<div className="loader-element">
					<div className="loader-element-symbol"></div>
				</div>
				<div className="loader-element">
					<div className="loader-element-symbol"></div>
				</div>
			</div>
		</div>
	);
}

export default Loader;
