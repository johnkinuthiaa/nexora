"use client"

import { useState } from "react"
import Link from "next/link";

export default function AdminPostingPage(){
    const formData =new FormData()
    const[file,setFile]=useState<Blob|null>(null)
    const[title,setTitle]=useState<string|undefined>("")
    const[blog,setBody]=useState<string|undefined>("")
    const[category,setCategory]=useState<string|undefined>("")
    const myHeaders =new Headers()

    const submitForm =(async ()=>{
        if(typeof (file) !=="undefined" && file !==null){
            formData.append("image",file)
            formData.append("content",new Blob([JSON.stringify({
                "title":title,
                "body":blog,
                "status":"published"
            })], { type: 'application/json' }))
            const response =await fetch(`http://localhost:8080/api/v1/content/create/blog/4?category=${category}`,{
                method:"POST",
                body:formData,
            })
            if(response.ok){
                try{
                    const data =await response.json()
                    console.log(data)
                }catch (e) {
                    console.log("Error"+e)
                }
            }
        }
        if(file ===null){
            myHeaders.append("Content-Type","application/json")
            const response =await fetch(`http://localhost:8080/api/v1/content/create/without-image/4?category=${category}`,{
                method:"POST",
                body:JSON.stringify({
                    "title":title,
                    "body":blog,
                    "status":"published"
                }),
                headers:myHeaders
            })
            if(response.ok){
                try{
                    const data =await response.json()
                    console.log(data)
                }catch (e) {
                    console.log("Error"+e)
                }
            }
        }

    })

    return(
        <div className={"flex mt-4"}>
            <main className={"flex flex-col w-[80%] m-auto justify-between content-center items-center "}>
                <div className={"font-bold text-xl"}>Create <span className={"text-yellow-500"}>new blog</span></div>
                <form
                    className={"w-[60%] flex flex-col gap-5 [&>label]:text-xl [&>label]:font-bold"}
                    onSubmit={function (e){
                        e.preventDefault()
                        submitForm()
                    }}
                >
                    <label className={"text-xl font-bold "}>Title</label>
                    <input type={"text"} placeholder={"Enter the title..."} onChange={(e)=>setTitle(e.target.value)}/>
                    <label >Image file</label>
                    <input
                        type={"file"}
                        placeholder={"Enter the title..."}
                        className={"border p-2 w-fit cursor-pointer rounded-xl outline-none bg-[whitesmoke] text-black"}
                        onChange={(e)=> {
                        if(e.target.files !=null) {
                            setFile(e.target.files[0])
                        }else{
                            setFile(null)
                        }
                    }}/>
                    <label >Category</label>
                    <select
                        onChange={(e)=>{
                            e.preventDefault()
                            console.log(e.target.value)
                            setCategory(e.target.value)}
                        }
                        className={"w-fit pt-2"}
                    >
                        <option>science</option>
                        <option>technology</option>
                        <option>Hibernate</option>
                        <option>Rust</option>
                    </select>
                    <label >Edit blog Content</label>
                    <textarea
                        className={"h-74 p-2 rounded-2xl border resize-none overflow-scroll"}
                        placeholder={"Enter the contents for the blog"}
                        onChange={(e)=>setBody(e.target.value)}
                    >

                </textarea>
                    <button
                        type={"submit"}
                        className={"outline-none active:outline-none rounded-2xl p-2 font-medium text-xl hover:bg-blue-400 bg-blue-500 w-fit cursor-pointer"}>
                        Create
                    </button>
                </form>
            </main>
        </div>

    )
}