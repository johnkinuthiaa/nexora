"use client"
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
export default function AdminLayout({children}:Readonly<{children:React.ReactNode}>){
    const pathname =usePathname()
    return(
        <div className={"flex flex-1/12 space-x-10 mt-10"}>
            <aside className={" gap-5 border-r-gray-600 hidden lg:block md:block "}>
                <nav >
                    <ul className={"flex flex-col [&>*]:cursor-pointer gap-4 [&>*]:font-medium [&>*]:text-[19px] [&>*]:hover:opacity-100 [&>*]:opacity-80"}>
                        <Button className={pathname==="/pages/admin/category"?"bg-blue-500":""}><Link href={"/pages/admin/category"}>Create new category</Link></Button>
                        <Button className={pathname==="/pages/admin"?"bg-blue-500":""}><Link href={"/pages/admin"}>Create new Blog</Link></Button>
                    </ul>
                </nav>
            </aside>
            {children}
        </div>
    )
}