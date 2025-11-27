ModAPI.addAPICallback("ICore", function(api){
  Launch({
	ICore: api,
    ChargeItem: api.ChargeRegistry
  });
});