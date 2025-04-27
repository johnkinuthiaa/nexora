"use server"
const createBlog =async (content:string):Promise<string> =>{
    try{
        const response =await fetch("http://localhost:8080/api/v1/content/create/4?category=science",{
            method:"POST",
            body:JSON.stringify({
                body: content,
                status:"COMPLETED"
            }),
            headers:{
                "Content-Type":"application/stream+json"
            }
        })
        if(response.ok){
            const data =await response.json()
            return data.message
        }
        return 'error creating the blog'

    }catch (e){
        return `:${e}`
    }

}
export default createBlog