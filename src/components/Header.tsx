import Image from 'next/image'
import Matariki from './Matariki'

export default function Header() {

  return (
    <div className="w-full flex flex-col items-center lg:items-start lg:fixed lg:bg-transparent">
      <div className="scale-50 -m-10"><Matariki /></div>    
    </div>
  )
}
