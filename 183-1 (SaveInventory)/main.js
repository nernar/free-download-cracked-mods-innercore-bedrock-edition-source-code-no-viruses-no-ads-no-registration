Callback.addCallback("EntityHurt", function(attacker, victim, damage){
	if(victim==Player.get()&&(Entity.getHealth(Player.get())<damage)){
		Entity.setHealth(Player.get(),-1);
	}
});