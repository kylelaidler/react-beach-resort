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
			<Banner title="hello there theresa" subtitle="this is test site and everything works">
			<Link to='/rooms' className="btn-primary">
			find a review
			</Link>
			</Banner>

		</Hero>
		<Services />
		<FeaturedRooms />

	</>
)
}
