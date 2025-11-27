const NS2S = 1 / 1000000000;
const rad = Math.PI / 180;
const horizontalSensitivity = __config__.getNumber("horizontal_sensitivity") / 10;
const verticalSensitivity = __config__.getNumber("vertical_sensitivity") / 10;
var horizontal, vertical;
__config__.getBool("invert_horizontal_gyroscope") ? horizontal = -1 : horizontal = 1;
__config__.getBool("invert_vertical_gyroscope") ? vertical = -1 : vertical = 1;
var Sensor = {
  data: {
    x: 0,
    y: 0,
    timestamp: 0
  },
  gyroscope: {
    start: function() {
      Sensor.data.sensorManager = UI.getContext().getSystemService(android.content.Context.SENSOR_SERVICE);
      Sensor.data.gyroscopeSensor = Sensor.data.sensorManager.getDefaultSensor(android.hardware.Sensor.TYPE_GYROSCOPE);
      if (Sensor.data.gyroscopeSensor == null) {
        alert("your device doesn't have gyroscope sensor");
        return
      };
      Sensor.data.gyroscopeSensorListener = new android.hardware.SensorEventListener() {
        onSensorChanged: function(event) {
          //if(event.values[0]<rad&&event.values[1]<rad&&event.values[0]>-rad&&event.values[1]>-rad)return
          var deltaTime = (event.timestamp - Sensor.data.timestamp) * NS2S;
          Sensor.data.timestamp = event.timestamp;
          //if(event.values[0]>rad*5||event.values[0]<-rad*5)
          Sensor.data.x = event.values[0] * deltaTime;
          //if(event.values[1]>rad*5||event.values[1]<-rad*5)
          Sensor.data.y = event.values[1] * deltaTime
          var ent = Entity.getLookAngle(Player.get());
          Entity.setLookAngle(Player.get(), ent.yaw += Sensor.data.x * horizontalSensitivity * horizontal, ent.pitch += Sensor.data.y * verticalSensitivity * vertical);
        }
      };
      Sensor.data.sensorManager.registerListener(Sensor.data.gyroscopeSensorListener, Sensor.data.gyroscopeSensor, android.hardware.SensorManager.SENSOR_DELAY_GAME);
    },
    stop: function() {
      if (!Sensor.data.gyroscopeSensor) return
      Sensor.data.sensorManager.unregisterListener(Sensor.data.gyroscopeSensorListener);
    }
  }
};
Callback.addCallback('LevelDisplayed', function() {
  Sensor.gyroscope.start()
});
Callback.addCallback('LevelLeft', function() {
  Sensor.gyroscope.stop()
});