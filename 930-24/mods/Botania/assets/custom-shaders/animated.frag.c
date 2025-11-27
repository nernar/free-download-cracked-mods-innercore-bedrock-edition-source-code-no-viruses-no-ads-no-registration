// __multiversion__

precision highp float;

#include "fragmentVersionCentroidUV.h"
#include "uniformShaderConstants.h"
#include "uniformPerFrameConstants.h"

#include "gl_assets/animatedTexCoord.glsl"

LAYOUT_BINDING(0) uniform sampler2D TEXTURE_0;

void main() {
	gl_FragColor = texture(TEXTURE_0, animatedTexCoord(TEXTURE_0, uv, TIME * 20.0));
}
