#ifndef _ANIMATED_TEX_COORD
#define _ANIMATED_TEX_COORD

vec2 animatedTexCoord(sampler2D tex, vec2 _uv, float tick){
	ivec2 pixels = textureSize(tex, 0);
	float frameCount = float(max(pixels.x, pixels.y) / min(pixels.x, pixels.y));
	float curFrame = floor(mod(tick, frameCount)) / frameCount;
	vec2 texCoord = vec2(_uv.x, _uv.y);
	if(pixels.x > pixels.y){
		texCoord.x = _uv.x / frameCount + curFrame;
	} else {
		texCoord.y = _uv.y / frameCount + curFrame;
	}

	return texCoord;
}

#endif