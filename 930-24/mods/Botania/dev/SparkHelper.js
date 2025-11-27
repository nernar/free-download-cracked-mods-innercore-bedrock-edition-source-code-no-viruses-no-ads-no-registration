let SparkHelper = (function (SparkHelper) {
    const SPARK_SCAN_RANGE = SparkHelper.SPARK_SCAN_RANGE = 12;
    function getSparksAround(region, x, y, z, color) {
        if (color) {
            return getEntitiesAround(ISparkEntity, region, x, y, z).filter(function (v) {
                return v.getNetwork() == color;
            });
        } else {
            return getEntitiesAround(ISparkEntity, region, x, y, z);
        }
    }
    SparkHelper.getSparksAround = getSparksAround;
    function getEntitiesAround(clazz, region, x, y, z) {
        return region.getEntitiesWithinAABB(new AxisAlignedBB(x - SPARK_SCAN_RANGE, y - SPARK_SCAN_RANGE, z - SPARK_SCAN_RANGE, x + SPARK_SCAN_RANGE, y + SPARK_SCAN_RANGE, z + SPARK_SCAN_RANGE), clazz);
    }
    SparkHelper.getEntitiesAround = getEntitiesAround;
    return SparkHelper;
}(SparkHelper || (SparkHelper = {})));

