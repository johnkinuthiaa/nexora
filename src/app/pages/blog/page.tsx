"use client"
import {Fragment, useEffect, useState} from "react";

import BlogCard from "@/components/BlogCard";
import {Blog, Category} from "@/types/types";
import fetchAllBlogs from "../../../../actions/fetchAllBlogs";
import fetchCategories from "../../../../actions/fetchCategories";


export default function Blogs(){
    const[categories,setCategories]=useState<Category[]>([])
    const[blogs,setBlogs]=useState<Blog[]>([])
    const[message,setMessage]=useState<string>("")

    useEffect(() => {
        fetchCategories().then((r)=>{
            if(typeof (r) !=="string"){
                setCategories(r)
            }else{
                setMessage(r)
            }
        })
        fetchAllBlogs().then((r)=>{
            if(typeof (r)!=="string"){
                setBlogs(r)
            }else{
                setMessage(r)
            }
        })
    }, []);

    return(
        <div className={"flex flex-col w-full p-4 items-center content-center justify-center h-full "}>
            <div className={"font-bold text-xl"}>All Blogs</div>
            <div className={"flex justify-start gap-5 mt-10 mb-10 "}>
                {categories?.length>0?(
                    categories?.map((category,index)=>(
                        <div key={index} className={"mt-6 hover:shadow-blue-400 shadow-blue-600 shadow rounded-2xl p-2 cursor-pointer"}>{category.name}</div>
                    ))
                ):(
                    <p className={"text-red-500 mt-4 text-xl"}>{message}</p>
                )}
            </div>
            <div className={"flex w-full gap-4 m-auto flex-wrap p-2"}>
                {blogs.length>0?(
                    blogs.map(({id,body,status,publishedOn},index)=>(
                        <Fragment key={index}>
                            <BlogCard
                                id={id}
                                body={body}
                                publishedOn={publishedOn}
                                status={status}/>
                        </Fragment>
                    ))
                ):(
                    <p className={"text-red-500 mt-4 text-xl"}>{message}</p>
                )}
            </div>

        </div>
    )
}