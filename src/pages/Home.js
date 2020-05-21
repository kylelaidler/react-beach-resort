import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
	return (
	<>
		<Hero>
			<Banner title="how can I help" subtitle="find a place and help someone">
			<Link to='/rooms' className="btn-primary">
			find a review
			</Link>
			</Banner>

		</Hero>
		<FeaturedRooms />
		<Services />


	</>
)
}
