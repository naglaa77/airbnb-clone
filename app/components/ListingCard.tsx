import Image from "next/image";
import Link from "next/link";
import {useCountries} from "@/app/lib/getCountries";
import {AddToFavoriteButton, DeleteFromFavoriteButton} from "@/app/components/SubmitButtons";
import {homedir} from "node:os";
import {addToFavorite, deleteFromFavorite} from "@/app/actions";

interface IAppProps {
   imagePath: string;
   description: string;
   location: string;
   price: number;
   userId: string | undefined;
   isInFavoriteList: boolean;
   favoriteId: string;
    homeId: string;
    pathName: string;
}

export function ListingCard({
    imagePath,
    description,
    location,
    price,
    userId ,
    isInFavoriteList,
    favoriteId,
    homeId,
    pathName
}:IAppProps) {
    const {getCountryByValue} = useCountries()
    const country = getCountryByValue(location)
    return(
        <div className='flex flex-col'>
            <div className="relative h-72">
                <Image src={`https://xqooydltswhpbypguomo.supabase.co/storage/v1/object/public/images/${imagePath}`}
                       alt="image of house" fill className="rounded-lg h-full object-cover"
                />
                {userId && (
                    <div className="absolute top-2 right-2 z-10">
                        {isInFavoriteList ? (
                            <form action={deleteFromFavorite}>
                                <input name="favoriteId"
                                       type="hidden"
                                       value={favoriteId}/>
                                <input name="userId"
                                       type="hidden"
                                       value={userId}/>
                                <input type="hidden"
                                       name="pathName"
                                       value={pathName}/>
                                <DeleteFromFavoriteButton/>
                            </form>
                        ) : (
                            <form action={addToFavorite}>
                                <input name="homeId"
                                       type="hidden"
                                       value={homeId}/>
                                <input name="userId"
                                       type="hidden"
                                       value={userId}/>
                                <input type="hidden" name="pathName" value={pathName}/>
                                <AddToFavoriteButton/>
                            </form>
                        )}
                    </div>
                )}
            </div>
            <Link href={`/home/${homeId}`} className="mt-2">
                <h3 className="font-medium text-base">
                    {country?.flag} {country?.label} / {country?.region}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
                <p className="text-muted-foreground pt-2"><span className="font-medium text-black">${price}</span> Night</p>
            </Link>
        </div>
    )
}