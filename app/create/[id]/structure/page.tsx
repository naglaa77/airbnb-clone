import {SelectedCategory} from "@/app/components/SelectedCtaegory";
import {createCategoryPage} from "@/app/actions";
import {CreationButtonBar} from "@/app/components/CreationButtonBar";


export default function StructureRoute({params}: {params: {id: string}}) {


    return (
        <>
            <div className="w-full md:w-3/5 px-4 md:px-0 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                    Which of these best describes your Home?
                </h2>
            </div>
            <form action={createCategoryPage}>
                <input type="hidden" name="homeId" value={params.id}/>
                <SelectedCategory/>
                <CreationButtonBar/>
            </form>
        </>
    )
}