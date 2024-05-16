import exp from "node:constants";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardHeader} from "@/components/ui/card";
import {Counter} from "@/app/components/Counter";
import {CreationButtonBar} from "@/app/components/CreationButtonBar";

export default function DescriptionPage () {
    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                    Please describe your home as good as you can!
                </h2>
            </div>
            <form>
                <div className="w-3/5 mx-auto mt-10 flex flex-col gap-y-5 mb-36">
                    <div className="flex flex-col gap-y-2">
                        <Label>Title</Label>
                        <Input name="title"
                               type="text"
                               required
                               placeholder="Home title"/>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Description</Label>
                        <Textarea name="description"
                                  placeholder="Please describe your home"/>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Price</Label>
                        <Input name="price"
                               type="number"
                               required
                               placeholder="Price per night in USD"
                               min={10}/>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Image</Label>
                        <Input name="image"
                               type="file"
                               required
                               />
                    </div>
                    <Card>
                        <CardHeader className="flex flex-col gap-y-5">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h3 className="underline font-medium">Guests</h3>
                                    <p className="text-muted-foreground text-sm">How many guests you can accept?</p>
                                </div>
                                <Counter/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h3 className="underline font-medium">Rooms</h3>
                                    <p className="text-muted-foreground text-sm">How many rooms do you have?</p>
                                </div>
                                <Counter/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h3 className="underline font-medium">Bathrooms</h3>
                                    <p className="text-muted-foreground text-sm">How many bathrooms do you have?</p>
                                </div>
                                <Counter/>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
                <CreationButtonBar/>
            </form>
        </>
    );
}