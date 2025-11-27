// __multiversion__

precision highp float;

#include "fragmentVersionCentroidUV.h"
#include "uniformShaderConstants.h"
#include "uniformPerFrameConstants.h"

#include "gl_assets/globalPrecision.glsl"
#include "gl_assets/animatedTexCoord.glsl"

LAYOUT_BINDING(0) uniform sampler2D TEXTURE_0;

uniform float ALPHA;

void main() {
	vec4 result = texture(TEXTURE_0, animatedTexCoord(TEXTURE_0, uv, TIME * 20.0));
	result.a = ALPHA;
	gl_FragColor = result;
}
