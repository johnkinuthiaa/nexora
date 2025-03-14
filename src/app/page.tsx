"use client"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
      <div className={"mt-20 flex flex-col justify-center items-center"}>
        <div className={"flex justify-between p-2"}>
          <div className={"flex flex-4/5 flex-col leading-9"}>
            <div className={"font-bold text-3xl w-[700px] leading-10"}>Stay Informed with the Latest Updates,<em>blog highlights</em>,tech insights and learn new stuff on this page</div>
            <p className={"mt-10 font-medium text-xl"}>Get highlights and learn essential concepts</p>
          </div>
          <div className={"flex items-center flex-1/3"}>
            <Image
                src={"https://i.pinimg.com/736x/57/ea/89/57ea898844b18668b14be3a189928999.jpg"}
                alt={"code"}
                className={"rounded-2xl h-96 w-96 border-2 border-green-500"}
                height={300}
                width={300}>

            </Image>
            <Image
                src={"https://i.pinimg.com/736x/57/ea/89/57ea898844b18668b14be3a189928999.jpg"}
                alt={"code"}
                className={"rounded-2xl absolute z-1 h-60 w-60 border-2 border-blue-500 ml-10"}
                height={300}
                width={300}>
            </Image>
          </div>
        </div>
          <div className={"flex flex-col absolute right-0 mr-52 bottom-0 items-center "}>
              <div className={"flex flex-col gap-2 rounded-xl m-2 border p-1"}>
                  <div className={"flex gap-3"}>
                      <Image
                          src={"https://i.pinimg.com/474x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg"}
                          className={"rounded-full h-10 w-10 border-2 border-blue-500"}
                          alt={"profile image"}
                          height={100}
                          width={100}
                      />

                      <p>John kinuthia</p>
                  </div>
                  <p>Can You pass This Apple interview?</p>
              </div>
              <div className={"flex flex-col gap-2 rounded-xl m-2 border p-1"}>
                  <div className={"flex gap-3"}>
                      <Image
                          src={"https://i.pinimg.com/236x/8c/9b/07/8c9b07e5f25b7776190bf9de4da60c47.jpg"}
                          className={"rounded-full h-10 w-10 border-2 border-pink-500"}
                          alt={"profile image"}
                          height={100}
                          width={100}
                      />
                      <p>John kinuthia</p>
                  </div>
                  <p>Stop copy pasting code. This will change your life</p>
              </div>
              <div className={"flex flex-col gap-2 rounded-xl m-2 border p-1 w-[250px]"}>
                  <div className={"flex gap-3"}>
                      <Image
                          src={"https://i.pinimg.com/236x/0f/da/9f/0fda9f27627f65764fb316e1958a934c.jpg"}
                          className={"rounded-full h-10 w-10 border-2 border-yellow-500"}
                          alt={"profile image"}
                          height={100}
                          width={100}
                      />
                      <p>John kinuthia</p>
                  </div>
                  <p>Stop copy pasting code. This will change your life</p>
              </div>
          </div>

        <Link href={"/pages/blog"}><button className={"rounded-full p-2 font-bold cursor-pointer bg-blue-500 mt-10"}>Explore blogs</button></Link>

      </div>
  );
}
