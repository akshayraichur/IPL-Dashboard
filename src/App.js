import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';

import SeasonAnalysis from './Components/SeasonAnalysis';
import MatchesPlayed from './Components/MatchesPlayed';
import MajorTeams from './Components/MajorTeams';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />
				<MatchesPlayed />
				<SeasonAnalysis />
				<MajorTeams />
			</BrowserRouter>
		</div>
	);
};

export default App;
