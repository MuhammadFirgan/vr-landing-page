import Image from "next/image";
import { orbitron } from "./fonts";
import Card from "@/components/Card";



export default function Home() {
  return (
    <main className="px-10">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-0">
        <div className="lg:max-w-lg">
          <h1 className={`text-5xl ${orbitron.className} sm:text-4xl lg:text-5xl`}>Tech Evolution <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-bold">Future</span> Revolution</h1>
          <p className="my-10 sm:my-7 lg:mt-4 lg:mb-16">Embracing change, pioneering new digital frontiers, shaping tomorrow, redefining industries, empowering individuals in an ever-evolving tech era.</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-violet-900">Explore Now</button>
        </div>
        <Image src="/img/1.png" width={750} height={750} alt="Hero Image" quality={100} priority className="drop-shadow-2xl" />
      </div>
      <div className="lg:py-10 my-40 flex flex-col gap-10 items-center lg:flex-row">
        <div className="flex gap-3 flex-col sm:flex-row sm:justify-center">
          <Image src="/img/2.png" width={300} height={300} alt="imgAbout 1"/>
          <div className="flex flex-col gap-3">
            <Image src="/img/3.png" width={300} height={300} alt="imgAbout 2"/>
            <Image src="/img/4.png" width={300} height={300} alt="imgAbout 3" className="bg-green-500"/>
           
          </div>
        </div>
        <div className="max-w-xl">
          <h1 className={`text-5xl ${orbitron.className} sm:text-4xl lg:text-5xl`}><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-bold">Get Ready</span> to Enjoy VR Games Using Our Platform</h1>
          <p className="my-3">Immerse yourself in the world of virtual reality gaming with our cutting-edge platform. Experience a new level of excitement as you dive into thrilling adventures, compete in epic battles, and explore fantastical realms—all from the comfort of your own home. Our platform offers a seamless and immersive VR gaming experience, delivering unparalleled realism and excitement. Get ready to elevate your gaming experience to new heights with us!</p>
          <div className="flex gap-7 my-10">

            <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-violet-900 sm:px-8">Explore Now</button>
            <button className="px-4 py-3 border-2 border-white text-white hover:border-none border-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:to-violet-900 sm:px-8">Explore Now</button>
          </div>
        </div>
      </div>
      <div className="lg:py-10 my-20">
        <h1 className={`text-4xl ${orbitron.className}`}><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-bold">Top</span> Product</h1>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Card name="Valve Index" price="999" img="/img/5.png" />
          <Card name="Pico Neo 2" price="699" img="/img/6.png" />
          <Card name="Oculus Quest 2" price="299" img="/img/7.png" />
          <Card name="HTC Vive Cosmos" price="699" img="/img/8.png" />
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-violet-500 py-24 my-40 text-center rounded-2xl flex flex-col items-center gap-5">
          <h1 className={`${orbitron.className} text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-violet-900 font-bold`}>Subscribe</h1>
          <span>For New Future and New Technology</span>
          <div className="flex w-full justify-center">

            <input type="text" className="py-3 px-5 text-black max-w-40 w-full sm:max-w-lg lg:max-w-3xl" />
            <button className="py-3 px-5 bg-gradient-to-r from-blue-900 to-violet-900">Subscribe</button>
          </div>
        </div>
        
      </div>
    </main>
  );
}
