/*
	Author: John Ward
	Git: www.github.com/johnward2/markup-stripper
	License: MIT

	Installation Instructions:
		cd /path/to/html/files
		git clone https://github.com/johnward2/markup-stripper.git
		npm install

	Execution Instructions:
		Single file processing:
			node process.js filename.html

		Bulk file processing
			find . -name "*.html" -execdir node process.js {} \;

	TODO:
		- Bulk processing by default if no filename is provided
		- Add recursive flag for including subdirectories
		- Exclude node_modules subdirectory from recursive execution
		- Create Electron installer for users not comfortable with terminal
*/

var htmlToText = require('html-to-text');

var fs = require('fs');

htmlToText.fromFile(".".join(__dirname, process.argv[2]), {},
	(err, text) => {
		if (err) return console.error(err);

		fs.writeFile(process.argv[2]+".txt", text, function(err) {
	    if(err) {
	        return console.log(err);
	    }
    	console.log("The file was saved!");
		});
	}
);
