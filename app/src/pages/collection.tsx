import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { getCollectionTokens, Token } from '@/utils/indexer';
import Link from 'next/link';
import { config } from '@/config';
import { convertIpfsUrl } from '@/utils/ipfs';

const Collection: NextPage = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  useEffect(() => {
    if (config.contractAddress) {
      getCollectionTokens(config.contractAddress)
        .then(setTokens);
    }
  }, [config.contractAddress]);

  return (
    <div className="w-full max-w-6xl">
      <h2 className="text-3xl font-bold mb-8">NFT Collection</h2>
      {tokens.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No NFTs found in your collection</p>
          <Link
            href="/mint"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Mint New NFT
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tokens.map((nft) => (
            <div key={nft.tokenId} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {nft.tokenMetadata.image.startsWith('data:image/svg+xml;base64,') ? (
                <iframe
                  className="w-full h-64 border-0"
                  src={nft.tokenMetadata.image}
                  sandbox=""
                  title={`NFT ${nft.tokenId}`}
                />
              ) : (
                <img
                  src={convertIpfsUrl(nft.tokenMetadata.image)}
                  alt={nft.tokenMetadata.name}
                  className="w-full h-100 object-contain"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{nft.tokenMetadata.name}</h3>
                <p className="text-gray-600 text-sm">{nft.tokenMetadata.description}</p>
              </div>
              <div className="p-4 border-t bg-gray-50">
                <p className="text-sm text-gray-500">Token ID: #{nft.tokenId}</p>
                {nft.tokenMetadata.attributes && (
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1">
                      {nft.tokenMetadata.attributes.map((attr, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {attr.trait_type}: {attr.value}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {nft.tokenMetadata.tags && (
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1">
                      {nft.tokenMetadata.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
