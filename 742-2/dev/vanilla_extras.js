Array.prototype.toObject = function() {
  function to_run(array) {
    return array.reduce(function(result, item, index, array) {
      result[index] = item; //a, b, c
      return result;
    }, {})
  }

  return to_run.call(null, this)
}

Object.prototype.getPath = function(mode) {
  var path = 'neither a file nor a directory';
  
  try {
    path = this.getAbsolutePath()
  } catch (e) {}
  
  if (mode == 'error') {
    if (path == 'neither a file nor a directory') {
      throw new TypeError('The current object is ' + path)
    } else {
      return String(path)
    }
  } else {
    return String(path)
  }
}

newFileTools.GetListOfChildren = function(path) {
  if (typeof path !== 'string') {
    var n = ''

    if (String(typeof path).toLowerCase().startsWith('x') || String(typeof path).toLowerCase().startsWith('o')) {
      n = 'n'
    }

    throw new TypeError("The argument 'path' must be a string not a{n} ".replace('{n}', n) + typeof path)
  }

  return newFileTools.GetListOfDirs(path).concat(newFileTools.GetListOfFiles(path))
}

this.FileTools = newFileTools

// start

var files = FileTools.ReadJSON(mod_path_slash+'vanilla_extras/.files_result/files.json')

mapObj = function(obj, func, thisValue, tv2) {
  var type = 'array'
  
  if (typeof func === 'string') {
    type = func;
    func = thisValue;
    thisValue = tv2;
  }
  
  var values = Object.values(obj)
  var keys = Object.keys(obj)
  
  if (type === 'object') {
    type = 'obj';
  } else if (type !== 'array') {
    throw SyntaxError("The 'type' object must be 'array' or 'object' not '"+String(type)+"'")
  }
  
  eval('values.map(function(x, i, array) { func(x, keys[i], {rep}) }, thisValue)'.replace('{rep}', type))
}


function toMap(value, index, parent) {
  var parent_slash = undefined
  
  if (typeof value === 'string') {
    if (parent == files) {
      parent_slash = parent = 'files object'
    } else {// if (typeof parent !== 'undefined' && parent != null) {} else {
      if (value.endsWith('/')) {
        parent = value.substring(0, value.lastIndexOf('/'))
        parent = parent.substring(0, value.lastIndexOf('/'))
      } else {
        parent = value.substring(0, value.lastIndexOf('/'))
      }
      parent_slash = parent+'/'
    }
    
    // print('value:', value, 'parent:', parent_slash)
    
    var pack_options = {
      'resource_packs': 'resource_packs/vanilla',
      'behavior_packs': 'behavior_packs/vanilla'
    }
    
    if (parent_slash != 'files object') {
      Object.keys(pack_options).map(function(pack, pack_index) {
        // print('cau.le', parent_slash, pack)
        
        if (parent_slash.startsWith(pack)) {
          parent = parent.replaceOnce(pack, Object.values(pack_options)[pack_index])
          parent_slash = parent+'/'
          
          if (String(modpack_path_slash+parent).exists() != true) {
            FileTools.mkdir(modpack_path_slash+parent)
            
            print('The folder: "'+modpack_path_slash+parent+'" was created.')
          } else {
            print('The folder: "'+modpack_path_slash+parent+'" already exists.')
          }
        }
      })
    }
  }
  
  if (typeof value !== 'string') {
    // print('keys:', Object.keys(value).join(', '))
    
    var to_run = 'mapObj(value, function(value2, index2) { toMap(value2, index2) /*, value */ })'
    
    if (isArray(value)) {
      to_run = 'value.map(function(value2, index2) { toMap(value2, index2) /*, value */ })'
    }
    
    // print('running:', to_run)
    
    eval('try { '+to_run+' } catch (e) { print("run error:", e) }')
  }
}

mapObj(files, function(pack, index) {
  toMap(pack, index, files)
})

// print('files:', JSON.stringify(files))

// print('files size:', Object.keys(files).length)