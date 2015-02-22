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

#### NPM
<i>node package manager</i>

Get Version<br>
```node --version && npm --version```

Get Versions #'s of a package<br>
```npm view <package> versions```

Install a package globally (-g flag) to node<br>
```npm install <package> -g```

Update/Create package.json dependencies list automatically with version#'s included<br>
```npm install <package> --save```
or
```npm install <package1> <package2> <package3> --save```

Install dependencies declared in package.json file<br>
```npm install```

View what packages are installed globally<br>
```npm list -g --depth=0```


### NODEMON
<i>Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.</i>

Install Nodemon globally<br>
```npm install nodemon -g```


#### BOWER

Install Bower globally<br>
```npm install bower -g```

To Install Bowser Packages to a folder instead, add a file in root: `.bowerrc` with this code:
```
{
  "directory": "public/assets/libs"
}
```

Install a Bower Package to your local directory and update bower.json dependencies  list <br>
```bower install <package> --save```



#### GRUNT & GULP

Install Grunt & Gulp globally - we'll probably just use Grunt tho<br>
```npm install -g gulp grunt-cli```


---


## GitHub Tricks


#### Close an Issue from Commit Message
The following keywords will close an issue via commit message, include the # of Issue in the message

close, closes, closed, fix, fixes, fixed, resolve, resolves, resolved

ex: ```updated file, fixes #1```