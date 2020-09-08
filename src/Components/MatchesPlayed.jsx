import React from 'react';
import { Container, Grid } from '@material-ui/core';

import classes from './MatchesPlayed.module.css';

import year2008 from '../assets/2008.json';
import year2009 from '../assets/2009.json';
import year2010 from '../assets/2010.json';
import year2011 from '../assets/2011.json';
import year2012 from '../assets/2012.json';
import year2013 from '../assets/2013.json';
import year2014 from '../assets/2014.json';
import year2015 from '../assets/2015.json';
import year2016 from '../assets/2016.json';
import year2017 from '../assets/2017.json';

const MatchesPlayed = () => {
	return (
		<div>
			<Container component='main' maxWidth='lg'>
				<h1 className={`${classes.seasons} mt-5`}>SEASONS </h1>
				<Grid container spacing={4}>
					<Grid item xs={4} sm={3} md={2}>
						<div className='deep-blue-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2008[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2008.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
					<Grid item xs={4} sm={3} md={2}>
						<div className='mean-fruit-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2009[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2009.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
					<Grid item xs={4} sm={3} md={2}>
						<div className='ripe-malinka-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2010[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2010.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
					<Grid item xs={4} sm={3} md={2}>
						<div className='heavy-rain-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2011[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2011.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
					<Grid item xs={4} sm={3} md={2}>
						<div className='sunny-morning-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2012[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2012.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
					<Grid item xs={4} sm={3} md={2}>
						<div className='night-fade-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2013[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2013.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
					<Grid item xs={4} sm={3} md={2}>
						<div className='young-passion-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2014[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2014.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
					<Grid item xs={4} sm={3} md={2}>
						<div className='winter-neva-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2015[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2015.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
					<Grid item xs={4} sm={3} md={2}>
						<div className='dusty-grass-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2016[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2016.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
					<Grid item xs={4} sm={3} md={2}>
						<div className='near-moon-gradient rounded-top rounded-bottom pb-5'>
							<h2 className={`ml-1 mb-4 ${classes.year}`}>
								{year2017[0].season}
							</h2>
							<h1
								className={`text-justify text-center text-strong ${classes.numericHeading}`}>
								{year2017.length}
							</h1>
							<h6 className='text-justify text-center font-weight-bold'>
								Matches Played
							</h6>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default MatchesPlayed;
