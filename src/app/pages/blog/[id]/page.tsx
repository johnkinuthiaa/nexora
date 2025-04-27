"use client"
import {use, useEffect, useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ContentReader from "@/components/ContentReader";


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
    author:object
}
export default function Page({ params }: { params: Promise<{ id: string }> }){

    const { id } = use(params)

    useEffect(() => {
        fetchBlogById()
    }, []);
    const[blog,setBlog]=useState<Blogs>({
        author: {},
        body: "",
        category: {
            id: 0,
            name: "",
            description: "",
            contentInCategory: []
        },
        id: 0,
        publishedOn: "",
        slug: "",
        status: "",
        title: ""
    })
    const[message,setMessage]=useState<string>("")
    const fetchBlogById =(async ()=>{

        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application-json")
        const response =await fetch(`http://localhost:8080/api/v1/content/${id}/get`,{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode !==200){
                setMessage(data.message)

            }else{
                console.log(data)
                setBlog(data?.content)
            }
        }else{
            setMessage("Error fetching blog info")
        }
    })

    return(
        <main className={"h-full w-full p-4 flex flex-col " +
            "m-[auto] justify-center items-center scroll-smooth "}>
            <div className={"flex content-start justify-start mt-2 lg:mt-10 lg:mb-10"}>
                <p className={"gap-2 cursor-pointer "} onClick={()=>window.history.back()}><ArrowBackIosIcon/>Back</p>
            </div>
            {blog?(
                <div  className={"mt-6 flex flex-col shadow-blue-600 shadow-2xl rounded-2xl p-4 cursor-pointer"}>
                <div className={"text-3xl font-bold mb-10 text-center "}>{blog?.title}</div>
                <div className={"leading-8 flex flex-wrap w-full"}>
                    <ContentReader content={blog?.body} />
                </div>
                <div className={"leading-5 flex gap-2 w-full justify-between mt-10"}>
                    <p>Status:{blog?.status}</p>
                    <p>Published on: {blog?.publishedOn}</p>
                </div>
            </div>):(
                <p>{message}</p>
            )}

        </main>
    )
}