import Image from 'next/image';

interface CardProps {
    name: string;
    price: string;
    img: string;
}

export default function Card({ img, name, price } : CardProps) {
  return (
    <div className='w-80 p-8'>
      <div className="relative w-full h-52">
        <Image src={img} layout='fill' alt={name} className='drop-shadow-lg object-contain object-center'/>
      </div>
      <div className='flex flex-col gap-3 pt-5'>
        <h1 className="text-2xl">{name}</h1>
        <span>${price}</span>
        <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-violet-900 sm:px-8">Explore Now</button>
      </div>
    </div>
  )
}
