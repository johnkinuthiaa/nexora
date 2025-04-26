"use client"
import {Fragment, useEffect, useState} from "react";

import BlogCard from "@/components/BlogCard";
import {Blog, Category} from "@/types/types";


export default function Blogs(){
    const[categories,setCategories]=useState<Category[]>([])
    const[blogs,setBlogs]=useState<Blog[]>([])
    const[message,setMessage]=useState<string>("")

    useEffect(() => {
        fetchCategories()
        fetchBlogs()
    }, []);
    async function fetchCategories(){
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response =await fetch("http://localhost:8080/api/v1/categories/all",{
                method:"GET",
                headers:myHeaders,
                cache:"reload"
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode!=200){
                    setMessage(data.message)
                }else{
                    setCategories(data.categoryList)
                }
            }
             setMessage("response not okay")
        }catch (error){
            setMessage(":>"+error)
        }

    }
    async function fetchBlogs(){

        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{

            const response =await fetch("http://localhost:8080/api/v1/content/all-blogs",{
                method:"GET",
                headers:myHeaders,
                cache:"force-cache"
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode!=200){
                    setMessage(data.message)
                }else{
                    setBlogs(data.contents)
                }
            }
        }catch (error){
            setMessage(":>"+error)
        }
    }
    return(
        <div className={"flex flex-col w-full p-4 items-center content-center justify-center h-full "}>
            <div className={"font-bold text-xl"}>All Blogs</div>
            <div className={"flex justify-start gap-5 mt-10 mb-10 "}>
                {categories.length>0?(
                    categories.map((category,index)=>(
                        <div key={index} className={"mt-6 hover:shadow-blue-400 shadow-blue-600 shadow rounded-2xl p-2 cursor-pointer"}>{category.name}</div>
                    ))
                ):(
                    <p className={"text-red-500 mt-4 text-xl"}>{message}</p>
                )}
            </div>
            <div className={"flex w-full gap-4 m-auto flex-wrap p-2"}>
                {blogs.length>0?(
                    blogs.map(({id,body,status,publishedOn,slug,title},index)=>(
                        <Fragment key={index}>
                            <BlogCard
                                id={id}
                                title={title}
                                body={body}
                                slug={slug}
                                publishedOn={publishedOn}
                                status={status}
                            />
                        </Fragment>
                    ))
                ):(
                    <p className={"text-red-500 mt-4 text-xl"}>{message}</p>
                )}
            </div>

        </div>
    )
}