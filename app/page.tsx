import {MapFilterItems} from "@/app/components/MapFilterItems";
import prisma from "@/app/lib/db";
import {ListingCard} from "@/app/components/ListingCard";
import {it} from "node:test";
import {Suspense} from "react";
import {SkeletonCard} from "@/app/components/SkeletonCard";
import {NoItems} from "@/app/components/NoItems";

async function getData({searchParams}:{searchParams?: {filter?: string}}) {
    const data = await prisma.home.findMany({
        where:{
            addedcategory: true,
            addedDescription: true,
            addedLocation: true,
            categoryName:searchParams?.filter ?? undefined
        },
        select:{
            id: true,
            photo: true,
            description: true,
            price: true,
            country: true,
        }
    })
    return data
}


export default function Home({
    searchParams
}:{searchParams?: {filter?: string}}) {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilterItems/>
        <Suspense key={searchParams?.filter} fallback={<SkeletonLoading/>}>
            <ShowItems searchParams={searchParams}/>
        </Suspense>
    </div>
  );
}


async function ShowItems({
    searchParams
}:{searchParams?: {filter?: string}}) {
    const data = await getData({searchParams})
    return (
        <>
            {data.length === 0 ?(
                <NoItems/>
            ) : (
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                    {data.map((item) => (
                        <ListingCard key={item.id}
                                     description={item.description as string}
                                     imagePath={item.photo as string}
                                     location={item.country as string}
                                     price={item.price as number}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

function SkeletonLoading () {
    return(
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
        </div>
    )
}
