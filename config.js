const config = {
  db: {
    uri: process.env["DB_URI"],
  },
  security: {
    password: {
      salt: process.env["PASSWORD_SALT"],
      iterations: Number.parseInt(process.env["PASSWORD_ITERATION"], 10),
      keylen: Number.parseInt(process.env["PASSWORD_KEYLEN"], 10),
      digest: "sha512",
    },
    jwt: {
      key: process.env["JWT_KEY"],
    },
  },
  defaultAdmin: {
    enabled: false,
    name: process.env["DEFAULT_ADMIN_NAME"],
    password: process.env["DEFAULT_ADMIN_PASSWORD"],
  },
}

export default config
