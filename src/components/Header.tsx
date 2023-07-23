import Link from 'next/link'
import Matariki from './Matariki'

export default function Header() {

  return (
    <div className="absolute top-0 w-full flex flex-col items-center lg:items-start lg:fixed lg:bg-transparent">
      <div className="scale-50 -mx-10 -my-5">
        <Link href="/">
        <Matariki />
        </Link>
      </div>    
    </div>
  )
}
