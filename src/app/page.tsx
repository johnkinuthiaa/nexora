"use client"
import Link from "next/link";

export default function Home() {
  return (
      <div className={"mt-20 flex flex-col justify-center items-center"}>
        <div className={"flex justify-between p-2"}>
          <div className={"flex flex-4/5 flex-col leading-9"}>
            <div className={"font-bold text-4xl w-[700px] leading-10"}>Stay Informed with the Latest Updates,<em>blog highlights</em>,tech insights and learn new stuff on this page</div>
            <p className={"mt-10 font-medium text-xl"}>Get highlights and learn essential concepts</p>
          </div>
          <div className={"flex items-center flex-1/3"}>
            <img src={"https://i.pinimg.com/736x/57/ea/89/57ea898844b18668b14be3a189928999.jpg"} alt={"code"} className={"border rounded-2xl h-96 w-96"}></img>
            <img src={"https://i.pinimg.com/736x/57/ea/89/57ea898844b18668b14be3a189928999.jpg"} alt={"code"} className={"rounded-2xl absolute z-1 h-60 w-60 border-1 ml-10"}></img>
          </div>
        </div>
        <div className={"flex flex-col gap-2 rounded-full m-2"}>
          <div className={"flex gap-3"}>
            <img src={"https://i.pinimg.com/474x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg"} className={"rounded-full h-10 w-10"} alt={"profile image"}/>
            <p>John kinuthia</p>
          </div>
          <p>Can You pass This Apple interview?</p>
        </div>
        <div className={"flex flex-col gap-2 rounded-full m-2"}>
          <div className={"flex gap-3"}>
            <img src={"https://i.pinimg.com/474x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg"} className={"rounded-full h-10 w-10"} alt={"profile image"}/>
            <p>John kinuthia</p>
          </div>
          <p>Stop copy pasting code. This will change your life</p>
        </div>

        <Link href={"/pages/blog"}><button className={"rounded-full p-2 font-bold cursor-pointer bg-blue-500 mt-10"}>Explore blogs</button></Link>

      </div>
  );
}
