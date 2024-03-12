import React from "react"
import Image from 'next/image';
export default function Footer() {
    return (
      <>
        <footer className="px-10 py-14 gap-7 flex justify-around flex-wrap">
          <div>
            <h1 className="text-3xl">Logo</h1>
            <span>For new information, you can follow us on</span>
            <div className="flex gap-4 mt-10">
              <div className="text-white bg-gradient-to-r from-blue-500 to-violet-500 p-2 rounded-lg cursor-pointer">
                <Image src="/img/ig.svg" width={30} height={30} alt="instagram" />
              </div>
              <div className="text-white bg-gradient-to-r from-blue-500 to-violet-500 p-2 rounded-lg cursor-pointer">
              <Image src="/img/yt.svg" width={30} height={30} alt="youtube"/>
              </div>
              <div className="text-white bg-gradient-to-r from-blue-500 to-violet-500 p-2 rounded-lg cursor-pointer">
              <Image src="/img/tiktok.svg" width={30} height={30} alt="tiktok"/>
              </div>
              <div className="text-white bg-gradient-to-r from-blue-500 to-violet-500 p-2 rounded-lg cursor-pointer">
              <Image src="/img/x.svg" width={30} height={30} alt="X"/>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Company</h1>
            <ul className="text-sm flex flex-col gap-4 mt-8">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Marketplace</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Review</a></li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">Support</h1>
            <ul className="text-sm flex flex-col gap-4 mt-8">
              <li>Contact Us</li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Privacy & policy</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>
        </footer>
        <p className="text-center py-10">&copy;2024 Company. All Rights Reserved</p>
      </>
    )
  }
  