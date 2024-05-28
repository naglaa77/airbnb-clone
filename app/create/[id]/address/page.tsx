'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {useCountries} from "@/app/lib/getCountries";
import dynamic from "next/dynamic";
import {Skeleton} from "@/components/ui/skeleton";
import {CreationButtonBar} from "@/app/components/CreationButtonBar";
import {useState} from "react";
import {createLocation} from "@/app/actions";


export default function AddressRoute ({params}:{params:{id:string}}) {
    const {getAllCountries,getCountryByValue} = useCountries()
    const [locationValue, setLocationValue] = useState("")

    //we should import it inside the function to avoid server side rendering
    const LazyMap = dynamic(() => import('@/app/components/Map'),{
        ssr: false,
       loading:() =><Skeleton className="h-[50vh] w-full"/>
    })

    return(
        <>
            <div className="w-full md:w-3/5 px-4 md:px-0 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                    Where is your home located?
                </h2>
            </div>
            <form action={createLocation}>
                <input type="hidden" name="homeId" value={params.id}/>
                <input type="hidden" name="countryValue" value={locationValue}/>
                <div className="w-full md:w-3/5 px-4 md:px-0 mt-8 mx-auto mb-64">
                    <div className="mb-5">
                        <Select required onValueChange={(value) =>setLocationValue(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Country"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Countries</SelectLabel>
                                    {getAllCountries().map((item) => (
                                        <SelectItem key={item.value} value={item.value}>
                                            {item.flag} {item.label} / {item.region}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <LazyMap locationValue={locationValue}/>
                </div>
                <CreationButtonBar/>
            </form>
        </>
    )
}