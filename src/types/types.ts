export type Category ={
    id:number,
    name:string,
    description:string,
    contentInCategory:[]
}
export type Blog ={
    id:number,
    body:string,
    publishedOn:string,
    status:string,
    category:Category,
    author:object
}
export type BlogCardProps ={
    id:number,
    body:string,
    publishedOn:string,
    status:string,
}