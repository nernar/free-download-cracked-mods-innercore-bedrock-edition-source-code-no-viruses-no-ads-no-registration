const Particle = {

    createSystem: function (x, y, z) {
        let system = new Particles.ParticleEmitter(x, y, z);
        return system;
    },

    effectExplode: function (identifier, x, y, z, power, count) {
        count ? null : count = 25;
        power ? null : power = 0.3;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < count; i++) {
            system.emit(identifier, 0, x + 0.5, y + 0.5, z + 0.5, (Math.random() - 0.5) * power, (Math.random() - 0.5) * power, (Math.random() - 0.5) * power);
        }
    },

    effectHighSpiral: function (identifier, x, y, z, diameter, height, velX, velY, velZ) {
        diameter /= 2;
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < height * 2; i = i + 0.05) {
            system.emit(identifier, 0, x + 0.5 + Math.sin(i) * diameter, y + (i / 2), z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ);
        }
    },

    effectRound: function (identifier, x, y, z, diameter, velX, velY, velZ) {
        diameter /= 2;
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < 2 * (Math.PI * diameter); i = i + 0.1) {
            system.emit(identifier, 0, x + 0.5 + Math.sin(i) * diameter, y, z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ);
        }
    },

    effectLine: function (identifier, x, y, z, X, Y, Z, step, velX, velY, velZ) {
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;
        step ? null : step = 0.1;
        let xDistance = X - x;
        let yDistance = Y - y;
        let zDistance = Z - z;
        let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance + zDistance * zDistance)
        xDistance /= distance;
        yDistance /= distance;
        zDistance /= distance;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < distance; i += step) {
            let X = x + xDistance * i;
            let Y = y + yDistance * i;
            let Z = z + zDistance * i;
            system.emit(identifier, 0, X, Y, Z, velX, velY, velZ);
        }
    },

    effectSpiral: function (identifier, x, y, z, diameter, velX, velY, velZ) {
        diameter /= 2;
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;
        var rad = diameter;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < Math.PI * (Math.PI * rad); i = i + 0.1) {
            system.emit(identifier, x + 0.5 + Math.sin(i) * diameter, y + 0.1, z + 0.5 + Math.cos(i) * diameter, velX, velY, velZ);
            diameter -= 0.01;
        }
    },

    effectEllipse: function (identifier, x, y, z, x_diameter, z_diameter, step, velX, velY, velZ) {
        x_diameter = x_diameter / 2;
        z_diameter = z_diameter / 2;
        velX ? null : velX = 0;
        velY ? null : velY = 0;
        velZ ? null : velZ = 0;

        let system = this.createSystem(0, 0, 0);

        for (var i = 0; i < Math.PI * (Math.pow(x_diameter + z_diameter, 2)); i += 0.05) {
            system.emit(identifier, 0, x + 0.5 + Math.sin(i) * x_diameter, y + 0.1, z + 0.5 + Math.cos(i) * z_diameter, velX, velY, velZ);
        }
    }
};