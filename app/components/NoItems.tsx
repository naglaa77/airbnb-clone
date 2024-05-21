
import { File } from 'lucide-react';
export function NoItems() {
    return(
        <div className="flex items-center justify-center flex-col min-h-[400px] rounded-md border border-dashed text-center animate-in fade-in-50 mt-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <File className="w-10 h-10 text-primary"/>
            </div>
            <h2 className="mt-6 text-xl font-semibold">Sorry no listings found for this category... </h2>
            <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">Please check a other category or creating your own listing!</p>
        </div>
    )
}