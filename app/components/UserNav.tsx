
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {MenuIcon} from "lucide-react";
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export async function UserNav() {
    const {getUser} = getKindeServerSession()
    const user = await getUser();

    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3 cursor-pointer">
                   <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5"/>
                    <img src={user?.picture ?? "./placeholder.jpg"} alt="user image" className="w-8 h-8 rounded-full hidden lg:block"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                {user ?(
                    <DropdownMenuItem><LogoutLink className="w-full">Log out</LogoutLink></DropdownMenuItem>
                ) : (
                    <>
                        <DropdownMenuItem><RegisterLink className="w-full">Register</RegisterLink></DropdownMenuItem>
                        <DropdownMenuItem><LoginLink className="w-full">Login</LoginLink></DropdownMenuItem>
                    </>
                )}

            </DropdownMenuContent>
        </DropdownMenu>

    )
}

