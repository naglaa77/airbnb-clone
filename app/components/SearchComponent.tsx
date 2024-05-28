'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Search} from "lucide-react";
import {useState} from "react";
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
import {HomeMap} from "@/app/components/HomeMap";
import {Button} from "@/components/ui/button";
import {Card, CardHeader} from "@/components/ui/card";
import {Counter} from "@/app/components/Counter";
import {CreationSubmit} from "@/app/components/SubmitButtons";


export function SearchModalComponent() {

    const [step, setStep] = useState(1)
    const {getAllCountries,getCountryByValue} = useCountries()
    const [locationValue, setLocationValue] = useState("")

    function SubmitButtonLocal(){

        if(step === 1){
            return<Button onClick={() => setStep(step+1)} type="button">Next</Button>

        }else if(step === 2){
            return<CreationSubmit/>

        }
    }


    return(
        <Dialog>
          <DialogTrigger asChild>
              <div role="button" aria-label="Open dialog" className="rounded-full pr-4 md:pr-0 mr-4 md:mr-0 py-2 md:px-5 flex  border items-center cursor-pointer">
                  <div className="flex text-sm h-full divide-x font-medium">
                      <p className="px-4">Any Where</p>
                      <p className="px-4">Any Week</p>
                      <p className="px-4">Add Guests</p>
                  </div>
                  <Search className="bg-primary text-white px-1 h-8 w-8 rounded-full"/>
              </div>
          </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form className="flex flex-col gap-4">
                    <input type="hidden" name="country" value="locationValue"/>
                    {step === 1 ? (
                        <>
                            <DialogHeader>
                                <DialogTitle>Select a Country</DialogTitle>
                                <DialogDescription>
                                    Please Choose a country to start your search
                                </DialogDescription>
                            </DialogHeader>
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
                            <HomeMap locationValue={locationValue}/>
                        </>
                    ) : (
                        <>
                            <DialogHeader>
                                <DialogTitle>Select the info you want</DialogTitle>
                                <DialogDescription>
                                    Please add info to start your search
                                </DialogDescription>
                            </DialogHeader>
                            <Card>
                                <CardHeader className="flex flex-col gap-y-5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="underline font-medium">Guests</h3>
                                            <p className="text-muted-foreground text-sm">How many guests you can accept?</p>
                                        </div>
                                        <Counter name="guest"/>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="underline font-medium">Rooms</h3>
                                            <p className="text-muted-foreground text-sm">How many rooms do you have?</p>
                                        </div>
                                        <Counter name="room"/>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="underline font-medium">Bathrooms</h3>
                                            <p className="text-muted-foreground text-sm">How many bathrooms do you have?</p>
                                        </div>
                                        <Counter name="bathroom"/>
                                    </div>
                                </CardHeader>
                            </Card>
                        </>

                    )}
                    <DialogFooter>
                        <SubmitButtonLocal/>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
