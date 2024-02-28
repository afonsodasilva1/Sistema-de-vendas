import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientController } from "src/controllers/client.controller";
import { Client } from "src/models/client.model";

@Module({
    imports: [
        TypeOrmModule.forFeature([Client])
    ],
    controllers: [ClientController],
})

export class ClientModule{}
