# Material Usenet Dashboard

Material Usenet Dashboard (MUP) is a Node JS application that makes use of Google's Material Design standards.

MUD is able to provide:

 * Network services and their status e.g. CouchPotato, Sonarr, NZBGet, Transmission
 * TV Shows from Sonarr, and their status
 * Movies from CouchPotato and their status
 * The weather in a chosen location
 * System information such as CPU, memory and disk usage
 * An iFrame which can be filled with anything, but optimised for PRTG Network Maps (645x350 perfect resolution 1080p screens)

## Installation

Install NodeJS (tested on 4.2.3 LTS) & npm on your computer and download/clone MUP.

Inside the MUP folder, npm install to grab all the dependencies required by MUP.
```
npm install
```

Make changes to the 'new.config.json' file to match it to your own settings then renamed it to 'config.json'.

Start the program by running
```
node app.js
```
Access the site at http://localhost:3000

## Stuff used to make this
* [AngularJS](https://angularjs.org/)
* [animate.css](https://daneden.github.io/animate.css/)
* [async](https://github.com/caolan/async)
* [autostrip-json-comments](https://github.com/uTest/autostrip-json-comments)
* [Bootstrap 4 Alpha](http://v4-alpha.getbootstrap.com/)
* [diskspace](https://github.com/keverw/diskspace.js)
* [Express](http://expressjs.com/en/index.html)
* [file-size](https://github.com/Nijikokun/file-size)
* [Forecast IO](http://forecast.io/)
* [Full Calendar](http://fullcalendar.io/)
* [gulp](http://gulpjs.com/)
* [Jade](http://jade-lang.com/)
* [jQuery](https://jquery.com/)
* [Material Design Lite](http://www.getmdl.io/)
* [Moment](http://momentjs.com/)
* [NodeJS](https://nodejs.org/en/)
* [Portscanner](https://github.com/baalexander/node-portscanner)
* [request](https://github.com/request/request)
* [slick-carousel](http://kenwheeler.github.io/slick/)
* [windows-cpu](https://github.com/KyleRoss/windows-cpu)