import React,{useState} from 'react';
import Image from 'next/image';

import Pet1Img from 'public/img/pets/1.png'
import Pet2Img from 'public/img/pets/2.png'
import Pet3Img from 'public/img/pets/3.png'
import Pet4Img from 'public/img/pets/4.png'
import Pet5Img from 'public/img/pets/5.png'
import Pet6Img from 'public/img/pets/6.png'
import Pet7Img from 'public/img/pets/7.png'
import Pet8Img from 'public/img/pets/8.png'
import Pet9Img from 'public/img/pets/9.png'
import Pet10Img from 'public/img/pets/10.png'
import Pet11Img from 'public/img/pets/11.png'
import Pet12Img from 'public/img/pets/12.png'
import Badge from 'public/img/pets/badge.svg'

const pets = [
  {
    id:1,
    category: 'gato',
    name: 'kyba',
    image: Pet1Img
  },
  {
    id:2,
    category: 'pajaro',
    name: 'rotty',
    image: Pet2Img
  },
  {
    id:4,
    category: 'gato',
    name: 'kirra',
    image: Pet4Img
  },
  {
    id:5,
    category: 'hamster',
    name: 'dinno',
    image: Pet5Img
  },
  {
    id:6,
    category: 'pajaro',
    name: 'paco',
    image: Pet6Img
  },
  {
    id:7,
    category: 'pajaro',
    name: 'pavo',
    image: Pet7Img
  },
  {
    id:8,
    category: 'gato',
    name: 'ynna',
    image: Pet8Img
  },
  {
    id:10,
    category: 'pajaro',
    name: 'dimmi',
    image: Pet10Img
  },
  {
    id:11,
    category: 'perro',
    name: 'jasper',
    image: Pet11Img
  },
  {
    id:12,
    category: 'hamster',
    name: 'syu',
    image: Pet12Img
  }
]

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[8])
  const [petIndex, setPetIndex] = useState(8)
  const getPetDetails = (id:any) =>{
    const pet:any = pets.find((pet)=>{
      return pet.id === id
    })
    setPetDetails(pet)
  }

  return (
    <section className='bg-pets bg-center py-6 overflow-hidden'>
      <div className='flex flex-col lg:flex-row'>
        <div className='hidden xl:flex xl:w-[30%] xl:pl-[160px]'>
          <Image 
          src={Badge}
          width={230}
          height={227}
          alt=''
          />
        </div>
        <div className='flex-1 flex flex-col lg:flex-row'>
          <div className='lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0 '>
            <div className='text-center text-pwgreen-50'>
              <div className='text-[32px] capitalize'>{petDetails.category}</div>
              <div className='text-[17px] uppercase mb-1'>({petDetails.name})</div>
              <div className='w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full'>
                <Image src={petDetails.image} width={150} height={150} alt='no hay imagen que mostrar'/>
              </div>
            </div>
          </div>
          <div className='relative lg:w-[60%] flex-1 lg:flex items-center'>
            <div className='flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-4'>
              {pets.map((pet,index) => {
                return (
                <div key={index} onClick={()=>{setPetIndex(index), getPetDetails(pet.id)}} className='cursor-pointer relative'>
                  <div className={`w-full h-full absolute rounded-full ${petIndex === index ? 'border-2 border-white':'bg-black/40'}`}></div>
                  <Image
                  src={pet.image}
                  width={95}
                  height={95}
                  alt=''/>
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Pets;
