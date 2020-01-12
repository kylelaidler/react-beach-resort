import React, { Component} from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";


export default class SingleRoom extends Component {
	constructor(props) {
		super(props);

		this.state ={
			slug:this.props.match.params.slug,
			defaultBcg
		};
	}

	static contextType = RoomContext;

	render() {
		const {getRoom} = this.context;
		const room = getRoom(this.state.slug);
		if(!room){
			return (
				<div className="error">
					<h3>no such review...</h3>
					<Link to='/rooms' className="btn-primary">
						back to reviews
					</Link>
				</div>
			);
		}

		const {
			name,
			description,
			capacity,
			size,
			price,
			extras,
			breakfast,
			pets,
			images
		} = room;
		const [main, ...defaultImages] = images;

		return (
			<>
			<StyledHero img={images[0] || this.state.defaultBcg}>
				<Banner title={`${name} room`}>
					<Link to="/rooms" className="btn-primary">
					back to reviews
					</Link>
				</Banner>
			</StyledHero>

			<section className="single-room">
					<div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>info</h3>
              <h6>Avg price : R{price}</h6>
              <h6>Jobs : {size} done</h6>
              <h6>
                Rating :
                {capacity > 1 ? `${capacity} stars` : `${capacity} star`}
              </h6>
              <h6>{pets ? "top rating" : "good rating"}</h6>
              <h6>{breakfast && "punctual"}</h6>
            </article>
          </div>

					<div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
        </section>

				<section className="room-extras">
          <h6>Specialities </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>

			</>
		);
	}
}
