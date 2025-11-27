// __multiversion__
// This signals the loading code to prepend either #version 100 or #version 300 es as apropriate.

#include "vertexVersionCentroidUV.h"

#include "uniformWorldConstants.h"
#include "uniformEntityConstants.h"
#include "uniformPerFrameConstants.h"

attribute mediump vec4 POSITION;
attribute vec2 TEXCOORD_0;

void main() {
	vec4 pos = WORLDVIEWPROJ * POSITION;
	pos.z = 0.0;
	gl_Position = pos;
	uv = TEXCOORD_0;
}