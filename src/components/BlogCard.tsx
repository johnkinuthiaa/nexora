import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { BlogCardProps} from "@/types/types";
import {useRouter} from "next/navigation";

const BlogCard =({id,body,status,publishedOn}:BlogCardProps)=>{
    const router =useRouter()

    return(
        <Card
            id={id.toString()}
            onClick={()=>router.push(`/pages/blog/${id}`)}
            className={"w-full lg:w-[30.333%] justify-between cursor-pointer flex min-h-56 hover:shadow-xl"}
        >
            <CardContent>
                <p dangerouslySetInnerHTML={{__html: body.substring(0, 250) + "..."}}/>
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

