"use client"
import {use, useEffect, useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


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
    imagesInContent:{
        fileName:string,
        fileType:string,
        fileData:string,
        id:number
    }
    author:object
}
export default function ReadMore({ params }: { params: Promise<{ id: string }> }){

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
        imagesInContent: {
            fileName: "",
            fileType: "",
            fileData: "",
            id: 0
        },
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
    const createImage =()=>{
        const byteCharacters =atob(blog.imagesInContent.fileData)
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray]);
        return URL.createObjectURL(blob)
    }
    if(blog.imagesInContent!=null){
        createImage()
    }
    return(
        <main className={"w-[60%] flex flex-col m-[auto] justify-center items-center overflow-scroll scroll-smooth "}>
            <div className={"flex content-start justify-start mt-10"}>
                <p className={"gap-2 cursor-pointer "} onClick={()=>window.history.back()}><ArrowBackIosIcon/>Back</p>
            </div>
            {blog?(<div  className={"mt-6 flex flex-col hover:shadow-blue-400 shadow-blue-600 shadow-2xl rounded-2xl p-4 cursor-pointer"}>
                <div className={"text-3xl font-bold mb-10"}>{blog.title}</div>
                {blog.imagesInContent !==null&&
                    <img src={createImage()} alt={"blog image"} className={""}></img>
                }
                <div className={"leading-8 text-xl flex flex-wrap"}>{blog.body.replace("/[1-4]/g","\n")}</div>
                <div className={"leading-5 flex gap-4 w-full justify-between mt-10"}>
                    <p>Status:{blog.status}</p>
                    <p>Published on: {blog.publishedOn}</p>
                </div>
            </div>):(
                <p>{message}</p>
            )}

        </main>
    )
}