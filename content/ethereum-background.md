# What is Ethereum?
.left-column.width-25[
1. It's a blockchain (duh)
]

.right-column.width-75[
![State Machine](https://cdn-images-1.medium.com/max/800/1*jZ-VRXBJtOnePofB0z2Q8A.png)
![Blockchain](https://cdn-images-1.medium.com/max/800/1*l_H58_pGm3XGwGoQlO9FVQ.png)
]

???

Well, it is a blockchain. (hilarity ensues)

Ethereum stores transactions on an immutable ledger, basically like any other blockchain.

What makes Ethereum special is that the transactions it stores in it's blocks aren't inherantly
the transfer of a financial asset, although it can involve a token or coin.
The transactions involve execution of a string of pre-programmed computer logic statements,
which can transfer valuable assets of any type or specification over a common framework.

For those who haven't learned too much about blockchains, a brief decription:
A blockchain stores a series of transactions into blocks,
where each block is cryptographically linked through network consensus to the previous block,
such that any modification of any "link" in the chain would can be detectable,
preventing the acceptance of that modified chain through the rest of the network.

Each of these transactions progresses the "state" of Ethereum, moving valuable assets
between parties or executing smart contracts (immutable pieces of code stored on the blockchain)
according to the rules of the network that all clients agree to when running the network.

Because of the transactions being more than simple transfers of assets in a distributed ledger,
you can think of Ethereum as not just another blockchain.

---

# What is Ethereum?
.left-column.width-25[
1. It's a blockchain
2. It's a computer
]

.right-column.width-75[
The World's Largest and Most Expensive Computing Device

Ethereum Virtual Machine (EVM) Specs:
* Stack, 1024 stack limit
* Memory, 256-bit registers, max governed by gas limit
* Storage, unlimited ($$$), stored per Smart Contract
* Block Gas Limit, currently approx 7 million gas
* Gas price, fluctates based on usage (20 Gwei average)

*Check out* [Eth Gas Station](ethgasstation.info) *for transaction pricing information*
]

???

You could also think of Ethereum as a computer that is shared by the world.

The code stored in Ethereum's blockchain in smart contracts is executable by the EVM,
which is a simple, stack-based processor that validates proper execution of transactions
which modify the "State" or data storage of the Ethereum network.
The EVM is run on every node of the network, concurrently and in parallel, such that
each transaction execution results in the exact same modification of the underlying state
no matter what implementation of the node software is used.
Running the transactions correctly is part of the consensus process of including new blocks
to the blockchain, thus the EVM is the most important component of the node software.

Because each transaction is run concurrently on every node, there are potential attack
vectors to the network that arise from any computing device.
Any coding error such as an infinite loop (aka the Halting problem), stack overflow,
and others could be co-opted by an attacker to deny service of the network to other users.
In order to counteract this, the EVM introduces the concept of "Gas"

For every instruction executed on the EVM as part of a transaction, "Gas" is charged
according the resources used by the instruction, whether it be computing cycles, memory storage,
or storage to the global data store.
Transaction fees are charged according to the gas usage of the transaction and the "Gas price"
provided by the sender, and the miners recoup the resulting fees,
aka `Fees = Gas Price x Gas Used`.

Every transaction must be executable for less than the gas limit, which is an upper bound
chosen through consensus by the miners that secure the Ethereum network.
Any transaction that exceeds this upper bound will be recorded as rejected by the network,
and the corresponding fee will still be recouped for mining the block
that includes the failed transaction.

"Gas" isn't just charged for instruction use, but also for memory and storage use.
Ethereum could theorhetically store an unlimited amount of data "on-chain",
but there is a practical limit as the storage costs are currently many orders of magnitude
more than competiting data storage platforms.
Due to these costs, it often only useful to store critical data "on-chain",
which may include cryptographic hashes of off-chain data (such as evidence or legal documentation),
which can be used to "prove" submitted documentation corresponds to these stored hashes
at a later point in time.

---

# What is Ethereum?
.left-column.width-33[
1. It's a blockchain
2. It's a computer
3. It's really a database
]

.right-column.width-66[
A turing-complete database for the Decentralized Web!
]

???

In my opinion, the best way to think of Ethereum is a really interesting database backend for decentralized applications.
Like any database (MySQL, PostgreSQL, MSSQL, etc), Ethereum has ACID compliance: Atomicity, Consistency, Isolation, Durability

* Updates are "atomic", "concurrent", and "consistent", thanks to EVM execution of each transaction
* Data storage is "durable" thanks to the blockchain network's fault tolerant properties
* Schema + available Queries are stored in "Smart Contracts", which modify per-contract datastore
* Different data "endpoints" (Smart Contracts) can interact with other endpoints easily
* Transaction "receipts" show data commits (include Logs) easily for "Light Clients"
* Lookups are fast and secure, thanks to "Merkle Trees" (which you should totally look into

---

# Anatomy of an Ethereum Transaction

.left-column.width-25[
**Steps:**
* Signed by *External Account* (private key)
* Provides starting gas and gas price
* Gas is charged for each instruction used
* The remaining gas is refunded
* The transaction is mined into a block
]

.right-column.width-75[
![EVM](https://cdn-images-1.medium.com/max/800/1*UNCaS12SsPln7DEnRvcONQ.png)
]

???

---

# Anatomy of an Ethereum Transaction

.left-column.width-25[
**Different Receiver Accounts:**
* External Account
* Smart Contract

*Smart Contracts* can send each other transactions!
]

.right-column.width-75[
![Transactions](https://cdn-images-1.medium.com/max/1600/1*I635Y9btMh667inOhDBQ_g.png)
]

???

Ethereum is implemented using two different types of accounts, or addresses.

When you start using Ethereum, you will need an External Account,
which is a Public/Private keypair provided by your node software or hardware wallet.
You can have as many External Accounts as you desire.
External accounts can hold Ether, can interact with the external world,
and are (currently) the only way to create and pay for a transaction.
Each transaction is signed by the private key associated with the external account,
which determines the origination of the given transaction by verifying with the public key.

An external account can create a transaction that passes through one or more Smart Contracts.
Smart Contracts are compiled EVM bytecode stored at a specific location.
They interact with themselves and other addresses based on the rules stored immutable at their address.
They have data in the datastore which holds the state associated with their address.
You compile EVM Bytecode from a higher level language like Solidity or Viper,
and deploys that bytecode to a special address that forever assigns it to a new account.
Once bytecode is saved to a specific smart contract account by the deployment process,
it is impossible to modify that bytecode, unless operations are provided to allow it to be.

---

# Economics in Ethereum

.left-column.width-33.center[
The biggest innovation is *CryptoEconomics*

<img src="https://us.123rf.com/450wm/bruno135/bruno1351406/bruno135140604124/29490601-senior-male-graduate-holding-a-message-board-with-the-text-words-hire-me.jpg?ver=6" width="50%"/>

*Wait, I can use that Economics Degree?*
]

.right-column.width-50[
We can now (re-)write the Digital Economy!
* Token Economies - "Own your project"
* Self-soverign Identity - "Own your identity"
* Data Ownership - Well, you get the idea ("Own your data lol")
* Business Crowdfunding - "ICOs!"
* Fungible Rewards - "Wait, I can buy and sell skymiles?"
* Supporting Open Source Software! - "Hell yes!"
]

???

The real reason why Ethereum works is due to economic incentives.
The consensus and mining processes for adding to the blockchain are secured
using a combination of different economic incentives.
The way transactions are verified, processed and paid for also have to do with economics,
as the miners have incentives to mine transactions due to the fees they can recoup for doing so.
Decentralized applications also need to make use of economic incentives to ensure their featuresets
are not manipulated by a malicious third party, whether it be a botnet with 1000's of Ethereum addresses,
or a "whale" that has many orders of magnitude more tokens or ether than the average user.
Economics also dictate HOW you code, as you don't want hold vast amounts of funds in insecure smart contracts,
at least more than what either party is willing to lose.

The implications of this are probably the most exciting outcome of blockchain technology in general.
For the first time in history, we can re-write the economic rules of large industries and networks!
