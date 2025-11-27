from shutil import copyfile


colors = [None, 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'silver', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']

for i, color in enumerate(colors):
	if color != None:
		copyfile('wool_colored_'+color+'.png', f'../color_{i}.png')