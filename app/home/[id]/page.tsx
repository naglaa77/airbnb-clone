import prisma from "@/app/lib/db";
import Image from "next/image";
import {useCountries} from "@/app/lib/getCountries";
import {Separator} from "@/components/ui/separator";

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
    return (
        <div className="w-[75%] mx-auto mt-10">
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
                </div>
            </div>
        </div>
    )
}