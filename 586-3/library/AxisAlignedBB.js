LIBRARY({
	name: "AxisAlignedBB",
	version: 1,
	shared: true,
	api: "CoreEngine"
});

/**
 * @constructor
 * Creates bounding box from 2 3D coords, that can be defined as Vectors or set of numbers.
 * 
 * @param {number|Object} minX - X coord of left top corner or its Vectors
 * @param {number|Object} minY - Y coord of left top corner or Vectors of right down corner
 * @param {number} [minZ] - Z coord of left top corner
 * @param {number} [maxX] - X coord of right down corner
 * @param {number} [maxY] - Y coord of right down corner
 * @param {number} [maxZ] - Z coord of right down corner
 */
function AxisAlignedBB(minX, minY, minZ, maxX, maxY, maxZ){
    if (typeof(minX) == "number") {
    this.minX = minX;
    this.minY = minY;
    this.minZ = minZ;
    this.maxX = maxX;
    this.maxY = maxY;
    this.maxZ = maxZ;
    } else {
        this.minX = minX.x;
        this.minY = minX.y;
        this.minZ = minX.z;
        this.maxX = minY.x;
        this.maxY = minY.y;
        this.maxZ = minY.z;
    }

    /**
     * Expands bounding box by adjusting corner's coords.
     * @param {number} x - if positive, increases box within X axis, if negative, decreases box within X axis
     * @param {number} y - if positive, increases box within Y axis, if negative, decreases box within Y axis
     * @param {number} z - if positive, increases box within Z axis, if negative, decreases box within Z axis
     * @return {AxisAlignedBB} adjusted bounding box
     */
    this.expand = function(x, y, z){
        var minX = this.minX;
        var minY = this.minY;
        var minZ = this.minZ;
        var maxX = this.maxX;
        var maxY = this.maxY;
        var maxZ = this.maxZ;

        if (x < 0.0){
            minX += x;
        } else if (x > 0.0){
            maxX += x;
        }

        if (y < 0.0)
        {
            minY += y;
        }
        else if (y > 0.0)
        {
            maxY += y;
        }

        if (z < 0.0)
        {
            minZ += z;
        }
        else if (z > 0.0)
        {
            maxZ += z;
        }

        return new AxisAlignedBB(minX, minY, minZ, maxX, maxY, maxZ);
    };

    /**
     * Enlarges bounding box by expanding it in both directions.
     * @param {number} x - box increase within X axis or box increase within every axis
     * @param {number} [y] - box increase within Y axis
     * @param {number} [z] - box increase within Z axis
     * @returns {AxisAlignedBB} adjusted bounding box
     * 
     * Note than box's size will be increased by 2x for each parameter.
     */
    this.grow = function(x, y, z){
        if (y != null && z != null)
        return new AxisAlignedBB(this.minX - x, this.minY - y, this.minZ - z, this.maxX + x, this.maxY + y, this.maxZ + z);
        else return new AxisAlignedBB(this.minX - x, this.minY - x, this.minZ - x, this.maxX + x, this.maxY + x, this.maxZ + x);
    };

    /**
     * Returns intersection between two AABBs.
     * @param {AxisAlignedBB} otherAABB - the box to be compared
     * @returns {AxisAlignedBB} the intersection between boxes
     */
    this.intersect = function(otherAABB){
        return new AxisAlignedBB(Math.max(this.minX, otherAABB.minX),
        Math.max(this.minY, otherAABB.minY),
        Math.max(this.minZ, otherAABB.minZ),
        Math.min(this.maxX, otherAABB.maxX),
        Math.min(this.maxY, otherAABB.maxY),
        Math.min(this.maxZ, otherAABB.maxZ)
        );
    };

    /**
     * Returns union between two AABBs.
     * @param {AxisAlignedBB} otherAABB - the box to be compared
     * @returns {AxisAlignedBB} the union between boxes
     */
    this.union = function(otherAABB){
        return new AxisAlignedBB(Math.min(this.minX, otherAABB.minX),
        Math.min(this.minY, otherAABB.minY),
        Math.min(this.minZ, otherAABB.minZ),
        Math.max(this.maxX, otherAABB.maxX),
        Math.max(this.maxY, otherAABB.maxY),
        Math.max(this.maxZ, otherAABB.maxZ)
        );
    };

    /**
     * Moves bounding box in coordinate grid, using given coords.
     * @param {number|Object} x - X axis offset or relative Vector
     * @param {number} [y] - Y axis offest
     * @param {number} [z] - Z axis offset
     * @returns {AxisAlignedBB} adjusted bounding box
     */
    this.offset = function(x, y, z){
        if (typeof(x) == "number"){
            return new AxisAlignedBB(this.minX + x, this.minY + y, this.minZ + z, this.maxX + x, this.maxY + y, this.maxZ + z);
        } else {
            return new AxisAlignedBB(this.minX + x.x, this.minY + x.y, this.minZ + x.z, this.maxX + x.x, this.maxY + x.y, this.maxZ + x.z)
        }
    };

    /**
     * Gets the offset in x axis to other bounding box.
     * @param {AxisAlignedBB} other - bounding box from which offset is calculated
     * @param {number} offsetX - default or max offset allowed
     * @returns {number} offset or capped value
     */
    this.calculateXOffset = function(other, offsetX){
        if (other.maxY > this.minY && other.minY < this.maxY && other.maxZ > this.minZ && other.minZ < this.maxZ)
        {
            if (offsetX > 0.0 && other.maxX <= this.minX)
            {
                d1 = this.minX - other.maxX;

                if (d1 < offsetX)
                {
                    offsetX = d1;
                }
            }
            else if (offsetX < 0.0 && other.minX >= this.maxX)
            {
                d0 = this.maxX - other.minX;

                if (d0 > offsetX)
                {
                    offsetX = d0;
                }
            }

            return offsetX;
        }
        else
        {
            return offsetX;
        }
    };
    /**
     * Gets the offset in y axis to other bounding box.
     * @param {AxisAlignedBB} other - bounding box from which offset is calculated
     * @param {number} offsetY - default or max offset allowed
     * @returns {number} offset or capped value
     */
    this.calculateYOffset = function(otherAABB, offsetY){
        if (other.maxX > this.minX && other.minX < this.maxX && other.maxZ > this.minZ && other.minZ < this.maxZ)
        {
            if (offsetY > 0.0 && other.maxY <= this.minY)
            {
                d1 = this.minY - other.maxY;

                if (d1 < offsetY)
                {
                    offsetY = d1;
                }
            }
            else if (offsetY < 0.0 && other.minY >= this.maxY)
            {
                d0 = this.maxY - other.minY;

                if (d0 > offsetY)
                {
                    offsetY = d0;
                }
            }

            return offsetY;
        }
        else
        {
            return offsetY;
        }
    };

    /**
     * Gets the offset in z axis to other bounding box.
     * @param {AxisAlignedBB} other - bounding box from which offset is calculated
     * @param {number} offsetZ - default or max offset allowed
     * @returns {number} offset or capped value
     */
    this.calculateZOffset = function(otherAABB, offsetZ){
        if (other.maxX > this.minX && other.minX < this.maxX && other.maxY > this.minY && other.minY < this.maxY)
        {
            if (offsetZ > 0.0 && other.maxZ <= this.minZ)
            {
                d1 = this.minZ - other.maxZ;

                if (d1 < offsetZ)
                {
                    offsetZ = d1;
                }
            }
            else if (offsetZ < 0.0 && other.minZ >= this.maxZ)
            {
                d0 = this.maxZ - other.minZ;

                if (d0 > offsetZ)
                {
                    offsetZ = d0;
                }
            }

            return offsetZ;
        }
        else
        {
            return offsetZ;
        }
    };
    
    /**
     * Checks if other bounding box intersects this bounding box.
     * 
     * Other bounding box can be defined with set of numbers or AxisAlignedBB object.
     * @param {number|Object} minX - X coord of left top corner or other bounding box.
     * @param {number|Object} [minY] - Y coord of left top corner
     * @param {number} [minZ] - Z coord of left top corner
     * @param {number} [maxX] - X coord of right down corner
     * @param {number} [maxY] - Y coord of right down corner
     * @param {number} [maxZ] - Z coord of right down corner
     * @returns {boolean} is bounding boxes intersecting
     */
    this.intersects = function(minX, minY, minZ, maxX, maxY, maxZ){
        if (typeof(minX) != "number"){
            return this.intersects(minX.minX, minX.minY, minX.minZ, minX.maxX, minX.maxY, minX.maxZ);
        }
        else return this.minX < maxX && this.maxX > minX && this.minY < maxY && this.maxY > minY && this.minZ < maxZ && this.maxZ > minZ;
    };
    /**
     * Checks if the Vector coords are inside the bounding box.
     * @param {object} point - Vector which describes the point
     * @returns {boolean} is coords contained in bounding box
     */
    this.contains = function(point){
        return (point.x > this.minX && point.x < this.maxX) && (point.y > this.minY && point.y < this.maxY) && (point.z > this.minZ && point.z < this.maxZ);
    };
    /**
     * Calculates average edge length for bounding box.
     * @returns {number} average edge length.
     */
    this.getAverageEdgeLength = function(){
        return (this.maxX - this.minX + this.maxY - this.minY + this.maxZ - this.minZ) / 3.0;
    };
    
    /**
     * Shrinks bounding box by reducing it in both directions.
     * @param {number} value - box increase within every axis
     * @returns {AxisAlignedBB} adjusted bounding box
     * 
     * Note than box's size will be decreased by 2x for each parameter.
     */
    this.shrink = function(value){
        return this.grow(-value);
    };

}

EXPORT("AxisAlignedBB", AxisAlignedBB);
