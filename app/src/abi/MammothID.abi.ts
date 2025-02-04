export const MammothIDABI = [
  {
    inputs: [
      { internalType: 'string', name: '_name', type: 'string' },
      { internalType: 'string', name: '_symbol', type: 'string' },
      {
        internalType: 'address',
        name: '_initialOwner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_defaultRoyaltyReceiver',
        type: 'address'
      },
      {
        internalType: 'uint96',
        name: '_defaultRoyaltyFeeNumerator',
        type: 'uint96'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  { inputs: [], name: 'ContractMetadataCemented', type: 'error' },
  { inputs: [], name: 'ContractMetadataUnauthorized', type: 'error' },
  {
    inputs: [
      { internalType: 'uint256', name: 'numerator', type: 'uint256' },
      { internalType: 'uint256', name: 'denominator', type: 'uint256' }
    ],
    name: 'ERC2981InvalidDefaultRoyalty',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'receiver', type: 'address' } ],
    name: 'ERC2981InvalidDefaultRoyaltyReceiver',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'uint256', name: 'numerator', type: 'uint256' },
      { internalType: 'uint256', name: 'denominator', type: 'uint256' }
    ],
    name: 'ERC2981InvalidTokenRoyalty',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'address', name: 'receiver', type: 'address' }
    ],
    name: 'ERC2981InvalidTokenRoyaltyReceiver',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'address', name: 'owner', type: 'address' }
    ],
    name: 'ERC721IncorrectOwner',
    type: 'error'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'ERC721InsufficientApproval',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'approver', type: 'address' } ],
    name: 'ERC721InvalidApprover',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'operator', type: 'address' } ],
    name: 'ERC721InvalidOperator',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'owner', type: 'address' } ],
    name: 'ERC721InvalidOwner',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'receiver', type: 'address' } ],
    name: 'ERC721InvalidReceiver',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'sender', type: 'address' } ],
    name: 'ERC721InvalidSender',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'tokenId', type: 'uint256' } ],
    name: 'ERC721NonexistentToken',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'owner', type: 'address' } ],
    name: 'OwnableInvalidOwner',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'address', name: 'account', type: 'address' } ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'uint256', name: '_tokenId', type: 'uint256' } ],
    name: 'TokenMetadataCemented',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'uint256', name: '_tokenId', type: 'uint256' } ],
    name: 'TokenMetadataImmutable',
    type: 'error'
  },
  {
    inputs: [ { internalType: 'uint256', name: '_tokenId', type: 'uint256' } ],
    name: 'TokenMetadataUnauthorized',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'ContractURICemented',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'ContractURIUpdated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256'
      }
    ],
    name: 'MetadataCemented',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256'
      }
    ],
    name: 'MetadataUpdate',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferStarted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'address', name: 'owner', type: 'address' } ],
    name: 'balanceOf',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'cementContractMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: '_tokenId', type: 'uint256' } ],
    name: 'cementTokenMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'contractURI',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'contractURICemented',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: '_tokenId', type: 'uint256' } ],
    name: 'exists',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'tokenId', type: 'uint256' } ],
    name: 'getApproved',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: '_tokenId', type: 'uint256' } ],
    name: 'getTokenMetadata',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' }
    ],
    name: 'isApprovedForAll',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_to', type: 'address' },
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' }
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: 'tokenId', type: 'uint256' } ],
    name: 'ownerOf',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'pendingOwner',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'uint256', name: 'salePrice', type: 'uint256' }
    ],
    name: 'royaltyInfo',
    outputs: [
      { internalType: 'address', name: 'receiver', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'string', name: 'name', type: 'string' },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          },
          { internalType: 'string', name: 'image', type: 'string' },
          {
            internalType: 'string',
            name: 'externalLink',
            type: 'string'
          },
          {
            internalType: 'string[]',
            name: 'collaborators',
            type: 'string[]'
          }
        ],
        internalType: 'struct StdContractMetadata',
        name: '_data',
        type: 'tuple'
      }
    ],
    name: 'setContractMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [ { internalType: 'string', name: 'name', type: 'string' } ],
        internalType: 'struct RequiredContractMetadata',
        name: '_data',
        type: 'tuple'
      }
    ],
    name: 'setContractMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'string', name: 'name', type: 'string' },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          },
          { internalType: 'string', name: 'image', type: 'string' },
          {
            internalType: 'string',
            name: 'bannerImage',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'featuredImage',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'externalLink',
            type: 'string'
          },
          {
            internalType: 'string[]',
            name: 'collaborators',
            type: 'string[]'
          }
        ],
        internalType: 'struct FullContractMetadata',
        name: '_data',
        type: 'tuple'
      }
    ],
    name: 'setContractMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'string', name: '_jsonBlob', type: 'string' } ],
    name: 'setContractMetadataRaw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_receiver', type: 'address' },
      { internalType: 'uint96', name: '_feeNumerator', type: 'uint96' }
    ],
    name: 'setDefaultRoyalty',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'string', name: '_traitType', type: 'string' },
      { internalType: 'string', name: '_value', type: 'string' }
    ],
    name: 'setTokenAttribute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'string', name: '_traitType', type: 'string' },
      { internalType: 'bool', name: '_value', type: 'bool' }
    ],
    name: 'setTokenAttribute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'string', name: '_traitType', type: 'string' },
      { internalType: 'uint256', name: '_value', type: 'uint256' }
    ],
    name: 'setTokenAttribute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'string', name: '_traitType', type: 'string' },
      { internalType: 'int256', name: '_value', type: 'int256' }
    ],
    name: 'setTokenAttribute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      {
        components: [
          { internalType: 'string', name: 'traitType', type: 'string' },
          { internalType: 'string', name: 'value', type: 'string' },
          {
            internalType: 'string',
            name: 'displayType',
            type: 'string'
          }
        ],
        internalType: 'struct Attribute',
        name: '_attribute',
        type: 'tuple'
      }
    ],
    name: 'setTokenAttribute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'string', name: '_path', type: 'string' },
      { internalType: 'string', name: '_value', type: 'string' }
    ],
    name: 'setTokenMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      {
        components: [
          { internalType: 'string', name: 'name', type: 'string' },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          },
          { internalType: 'string', name: 'image', type: 'string' },
          {
            internalType: 'string',
            name: 'externalURL',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'animationURL',
            type: 'string'
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'traitType',
                type: 'string'
              },
              { internalType: 'string', name: 'value', type: 'string' },
              {
                internalType: 'string',
                name: 'displayType',
                type: 'string'
              }
            ],
            internalType: 'struct Attribute[]',
            name: 'attributes',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct StdTokenMetadata',
        name: '_data',
        type: 'tuple'
      }
    ],
    name: 'setTokenMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'string', name: '_jsonBlob', type: 'string' }
    ],
    name: 'setTokenMetadataRaw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'address', name: '_receiver', type: 'address' },
      { internalType: 'uint96', name: '_feeNumerator', type: 'uint96' }
    ],
    name: 'setTokenRoyalty',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' } ],
    name: 'supportsInterface',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: '_tokenId', type: 'uint256' } ],
    name: 'tokenURI',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: '_tokenId', type: 'uint256' } ],
    name: 'tokenURICemented',
    outputs: [ { internalType: 'bool', name: '', type: 'bool' } ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'address', name: 'newOwner', type: 'address' } ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ { internalType: 'uint256', name: '_tokenId', type: 'uint256' } ],
    name: 'uri',
    outputs: [ { internalType: 'string', name: '', type: 'string' } ],
    stateMutability: 'view',
    type: 'function'
  }
] as const;