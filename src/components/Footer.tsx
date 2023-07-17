"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
    const pathname = usePathname()

    // if time, optimize svg files https://www.youtube.com/watch?v=MbUyHQRq2go&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=12
    return (
        <div className="w-screen fixed bottom-0 flex flex-row justify-between px-4 py-4 lg:w-[40%] lg:left-0 lg:flex-col background-transparent scroll:none">
            <div className="w-[20%]">
                <Link href="#">
                    <div className={`absolute bottom-0 lg:bottom-96 rounded-t-2xl lg:rounded-tl-sm lg:rounded-r-2xl lg:left-0 lg:pl-6 p-4 ${pathname == "#" ? "current" : ""}`}>
                        <Image
                            src="/icons/stargears.svg"
                            alt="Settings"
                            width={40}
                            height={40}
                            className="opacity-70 hover:opacity-100 hover:scale-125"
                        />
                    </div>
                </Link>
            </div>
            <div className="w-[20%]">
            <Link href="#">
                <div className={`absolute bottom-0 lg:bottom-64 rounded-t-2xl lg:rounded-tl-sm lg:rounded-r-2xl lg:left-0 lg:pl-6 p-4 ${pathname == "#" ? "current" : ""}`}>                    
                        <Image
                            src="/icons/maoristar.svg"
                            alt="Explore"
                            width={40}
                            height={40}
                            className="opacity-70 hover:opacity-100 hover:scale-125"
                        />
                    </div>
                </Link>
            </div>
            <div className="w-[20%]">
                <Link href="/discoveries">
                <div className={`absolute bottom-0 lg:bottom-32 rounded-t-2xl lg:rounded-tl-sm lg:rounded-r-2xl lg:left-0 lg:pl-6 p-4 ${pathname == "/discoveries" ? "current" : ""}`}>                    
                        <Image
                            src="/icons/bookmark.svg"
                            alt="Discoveries"
                            width={40}
                            height={40}
                            className="opacity-70 hover:opacity-100 hover:scale-125"
                        />   
                </div>
                </Link>
            </div>
            <div className="w-[20%]">
                <Link href="/">
                <div className={`absolute bottom-0 lg:bottom-4 rounded-t-2xl lg:rounded-tl-sm lg:rounded-r-2xl lg:left-0 lg:pl-6 p-4 ${pathname == "/" ? "current" : ""}`}>                    
                        <Image
                            src="/icons/mooncalendar.svg"
                            alt="Home"
                            width={40}
                            height={40}
                            className="opacity-70 hover:opacity-100 hover:scale-125"
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}
