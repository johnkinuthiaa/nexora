"use client"

import { useState } from "react"

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
            const response =await fetch(`http://localhost:8080/api/v1/content/create/blog/4?category=science`,{
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
            const response =await fetch(`http://localhost:8080/api/v1/content/create/without-image/4?category=science`,{
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
        <main className={"flex flex-col w-[80%] m-auto justify-between content-center items-center "}>
            <h2>Create new blog</h2>
            <form
                className={"w-[60%] flex flex-col gap-5"}
                onSubmit={function (e){
                    e.preventDefault()
                    submitForm()
                }}
            >
                <label >Title</label>
                <input type={"text"} placeholder={"Enter the title..."} onChange={(e)=>setTitle(e.target.value)}/>
                <label >Image file</label>
                <input type={"file"} placeholder={"Enter the title..."} onChange={(e)=> {
                    if(e.target.files !=null) {
                        setFile(e.target.files[0])
                    }else{
                        setFile(null)
                    }
                }}/>
                <label >Category</label>
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option>science</option>
                </select>
                <label >Content</label>
                <textarea
                    className={"h-52"}
                    placeholder={"Enter the contents for the blog"}
                    onChange={(e)=>setBody(e.target.value)}
                >

                </textarea>
                <button
                    type={"submit"}
                    className={"rounded-full p-2 font-medium text-xl bg-blue-500 w-fit cursor-pointer text-center"}>Create</button>
            </form>
        </main>
    )
}