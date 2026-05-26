import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { forwardRef } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  category?: string;
  name: string;
  compound?: string;
  price: number;
  image: string;
}

export const Card = forwardRef<HTMLDivElement, Props>(({ name, price, category, image, compound, ...props }, ref) => {
  return (
    <div
      className='w-[180px] h-[250px] border border-black flex flex-col py-[10px] items-center cursor-pointer hover:shadow-grow hover:translate-y-[-10px] transition-all duration-300 ease-out'
      ref={ref}
      {...props}>
      {image ? (
        <Image src={image} alt='nf' width={150} height={150} className='rounded-full size-[150px]' />
      ) : (
        <div className='bg-emerald-400 w-[150px] h-[150px] rounded-full'></div>
      )}
      <p className='pt-[5px]'>{name}</p>
      <div className='w-full flex-1 px-[20px] flex items-end'>
        <Button type='button' className='bg-transparent text-black cursor-pointer border border-black w-full hover:bg-slate-100'>
          {price}р
        </Button>
      </div>
    </div>
  );
});

Card.displayName = 'Card';
