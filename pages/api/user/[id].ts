import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const id = req.query.id as string
    switch (method) {

        // GET THE USER BY ID

        case "GET":
            try {
                const user = await prisma.user.findUnique({
                    where: {
                        id: String(id),
                    },
                    include: {
                        adoptionPost: {
                            select:{
                                id:true,
                                createdAt:true,
                                active:true,
                                name:true,
                                size:true,
                                age:true,
                                breed:true,
                                photo:true,
                                gender:true,
                                description:true,
                                apply:{
                                    select:{
                                        createdAt:true,
                                        employee:true,
                                        garden:true,
                                        past:true,
                                        reason:true,
                                        residence:true,
                                        user:{
                                            select:{
                                                firstName:true,
                                                lastName:true,
                                                email:true,
                                                phone:true,
                                                city:true,
                                                province:true,
                                                country:true
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        businessPost: true,
                        transaction: true,
                        review: true,
                        apply: true
                    }
                })
                user ?
                    res.status(200).json(user)
                    :
                    res.status(404).json({ message: `cant found the user with the id:${id} or not exist.` })

            } catch (error) {
                console.log(error)
                res.status(404).json({ message: "an error has occurred on the server" })
            }
            break;

        // PUT(UPDATE) THE USER BY ID

        case "PUT":
            const {
                firstName,
                lastName,
                email,
                gender,
                birthday,
                address,
                phone,
                city,
                province,
                country,
                postCode,
                photo,
                role,
                active
            } = req.body
            try {
                const obj ={
                    firstName,
                    lastName,
                    email,
                    gender,
                    birthday,
                    address,
                    phone,
                    city,
                    province,
                    country,
                    postCode,
                    photo,
                    role,
                    active
                };
                let datos ={};
                for(const [key, value] of Object.entries(obj)){
                    let mini = {[key]: value};
                    if(value !== ''){                        
                        datos = {...datos, ...mini}
                    }
                };
                const user = await prisma.user.update({
                    where: { id: String(id) },
                    data: {...datos}
                })

                user ?
                    res.status(200).json(user)
                    :
                    res.status(400).json({ message: "the user does not exist." })

            } catch (error) {
                console.log(error)
                res.status(400).json({ message: "Error" })
            }
            break;

        // DELETE THE USER BY ID -> LOGIC DELETE

        case "DELETE":
            try {
                const user = await prisma.user.update({
                    where: { id: String(id) },
                    data: {
                        active: false,
                    }
                })
                user ?
                    res.status(200).json({ message: "user logic delete" })
                    :
                    res.status(400).json({ message: "the user does not exist in the database." })

            } catch (error) {
                console.log(error)
                res.status(400).json({ message: "Error" })
            }
            break;
        default:
            return res.status(400).json({ message: 'invalid method' })
    }
};


