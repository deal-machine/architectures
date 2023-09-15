export const env = {
  isTest: Bun.env.NODE_ENV === "test",

  port: Bun.env.PORT ? Number(Bun.env.PORT) : 3000,

  dbHost: String(Bun.env.POSTGRES_HOST),
  dbPort: Number(Bun.env.POSTGRES_PORT),
  dbName: String(Bun.env.POSTGRES_DATABASE),
  dbUser: String(Bun.env.POSTGRES_USERNAME),
  dbPassword: String(Bun.env.POSTGRES_PASSWORD),
  dbDialect: String(Bun.env.POSTGRES_DIALECT),

  dbTestHost: String(Bun.env.POSTGRES_HOST_TEST),
  dbTestPort: Number(Bun.env.POSTGRES_PORT_TEST),
  dbTestName: String(Bun.env.POSTGRES_DATABASE_TEST),
  dbTestUser: String(Bun.env.POSTGRES_USERNAME_TEST),
  dbTestPassword: String(Bun.env.POSTGRES_PASSWORD_TEST),
  dbTestDialect: String(Bun.env.POSTGRES_DIALECT_TEST),
};
