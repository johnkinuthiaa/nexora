export type Category ={
    id:number,
    name:string,
    description:string,
    contentInCategory:[]
}
export type Blog ={
    id:number,
    title:string,
    body:string,
    slug:string,
    publishedOn:string,
    status:string,
    category:Category,
    imagesInContent:object[]
    author:object
}
export type BlogCardProps ={
    id:number,
    title:string,
    body:string,
    slug:string,
    publishedOn:string,
    status:string,
}