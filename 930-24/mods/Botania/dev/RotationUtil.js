let RotationUtil = (function (RotationUtil) {
    function rotationFromFacing(facing) {
        switch (facing) {
          case Direction.EAST:
            return Rotation.CLOCKWISE_90;
          case Direction.SOUTH:
            return Rotation.CLOCKWISE_180;
          case Direction.WEST:
            return Rotation.COUNTERCLOCKWISE_90;
          default:
            return Rotation.NONE;
        }
    }
    RotationUtil.rotationFromFacing = rotationFromFacing;
    function fixHorizontal(rot) {
        switch (rot) {
          case Rotation.CLOCKWISE_90:
            return Rotation.COUNTERCLOCKWISE_90;
          case Rotation.COUNTERCLOCKWISE_90:
            return Rotation.CLOCKWISE_90;
          default:
            return rot;
        }
    }
    RotationUtil.fixHorizontal = fixHorizontal;
    return RotationUtil;
}(RotationUtil || (RotationUtil = {})));

