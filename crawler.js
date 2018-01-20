const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
request({
	url: "https://www.dark-wing.com/",
	method: "GET"
}, (e, r, b) => {
	if (e || !b) {return;}
	const $ = cheerio.load(b);
	let result = [];
	let titles = $('a.post-title','.container');
	for(var i = 0; i < titles.length; i++) {
		let title = titles[i].children[0].data;
		result.push(title);
	}
	let results = JSON.stringify(result).replace(/(\\n)|(\s)/g, '');
	fs.writeFileSync("result.json", results);
});