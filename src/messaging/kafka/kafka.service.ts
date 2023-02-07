import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices"

@Injectable()
export class KafkaService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                brokers: ["https://well-jackal-12076-us1-rest-kafka.upstash.io"],
                clientId: "emails",
                sasl: {
                    mechanism: "scram-sha-256",
                    username: "d2VsbC1qYWNrYWwtMTIwNzYkpWRnHjZCNxM6gUtcad8DfDmjEQ9ikj6wBvYm7ag",
                    password: "fa68344a902b41d98993191282c1857a"
                },
                ssl: true,
            }
        })
    }
    async onModuleDestroy() {
        await this.close();
    }
}