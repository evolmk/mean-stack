# evol's MEAN stack
starter kit for Mongodb, Express, AngularJS, Node.js

## Prerequisites
Install Node.js
- [node and npm](http://nodejs.org/) - download and run installer

Install these dependencies to your Global modules, so they're accessible anywhere
- [nodemon](http://nodemon.io/) -- `npm install -g nodemon`
- [bower](http://bower.io) -- `npm install -g bower`
- [gulp](http://gulpjs.com/) -- `npm install -g gulp`


## Install & Run

1. Clone this repo
2. (OPTIONAL, file already exists in repo) Create your package.json file with required Node dependencies:<br>
`npm install express morgan mongoose body-parser bcrypt-nodejs --save`
3. Install your Node dependencies locally into your project:<br>
`npm install`
4. Start the application using nodemon: `nodemon server.js`
5. Visit the application in your browser: [http://localhost:8080](http://localhost:8080)
6. Enjoy!
<br>

---

## CheatSheet

#### NPM
<i>node package manager</i>

Get Version<br>
`node --version && npm --version`

Get Versions #'s of a package<br>
`npm view PACKAGENAME versions`

Install a package globally (-g flag) to node<br>
`npm install PACKAGENAME -g`

Install a package locally, and update package.json dependencies list automatically<br>
`npm install PACKAGENAME --save`

View what packages are installed globally<br>
`npm list -g --depth=0`


### NODEMON
<i>Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.</i>

Install Nodemon globally<br>
`npm install -g nodemon`


#### BOWER

Install Bower globally<br>
`npm install bower -g`

Install a Bower Package to your local directory and update bower.json dependencies  list <br>
`bower install PACKAGENAME --save`




#### GRUNT & GULP

Install Grunt & Gulp globally - we'll probably just use Grunt tho<br>
`npm install -g gulp grunt-cli`


---


## GitHub Tricks


#### Close an Issue from Commit Message
The following keywords will close an issue via commit message, include the # of Issue in the message

close
closes
closed
fix
fixes
fixed
resolve
resolves
resolved

ex: updated file, fixes #1