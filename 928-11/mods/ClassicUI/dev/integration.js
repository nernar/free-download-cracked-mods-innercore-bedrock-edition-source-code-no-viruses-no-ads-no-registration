ModAPI.addAPICallback("RuntimeSetting", function(api){
	with(api){
		let config = new ConfigStorage(__dir__+"cfg.json")
			.put("max_scale", 2)
			.put("center_block_name", true)
			.put("theme", "super_classic");
		
		let builder = new BuilderConfig(config)
			.addSlider("Max scale", "max_scale", 10, 50, 1)
			.addCheckBox("Center name", "center_block_name")
			.addMultipleChoice("Theme", "theme", getThemes());
			
		function upt(cfg){
				DEFAULT_CONFIG.theme  = cfg.theme;
				CONFIG.max_scale = cfg.max_scale/10;
				CONFIG.center_block_name = cfg.center_block_name;
		}
		
		upt(config.build());
		
		new Setting(__dir__)
			.setChangeSetting(upt)
			.setBuilderConfig(builder);
	}
});