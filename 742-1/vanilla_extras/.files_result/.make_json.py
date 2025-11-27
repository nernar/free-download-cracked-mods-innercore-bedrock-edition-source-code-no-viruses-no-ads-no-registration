from json import dumps

class os:
	from os import getcwd, listdir
	
	class path:
		from os.path import isdir


def getFilename(path):
    from ntpath import split, basename
    head, tail = split(path)
    return tail or basename(head)

def getParent(path):
	from pathlib import Path; return str(Path(path).parent)

files = {
	'folders': {},
	'files': [],
	'__parent__': '',
	'__parent_slash__': ''
}
first_parent = getParent(os.getcwd())

fp_slash = '/'
if first_parent.endswith('/'):
	fp_slash = ''

files['__parent__'] = first_parent
files['__parent_slash__'] = first_parent+fp_slash

def parseFiles(parent, to_listdir):
	for file in os.listdir(to_listdir):
		filename = file
		
		slash = '/'
		if to_listdir.endswith('/'):
			slash = ''
		
		file = to_listdir+slash+filename
		
		if not filename.startswith('.'):
			file_to_add = file.replace(first_parent+fp_slash, '', 1)
			
			if not 'folders' in parent:
				parent['folders'] = {}
			if not 'files' in parent:
				parent['files'] = []
			
			if os.path.isdir(file):
				parent['folders'][file_to_add] = {}
				parent['folders'][file_to_add] = parseFiles(parent['folders'][file_to_add], file)
			else:
				parent['files'].append(file_to_add)
	
	return parent

files = parseFiles(files, first_parent)

open('files.json', 'w+').write(dumps(files, indent=2, sort_keys=False))