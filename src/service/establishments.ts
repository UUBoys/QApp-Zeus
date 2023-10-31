import { Code, ConnectError } from "@connectrpc/connect";
import { prisma } from "@src/db/client"
import logger from "@src/log/logger";

const getEstablishments = async () => {
    return await prisma.establishment.findMany().catch(e => {
        logger.error(e);
        throw new ConnectError("Internal prisma error", Code.Internal);
    });
}

const getEstablishment = async (id: number) => {
    return await prisma.establishment.findUnique({
        where: {
            id: id
        }
    }).catch(e => {
        if(e.code === 'P2025') {
            throw new ConnectError("Establishment not found", Code.NotFound);
        }
        logger.error(e);
        throw new ConnectError("Internal prisma error", Code.Internal);
    });
}

const createEstablishment = async (
    ownerId: number,
    name: string,
    street: string,
    city: string,
    country: string,
    image?: string,
    description?: string,
    ) => {
    return await prisma.establishment.create({
        data: {
            ownerId: ownerId,
            name: name,
            description: description,
            street: street,
            city: city,
            country: country,
            image: image
        }
    }).catch(e => {
        logger.error(e);
        throw new ConnectError("Internal prisma error", Code.Internal);
    });
}

const updateEstablishment = async (
    id: number,
    name?: string,
    description?: string,
    street?: string,
    city?: string,
    country?: string,
    image?: string) => {
        return await prisma.establishment.update({
            where: {
                id: id
            },
            data: {
                name: name,
                description: description,
                street: street,
                city: city,
                country: country,
                image: image
            }
        }).catch(e => {
            if(e.code === 'P2025') {
                throw new ConnectError("Establishment not found", Code.NotFound);
            }
            logger.error(e);
            throw new ConnectError("Internal prisma error", Code.Internal);
        });
    }

export default {
    getEstablishments,
    getEstablishment,
    createEstablishment,
    updateEstablishment
} as const;