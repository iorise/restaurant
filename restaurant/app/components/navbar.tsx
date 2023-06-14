import Image from "next/image";
import localFont from 'next/font/local'

const myFont = localFont({ 
  src: '../assets/fonts/pizzahut-font.ttf',
  display: 'swap'
})


export default function navbar() {
 
  return (
    <div className={myFont.className}>
      <nav className="navbar w-full pr-16 pl-12 absolute mt-16 flex justify-between text-7xl text-white">
        <Image
          className="logo animation-none hover:animate-pulse bg-contain cursor-pointer"
          src="/images/logo.png"
          alt="logo"
          width={400}
          height={80}
          
        />
        <div className="menu my-auto ">
          <h1 className="tracking-wider cursor-pointer">Home</h1>
        </div>
        <div className="about my-auto">
          <h1 className="tracking-wider cursor-pointer">About</h1>
        </div>

      </nav>
    </div>
  );
}
