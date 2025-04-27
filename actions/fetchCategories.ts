"use server"
export default async function fetchCategories(){
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
                return data?.message
            }else{
                return data.categoryList
            }
        }

    }catch (error){
        return ":>"+error
    }

}
