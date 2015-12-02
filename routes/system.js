module.exports = function(app, config) {
    var fileSize = require('file-size');
    var os = require("os");
    var cpu = require("windows-cpu");
    var moment = require('moment');
    var process= require("process");

    app.get('/system', function (req, res) {
        cpu.totalLoad(function(error, results) { //synchronous
            var cpuload;
            if (os.loadavg().toString() === '0,0,0') {
                cpuload = results; //win-cpu output is [currentLoad] //looks broken in new Win10 update (02 Dec 2015)
            } else {
                cpuload = os.loadavg(); //Linux output is [1m, 5m, 15m]
            }

            res.send({
                arch: os.arch(),
                cpuusage: cpuload.toString().replace(/(^\d+)(.+$)/i,'$1'), //remove any brackets and only keep 1st num
                memformat: config.memory_format, // from config file. how to display it
                memused: fileSize(os.totalmem() - os.freemem()).to(config.memory_format),
                memtotal: fileSize(os.totalmem()).to(config.memory_format),
                os: os.type().substring(0, os.type().indexOf('_')), //removes underscores. because of Windows_NT
                platform: os.platform(),
                uptimesys: moment.duration(os.uptime(), 'seconds').humanize(), //human readable values from moment.io
                uptimenode: moment.duration(process.uptime(), 'seconds').humanize()
            });
        });
    });
};