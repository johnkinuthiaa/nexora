"use server"
import {Blog} from "@/types/types";

async function fetchBlogs():Promise<Blog[]|string>{

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
               return data.message
            }else{
               return data.contents
            }
        }
    }catch (error){
        return `:${error?.toString()}`
    }
    return "error fetching data"
}
export default fetchBlogs