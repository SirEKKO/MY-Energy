"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const TradeEnergy = () => {
  const [eth, setEth] = useState<number>()

  useEffect(() => {
    console.log(eth)
  }, [eth])

  const translateCurrency = (kw: string) => {
    const result = Number(kw) * 0.000001
    setEth(result)
  }

  const formatEth = (value: number) => {
    return value % 1 !== 0 ? value.toString() : value.toFixed(0)
  }

  return (
    <div className="w-full bg-gradient-to-r from-green-400 to-[#1c1c1c] text-white min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-24">
      <div className="border-[1px] rounded-lg border-white w-1/2 py-6 flex flex-row justify-center items-center gap-5">
        <p className='text-xl'><span className='font-bold'>1000 KWH =</span> 0.001 ETH</p>
        <Image width={20} height={20} src="ethereum-eth-logo.svg" alt='eth icon' />
      </div>
      <Input onChange={e => translateCurrency(e.target.value)} className='w-1/2 text-black' placeholder='How much do you want to trade?' />
      <div className='h-16'>
        {!!eth && eth !== 0 && !Number.isNaN(eth) ? <div className='flex flex-row gap-5'>
          <h1 className="text-3xl font-bold mb-8">{formatEth(eth)} ETH</h1>
          <Image className='mb-7' width={20} height={20} src="ethereum-eth-logo.svg" alt='eth icon' />
        </div> : <p className='font-light'>Your value will be translated here...</p>}
      </div>
      <Button className="bg-black hover:bg-green-500 duration-200 text-white">
        Trade
      </Button>
    </div>
  );
};

export default TradeEnergy;