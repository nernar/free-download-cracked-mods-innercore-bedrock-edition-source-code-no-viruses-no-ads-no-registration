Callback.addCallback("NativeGuiChanged", function(screenName){
	if(screenName == "hud_screen" || screenName == "in_game_play_screen")
		Panel.enabled = true;
	else{
		Panel.enabled = false;
		Panel.close();
  }
});

const setTimeout = function(func, ticks){
	let upd = {
		ticks: 0,
		update(){
			this.ticks++;
			if(this.ticks >= ticks){
				func();
				this.remove = true
			}
		}
	};
	Updatable.addUpdatable(upd);
}
let JAVA_ANIMATOR = android.animation.ValueAnimator;
let JAVA_HANDLER = android.os.Handler;
let LOOPER_THREAD = android.os.Looper;
let JAVA_HANDLER_THREAD = new JAVA_HANDLER(LOOPER_THREAD.getMainLooper());
function createAnimation(_duration, _updateFunc, end){
	end = end || function(){};
	let animation = JAVA_ANIMATOR.ofFloat([0,1]);
	animation.setDuration(_duration);
	if(_updateFunc)
		animation.addUpdateListener({
			onAnimationUpdate(updatedAnim){
				_updateFunc(updatedAnim.getAnimatedValue(), updatedAnim);
			}
		});
	animation.addListener({
		onAnimationEnd(){
			end();
		}
	});
	JAVA_HANDLER_THREAD.post({
		run(){
			animation.start();
		}
	})
	return animation;
}

Callback.addCallback("LocalTick", function(){
	if(Panel.enabled){
		let state = Panel.state;
		let player = Player.get();
		
		if(World.getThreadTime() % 5 == 0){
			for(let i = 0; i < 4; i++){
				let armor = Entity.getArmorSlot(player, i);
				if(state[i].id != armor.id || state[i].data != armor.data){
					Panel.container.setSlot(""+i, armor.id, armor.count, armor.data);
					state[i].id = armor.id;
					state[i].data = armor.data;
					if(state[i].state == 0 || state[i].state == 3)
						state[i].state = 1;
				}
			}
		}
		
		if(state[0].state == 0 && state[1].state == 0 && state[2].state == 0 && state[3].state == 0){
			Panel.close();
		}else if(!Panel.isOpen()){
			Panel.open();
			let elements = Panel.container.getGuiContent().elements;
			createAnimation(2000, function(value){
				const step = 1000 * value - 1000;
				for(let i = 0; i < 4; i++){
					if(state[i].state == 1){
						elements[""+i].x = step;
						if(elements[""+i].x >= 0){
							elements[""+i].x = 0;
							state[i].state = 3;
						} 
					}
				}
				if(Panel.container.getWindow())
					Panel.container.getWindow().forceRefresh();
				Panel.container.applyChanges();
			}, function(){
				setTimeout(function(){
					createAnimation(2000, function(value){
						const step = -(1000 * value);
						for(let i = 0; i < 4; i++){
							if(state[i].state == 3){
								elements[""+i].x = step;
								if(elements[""+i].x <= -1000)
									state[i].state = 0;
							}
						}
						if(Panel.container.getWindow())
						Panel.container.getWindow().forceRefresh();
						Panel.container.applyChanges();
					});
				}, 30);
			});
		}  
	}
});

/*var tick = 0;



Callback.addCallback("tick", function(){
    if(Panel.enabled){
        var state = Panel.state;
        tick++;
        if(tick >= 5){

            for(var i = 0; i < 4; i++){

                var armor = Player.getArmorSlot(i);

                if(state[i].id != armor.id || state[i].data != armor.data){

                    Panel.container.setSlot(""+i, armor.id, armor.count, armor.data);

                    state[i].id = armor.id;

                    state[i].data = armor.data;

                    if(state[i].state == 0 || state[i].state == 3){

                        state[i].state = 1;

                    }

                    else if(state[i] == 2)

                        state[i].timer = 0;

                }

                tick = 0;

            }

        }

        if(state[0].state == 0 && state[1].state == 0

          && state[2].state == 0 && state[3].state == 0){

            Panel.close();

        } else {

            Panel.open();

            var elements = Panel.container.getGuiContent().elements;

            for(var i = 0; i < 4; i++){

                if(state[i].state == 1){

                    elements[""+i].x += 50;

                    if(elements[""+i].x >= 0){

                        elements[""+i].x = 0;

                        state[i].state = 2;

                        state[i].timer = 0;

                    }

                } else if(state[i].state == 2){

                    state[i].timer++;

                    if(state[i].timer >= 30){

                        state[i].state = 3;

                    }

                } else if(state[i].state == 3){

                    elements[""+i].x -= 50;

                    if(elements[""+i].x <= -1000){

                        state[i].state = 0;

                    }

                }

            }

        }

    }

});*/





