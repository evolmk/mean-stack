# evol's MEAN stack
starter kit for Mongodb, Express, AngularJS, Node.js

## Prerequisites
Install Node.js
- [node and npm](http://nodejs.org/) - download and run installer

Install these dependencies to your Global modules, so they're accessible anywhere
- [nodemon](http://nodemon.io/) -- `npm install nodemon -g`
- [bower](http://bower.io) -- `npm install bower -g`
- [gulp](http://gulpjs.com/) -- `npm install gulp -g`


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

#### NPM for Node.js
NPM is a node.js package manager

```sh
# install a package globally using -g flag
$ npm install <package> -g

# install a package locally
$ npm install <package>

# install a package and also update package.json with the installed version and package name 
$ npm install <package> --save

# install multiple packages at same time
$ npm install <package1> <package2> <package3> --save

# install dependencies already declared in package.json file
$ npm install

# get node & npm version
$ node --version && npm --version

# get version #'s of packages installed
$ npm view <package> versions

# list packages that are installed globally
$ npm list -g --depth=0
```



### NODEMON
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server

```sh
#install nodemon globally
$ npm install nodemon -g
```


#### BOWER
Bower is a package manager for Javascript libraries that allows you to define, version, and retrieve your dependencies

```sh
# install bower globally
$ npm install bower -g

# install dependencies listed in bower.json
$ bower install

# install a package and add it to bower.json
$ bower install <package> --save

# install specific version of a package and add it to bower.json
$ bower install <package>#<version> --save
```


To install packages to a specified folder instead, add `.bowerrc` to root:
```sh
{
  "directory": "public/assets/libs"
}
```

To uninstall a locally installed package:

```sh
$ bower uninstall <package-name>
```


#### GRUNT & GULP

Install Grunt & Gulp globally - we'll probably just use Grunt tho<br>
```npm install -g gulp grunt-cli```


---


## GitHub Tricks


#### Close an Issue from Commit Message
The following keywords will close an issue via commit message, include the # of Issue in the message

close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved

ex: ```updated file, fixes #1```