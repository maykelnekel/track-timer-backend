const devEnv = {
    type: 'postgres',
    host: process.env.HOST,
    port: '5432',
    database: process.env.DB,
    username: process.env.USER,
    password: process.env.PASSWORD,
    entities: ['./src/entities/**/*.js'],
    migrations: ['./src/database/migrations/*.js'],
    cli: {
        migrationsDir: './src/database/migrations',
        entitiesDir: ['./src/entities/**/*.js'],

    },
    logging: true,
    synchronize: false,
};

const prodEnv = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: ['./dist/entities/**/*.js'],
    migrations: ['./dist/database/migrations/*.js'],
    cli: {
        migrationsDir: './dist/database/migrations',
        entitiesDir: ['./src/entities'],

    },
    synchronize: false,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
}

module.exports = process.env.NODE_ENV === 'production' ? prodEnv : devEnv;
