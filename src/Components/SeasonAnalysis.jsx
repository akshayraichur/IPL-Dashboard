import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Line, Doughnut } from 'react-chartjs-2';
import * as _ from 'underscore';

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

const SeasonAnalysis = () => {
	let y = [
		year2008,
		year2009,
		year2010,
		year2011,
		year2012,
		year2013,
		year2014,
		year2015,
		year2016,
		year2017,
	];

	const [year, setYear] = useState(y[0]);
	const [dropdownValue, setDropDownValue] = useState(0);
	const [seasonNumber, setSeasonNumber] = useState(1);

	const [seasonsData, setSeasonsData] = useState({
		labels: year2008.map((each) => each.winner),
		datasets: [
			{
				label: 'Win By Runs',
				data: year2008.map((each) => each.win_by_runs),
				borderColor: ['rgba(55,150,86,0.2)'],
				backgroundColor: ['rgba(55,150,86,0.2)'],
				pointBackgroundColor: ['rgba(55,150,86,0.2)'],
				borderColpointBorderColor: ['rgba(55,150,86,0.2)'],
			},
		],
	});

	const [data, setData] = useState({
		labels: year2008.map((each) => each.winner),
		datasets: [
			{
				label: 'Win By Runs',
				data: year2008.map((each) => each.win_by_runs),
				borderColor: ['rgba(255, 0, 0, 0.8);'],
				backgroundColor: ['rgba(255, 0, 0, 0.8);'],
				pointBackgroundColor: ['rgba(255, 0, 0, 0.8);'],
				borderColpointBorderColor: ['rgba(255, 0, 0, 0.8);'],
			},
			{
				label: 'Win By Wickets',
				data: year2008.map((each) => each.win_by_wickets),
			},
		],
	});

	const updateUI = () => {
		const winByRuns = year.map((each) => each.win_by_runs);
		const winByWickets = year.map((each) => each.win_by_wickets);

		const winnersEachTeamPerSeason = _.countBy(year, (data) => data.winner);
		// console.log(winnersEachTeamPerSeason);

		const data = {
			labels: year.map((each) => each.winner),
			datasets: [
				{
					label: 'Win By Runs',
					data: winByRuns,
					borderColor: ['rgba(255, 0, 0, 0.3)'],
					backgroundColor: ['rgba(255, 0, 0, 0.3)'],
					pointBackgroundColor: ['rgba(255, 0, 0, 0.3)'],
					borderColpointBorderColor: ['rgba(255, 0, 0, 0.3)'],
				},
				{
					label: 'Win By Wickets',
					data: winByWickets,
					borderColor: ['rgba(255,255,0,0.3)'],
					backgroundColor: ['rgba(255,255,0,0.3)'],
					pointBackgroundColor: ['rgba(255,255,0,0.3)'],
					borderColpointBorderColor: ['rgba(255,255,0,0.3)'],
				},
			],
		};

		const seasonData = {
			labels: [...new Set(year.map((each) => each.team1))].sort(),
			datasets: [
				{
					label: 'Matches Won By Each Team this Season',
					data: [...Object.values(winnersEachTeamPerSeason)],
					backgroundColor: [
						'#f1c40f',
						'#e67e22',
						'#16a085',
						'#2980b9',
						'#fe1216',
						'#C163D6',
						'#2d2b3a',
						'#78d663',
						'#b2c21f',
					],
				},
			],
		};

		setData(data);
		setSeasonsData(seasonData);
	};

	useEffect(() => {
		updateUI();
	}, [year]);

	const handleChange = (e) => {
		setDropDownValue(parseInt(e.target.value));
		setSeasonNumber(parseInt(e.target.value) + 1);
		setYear(y[parseInt(e.target.value)]);
	};

	const DropDownComponent = () => {
		return (
			<Grid container item xs={12} className='my-5'>
				<label htmlFor='season' className='h5 text-white'>
					Filter By Season &nbsp;
				</label>
				<select
					name='season'
					id='season'
					onChange={(e) => handleChange(e)}
					value={dropdownValue}>
					<option value='0'>Season 1 (2008)</option>
					<option value='1'>Season 2 (2009)</option>
					<option value='2'>Season 3 (2010)</option>
					<option value='3'>Season 4 (2011)</option>
					<option value='4'>Season 5 (2012)</option>
					<option value='5'>Season 6 (2013)</option>
					<option value='6'>Season 7 (2014)</option>
					<option value='7'>Season 8 (2015)</option>
					<option value='8'>Season 9 (2016)</option>
					<option value='9'>Season 10 (2017)</option>
				</select>
			</Grid>
		);
	};

	const WinByGraph = () => {
		return (
			<>
				<Container component='main' maxWidth='lg'>
					<h2 className='text-white text-center mt-4'>
						Stats of Each Match in Season {seasonNumber}
					</h2>
					<Line data={data} />
				</Container>
			</>
		);
	};

	const WinsEachSeason = () => {
		return (
			<>
				<Container component='main' maxWidth='md' className='mb-5'>
					<h2 className='text-center text-white'>
						Matches Won By Each Team in Season {seasonNumber}
					</h2>
					<Doughnut data={seasonsData} />
				</Container>
			</>
		);
	};

	return (
		<>
			<Container component='main' maxWidth='xs'>
				<DropDownComponent />
			</Container>
			<Grid container className='mt-5 mb-5'>
				<Grid item xs={12}>
					<WinsEachSeason />
				</Grid>
				<Grid item xs={12}>
					<WinByGraph />
				</Grid>
			</Grid>
		</>
	);
};

export default SeasonAnalysis;
