import prisma from "@/app/lib/db";
import Image from "next/image";
import {useCountries} from "@/app/lib/getCountries";
import {Separator} from "@/components/ui/separator";
import {CategoryShowcase} from "@/app/components/CategoryShowcase";
import {HomeMap} from "@/app/components/HomeMap";
import {SelectCalender} from "@/components/SelectCalender";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {createReservation} from "@/app/actions";
import {ReservationSubmitButton} from "@/app/components/SubmitButtons";
import {unstable_noStore as noStore} from "next/cache";



async function getData(homeId: string) {

    const data = await prisma.home.findUnique({
        where: {
            id: homeId
        },
        select: {
            photo: true,
            description: true,
            guests: true,
            bedrooms: true,
            bathrooms: true,
            title: true,
            country: true,
            categoryName: true,
            price: true,
            Reservation: {
                where: {
                    homeId: homeId,
                }
            },
            User: {
                select:{
                    profileImage: true,
                    firstName: true,
                }
            }
        },
    });
    return data
}

export default async function HomeRoute({params}:{params:{id:string}}) {
    const data = await getData(params.id)
    const {getCountryByValue} = useCountries()
    const country = getCountryByValue(data?.country as string)

   const{getUser}= getKindeServerSession()
    const user = await getUser()

    return (
        <div className="w-[75%] mx-auto mt-10 mb-12">
            <h1 className="text-2xl font-medium mb-5">{data?.title}</h1>
            <div className="relative h-[550px]">
                <Image
                    alt="image of house"
                    src={`https://xqooydltswhpbypguomo.supabase.co/storage/v1/object/public/images/${data?.photo}`}
                    fill
                    className="rounded-lg h-full object-cover w-full"
                />
            </div>
            <div className="flex justify-between gap-x-24 mt-8">
                <div className="w-2/3">
                    <h3 className="text-xl font-medium">{country?.flag} {country?.label} / {country?.region}</h3>
                    <div className="flex gap-x-2 text-muted-foreground">
                        <p>{data?.guests} Guests</p> * <p>{data?.bedrooms} Badrooms</p> * <p>{data?.bathrooms} Bathroom</p>
                    </div>
                    <div className="flex items-center mt-6">
                        <img src={data?.User?.profileImage ?? "./placeholder.jpg"} alt="user Profil" className="w-11 h-11 rounded-full"/>
                        <div className="flex flex-col ml-4">
                            <h3 className="font-medium">Hosted By {data?.User?.firstName}</h3>
                            <p className="text-sm text-muted-foreground">Host since 2013</p>
                        </div>
                    </div>
                       <Separator className="my-7"/>
                    <CategoryShowcase categoryName={data?.categoryName as string}   />
                    <Separator className="my-7"/>
                    <p className="text-muted-foreground">{data?.description}</p>
                    <Separator className="my-7"/>
                    <HomeMap locationValue={data?.country as string}/>
                </div>
                <form action={createReservation}>
                    <input type="hidden"
                           name="homeId"
                           value={params.id}
                    />
                    <input type="hidden"
                           name="userId"
                           value={user?.id}
                    />
                    <SelectCalender reservation={data?.Reservation}/>
                    {user?.id ? (
                       <ReservationSubmitButton/>
                    ) : (
                        <Button className="w-full" asChild>
                            <Link href="/api/auth/login">
                              Make a reservation
                            </Link>
                        </Button>
                    )}
                </form>
            </div>
        </div>
    )
}