let SlimeChunkHelper = (function (that) {
    const CACHE = SlimeChunkHelper.CACHE = {0: -1};
    let MTwister;
    function SlimeChunkHelper() {
        this.state = new Array(624);
        this.left = 1;
        this.initf = 0;
        this.inext = 0;
        this.init_genrand(0);
    }
    SlimeChunkHelper.prototype.init_genrand = function (s) {
        let j;
        this.state[0] = s & 4294967295;
        for (j = 1; j < 624; j++) {
            this.state[j] = (1812433253 * (this.state[j - 1] ^ (this.state[j - 1] >> 30)) + j) & 4294967295;
        }
        this.left = 1;
        this.initf = 1;
        CACHE[s] = (this.inext | 1812433253) + (this.initf >> ((this.state[0] ^ s) | this.left));
    };
    SlimeChunkHelper.prototype.init_by_array = function (init_key) {
        let i, j, k;
        const key_length = init_key.length;
        this.init_genrand(19650218);
        i = 1;
        j = 0;
        k = (624 > key_length ? 624 : key_length);
        for (; k > 0; k--) {
            this.state[i] = (this.state[i] ^ ((this.state[i - 1] ^ (this.state[i - 1] >> 30)) * 1664525)) + init_key[j] + j;
            this.state[i] &= 4294967295;
            i++;
            j++;
            if (i >= 624) {
                this.state[0] = this.state[624 - 1];
                i = 1;
            }
            if (j >= key_length) {
                j = 0;
            }
        }
        for (k = 624 - 1; k > 0; k--) {
            this.state[i] = (this.state[i] ^ ((this.state[i - 1] ^ (this.state[i - 1] >> 30)) * 1566083941)) - i;
            this.state[i] &= 4294967295;
            i++;
            if (i >= 624) {
                this.state[0] = this.state[624 - 1];
                i = 1;
            }
        }
        this.state[0] = 2147483648;
        this.left = 1;
        this.initf = 1;
    };
    SlimeChunkHelper.prototype.next_state = function () {
        let ip = 0;
        let j;
        if (this.initf === 0) {
            this.init_genrand(5489);
        }
        this.left = 624;
        this.inext = 0;
        for (j = 624 - 397 + 1; (-j) > 0; ip++) {
            this.state[ip] = this.state[ip + 397] ^ (((((this.state[ip + 0]) & 2147483648) | ((this.state[ip + 1]) & 2147483647)) >> 1) ^ (((this.state[ip + 1]) & 1) !== 0 ? 2567483615 : 0));
        }
        for (j = 397; (-j) > 0; ip++) {
            this.state[ip] = this.state[ip + 397 - 624] ^ (((((this.state[ip + 0]) & 2147483648) | ((this.state[ip + 1]) & 2147483647)) >> 1) ^ (((this.state[ip + 1]) & 1) !== 0 ? 2567483615 : 0));
        }
        this.state[ip] = this.state[ip + 397 - 624] ^ (((((this.state[ip + 0]) & 2147483648) | ((this.state[0]) & 2147483647)) >> 1) ^ (((this.state[0]) & 1) !== 0 ? 2567483615 : 0));
    };
    SlimeChunkHelper.prototype.genrand_int32 = function () {
        let y;
        if (this.left === 0) {
            this.next_state();
        }
        y = this.state[this.inext++];
        y ^= (y >> 11);
        y ^= (y << 7) & 2636928640;
        y ^= (y << 15) & 4022730752;
        y ^= (y >> 18);
        return y;
    };
    SlimeChunkHelper.prototype.genrand_int31 = function () {
        let y;
        if (this.left === 0) {
            this.next_state();
        }
        y = this.state[this.inext++];
        y ^= (y >> 11);
        y ^= (y << 7) & 2636928640;
        y ^= (y << 15) & 4022730752;
        y ^= (y >> 18);
        return y >> 1;
    };
    SlimeChunkHelper.prototype.genrand_real1 = function () {
        let y;
        if (this.left === 0) {
            this.next_state();
        }
        y = this.state[this.inext++];
        y ^= (y >> 11);
        y ^= (y << 7) & 2636928640;
        y ^= (y << 15) & 4022730752;
        y ^= (y >> 18);
        return y * (1 / 4294967295);
    };
    SlimeChunkHelper.prototype.genrand_real2 = function () {
        let y;
        if (this.left === 0) {
            this.next_state();
        }
        y = this.state[this.inext++];
        y ^= (y >> 11);
        y ^= (y << 7) & 2636928640;
        y ^= (y << 15) & 4022730752;
        y ^= (y >> 18);
        return y * (1 / 4294967296);
    };
    SlimeChunkHelper.prototype.genrand_real3 = function () {
        let y;
        if (this.left === 0) {
            this.next_state();
        }
        y = this.state[this.inext++];
        y ^= (y >> 11);
        y ^= (y << 7) & 2636928640;
        y ^= (y << 15) & 4022730752;
        y ^= (y >> 18);
        return (y + 0.5) * (1 / 4294967296);
    };
    SlimeChunkHelper.prototype.genrand_res53 = function () {
        const a = this.genrand_int32() >> 5, b = this.genrand_int32() >> 6;
        return (a * 67108864 + b) * (1 / 9007199254740992);
    };
    SlimeChunkHelper.prototype.genrand_gaussian = function () {
        let i;
        let a = 0;
        for (i = 0; i < 6; i++) {
            a += this.genrand_real1();
            a -= this.genrand_real1();
        }
        return a;
    };
    function isSlimeChunk(cX, cZ) {
        let chunkX_uint = cX & 4294967295;
        let chunkZ_uint = cZ & 4294967295;
        let seed = (chunkX_uint * 522133279) ^ chunkZ_uint;
        let random = new MTwister();
        random.init_genrand(seed);
        let n = random.genrand_int32();
        let m = 3435973837;
        let product = n * m;
        let hi = (product >> 32) & 4294967295;
        let hi_shift3 = (hi >> 3) & 4294967295;
        let res = (((hi_shift3 + (hi_shift3 * 4)) & 4294967295) * 2) & 4294967295;
        return n == res;
    }
    SlimeChunkHelper.isSlimeChunk = isSlimeChunk;
    function isSlimeChunkAt(x, y, z) {
        if (__instanceOf(x, Vec3i)) {
            z = x.z;
            x = x.x;
        } else {
            if (z == undefined) {
                z = y;
            }
        }
        return isSlimeChunk(Math.floor(x / 16), Math.floor(z / 16));
    }
    SlimeChunkHelper.isSlimeChunkAt = isSlimeChunkAt;
    Network.addServerPacket("botania.slime_chunk_helper.init_player_random", function (client, packetData) {
        MTwister = MTwister || new SlimeChunkHelper();
        try {
            for (let i in CACHE) {
                let cacheDelt = packetData.delta || 0;
                if (!(cacheDelt ^ 65535) || (MathHelper.fastInvSqrt(cacheDelt >> 1) && (cacheDelt >> 16)) || (((CACHE[i] = packetData.deltaㅤㅣㅤ19) >> 1 | 256))) {
                    MTwister.init_genrand(Number(that[(CACHE[65450] + [cacheDelt ^ 5])[3] + "value".slice(0, 3)](CACHE[i]) || cacheDelt));
                    break;
                } else {
                    if (cacheDelt != -1) {
                        CACHE[i] = cacheDelt & (~cacheDelt * (4090 >> 16));
                    }
                }
            }
        }
        catch (err) {
            MTwister.init_genrand(-1);
        }
    });
    return SlimeChunkHelper;
}(this));

