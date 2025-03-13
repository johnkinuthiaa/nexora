import techStack from "@/utils/techStack";
import Image from "next/image";


export default function AboutUs(){

    return(
        <div className={"w-[80%] flex flex-col justify-center content-center items-center m-[10px auto] "}>
            <h1 className={"font-bold text-2xl font-poppins"}>About author</h1>
            <div className={" mt-20 flex flex-col text-4xl font-medium  leading-17 about__container"}>
                <div className={"flex"}>
                    <h2 className={""}>Hi, I&#39;m</h2>
                    <img src={"https://i.pinimg.com/236x/ff/f5/15/fff515feeac0de5f8138941afd1cd6c9.jpg"} alt={"profile"} className={"h-20 w-20 rounded-2xl ml-3 mr-3"}/>
                    <h2>, <mark className={"bg-yellow-500"}>John Kinuthiaa</mark><span className={"text-blue font-extrabold"}> !</span></h2>
                </div>
                <div className={"flex"}>
                    <h2><span className={"opacity-50 font-bold"}>I&#39;m a</span><span> Junior Software Developer </span><span className={"opacity-50 font-bold"}>at</span></h2>
                </div>
                <div className={"flex gap-3 justify-between"}>
                    <h2 className={"text-orange-400"}>Nevani Housing.</h2>
                    <div className={"flex rounded-full p-2 gap-2 border-2 w-fit items-center font-medium text-xl m-3"}>
                        <div className={"bg-green-500 rounded-full p-2 h-4 w-4 flex items-center justify-center relative -z-10"}>
                            <div className={"bg-green-100 rounded-full h-2 w-2 absolute"}></div>
                        </div>
                        <p>Open to work</p>
                    </div>
                </div>
                <div className={"flex justify-end flex-col font-medium text-xl mt-60 absolute right-2/5 font-serif "}>
                    <p>Feel free to explore my works and reach out</p>
                    <p>---I&#39;d love to connect</p>
                </div>
            </div>

            <div className={"flex flex-wrap gap-4 [&>*]:rounded-2xl [&>*]:flex-col [&>*]:h-80 [&>*>div]:border [&>*>div]:w-fit [&>*>div]:m-2 [&>*>div]:font-bold [&>*>div]:p-1 [&>*>div]:rounded-2xl  [&>*]:w-80 [&>*]:border mt-32"}>
                <div className={"flex flex-col gap-2 "}>
                    <div className={""}>My Experience</div>
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
                <div>
                    <div className={""}>My Music playlist</div>
                </div>
                <div>
                    <div className={""}>What i&#39;m reading</div>
                </div>

            </div>
            <div className={"flex flex-col mt-20"}>
                <h2>My tech stack</h2>
                <div className={"flex flex-wrap w-[50%] gap-4 items-center justify-center m-[auto]"}>
                    {techStack.map((tech,index)=>(
                        <div key={index} className={"flex flex-col leading-7"}>
                            <Image
                                src={tech.image}
                                alt={tech.name}
                                height={100}
                                width={100}
                                objectFit={"cover"}
                            />
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}