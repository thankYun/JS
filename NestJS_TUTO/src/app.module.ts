import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMconfig } from './configs/typeorm.config';


@Module({
  imports: [
    BoardsModule,
    TypeOrmModule.forRoot(typeORMconfig)
  ],

})
export class AppModule {}
