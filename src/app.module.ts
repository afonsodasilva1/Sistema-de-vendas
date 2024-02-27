import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresConfigService } from './config/postgres.config.service';

@Module({
  imports: [
    ClientModule, 
    ConfigModule.forRoot({
      isGlobal: true
    })
    ,
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    })
  ],
})
export class AppModule {}
