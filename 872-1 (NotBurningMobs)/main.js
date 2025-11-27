//Хукаем метод проверки день ли сейчас и меняем результат работы функции 
Callback.addCallback("Dimension.isDay", function(controller, self){
	controller.replace();
	controller.setResult(false);
});