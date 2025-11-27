
/*
end(); do_nothing();} catch(e) {
	alert('try file(s) error: '.concat(e))
};
*/

sys = 'none';

try {
	sys = MCSystem
} catch (e) {}

if (sys != 'none') alert(JSON.stringify(sys));
if (sys == 'none') alert('sys is none');

/*
alert(JSON.stringify(VanillaItemID));
alert(JSON.stringify(VanillaBlockID));
alert(JSON.stringify(VanillaTileID));
*/