let DefaultHttpClient = org.apache.http.impl.client.DefaultHttpClient;
let HttpGet = 
org.apache.http.client.methods.HttpGet;
let ByteArrayOutputStream = java.io.ByteArrayOutputStream;
let HttpStatus = org.apache.http.HttpStatus;
let Base64 = android.util.Base64;
let Jstring = java.lang.String;

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

function GithubFileSystem(user, repository){
	this.getFileJson = function(path){
		let json = sendHttp("https://api.github.com/repos/"+user+"/"+repository+"/contents/"+path+"?ref=main");
		if(json == null) return null;
		return JSON.parse(json)
	}
	this.parseBase64String = function(text){
		let result = "";
		try{
			let array = text.split("\\n");
			for(let i in array)
				result += new Jstring(Base64.decode(new Jstring(array[i]).getBytes(), Base64.DEFAULT));
		}catch(e){alert(e)}
		return result;
	}
	this.getFile = function(path){
		let json = this.getFileJson(path);
		if(json == null || !json.content) return null;
		if(json.encoding == "base64")
			return this.parseBase64String(json.content);
		return null;
	}
	this.getJson = function(path){
		return JSON.parse(this.getFile(path) || "{}");
	}
	this.getImage = function(path){
		let json = this.getFileJson(path);
		if(json == null || !json.content) return null;
		if(json.encoding == "base64")
			return StringToBitmap(json.content);
		return null;
	}
}

function AndroidFileSystem(path){
	this.getFileJson = function(local_path){
		return null;
	}
	
	this.getFile = function(local_path){
		return FileTools.ReadText(path+"/"+local_path);
	}
	
	this.getJson = function(path){
		return JSON.parse(this.getFile(path) || "{}");
	}
	
	this.getImage = function(local_path){
		return Filetools.readImage(path+"/"+local_path);
	}
}