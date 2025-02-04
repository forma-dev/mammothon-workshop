import type { NextPage } from 'next';
import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { MammothIDABI } from '@/abi/MammothID.abi';

type FieldErrors = {
  name?: string;
  description?: string;
  image?: string;
};

const Mint: NextPage = () => {
  const { address } = useAccount();
  const [mammothId, setMammothId] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});

  const { writeContract: mintNFT, data: mintTxHash } = useWriteContract();
  const { isLoading: isMinting, isSuccess: isMinted } = useWaitForTransactionReceipt({
    hash: mintTxHash,
  });

  const handleMint = () => {
    const newErrors: FieldErrors = {};

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      mintNFT({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
        abi: MammothIDABI,
        functionName: 'mint',
        args: [address as `0x${string}`, BigInt(mammothId)],
      });
    }
  };

  if (!address) {
    return (
      <div className="w-full max-w-md p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-blue-700">Connect your wallet to mint an NFT</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl p-6 border rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Mint a Mammoth ID</h2>
      <div className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Mammoth ID"
            value={mammothId}
            onChange={(e) => {
              setMammothId(e.target.value);
            }}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4 disabled:bg-blue-300"
          onClick={handleMint}
          disabled={isMinting}
        >
          {isMinting ? 'Minting...' : isMinted ? 'Minted!' : 'Mint NFT'}
        </button>
      </div>
    </div>
  );
};

export default Mint;
