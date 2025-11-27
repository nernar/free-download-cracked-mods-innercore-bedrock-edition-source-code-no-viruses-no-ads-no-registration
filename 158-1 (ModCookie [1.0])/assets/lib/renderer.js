/*
	RendererLIB
	by SWCorp
*/

LIBRARY({
	name: "RenderLIB",
	version:1,
	shared: false,
	api:"CoreEngine",
	dependencies: []
});

var Renderer={
	setBarsRender:function(id, groupName, xsize, zsize) {
  	  var render = new ICRender.Model();
  	  BlockRenderer.setStaticICRender(id, 0, render);
    	var boxes = [
        {side: [1, 0, 0], box: [xsize, 0, zsize, 1, 1, xsize]},
        {side: [-1, 0, 0], box: [0, 0, zsize, zsize, 1, xsize]},
        {side: [0, 0, 1], box: [zsize, 0, xsize, xsize, 1, 1]},
        {side: [0, 0, -1], box: [zsize, 0, 0, xsize, 1, zsize]},
  	  ];
   	 ICRender.getGroup(groupName).add(id, -1);
  	 for (var i in boxes) {
        var box = boxes[i]; 
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], ICRender.getGroup(groupName), 0);
  	  }
  	  var model = BlockRenderer.createModel();
  	  render.addEntry(model);
	},
		setSaplingRender:function(id,x){
		Block.setBlockShape(id, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});
		BlockRenderer.addRenderCallback(id, function(api, coords,block) {
			if(x!=0){
				for(var i = 0;i < 1/x;i+=x){
				api.renderBoxId(coords.x, coords.y, coords.z,0+i, 0.01, 0+i, x+i, 0.99, x+i,id, block.data);
				api.renderBoxId(coords.x, coords.y, coords.z,(1-x)-i, 0.01, 0+i,1-i, 0.99, x+i,id, block.data);
				}
			}
			else{
				api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,id, block.data);
				api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, id, block.data);
			}
		})
		BlockRenderer.enableCustomRender(id);
	},
	setCropRender:function(id){
		Block.setBlockShape(id,{x: 0, y:-1/16, z: 0},{x: 1, y: 0.001, z: 1});
		BlockRenderer.addRenderCallback(id, function(api, coords,block) {	
			api.renderBoxId(coords.x, coords.y, coords.z, 0.2499,-1/16, 0, 0.25, 0.99, 1, id, block.data);											
			api.renderBoxId(coords.x, coords.y, coords.z, 0,-1/16, 0.2499, 1, 0.99, 0.25, id, block.data);											
			api.renderBoxId(coords.x, coords.y, coords.z, 0.7499,-1/16, 0, 0.75, 0.99, 1, id, block.data);											
			api.renderBoxId(coords.x, coords.y, coords.z, 0,-1/16, 0.7499, 1, 0.99, 0.75, id, block.data);										
		});
		BlockRenderer.enableCustomRender(id);
	}
};
EXPORT("Renderer",Renderer);