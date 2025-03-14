"use client"
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
export default function AdminLayout({children}:Readonly<{children:React.ReactNode}>){
    const pathname =usePathname()
    return(
        <div>
            <aside className={"ml-10 mt-8 absolute"}>
                <nav>
                    <ul className={"flex flex-col [&>*]:cursor-pointer gap-4 [&>*]:font-medium [&>*]:text-[19px] [&>*]:hover:opacity-100 [&>*]:opacity-80"}>
                        <li className={pathname==="/pages/admin/category"?"text-blue-500":""}><Link href={"/pages/admin/category"}>Create new category</Link></li>
                        <li className={pathname==="/pages/admin"?"text-blue-500":""}><Link href={"/pages/admin"}>Create new Blog</Link></li>
                    </ul>
                </nav>
            </aside>
            {children}
        </div>
    )
}