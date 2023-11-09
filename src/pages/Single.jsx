import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../context/AppContext";
import rigoImageUrl from "../assets/img/rigo-baby.jpg"

export const Single = props => {
	const { store } = useContext(Context);

	// this is the basic form => const params = useParams();
	// we prefeer the destructuring form
	const { theId } = useParams()

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[theId].title}</h1>
			<img src={rigoImageUrl} />
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};