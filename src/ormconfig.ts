import { ConnectionOptions } from 'typeorm'
import { join } from 'path'

const config: ConnectionOptions = {
        // @ts-ignore
        type: process.env.DB_TYPE || 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'test',
        entities: [join(__dirname, '**/**.entity{.ts,.js}')],
        synchronize: false,
        logging: true,
        migrationsRun: true,
        migrations: [join(__dirname, 'migrations/**/*{.ts,.js}')],
        cli: {
                migrationsDir: 'src/migrations',
        },
}

export = config
