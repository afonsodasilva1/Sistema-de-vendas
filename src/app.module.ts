import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ 
    ConfigModule.forRoot()
    ,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5433,
      username: "postgres",
      password: "945332002Af*",
      database: "sales_db",
      synchronize: true,
      entities: [`${__dirname}/**/models/*.{ts, js}`], 
      migrations: [`${__dirname}/**/migrations/*.{ts, js}`], 
    }),
    ClientModule
  ],

})
export class AppModule {}

