from json import load

json_file = open('ids.json', 'r')

print(load(json_file))