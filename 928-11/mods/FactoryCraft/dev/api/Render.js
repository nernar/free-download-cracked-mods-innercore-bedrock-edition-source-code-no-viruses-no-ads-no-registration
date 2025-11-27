FactAPI.render = {
	addStandartWireConnections: function (id) {
		ICRender.getGroup("ic-wire").add(id, -1);
		ICRender.getGroup("rf-wire").add(id, -1);
ICRender.getGroup("fc-wire").add(id, -1);
	}
}
