import {techStack,socials} from "@/utils/techStack";
import Image from "next/image";
import Link from "next/link";

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

export default function AboutUs(){

    return(
        <div className={"lg:w-[90%] md:w-[90%] w-full p-2  flex flex-col justify-center content-center items-center m-[10px auto] "}>
            <div className={" mt-5 items-center [&>*]:mt-2 justify-center flex flex-col lg:text-4xl md:text-2xl text-xl font-medium about__container"}>
                <div className={"flex space-4 items-center"}>
                    <h2 className={"text-center"}>Hi, I&#39;m</h2>
                    <Image
                        width={100}
                        height={100}
                        src={"https://i.pinimg.com/236x/ff/f5/15/fff515feeac0de5f8138941afd1cd6c9.jpg"}
                        alt={"profile"} className={"object-cover rounded-2xl ml-3 w-20 h-20 mr-3"}
                        priority={true}
                        fetchPriority={"high"}
                    />
                    <h2>, <mark className={"bg-yellow-500"}>John Kinuthiaa</mark><span className={"text-blue font-extrabold"}> !</span></h2>
                </div>
                <div className={"flex "}>
                    <h2><span className={"opacity-50 font-bold"}>I&#39;m a</span><span> Junior Software Developer </span><span className={"opacity-50 font-bold"}>at</span></h2>
                </div>
                <div className={"flex gap-3 justify-between"}>
                    <h2 className={"text-orange-400"}>Nevani Housing.</h2>
                    <div className={"flex rounded-full p-1 gap-2 border-2 w-fit items-center font-medium  m-3 open__to__work"}>
                        <div className={"bg-green-500 rounded-full p-2 h-4 w-4 flex items-center justify-center animate-pulse"}>
                        </div>
                        <p className={"font-medium "}>Open to work</p>
                    </div>
                </div>
            </div>
            <div className={"flex justify-start flex-col font-medium text-xl mt-3 font-serif "}>
                <p>Feel free to explore my works and reach out</p>
                <p>---I&#39;d love to connect</p>
            </div>
            <div className={"m-[0 auto] justify-center content-center w-full flex flex-wrap gap-4" +
                " [&>*]:rounded-2xl [&>*]:flex-col [&>*]:h-[500px] [&>*>div]:border [&>*>div]:w-fit [&>*>div]:m-2" +
                " [&>*>div]:font-bold [&>*>div]:p-1 [&>*>div]:rounded-2xl  [&>*]:w-80 [&>*]:border mt-10"}>
                <div className={"flex flex-col gap-2 "}>
                    <div className={"font-bold"}>My Experience</div>
                    <div className={"flex flex-col"}>
                        <p>Freelance Backend Developer</p>
                        <p>2023- Remote -Part Time</p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p>Freelance Backend</p>
                        <p>2023- Remote -Part Time</p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p>Freelance Backend Developer</p>
                        <p>2023- Remote -Part Time</p>
                    </div>
                </div>
                <div className={" p-3 h-full"}>
                    <div className={" bg-orange-500 text-white"}>My Music playlist</div>
                    <iframe className={"rounded-2xl h-[95%] p-2 "}
                            src="https://open.spotify.com/embed/playlist/4x9OtLt7bsmvqktbF0Y0Gm?utm_source=generator&theme=0"
                            width="100%"  frameBorder="0" allowFullScreen={false}
                            allow={"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}
                            loading="lazy">
                    </iframe>
                </div>
                <div className={""}>
                    <div className={" bg-orange-500 text-white"}>What i&#39;m reading</div>
                    <Image src={"https://i.pinimg.com/236x/d3/d2/4b/d3d24bbe8d9e2fe8617da09617ccac0c.jpg"}
                         alt={"book i read daily"}
                           width={500}
                           height={500}
                         className={"w-full h-[90%] p-2 object-fit"}
                    ></Image>
                </div>

            </div>
            <div className={"flex flex-col mt-10 w-full "}>
                <div className={"text-3xl font-bold underline text-center"}>My tech stack</div>
                <div className={"flex flex-wrap w-full gap-4  mt-5"}>
                    {techStack.map((tech,index)=>(
                        <Card key={index} className={""}>
                            <CardContent>
                                <Image
                                    src={tech.image}
                                    alt={tech.name}
                                    height={100}
                                    width={100}
                                    className={"h-30"}
                                />
                            </CardContent>
                            <CardFooter>
                                <p className={"font-medium text-xl"} >{tech.name}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </div>
            <div className={"flex flex-col mt-10"}>
                <div className={"text-3xl font-bold underline text-center"}>Socials</div>
                <div className={"flex flex-wrap w-full mt-4 gap-4"}>
                    {socials.map((platform,index)=>(
                        <Link key={index} href={platform.handleUrl}>
                            <div key={index} className={"flex flex-col leading-7 items-center align-center p-2 cursor-pointer"}>
                                <Image
                                    src={platform.icon}
                                    alt={platform.site}
                                    height={100}
                                    width={100}
                                    objectFit={"cover h-14 w-14"}
                                />
                                <p className={"font-medium text-xl"}>{platform.site}</p>
                            </div>
                        </Link>

                    ))}
                </div>

            </div>
        </div>
    )
}