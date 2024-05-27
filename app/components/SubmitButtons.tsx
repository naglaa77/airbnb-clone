'use client'

import { useFormStatus } from "react-dom";
import {Button} from "@/components/ui/button";
import {Heart, Loader2} from "lucide-react";

export function CreationSubmit() {
   const {pending} = useFormStatus()

    return (
        <>
            {pending ? (
                <Button disabled size="lg">
                    <Loader2 className="mr-2 w-4 h-4 animate-spin"/>
                    Please Wait
                </Button>
            ) : (
                <Button type="submit" size="lg">Next</Button>
            )}
        </>
    );
}

export function AddToFavoriteButton() {
    const {pending} = useFormStatus()

    return (
        <>
            {pending ? (
                <Button variant="outline" size="icon" className="bg-primary-foreground" disabled aria-label="loading">
                    <Loader2 className="w-4 h-4 animate-spin text-primary"/>
                </Button>
            ) : (
                <Button variant="outline" size="icon" className="bg-primary-foreground" type="submit" aria-label="add to favorite">
                    <Heart className="w-4 h-4"/>
                </Button>
            )}
        </>
    );
}

export function DeleteFromFavoriteButton() {
    const {pending} = useFormStatus()

    return (
        <>
            {pending ? (
                <Button variant="outline" size="icon" className="bg-primary-foreground" disabled aria-label="add to favorite" >
                    <Loader2 className="w-4 h-4 animate-spin text-primary"/>
                </Button>
            ) : (
                <Button variant="outline" size="icon" className="bg-primary-foreground" type="submit" disabled aria-label="Loading">
                    <Heart className="w-4 h-4 text-primary" fill="#E21C49"/>
                </Button>
            )}
        </>
    );
}

export function ReservationSubmitButton() {
    const {pending} = useFormStatus()

    return (
        <>
            {pending ? (
                <Button disabled className="w-full">
                    <Loader2 className="mr-2 w-4 h-4 animate-spin"/> Please Wait...
                    Please Wait
                </Button>
            ) : (
                <Button type="submit" className="w-full">
                    Make a reservation
                </Button>
            )}
        </>
    );
}