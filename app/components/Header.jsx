import { assets } from "@/assets/assets"
import Image from "next/image"

const Header = () => {
  return (
    <div>
      
        <h3 className="flex items-end gap-2 text-ml md:text-2xl mb-3 font-Ovo">Hi! I'm Aswini<Image src={assets.hand_icon} alt="" className=" w-6"/></h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Front end developer and UI/UX Designer based in Bangalore.</h1>
          <p className="max-w-2xl mx-auto font-Ovo">I craft user-friendly interfaces and bring them to life with clean, responsive code.</p>
          <div>
              <a href="#contact">Contact Me<Image src={assets.right_arrow_white} alt="" className="w-4" /></a>
              <a href="/resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 ">My Resume<Image src={assets.download_icon} alt="" className="w-4" /></a>
        </div>
    </div>
  )
}

export default Header
