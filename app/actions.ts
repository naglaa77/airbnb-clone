'use server'

import prisma from "@/app/lib/db";
import {redirect} from "next/navigation";
import {supabase} from "@/app/lib/supabase";
import exp from "node:constants";

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
    } else if(data.addedDescription && data.addedcategory && !data.addedLocation)
    {
        return redirect(`/create/${data.id}/address`)
    }else if(data.addedDescription && data.addedcategory && data.addedLocation){

        const data = await prisma.home.create({
            data: {
                userId: userId
            }
        })
        return redirect(`/create/${data.id}/structure`)
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

export async function createDescription(formData:FormData) {
    const description = formData.get('description') as string
    const title = formData.get('title') as string
    const price = formData.get('price')
    const imageFile = formData.get('image') as File
    const homeId = formData.get('homeId') as string
    const guestNumber = formData.get('guest') as string
    const roomNumber = formData.get('room') as string
    const bathroomNumber = formData.get('bathroom') as string
    const {data:imageData} =await supabase.storage.from('images').upload(`${imageFile.name}`, imageFile,{
        cacheControl: '2592000', // cash control for one year
         contentType: imageFile.type
    })

    const data = await prisma.home.update({
        where:{
            id:homeId
        },
        data:{
            title:title,
            description:description,
            price:Number(price),
           bedrooms:roomNumber,
            bathrooms:bathroomNumber,
            guests:guestNumber,
            photo:imageData?.path,
            addedDescription:true
        }
    })
return redirect(`/create/${homeId}/address`)

}

export async function createLocation(formData:FormData) {
    const countryValue = formData.get('countryValue') as string
    const homeId = formData.get('homeId') as string
    const data = await prisma.home.update({
        where:{
            id:homeId
        },
        data:{
            country:countryValue,
            addedLocation:true
        }
    })
    return redirect("/")
}

