"use server"

import { MotorcycleFormSchema } from "@/features/addMotorcycle/schemas/motorcycleFormSchema"
import { Motorcycle, Prisma } from "@/generated/prisma/client"
import prisma from "@/lib/prisma"
import { auth } from "@/utils/auth"
import { headers } from "next/headers"
import z from "zod"

export const getAllMotorcycles = async (userID: string ) : Promise<Motorcycle[]> => {
    return  await prisma.motorcycle.findMany({
        where: {
            userId: userID
        }
    })
}

type createMotorcycleInput = z.infer<typeof MotorcycleFormSchema>
export const createMotorcycle = async (data: createMotorcycleInput) => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session?.user.id)
        throw new Error("Unauthorized")

    return await prisma.motorcycle.create({
        data: {
            color: data.color,
            fuelType: data.fuelType,
            modell: data.model,
            year: Number(data.year),
            manufacturer: data.manufacturer,
            user: {
                connect: session.user
            }
        }
    })
}