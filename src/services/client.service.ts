import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClientDto } from "src/DTO/client.dto";
import { Client } from "src/models/client.model";


@Injectable()
export class ClientService{
    constructor(
        @InjectRepository(Client)
        private readonly ClientRepository: Repository<Client>
    ) { }

    async findAllClients (): Promise<Client[]>{
        return this.ClientRepository.find()
    }

    async createClient(clientDTO: ClientDto): Promise<ClientDto>{
        const createClient = await this.ClientRepository.save(clientDTO)
        return createClient
    }
}