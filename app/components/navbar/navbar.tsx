import {Container} from "@/app/components/container";
import Logo from "@/app/components/navbar/logo";
import Search from "@/app/components/navbar/search";

export function Navbar() {
    return(
        <div className="fixed bg-white w-full shadow-sm z-10">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3md:gap-0">
                        <Logo/>
                        <Search/>
                    </div>
                </Container>
            </div>
        </div>
    )
}