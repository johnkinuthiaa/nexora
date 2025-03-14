"use client"
import {useEffect, useState} from "react";
import Link from "next/link";

import {useRouter} from "next/navigation";

type Category ={
    id:number,
    name:string,
    description:string,
    contentInCategory:[]
}
type Blogs ={
    id:number,
    title:string,
    body:string,
    slug:string,
    publishedOn:string,
    status:string,
    category:Category,
    imagesInContent:object[]
    author:object
}
export default function Blogs(){
    const[categories,setCategories]=useState<Category[]>([])
    const[blogs,setBlogs]=useState<Blogs[]>([])
    const[message,setMessage]=useState<string>("")
    const router =useRouter()
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
        <div className={"flex flex-col w-[90%] items-center content-center justify-center h-full "}>
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
            <div className={"flex flex-wrap w-[90%] ml-15 justify-center items-center m-[0 auto]  gap-4 "}>
                {blogs.length>0?(
                    blogs.map((blog,index)=>(
                        <div
                            key={index}
                            id={blog.id.toString()}
                            className={"mt-6 flex flex-col w-[32%] min-h-72  hover:shadow-blue-400 shadow-blue-600 shadow rounded-2xl p-4 cursor-pointer"
                        } onClick={()=>{
                            router.push(`/pages/blog/${blog.id}`)
                        }}>
                            <div className={"text-xl font-bold mb-10"}>{blog.title} </div>
                            <div className={"leading-7 text-xl flex flex-wrap "}>{blog.body.substring(0,200)}....
                                <Link href={`/pages/blog/${blog.id}`} className={"underline cursor-pointer mt-2 mb-2"}>
                                    <mark className={"bg-blue-400 p-1 mt-2 "}>Read more</mark>
                                </Link>
                            </div>
                            <div className={"leading-5 flex gap-4 "}>
                                <p>Status:{blog.status}</p>
                                <p>Published on: {blog.publishedOn}</p>
                            </div>
                        </div>
                    ))
                ):(
                    <p className={"text-red-500 mt-4 text-xl"}>{message}</p>
                )}
            </div>

        </div>
    )
}