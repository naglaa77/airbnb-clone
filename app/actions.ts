'use server'

import prisma from "@/app/lib/db";
import {redirect} from "next/navigation";

export async function createAirbnbHome({userId} :{userId: string}) {
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

export async function createCategoryPage(formData:FormData) {

    const categoryName = formData.get('categoryName') as string
    const homeId = formData.get('homeId') as string

    const data = await prisma.home.update({
        where: {
            id: homeId
        },
        data: {
            categoryName: categoryName,
            addedcategory: true
        }

    })
    return redirect(`/create/${homeId}/description`)
}