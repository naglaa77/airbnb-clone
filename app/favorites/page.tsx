import prisma from "@/app/lib/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import {NoItems} from "@/app/components/NoItems";
import {ListingCard} from "@/app/components/ListingCard";


async function getData(userId: string | undefined) {
    const data = await prisma.favorite.findMany({
        where:{
            userId: userId
        },
        select:{
            Home:{
                select:{
                    photo: true,
                    id: true,
                    Favorite: true,
                    price: true,
                    description: true,
                    country: true,
                }
            }
        }
    })
    return data
}

export default async function FavoriteRoute() {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user) return redirect('/')

    const data = await getData(user.id)

    return (
        <section className="container mx-auto px-5 lg:px-10 mt-10">
            <h2 className="text-3xl font-semibold tracking-tight">Your Fovrites</h2>
            {data.length === 0 ? (
                <NoItems description="Please add favorites to see them here" title="Sorry you have no favorites..."/>
            ) :(
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                    {data.map((item) => (
                        <ListingCard key={item.Home?.id} imagePath={item.Home?.photo as string} favoriteId={item.Home?.Favorite[0].id as string} userId={user.id} price={item.Home?.price as number} description={item.Home?.description as string} location={item.Home?.country as string}  isInFavoriteList={item.Home?.Favorite.length as number> 0 ? true :false} homeId={item.Home?.id as string} pathName="/favorites"/>
                    ))}
                </div>
            )}
        </section>
    );
}