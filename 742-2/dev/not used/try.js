var start = function(to_alert) {alert(to_alert); return to_alert;}

function end() {
	return start('end')
}

old_start = start

function start(to_alert) {
	if (!to_alert) to_alert = 'start';
	return old_start(to_alert)
}

function do_nothing() {return null;}

// try {

start(); do_nothing();
