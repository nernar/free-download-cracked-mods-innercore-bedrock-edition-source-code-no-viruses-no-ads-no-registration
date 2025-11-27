/*
┏┓╋╋╋╋╋╋╋┏┳━┳┳┓┏┓╋╋
┃┃┏━┓┏━┳┳┛┃━┫┣╋┛┣━┓
┃┗┫╋┗┫┃┃┃╋┣━┃┃┃╋┃┻┫
┗━┻━━┻┻━┻━┻━┻┻┻━┻━┛
by NikuJagajaga
*/


const fall = __config__.access("Landslide.Fall"),
build = __config__.access("Landslide.Build"),
destroy = __config__.access("Landslide.Destroy"),
collapse = __config__.access("Collapse"),
air = {0: true, 8: true, 9: true, 10: true, 11: true, 51: true},
sand = {12: true, 13: true},
obj = {},
put = [],
intCoords = function(c){
  c.x < 0 && (c.x--);
  c.z < 0 && (c.z--);
  c.x |= 0;
  c.y |= 0;
  c.z |= 0;
  return c;
},
shuffle = function(){
  const a = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let r, t;
  for(let i = 4; i--;){
    r = Math.random()*(i+1)|0;
    t = a[i];
    a[i] = a[r];
    a[r] = t;
  }
  return a;
};