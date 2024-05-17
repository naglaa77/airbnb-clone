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


export default function AddressRoute ({params}:{params:{id:string}}) {
    const {getAllCountries,getCountryByValue} = useCountries()

    return(
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                    Where is your home located?
                </h2>
            </div>
            <form>
                <div className="w-3/5 mx-auto">
                    <div className="mb-5">
                        <Select required>
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
                </div>
            </form>
        </>
    )
}