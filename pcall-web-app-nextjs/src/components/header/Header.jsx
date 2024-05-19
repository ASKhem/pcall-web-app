import Link from 'next/link'
import { FaRegQuestionCircle } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { HiMenuAlt4 } from "react-icons/hi";

export default function Header() {
    return (
        <header className="fixed z-10 t-0 flex w-full h-16 bg-custom-blue grid-rows-1 items-center justify-between px-[5vw] text-zinc-200 backdrop-opacity-60 border-b border-zinc-800">
            <div className="h-full flex items-center justify-center gap-16">
                <Link href="/"><img src="/img/brand/pcallLogo.svg" className="h-16 p-1" alt="Logo" /></Link> 
                <nav className="lg:flex hidden">
                    <ul className="flex gap-5 px-2 font-bold">
                        <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/">Build Now</Link></li>
                        <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/">Recycle</Link></li>
                        <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/">Gallery</Link></li>
                        <li className="transition-colors duration-200 hover:text-orange-500"><Link href="/">About</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="h-full lg:flex hidden items-center justify-center gap-3">
                <TbWorld className="text-[26px] transition-colors duration-200 hover:text-orange-500 cursor-pointer" />
                <FaRegQuestionCircle className="text-2xl transition-colors duration-200 hover:text-orange-500 cursor-pointer" />
                <Link href="/auth/login" className="text-black font-bold transition-colors duration-200 bg-zinc-200 py-1 px-3 rounded-lg hover:invert active:scale-95">Log In</Link>
                <Link href="/auth/register" className="text-zinc-200 font-bold transition-colors duration-200 hover:text-zinc-200 hover:bg-black bg-orange-700 py-1 px-3 rounded-lg active:scale-95">Sing Up</Link>
            </div>
            <div className="h-full lg:hidden flex items-center justify-center relative">
                <label htmlFor="small-menu" className="cursor-pointer">
                    <input type="checkbox" id="small-menu" className="peer hidden" />
                    <HiMenuAlt4 className="text-[40px] active:scale-95 cursor-pointer rounded-full border border-zinc-800 p-1 peer-checked:hidden" />
                    <RxCross2 className="text-[40px] active:scale-95 cursor-pointer rounded-full border border-zinc-800 p-1 hidden peer-checked:block" />
                    <nav className="absolute right-0 mt-8 py-5 w-44 bg-custom-blue bg-opacity-90 backdrop-blur-xl rounded-md shadow-lg hidden peer-checked:block">
                        <ul className="items-center justify-center">
                            <li className="px-4 py-2 hover:bg-gray-800"><Link href="/">Build Now</Link></li>
                            <li className="px-4 py-2 hover:bg-gray-800"><Link href="/">Recycle</Link></li>
                            <li className="px-4 py-2 hover:bg-gray-800"><Link href="/">Gallery</Link></li>
                            <li className="px-4 py-2 hover:bg-gray-800"><Link href="/">About</Link></li>
                        </ul>
                    </nav>
                </label>
                <label htmlFor="small-menu" className="fixed inset-0 cursor-default peer-checked:hidden"></label>
            </div>
        </header>
    )
}