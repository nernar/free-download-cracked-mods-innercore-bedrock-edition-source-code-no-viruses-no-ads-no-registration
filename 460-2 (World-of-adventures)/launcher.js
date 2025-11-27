let ModBuilder = {
    includeDirectory: function(path){
        let files = FileTools.GetListOfFiles(__dir__ + path, "js");
        for(let i in files){
            alert(files[i]);
        }
    }
};

ModBuilder.includeDirectory("source/api/");

Launch();