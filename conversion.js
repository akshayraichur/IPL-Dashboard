const fs = require('fs');

const matches = require('./src/assets/matches.json');

const year2008 = JSON.stringify(matches.filter((each) => each.season === 2008));
const year2009 = JSON.stringify(matches.filter((each) => each.season === 2009));
const year2010 = JSON.stringify(matches.filter((each) => each.season === 2010));
const year2011 = JSON.stringify(matches.filter((each) => each.season === 2011));
const year2012 = JSON.stringify(matches.filter((each) => each.season === 2012));
const year2013 = JSON.stringify(matches.filter((each) => each.season === 2013));
const year2014 = JSON.stringify(matches.filter((each) => each.season === 2014));
const year2015 = JSON.stringify(matches.filter((each) => each.season === 2015));
const year2016 = JSON.stringify(matches.filter((each) => each.season === 2016));
const year2017 = JSON.stringify(matches.filter((each) => each.season === 2017));

fs.writeFile('2017.json', year2017, 'utf8', (err) => {
	if (err) {
		console.log('Error Occured', err);
	}
	console.log('Done');
});
