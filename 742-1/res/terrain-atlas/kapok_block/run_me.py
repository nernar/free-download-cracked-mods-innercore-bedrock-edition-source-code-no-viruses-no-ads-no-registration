from shutil import copyfile


colors = [None, 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'silver', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']

for i, color in enumerate(colors):
	if color != None:
		copyfile(f'color_{i}.png', f'../kapok_block_{i}.png')