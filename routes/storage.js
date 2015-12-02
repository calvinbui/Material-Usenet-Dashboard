module.exports = function(app, config) {
    var async = require("async");
    var diskSpace = require('diskspace');
    var filesize = require('file-size');

    app.get('/storage', function (req, res) {
        var disks = config.storage;
        async.each(disks,
            function (disk, callback) {
                diskSpace.check(disk.directory, function (err, total, free, status) {
                    disk.total = filesize(parseInt(total), {fixed: 0}).to(disk.unit); //no decimal places
                    disk.used = filesize(total - free, {fixed: 0}).to(disk.unit);
                    disk.percentage = 100 * disk.used / disk.total;
                    disk.status = status;
                    callback();
                });
            }, function allDone() {
                res.send(disks);
            }
        );
    });
};