import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BlogCardProps} from "@/types/types";
import {useRouter} from "next/navigation";

const BlogCard =({id,body,status,publishedOn,title}:BlogCardProps)=>{
    const router =useRouter()

    return(
        <Card
            id={id.toString()}
            onClick={()=>router.push(`/pages/blog/${id}`)}
            className={"w-full lg:w-[30.333%] justify-between cursor-pointer flex min-h-30 hover:shadow-xl"}
        >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{body.substring(0,150)+"..."}</p>
            </CardContent>
            <CardFooter className={"flex justify-between"}>
                <p>Status: {status}</p>
                <p>Published on: {
                    publishedOn.split("-").
                    join("/")
                        .split("T")
                        .join(" " )}
                </p>
            </CardFooter>
        </Card>


    )
}
export default BlogCard

