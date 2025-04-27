import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import { Separator } from "@/components/ui/separator"


const Sidebar =()=>{
    const pathname =usePathname()
    return(
        <Sheet defaultOpen={false} >
            <SheetTrigger asChild={true}><Button variant="outline"><Menu/></Button></SheetTrigger>
            <SheetContent className={"w-[270px] p-2"}>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>

                </SheetHeader>
                <div className={"flex flex-col gap-2 w-[95%] py-5 [&>*>*]:font-bold "}>
                    <div className={"flex flex-col gap-5"}>
                        <Button variant={"outline"} className={pathname==="/"?"bg-blue-500 flex text-white items-center ":""}>
                            <Link href={"/pages/landingPage"}>Home</Link>
                        </Button>
                        <Button variant={"outline"} className={pathname==="/pages/blog"?"bg-blue-500 text-white flex items-center ":""}>
                            <Link href={"/pages/blog"}>Blogs</Link>
                        </Button>
                        <Button variant={"outline"} className={pathname==="/pages/about"?"bg-blue-500 text-white flex items-center ":""}>
                            <Link href={"/pages/about"}>About author</Link>
                        </Button>
                        <Button variant={"outline"} className={pathname==="/pages/contact"?"bg-blue-500 text-white flex items-center ":""}>
                            <Link href={"/pages/contact"}>Contact</Link>
                        </Button>
                        <Separator className={"w-full m-2"}/>
                        <div className={"font-bold"}>Create blog</div>
                        <Button  variant={"outline"} className={pathname==="/pages/admin/category"?"bg-blue-500":""}><Link href={"/pages/admin/category"}>Create new category</Link></Button>
                        <Button variant={"outline"}  className={pathname==="/pages/admin"?"bg-blue-500":""}><Link href={"/pages/admin"}>Create new Blog</Link></Button>
                    </div>
                    <Separator className={"w-full m-2"}/>
                    <div className={"mt-15 flex gap-3 w-full"}>
                        <Button className={"text-blue-500 bg-blue-200 flex flex-1/2"} >Login</Button>
                        <Button className={"bg-blue-500 flex flex-1/2"}>Signup</Button>
                    </div>

                </div>
            </SheetContent>
        </Sheet>

    )
}
export default Sidebar