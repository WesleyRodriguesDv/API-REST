import prismaCliente from "../prisma";

class CreateCustumerService {
    async execute() {

        console.log("Rota foi chamada");

        return {ok:true}
    }
}

export {CreateCustumerService}