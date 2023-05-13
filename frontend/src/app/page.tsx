'use client';
import Image from 'next/image';
import Button from '@mui/base/Button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function shortenWalletAddress(walletAddress: string, length: number): string {
  const prefixLength = Math.floor(length / 2);
  const suffixLength = length - prefixLength;
  const prefix = walletAddress.substring(0, prefixLength);
  const suffix = walletAddress.substring(walletAddress.length - suffixLength);
  return prefix + '...' + suffix;
}

export default function Home() {
  const router = useRouter();

  return (
    <main className='flex h-full flex-col gap-32'>
      <div className='flex flex-col gap-5 pt-24'>
        <p>Welcome to Eco Vote</p>
        <p>We are the best to do stuff and change the world</p>
        <Button className='button-secondary' onClick={() => router.push('/create')}>
          Create Survey
        </Button>
      </div>
    </main>
  );
}
