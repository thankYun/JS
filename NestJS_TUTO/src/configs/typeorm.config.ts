import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeORMconfig : TypeOrmModuleOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username:'postgres',
    password: '134679',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entitiy.{js,ts}'],
    synchronize : true
}