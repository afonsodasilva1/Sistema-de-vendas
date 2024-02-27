import { Module } from '@nestjs/common';
import { ClientController } from './Controllers/client.controller';

@Module({
  imports: [],
  controllers: [ClientController]
})
export class AppModule {}
