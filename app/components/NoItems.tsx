import {FileQuestion} from 'lucide-react';
interface IAppProps {
    title: string;
    description: string;
}

export function NoItems({title, description}:IAppProps) {
    return(
        <div className="flex items-center justify-center flex-col min-h-[400px] rounded-md border border-dashed text-center animate-in fade-in-50 mt-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <FileQuestion className="w-10 h-10 text-primary"/>
            </div>
            <h2 className="mt-6 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
    )
}