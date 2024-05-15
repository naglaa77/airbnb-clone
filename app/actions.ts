'use server'

import prisma from "@/app/lib/db";
import {redirect} from "next/navigation";

export async function createAirebnbHome({userId} :{userId: string}) {
    const data = await prisma.home.findFirst({
        where: {
            userId: userId
        },
        orderBy:{
            createdAt: 'desc',
        }
    })

    if(data === null) {
        const data = await prisma.home.create({
            data: {
                userId: userId
            }
        })
        return redirect(`/create/${data.id}/structure`)

    } else if(!data.addedcategory && !data.addedLocation && !data.addedDescription ) {
        return redirect(`/create/${data.id}/structure`)

    }else if (data.addedcategory && !data.addedDescription ) {
        return redirect(`/create/${data.id}/description`)
    }

}