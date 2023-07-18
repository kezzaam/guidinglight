import Image from 'next/image'

export default function Header() {

  return (
    <div className="w-full flex flex-col items-center lg:items-start lg:ml-4">
        <Image
          src="/images/matariki.svg"
          alt="Matariki"
          width={120}
          height={120}
        />
      </div>
  )
}
