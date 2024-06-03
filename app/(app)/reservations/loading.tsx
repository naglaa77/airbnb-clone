import {SkeletonCard} from "@/app/components/SkeletonCard";

export default function ReservationLoading() {
    return (
        <section className="container mx-auto px-5 lg:px-10 mt-10">
            <h2 className="text-3xl font-semibold tracking-tight">Your Reservations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
            </div>

        </section>
)
}