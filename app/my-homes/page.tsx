import prisma from "@/app/lib/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import {NoItems} from "@/app/components/NoItems";
import {ListingCard} from "@/app/components/ListingCard";


async function getData(userId: string) {

    const data = await prisma.home.findMany({
        where:{
            userId: userId,
            addedcategory: true,
            addedLocation: true,
            addedDescription: true
        },
        select:{
            photo: true,
            id: true,
            price: true,
            description: true,
            country: true,
            Favorite: {
                where: {
                    userId: userId
                }
            }
        },
        orderBy:{
            createdAt: 'desc',
        }
    })
    return data
}

export default async function MyHomes() {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user) return redirect('/')
    const data = await getData(user.id)


    return (
        <section className="container mx-auto px-5 lg:px-10 mt-10">
            <h2 className="text-3xl font-semibold tracking-tight">Your Homes</h2>
            {data.length === 0 ? (
                <NoItems description="Please add homes on airebnb to see them here" title="Sorry you have no homes..."/>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                    {data.map((item) => (
                        <ListingCard key={item.id}
                             imagePath={item.photo as string}
                             description={item.description as string}
                             location={item.country as string}
                             price={item.price as number}
                             userId={user.id}
                             isInFavoriteList={item.Favorite.length > 0 ? true : false}
                             favoriteId={item.Favorite[0]?.id}
                             homeId={item.id}
                             pathName='/my-homes'/>
                    ))}
                </div>
            )}
        </section>
    )
}