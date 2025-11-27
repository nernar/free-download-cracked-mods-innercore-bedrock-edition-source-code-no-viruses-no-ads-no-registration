import glob, shutil
from os import remove

try:
	remove('main.js')
except FileNotFoundError:
	pass

glob_res = glob.glob("*.js")

read_files = open('.includes', 'r').read().split('\n')

for ff in glob_res:
	if not ff in read_files:
		shutil.move(ff, 'not used')

with open("main.js", "wb") as outfile:
    for f in read_files:
        with open(f, "rb") as infile:
            outfile.write(infile.read())