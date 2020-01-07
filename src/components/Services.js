import React, {Component} from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends 
Component {
	state={
		services:[
		{
		icon:<FaCocktail/>,
		title:"free cocktails",
		info:'Spicy jalapeno bacon ipsum dolor amet lorem ad nisi filet mignon tenderloin, minim alcatra qui in jerky duis exercitation tri-tip ut!'
		},

		{
		icon:<FaHiking/>,
		title:"Cool Hiking Trails",
		info:'Spicy jalapeno bacon ipsum dolor amet lorem ad nisi filet mignon tenderloin, minim alcatra qui in jerky duis exercitation tri-tip ut!'
		},

		{
		icon:<FaShuttleVan/>,
		title:"Free Shuttle",
		info:'Spicy jalapeno bacon ipsum dolor amet lorem ad nisi filet mignon tenderloin, minim alcatra qui in jerky duis exercitation tri-tip ut!'
		},

		{
		icon:<FaBeer/>,
		title:"Strongest Beer",
		info:'Spicy jalapeno bacon ipsum dolor amet lorem ad nisi filet mignon tenderloin, minim alcatra qui in jerky duis exercitation tri-tip ut!'
		}

		]
	};

	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
				{this.state.services.map((item, index) => {

					return (
						<article key={index} className="service">
							<span>{item.icon}</span>
							<h6>{item.title}</h6>
							<p>{item.info}</p>
						</article>
						);
				})}
				</div>
			</section>

			);
	}
}