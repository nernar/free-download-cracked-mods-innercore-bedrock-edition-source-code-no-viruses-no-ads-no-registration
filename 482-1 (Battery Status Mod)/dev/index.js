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