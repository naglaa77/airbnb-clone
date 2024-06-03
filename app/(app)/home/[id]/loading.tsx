import {SkeletonCard} from "@/app/components/SkeletonCard";
import {Skeleton} from "@/components/ui/skeleton";


export default function HomepageLoading() {
    return(
        <div className="w-[75%] mx-auto mt-10">
            <Skeleton className="h-4 w-1/3"/>
            <Skeleton className="h-[550px] w-full mt-5"/>

            <div className="mt-8 flex justify-between gap-x-4">
                <div className="w-2/3">
                    <Skeleton className="h-4 w-1/3"/>
                    <Skeleton className="h-4 w-1/3 mt-3"/>
                </div>
                <div className="1/3">
                    <Skeleton className="h-72 w-full"/>
                </div>
            </div>
        </div>
    )

}