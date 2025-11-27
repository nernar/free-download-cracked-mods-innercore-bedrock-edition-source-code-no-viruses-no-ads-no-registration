function __isFile__(str, Return) {

	var ret = Return; if (ret == null) ret = true;

	if (ret) return str;

}

String.prototype.isFile = function(Return) {

	return __isFile__.call(this, this, Return);


}

JSON.stringify('ua/au.txt'.isFile(false))