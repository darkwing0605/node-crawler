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
	let titles = $(".p");
	// console.log(e);
	// console.log(r);
	// console.log(b);
	// console.log($);
	// console.log(titles)
	for(var i = 0; i < titles.length; i++) {
		result.push($titles[i].text());
	}
	fs.writeFileSync("result.json", JSON.stringify(result));
});