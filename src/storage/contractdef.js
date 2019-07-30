smartContract = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenOwner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "approveAndCall",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "newOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transferAnyERC20Token",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
]
// [
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "owner",
//       "outputs": [
//         {
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function",
//       "signature": "0x8da5cb5b"
//     },
//     {
//       "inputs": [
//         {
//           "name": "_storage",
//           "type": "address"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "constructor",
//       "signature": "constructor"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_wallet",
//           "type": "address"
//         },
//         {
//           "name": "_teamTokens",
//           "type": "uint256"
//         },
//         {
//           "name": "constraints",
//           "type": "uint256[]"
//         },
//         {
//           "name": "_price",
//           "type": "uint256"
//         },
//         {
//           "name": "_durationDays",
//           "type": "uint256"
//         },
//         {
//           "name": "_presaleduration",
//           "type": "uint256"
//         },
//         {
//           "name": "_bonuses",
//           "type": "uint8[]"
//         },
//         {
//           "name": "assignedTokens",
//           "type": "uint256"
//         }
//       ],
//       "name": "AddICO",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function",
//       "signature": "0x4203ac3c"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_song",
//           "type": "address"
//         }
//       ],
//       "name": "RemoveSong",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function",
//       "signature": "0x234ea215"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "name": "_author",
//           "type": "string"
//         },
//         {
//           "name": "_genre",
//           "type": "string"
//         },
//         {
//           "name": "_entryType",
//           "type": "uint8"
//         },
//         {
//           "name": "_website",
//           "type": "string"
//         },
//         {
//           "name": "_totalSupply",
//           "type": "uint256"
//         },
//         {
//           "name": "_symbol",
//           "type": "string"
//         },
//         {
//           "name": "_description",
//           "type": "string"
//         },
//         {
//           "name": "_soundcloud",
//           "type": "string"
//         },
//         {
//           "name": "_youtube",
//           "type": "string"
//         },
//         {
//           "name": "_ico",
//           "type": "bool"
//         },
//         {
//           "name": "_decimals",
//           "type": "uint8"
//         },
//         {
//           "name": "_id",
//           "type": "uint256"
//         }
//       ],
//       "name": "AddSong",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function",
//       "signature": "0xad2ff93b"
//     },
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "GetMySongs",
//       "outputs": [
//         {
//           "name": "",
//           "type": "address[]"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function",
//       "signature": "0xc55d6554"
//     },
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "GetSongs",
//       "outputs": [
//         {
//           "name": "",
//           "type": "address[]"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function",
//       "signature": "0x1324af41"
//     },
//     {
//       "constant": true,
//       "inputs": [
//         {
//           "name": "song",
//           "type": "address"
//         }
//       ],
//       "name": "Test",
//       "outputs": [
//         {
//           "name": "",
//           "type": "uint256"
//         },
//         {
//           "name": "",
//           "type": "uint256"
//         },
//         {
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function",
//       "signature": "0xaa9449f2"
//     },
//     {
//       "constant": true,
//       "inputs": [
//         {
//           "name": "song",
//           "type": "address"
//         }
//       ],
//       "name": "GetICO",
//       "outputs": [
//         {
//           "name": "ico",
//           "type": "address"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function",
//       "signature": "0x70c0a4bc"
//     },
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "GetContractOwner",
//       "outputs": [
//         {
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function",
//       "signature": "0x9b276a68"
//     }
//   ]