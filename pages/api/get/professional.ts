import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const professionals = await prisma.professionalBusiness.findMany()
        if(professionals.length > 0) {
             res.status(200).json(professionals)
        }else{
            throw new Error
        }     
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "error" })
    }

}