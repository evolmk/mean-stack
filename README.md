# evol's MEAN stack
A starter kit for Mongodb, Express, AngularJS, NodeJ.js

## Requirements

- [node and npm](http://nodejs.org/)
- [nodemon](http://nodemon.io/) - `npm install -g nodemon`
- [bower](http://bower.io) - `npm install -g bower`
- [gulp](http://gulpjs.com/) - `npm install -g gulp`

## Installation Instructions

1. Install your Node dependencies: `npm install`
2. Start the application `nodemon server.js`
3. Visit the application in your browser on port configured: [http://localhost:8080](http://localhost:8080)
4. Enjoy!

---

#### NODE

Get Version<br>
`node --version && npm --version`

Install a package globally, add -g flag.  leave off -g to install locally to current folder<br>
`npm install PACKAGENAME -g`


View what packages are installed globally<br>
`npm list -g --depth=0`


### NODEMON
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.<br>
`npm install -g nodemon`


#### BOWER

Install Bower globally<br>
`npm install bower -g`

Install a Bower Package to your local directory and update bower.json dependencies  list <br>
`bower install PACKAGENAME --save`




#### GRUNT & GULP

Install Grunt & Gulp globally - we'll probably just use Grunt tho<br>
npm install -g gulp grunt-cli
