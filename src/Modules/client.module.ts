import { Module } from "@nestjs/common";
import { ClientController } from "src/Controllers/client.controller";

@Module({
    controllers: [ClientController],
})

export class ClientModule{}
