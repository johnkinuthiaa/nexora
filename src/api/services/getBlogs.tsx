"use server"
export async function fetchBlogs(){
    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    const response =await fetch("http://localhost:8080/api/v1/content/all-blogs",{
        method:"GET",
        headers:myHeaders,
        cache:"reload"
    })
    if(response.ok){
        const data =await response.json()
        if(data.statusCode!=200){
            return data.message
        }else{
            return data.contents
        }
    }
}
