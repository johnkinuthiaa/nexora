"use client"
import {usePathname} from "next/navigation";

import Link from "next/link";
import { Button } from "./ui/button";
import Sidebar from "@/components/Sidebar";



export default function Header(){
    const pathname=usePathname()
    return(
        <header>
            <nav className={"flex items-center justify-between p-4 [&>ul>li]:cursor-pointer"}>
                <div className={"font-bold text-2xl"}>Nexora blogs</div>
                <ul className={"[&>*]:list-none lg:flex items-center gap-4 text-xl hidden md:flex "}>
                    <li className={pathname==="/pages/landingPage"?"text-blue-500 flex items-center ":""}><Link href={"/pages/landingPage"}>Home</Link></li>
                    <li className={pathname==="/pages/blog"?"text-blue-500 flex items-center ":""}><Link href={"/pages/blog"}>Blogs</Link></li>
                    <li className={pathname==="/pages/about"?"text-blue-500 flex items-center ":""}><Link href={"/pages/about"}>About author</Link></li>
                    <li className={pathname==="/pages/contact"?"text-blue-500 flex items-center ":""}><Link href={"/pages/contact"}>Contact</Link></li>
                </ul>

                <ul className={"md:flex lg:flex gap-2 [&>*]:cursor-pointer [&>li>button]:outline-0 [&>li>button]:p-2 hidden "}>
                    <Button className={"text-blue-500 bg-blue-200"} >Login</Button>
                    <Button className={"bg-blue-500"}>Signup</Button>

                    <li></li>
                </ul>
                <div className={"flex flex-col lg:hidden md:hidden"}>
                    <Sidebar/>
                </div>

            </nav>
        </header>
    )
}