let tonelApi = {
  checkBlock: function(x, y, z) {
    let blockID = World.getBlockID(x, y, z);
    if (blockID == 7) {
      return false
    }
    return true
  },
  destroyBlocks: function(vectors, vec, vec2, bool) {
    for (var cx = vectors.x + (vec.x); cx <= vectors.x + (vec2.x); cx++) {
      for (var cy = vectors.y + (vec.y); cy <= vectors.y + (vec2.y); cy++) {
        for (var cz = vectors.z + (vec.z); cz <= vectors.z + (vec2.z); cz++) {
          if (this.checkBlock(cx, cy, cz)) {
            World.destroyBlock(cx, cy, cz, bool);
          } 
        }
      }
    }
  },
  setBlocks: function(vectors, vec, vec2, block) {
    for (var cx = vectors.x + (vec.x); cx <= vectors.x + (vec2.x); cx++) {
      for (var cy = vectors.y + (vec.y); cy <= vectors.y + (vec2.y); cy++) {
        for (var cz = vectors.z + (vec.z); cz <= vectors.z + (vec2.z); cz++) {
          if (this.checkBlock(cx, cy, cz)) {
            World.setBlock(cx, cy, cz, block.id, block.data);
          } 
        }
      }
    }
  },
  setBlocksFormX: function(coords, vec, vec2, block) {
    this.setBlocks(coords, { x: vec.x - 1, z: vec.z, y: vec.y }, { x: vec2.x - 1, z: vec2.z, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x + 1, z: vec.z, y: vec.y }, { x: vec2.x + 1, z: vec2.z, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z - 1, y: vec.y }, { x: vec2.x, z: vec2.z - 1, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z + 1, y: vec.y }, { x: vec2.x, z: vec2.z + 1, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z, y: vec.y }, { x: vec2.x, z: vec2.z, y: vec2.y }, block)
  },
  setBlocksFormX2: function(coords, vec, vec2, block,blockCenter,SetCenter) {
    if(SetCenter){
      this.setBlocks(coords, { x: vec.x, z: vec.z, y: vec.y }, { x: vec2.x, z: vec2.z, y: vec2.y }, blockCenter)
    }
    this.setBlocks(coords, { x: vec.x - 1, z: vec.z, y: vec.y }, { x: vec2.x - 1, z: vec2.z, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x + 1, z: vec.z, y: vec.y }, { x: vec2.x + 1, z: vec2.z, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z - 1, y: vec.y }, { x: vec2.x, z: vec2.z - 1, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z + 1, y: vec.y }, { x: vec2.x, z: vec2.z + 1, y: vec2.y }, block)
  },
  setBlocksFormX3: function(coords,vec,vec2,blocks,setBlockCenter,blockCenter){
    if (setBlockCenter) {
      this.setBlocks(coords, { x: vec.x, z: vec.z, y: vec.y }, { x: vec2.x, z: vec2.z, y: vec2.y }, blockCenter)
    }
    this.setBlocks(coords, { x: vec.x - 1, z: vec.z, y: vec.y }, { x: vec2.x - 1, z: vec2.z, y: vec2.y }, blocks.block1)
    this.setBlocks(coords, { x: vec.x + 1, z: vec.z, y: vec.y }, { x: vec2.x + 1, z: vec2.z, y: vec2.y }, blocks.block2)
    this.setBlocks(coords, { x: vec.x, z: vec.z - 1, y: vec.y }, { x: vec2.x, z: vec2.z - 1, y: vec2.y }, blocks.block3)
    this.setBlocks(coords, { x: vec.x, z: vec.z + 1, y: vec.y }, { x: vec2.x, z: vec2.z + 1, y: vec2.y }, blocks.block4)
  },
  setThorch: function(coords, vec, vec2, block, spacing) {
    let time = 4
    for (var cx = coords.x + (vec.x); cx <= coords.x + (vec2.x); cx++) {
      for (var cy = coords.y + (vec.y); cy <= coords.y + (vec2.y); cy++) {
        for (var cz = coords.z + (vec.z); cz <= coords.z + (vec2.z); cz++) {
          if (time >= spacing && this.checkBlock(cx, cy, cz)) {
            time = 0
            World.setBlock(cx, cy, cz, block.id, block.data);
          }else{
          time += 1
          }
        }
      }
    }
  },
  quietBlock: function(coords,vec,vec2,block,spacing){
    this.setBlocks(coords, { x: vec.x - spacing, z: vec.z + spacing, y: vec.y }, { x: vec2.x - spacing, z: vec2.z + spacing, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x - spacing, z: vec.z - spacing, y: vec.y }, { x: vec2.x - spacing, z: vec2.z - spacing, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x + spacing, z: vec.z - spacing, y: vec.y }, { x: vec2.x + spacing, z: vec2.z - spacing, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x + spacing, z: vec.z + spacing, y: vec.y }, { x: vec2.x + spacing, z: vec2.z + spacing, y: vec2.y }, block)
  },
  quietBlockTorch: function(coords,vec,vec2,blocks,spacing,spacingTorch){
    this.setThorch(coords,{x: vec.x + spacing,y: vec.y,z: vec.z + spacing},{x: vec2.x + spacing,y: vec2.y,z: vec2.z + spacing},blocks.block1,spacingTorch)
    this.setThorch(coords,{x: vec.x + spacing,y: vec.y,z: vec.z - spacing},{x: vec2.x + spacing,y: vec2.y,z: vec2.z - spacing},blocks.block2,spacingTorch)
    
    this.setThorch(coords, { x: vec.x - spacing, y: vec.y, z: vec.z - spacing }, { x: vec2.x - spacing, y: vec2.y, z: vec2.z - spacing }, blocks.block3, spacingTorch)
    this.setThorch(coords, { x: vec.x - spacing, y: vec.y, z: vec.z + spacing }, { x: vec2.x - spacing, y: vec2.y, z: vec2.z + spacing }, blocks.block4, spacingTorch)
  }
}