var GUI;
text="ui";
Callback.addCallback("PostLoaded",function(){
	var videoView;
	var ctx = UI.getContext();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
	var layout = new android.widget.LinearLayout(ctx);
	layout.setOrientation(1);
	videoView = new android.widget.VideoView(ctx);
	videoView.setVideoPath(__dir__+"toster.3gp");
    //videoView.requestFocus(0);
	//videoView.setZOrderOnTop(true);
	//videoView.start();
	layout.addView(videoView);
   // videoView.start();
	alert(videoView.getDuration());
	GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
	//GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
	}catch(err){
text=err;
alert(text);
}
	}}));
	Logger.Log(text);
});
