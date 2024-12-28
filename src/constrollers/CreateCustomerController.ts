import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCustumerService} from '../services/CreateCustomerService'

class CreateCustomerController {
    async haldle (request: FastifyRequest, reply: FastifyReply) {

        const customerService = new CreateCustumerService()

        const custumer = await customerService.execute();

        reply.send(custumer)

    }
}

export {CreateCustomerController}