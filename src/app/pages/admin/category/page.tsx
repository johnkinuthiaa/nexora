"use client"
import {useState} from "react";

export default function CategoryCreator(){
    const CATEGORY_URL="http://localhost:8080/api/v1/categories/create"
    const[name,setName]=useState<string>("")
    const[description,setDescription]=useState<string>("")
    const[message,setMessage]=useState<string>("")
    const myHeaders =new Headers
    const createCategory =(async ()=>{
        if(name ==="" || description=== ""){
            setMessage("Name must not be null")
            return
        }
        try {
            myHeaders.append("Content-Type","application/json")
            const response =await fetch(CATEGORY_URL,{
                method:"POST",
                body:JSON.stringify({
                    name: name,
                    description: description
                }),
                headers:myHeaders
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode !=200){
                    setMessage(data.message)
                }else{
                    setMessage(data.message)
                }
            }
        }catch (e) {
            setMessage("Error :>"+e)
        }
    })
    return(
        <main className={"flex flex-col w-[80%] m-auto justify-between content-center items-center"}>
            <div className={"text-xl font-bold"}>Create <span className={"text-yellow-500"}>category</span></div>
            <p>{message}</p>
            <form
                className={"w-[60%] flex flex-col gap-5 [&>label]:text-xl [&>label]:font-bold"}
                onSubmit={(e)=>{
                    e.preventDefault()
                    createCategory()
                    setName("")
                    setDescription("")
                    setMessage("")
                }}
            >
                <label>Name:</label>
                <input type={"text"} placeholder={"Enter the category name..."} onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <label>Description:</label>
                <textarea
                    className={"resize-none h-60 outline-none border rounded-xl p-2"}
                    placeholder={"Enter the category description..."}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                >
                </textarea>
                <button
                    type={"submit"}
                    className={"outline-none active:outline-none rounded-2xl p-2 font-medium text-xl hover:bg-blue-400 bg-blue-500 w-fit cursor-pointer "}>
                    Create
                </button>

            </form>
        </main>
    )
}