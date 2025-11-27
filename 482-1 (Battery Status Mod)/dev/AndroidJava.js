/**
 * Android Java Module
 * [ twitter ] @darpakyokutyou
 * [     vk    ] https://vk.com/id581175782
**/

const ctx = UI.getContext();
const Thread                 = java.lang.Thread;
const Runnable             = java.lang.Runnable;
const BatteryManager  = android.os.BatteryManager;
const Point                    = android.graphics.Point;
const Color                    = android.graphics.Color;
const BitmapDrawable = android.graphics.drawable.BitmapDrawable;
const BitmapFactory    = android.graphics.BitmapFactory;
const Intent                   = android.content.Intent;
const IntentFilter          = android.content.IntentFilter;
const Gravity                 = android.view.Gravity;
const Toast                   = android.widget.Toast;
const PopupWindow    = android.widget.PopupWindow;
const LinearLayout      = android.widget.LinearLayout;
const ImageView          = android.widget.ImageView;
const TextView             = android.widget.TextView;


const Android = {
	Thread: function( fun ) {
		Thread( new Runnable({
			run : fun
		})).start();
	},
	UiThread: function( fun ) {
		ctx.runOnUiThread( new Runnable({
			run : fun
		}));
	},
	Toast: function( txt, length ) {
		const length_ = length ? length : Toast.LENGTH_SHORT;
		Toast.makeText( ctx, txt, length_ ).show();
	},
	Battery: { 
		Constructor: function() {
			const intentfilter = new IntentFilter( Intent.ACTION_BATTERY_CHANGED );
			return ctx.registerReceiver( null, intentfilter );
		},
		level: function() {
			return Android.Battery.Constructor().getIntExtra( BatteryManager.EXTRA_LEVEL, -1 );
		},
		temperature: function() {
			const btp = Android.Battery.Constructor().getIntExtra( BatteryManager.EXTRA_TEMPERATURE, -1 );
			return btp / 10;
		},
		status: function() {
			const bst = Android.Battery.Constructor().getIntExtra( BatteryManager.EXTRA_STATUS, -1 );
			switch ( bst ) {
				case BatteryManager.BATTERY_STATUS_CHARGING :
					return "CHARGING";
				break;
				case BatteryManager.BATTERY_STATUS_DISCHARGING :
					return "DISCHARGING";
				break;
				case BatteryManager.BATTERY_STATUS_FULL :
					return "FULL";
				break;
				case BatteryManager.BATTERY_STATUS_NOT_CHARGING :
					return "NOT CHARGING";
				break;
				case BatteryManager.BATTERY_STATUS_UNKNOWN :
					return "UNKNOWN";
				break;
				default:
					return "ERROR";
				break;
			}
		}
	},
	Window: {
		size: function() {
			const wm = ctx.getSystemService(ctx.WINDOW_SERVICE);
			const disp = wm.getDefaultDisplay();
			const realSize = new Point();
			disp.getRealSize(realSize);
			return {
				x : realSize.x / 10 * 9.5,
				y : realSize.y
			};
		}
	}
};