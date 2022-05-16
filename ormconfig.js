const devEnv = {
    type: 'postgres',
    host: process.env.HOST,
    port: '5432',
    database: process.env.DB,
    username: process.env.USER,
    password: process.env.PASSWORD,
    entities: ['./src/entities/**/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
        migrationsDir: './src/database/migrations',
        entitiesDir: ['./src/entities/**/*.ts'],

    },
    logging: true,
    synchronize: false,
};

const prodEnv = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: ['./dist/entities/**/*.ts'],
    migrations: ['./dist/database/migrations/*.ts'],
    cli: {
        migrationsDir: './dist/database/migrations',
        entitiesDir: ['./src/entities'],

    },
    synchronize: false,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
}

module.exports = process.env.NODE_ENV === 'production' ? prodEnv : devEnv;
