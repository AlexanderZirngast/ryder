import { Motorcycle } from "@/generated/prisma/client"
import prisma from "@/lib/prisma"

export const getAllMotorcycles = async (userID: string ) : Promise<Motorcycle[]> => {
    return  await prisma.motorcycle.findMany({
        where: {
            userId: userID
        }
    })
}

export const createMotorcycle = async (data: Motorcycle) => {
    return await prisma.motorcycle.create({
        data
    })
}