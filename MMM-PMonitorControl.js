/* global Module */

/* Magic Mirror
 * Module: MMM-PMonitorControl
 *
 * By Philip Karlsson Gisslow
 * MIT Licensed.
 */

Module.register("MMM-PMonitorControl",{

	// Default module config.
	defaults: {
		text: "PMonitorControl"
	},

	notificationReceived: function(notification, payload, sender) {
		var self = this;
		if (notification === "PMonitorControl") {
			self.sendSocketNotification('cmd', payload.cmd);
		}
	},
});