import React from 'react';
import { Container, Grid } from '@material-ui/core';
import classes from './MajorTeam.module.css';

import cskLogo from '../assets/imgs/csk.jpg';
import ddLogo from '../assets/imgs/dd.jpg';
import kxipLogo from '../assets/imgs/kxip.jpg';
import kkrLogo from '../assets/imgs/kkr.jpg';
import miLogo from '../assets/imgs/mi.jpg';
import rrLogo from '../assets/imgs/rr.jpg';
import rcbLogo from '../assets/imgs/rcb.jpg';
import srhLogo from '../assets/imgs/srh.jpg';

const MajorTeams = () => {
	const team = [
		{
			teamName: 'Chennai Super Kings',
			img: cskLogo,
			stadium: 'M.A. Chidambaram Stadium',
			bgColor: '#fc850a',
		},
		{
			teamName: 'Delhi DareDevils',
			img: ddLogo,
			stadium: 'Feroz Shah Kotla Stadium',
			bgColor: '#1d398d',
		},
		{
			teamName: 'Kings XI Punjab',
			img: kxipLogo,
			stadium: 'IS Bindra Stadium',
			bgColor: '#8f2a2b',
		},
		{
			teamName: 'Kolkata Knight Riders',
			img: kkrLogo,
			stadium: 'Eden Gardens',
			bgColor: '#683282',
		},
		{
			teamName: 'Mumbai Indians',
			img: miLogo,
			stadium: 'Wankhede Stadium',
			bgColor: '#243d86',
		},
		{
			teamName: 'Rajasthan Royals',
			img: rrLogo,
			stadium: 'Sawai Mansingh Stadium',
			bgColor: '#0f2050',
		},
		{
			teamName: 'Royal Challengers Bangalore',
			img: rcbLogo,
			stadium: 'M. Chinnaswamy Stadium',
			bgColor: '#272727',
		},
		{
			teamName: 'SunRisers Hyderabad',
			img: srhLogo,
			stadium: 'Rajiv Ghandi Intl. Cricket Stadium',
			bgColor: '#d76b6b',
		},
	];
	return (
		<div className='pt-5'>
			<Container component='main' maxWidth='lg'>
				<h1 className={`text-white h1 mb-5 ${classes.teamHeading}`}>
					Major Teams
				</h1>
				<Grid container spacing={4}>
					{team.map((eachTeam) => {
						return (
							<>
								<Grid item xs={6} sm={3} md={3}>
									<div
										className={`card ${classes.cardDiv}`}
										style={{
											backgroundColor: eachTeam.bgColor,
										}}>
										<img
											src={eachTeam.img}
											alt='csk logo'
											className={`${classes.img} img img-fluid`}
										/>
										<h1 className='text-center text-white h5 mb-5 mt-4'>
											{eachTeam.teamName}
										</h1>

										<h4 className='text-center text-white h6 mb-5'>
											{eachTeam.stadium}
										</h4>
									</div>
								</Grid>
							</>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
};

export default MajorTeams;
