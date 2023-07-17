import Image from 'next/image'

export default function Header() {

  return (
    <div>
        <Image
          src="/images/matariki.svg"
          alt="Matariki"
          width={120}
          height={120}
        />
      </div>
  )
}
