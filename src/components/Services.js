import React, {Component} from 'react'
import {FaPen,FaCalculator,FaArrowUp,FaUserTie} from 'react-icons/fa'
import Title from './Title'

export default class Services extends
Component {
	state={
		services:[
		{
		icon:<FaPen/>,
		title:"Fair Reviews",
		info:'Spicy jalapeno bacon ipsum dolor amet lorem ad nisi filet mignon tenderloin, minim alcatra qui in jerky duis exercitation tri-tip ut!'
		},

		{
		icon:<FaCalculator/>,
		title:"work it out",
		info:'Spicy jalapeno bacon ipsum dolor amet lorem ad nisi filet mignon tenderloin, minim alcatra qui in jerky duis exercitation tri-tip ut!'
		},

		{
		icon:<FaArrowUp/>,
		title:"Rank the Reviews",
		info:'Spicy jalapeno bacon ipsum dolor amet lorem ad nisi filet mignon tenderloin, minim alcatra qui in jerky duis exercitation tri-tip ut!'
		},

		{
		icon:<FaUserTie/>,
		title:"Help Small Business",
		info:'Spicy jalapeno bacon ipsum dolor amet lorem ad nisi filet mignon tenderloin, minim alcatra qui in jerky duis exercitation tri-tip ut!'
		}

		]
	};

	render() {
		return (
			<section className="services">
				<Title title="How it works" />
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
