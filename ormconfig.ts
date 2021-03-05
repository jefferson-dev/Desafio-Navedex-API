export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities: ['src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['src/shared/infra/typeorm/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/shared/infra/typeorm/database/migrations/',
  },
};
