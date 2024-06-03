import {Code, Linkedin, Mail} from "lucide-react";


export function Footer() {
    return(
        <footer className="border border-t-1 mt-7">
            <div className="container mx-auto px-5 lg:px-10 py-5 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  justify-between items-center">
                    <div className="flex md:gap-x-1 items-center text-base">
                        <p className="text-gray-500">© 2024 Pyrocode.</p>
                        <p className="text-gray-500">Airebnb clone by <a href="https://new-pyrocode.vercel.app"><span className="text-primary font-medium italic">Naglaa Fouz</span></a></p>
                    </div>
                    <div className="flex flex-col  md:flex-row md:justify-self-end gap-3 md:space-y-0">
                        <div className="flex md:flex-row items-center gap-x-1">
                            <Mail className="w-4 h-4 text-primary/70"/>
                            <a href="mailto:naglaafouz4@gmail.com" className="inline-block font-medium text-sm" target="_blank" rel="noopener noreferrer">naglaafouz4@gmail.com</a>
                        </div>
                        <div className="flex md:flex-row items-center gap-x-1">
                            <Linkedin className="w-4 h-4 text-primary/70"/>
                            <a href="https://www.linkedin.com/in/naglaa-fouz-7b42a214a/" className="inline-block font-medium text-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className="flex md:flex-row items-center gap-x-1">
                            <Code className="w-4 h-4 text-primary/70"/>
                            <a href="https://github.com/naglaa77/airbnb-clone"
                               className="inline-block font-medium text-sm text-nowrap"
                               target="_blank"
                               rel="noopener noreferrer">Source Code</a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}