let DefaultHttpClient = org.apache.http.impl.client.DefaultHttpClient;
let HttpGet = 
org.apache.http.client.methods.HttpGet;
let ByteArrayOutputStream = java.io.ByteArrayOutputStream;
let HttpStatus = org.apache.http.HttpStatus;
let Base64 = java.util.Base64;

function isConnection(){
	let cm = UI.getContext().getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
	let netInfo = cm.getActiveNetworkInfo();
	return netInfo != null && netInfo.isConnectedOrConnecting()
}

function sendHttp(http){
	if(!isConnection()) return null;
	try{
		let httpclient = new DefaultHttpClient();
		let response = httpclient.execute(new HttpGet(http));
		let statusLine = response.getStatusLine();
		if(statusLine.getStatusCode() == HttpStatus.SC_OK){
			let out = new ByteArrayOutputStream(); 
			response.getEntity().writeTo(out);
			let result = String(out.toString());
			out.close(); 
			return result
		}
		response.getEntity().getContent().close();
	}catch(e){return null;}
	return null;
}

function GithubAPI(user, repository){
	this.getFileJson = function(path){
		let json = sendHttp("https://api.github.com/repos/"+user+"/"+repository+"/contents/"+path+"?ref=main");
		if(json == null) return null;
		return JSON.parse(json)
	}
	this.parseBase64String = function(text){
		let result = "";
		try{
			let array = text.split("\n");
			for(let i in array)
				result += String(new java.lang.String(Base64.getDecoder().decode(array[i])));
		}catch(e){}
		return result;
	}
	this.getFileContent = function(path){
		let json = this.getFileJson(path);
		if(json == null || !json.content) return null;
		if(json.encoding == "base64")
			return this.parseBase64String(json.content);
		return null;
	}
	this.getImage = function(path){
		let json = this.getFileJson(path);
		if(json == null || !json.content) return null;
		if(json.encoding == "base64")
			return StringToBitmap(json.content);
		return null;
	}
}