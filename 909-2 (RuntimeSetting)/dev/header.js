IMPORT("RuntimeConfig");

const JAVA_ANIMATOR = android.animation.ValueAnimator;
const JAVA_HANDLER = android.os.Handler;
const LOOPER_THREAD = android.os.Looper;
const JAVA_HANDLER_THREAD = new JAVA_HANDLER(LOOPER_THREAD.getMainLooper());

function createAnimation(_duration, _updateFunc, end){
	let animation = JAVA_ANIMATOR.ofFloat([0,1]);
	animation.setDuration(_duration);
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
		run() {
			animation.start();
		}
	});
}

const TextureSource = WRAP_JAVA('com.zhekasmirnov.innercore.api.mod.ui.TextureSource').instance;
let Font = com.zhekasmirnov.innercore.api.mod.ui.types.Font;
function getTextWidth(text, size){
	return new Font({size:size}).getTextWidth(text, 1);
}