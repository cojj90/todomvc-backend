import { ConnectionOptions } from 'typeorm'
import { join } from 'path'

const config: ConnectionOptions = {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
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
