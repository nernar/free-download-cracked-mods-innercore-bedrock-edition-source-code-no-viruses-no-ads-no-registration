const Encyption = {cypherInstance: "AES/CBC/PKCS5Padding"};
Encyption.encrypt = function (bytes) {
    var skeySpec = new javax.crypto.spec.SecretKeySpec(this.getRaw(), "AES");
    var cipher = javax.crypto.Cipher.getInstance(this.cypherInstance);
    cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, skeySpec, this.getInitSpec());
    return cipher.doFinal(bytes);
};
Encyption.decrypt = function (bytes) {
    var skeySpec = new javax.crypto.spec.SecretKeySpec(this.getRaw(), "AES");
    var cipher = javax.crypto.Cipher.getInstance(this.cypherInstance);
    cipher.init(javax.crypto.Cipher.DECRYPT_MODE, skeySpec, this.getInitSpec());
    return cipher.doFinal(bytes);
};
Encyption.getInitSpec = function () {
    var bytes = new java.lang.String("8119745113154120").getBytes();
    return new javax.crypto.spec.IvParameterSpec(bytes);
};
Encyption.getRaw = function () {
    var keyChar = new java.lang.String("nernar").toCharArray();
    var keySalt = new java.lang.String("ntfnaf").getBytes();
    var factory = javax.crypto.SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
    var spec = new javax.crypto.spec.PBEKeySpec(keyChar, keySalt, 10, 128);
    return factory.generateSecret(spec).getEncoded();
};
const Hashable = {};
Hashable.toMD5 = function (bytes) {
    var digest = java.security.MessageDigest.getInstance("md5");
    digest.update(bytes);
    var byted = digest.digest(), sb = new java.lang.StringBuilder();
    for (i = 0; i < byted.length; i++) {
        sb.append(java.lang.Integer.toHexString(255 & byted[i]));
    }
    return sb.toString();
};

