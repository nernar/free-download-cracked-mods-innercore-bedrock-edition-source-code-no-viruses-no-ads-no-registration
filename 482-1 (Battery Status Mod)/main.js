/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: AndroidJava.js

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




// file: index.js

/**
 * Battery Status Mod
 * [ twitter ] @darpakyokutyou
 * [     vk    ] https://vk.com/id581175782
**/

/* Operates once a second */
Callback.addCallback( "5second", function() {
	BatteryViewUpdate();
});

Callback.addCallback( "ModsLoaded", function() {
	BatteryView();
	BatteryViewUpdate();
});

const ViewData = {
	battryImageName: "battery-0.png"
};


/* create Battery popup window */
function BatteryView() {
	// create new ui thread
	Android.UiThread( function() {
		try {
			if ( ViewData.popup ) ViewData.popup.dismiss();
			// create Layout
			const MainLayout = new LinearLayout( ctx );
			MainLayout.setOrientation( LinearLayout.HORIZONTAL );
			MainLayout.setBackgroundColor( Color.parseColor( "#90FFFFFF" ) );
			
			// temperature
			const temperature = Android.Battery.temperature();
			const temperatureText = new TextView( ctx );
			temperatureText.setText( temperature + "℃" );
			const temperatureImage = new ImageView( ctx );
			temperatureImage.setImageBitmap(
				new BitmapFactory.decodeFile( __dir__ + "gui/temperature.png" )
			);
			MainLayout.addView( temperatureText );
			MainLayout.addView( temperatureImage );
			
			// battery
			const batterylevel = Android.Battery.level();
			const batteryText = new TextView( ctx );
			batteryText.setText( batterylevel + "%" );
			const batteryImage = new ImageView( ctx );
			batteryImage.setImageBitmap(
				new BitmapFactory.decodeFile( __dir__ + "gui/" + ViewData.battryImageName )
			);
			MainLayout.addView( batteryText );
			MainLayout.addView( batteryImage );
		
			// show popup window
			const window = ctx.getWindow().getDecorView();
			const popup = new PopupWindow( MainLayout, 230, 35 );
			popup.showAtLocation( window, Gravity.LEFT | Gravity.TOP, 0, 0 );
			ViewData.popup = popup;
		} catch ( error ) {
			Android.Toast( error );
		}
	});
}

/* update Battery popup window */
function BatteryViewUpdate() {
	// create new ui thread
	Android.UiThread( function() {
		try {
			// battry
			const batteryStatus = Android.Battery.status();
			const batterylevel = Android.Battery.level();
			let battryImageName = "";
			if ( batteryStatus == "CHARGING" ) {
				battryImageName = "battery-chargeing.png";
			} else if ( batteryStatus == "FULL" ) {
				battryImageName = "battery-5.png";
			} else {
				if ( batterylevel >= 0 && batterylevel < 10 ) {
					battryImageName = "battery-0.png";
				} else if ( batterylevel >= 10 && batterylevel < 30 ) {
					battryImageName = "battery-1.png";
				} else if ( batterylevel >= 30 && batterylevel < 50 ) {
					battryImageName = "battery-2.png";
				} else if ( batterylevel >= 50 && batterylevel < 70 ) {
					battryImageName = "battery-3.png";
				} else if ( batterylevel >= 70 && batterylevel < 90 ) {
					battryImageName = "battery-4.png";
				} else if ( batterylevel >= 90 && batterylevel <= 100 ) {
					battryImageName = "battery-5.png";
				}
			}
			if ( battryImageName == "" ) battryImageName = "battery-0.png";
			ViewData.battryImageName = battryImageName;
			BatteryView();
		} catch ( error ) {
			Debug.message( error );
		}
	});
}







/* add Callback */
let TickCount = 0;
Callback.addCallback( "tick", function() {
	TickCount ++;
	if( TickCount % 20 == 0 ) Callback.invokeCallback("second");
	if( TickCount % (20 * 5) == 0 ) Callback.invokeCallback("5second");
	if( TickCount % (20 * 60) == 0 ) Callback.invokeCallback("minute");
});




