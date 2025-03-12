"use client"
import {usePathname} from "next/navigation";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Header(){
    const pathname=usePathname()
    return(
        <header>
            <nav className={"flex items-center justify-between p-8 [&>ul>li]:cursor-pointer"}>
                <ul className={"[&>*]:list-none flex items-center gap-4 text-xl "}>
                    <li className={pathname==="/"?"text-blue-500 flex items-center ":""}><Link href={"/"}>Home</Link></li>
                    <li className={pathname==="/pages/blog"?"text-blue-500 flex items-center ":""}><Link href={"/pages/blog"}>Blogs</Link></li>
                    <li className={pathname==="/pages/about"?"text-blue-500 flex items-center ":""}><Link href={"/pages/about"}>About</Link></li>
                    <li className={pathname==="/pages/contact"?"text-blue-500 flex items-center ":""}><Link href={"/pages/contact"}>Contact</Link></li>
                </ul>
                <ul className={"flex gap-8 [&>li>button]:outline-0 [&>li>button]:p-2 "}>
                    <li><button className={"text-blue-500 bg-blue-200 rounded-2xl"}>Sign In</button></li>
                    <li><button className={"bg-blue-500 text-white rounded-2xl"}>Register</button></li>
                    <li></li>
                </ul>

            </nav>
        </header>
    )
}