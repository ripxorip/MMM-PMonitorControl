const exec = require("child_process").exec;

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    socketNotificationReceived: function(notification, payload) {
        exec('echo "' + payload + '" > /dev/ttyACM1', (err, stdout, stderr) => {});
    },
});