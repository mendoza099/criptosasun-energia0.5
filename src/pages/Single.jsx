import { Link, useParams } from "react-router-dom";

export const Single = props => {

	// this is the basic form
	// const params = useParams();

	// we prefeer the destructuring form
	const { theid } = useParams()

	return (
		<div className="jumbotron">
			<hr className="my-4" />

			<Link to="/">
				<h2>This is the id {theid}</h2>
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
