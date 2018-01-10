background-image: url(https://www.ethereum.org/images/logos/ETHEREUM-LOGO_PORTRAIT_Black_small.png)

???

So, what's the best stack to program Dapps on?

We think Ethereum is the most exciting ecosystem to develop Dapps with,
and we'll tell you why!

---

# Why Ethereum?

**Ethereum by the Numbers:**
1. 10000+ Developers Worldwide
2. 1000+ Active Projects
3. Over 1m smart contracts
4. Over 18 million accounts
5. 200+ companies in the Ethereum Enterprise Alliance
6. Exactly 1 Vitalik

![Vitalik](https://i.warosu.org/data/biz/img/0012/13/1461563310243.jpg)

???

Our primary reason we believe Ethereum is the best framework to develop with
is that it has the greatest chance of success in the long term.

It has the most developer talent,
the most active, interesting projects,
the biggest use case of blockchain (which is smart contracts),
one of the highest continuous market caps of any cryptocurrency,
and by far the most optimism for the future (in my opinion).

Ethereum is very, very active in the development of all aspects
the dapp framework and ensuring that it is made possible,
with active research and extensive funding from the Ethereum Foundation,
major enterprise partners like Consensys, Microsoft, and Intel from the EEA,
and one of the brightest minds in the space at the helm of it all.

Even if Ethereum isn't ultimately the blockchain to rule all blockchains,
the skills and knowledge needed to learn distributed application development
will be transferrable to whatever competitors come into existance.
The major differences between Ethereum and other smart contract frameworks
are simply the underlying tradeoffs use to secure the blockchain,
and what programming language you use to write smart contracts.

Plus, *Ethereum* just sounds cool!

So what is Ethereum?

---

# What is Ethereum?
1. It's a blockchain (duh)

![State Machine](https://cdn-images-1.medium.com/max/800/1*jZ-VRXBJtOnePofB0z2Q8A.png)
![Blockchain](https://cdn-images-1.medium.com/max/800/1*l_H58_pGm3XGwGoQlO9FVQ.png)

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
1. It's a blockchain
2. It's a computer

The World's Largest and Most Expensive Computing Device

Ethereum Virtual Machine (EVM) Specs:
* Stack, 1024 stack limit
* Memory, 256-bit registers, max governed by gas limit
* Storage, unlimited ($$$), stored per Smart Contract
* Block Gas Limit, currently approx 7 million gas
* Gas price, fluctates based on usage (20 Gwei average)

*Check out* [Eth Gas Station](ethgasstation.info) *for transaction pricing information*

![EVM](https://cdn-images-1.medium.com/max/800/1*UNCaS12SsPln7DEnRvcONQ.png)

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
or storage to the smart contract's data store.
Transactions fees are charged according to the gas usage of the transaction and the "Gas price"
provided by the sender, and the miners recoup the resulting fees.
`Fees = Gas Price x Gas Used`

Every transaction must be executable for less than the gas limit, which is an upper bound
chosen by consensus by the miners that secure the Ethereum network.
Any transaction that exceeds this upper bound will be recorded as rejected by the network,
and the corresponding fee will be recouped by the miner for mining the block including the failed transaction.

"Gas" isn't just charged for instruction use, but also for memory and storage use.
Ethereum could theorhetically store an unlimited amount of data "on-chain",
but there is a practical limit as the storage costs are currently many orders of magnitude
more than any competiting data storage platform.
Due to these costs, it often only useful to store critical data "on-chain", including
cryptographic hashes of off-chain data (such as evidence or legal documentation),
which can be used to "prove" submitted documentation corresponds to these stored hashes
at a later point in time.

---

# What is Ethereum?
1. It's a blockchain
2. It's a computer
3. It's really a database

A turing-complete database for the Decentralized Web!

???

In my opinion, the best way to think of Ethereum is a really interesting database backend for decentralized applications.
Like any database (MySQL, PostgreSQL, MSSQL, etc), Ethereum has ACID compliance: Atomicity, Consistency, Isolation, Durability

* Updates are "atomic", "concurrent", and "consistent", thanks to EVM execution of each transaction
* Data storage is "durable" thanks to the blockchain's fault tolerant properties
* Arbitrary Schema + Rules (Queries) are stored in "Smart Contracts", along with per-contract datastore
* Different data "endpoints" (Smart Contracts) can interact with other endpoints easily
* Transaction "receipts" show data commits (include Logs) easily for "Light Clients"
* Lookups are fast and secure, thanks to "Merkle Trees" (which you should totally look into)

---

background-image: url(https://www.ethereum.org/images/logos/ETHEREUM-LOGO_PORTRAIT_Black_small.png)

???

Awesome, we now know what Ethereum is, but how does it work?
What do I need to know to code my Dapp in Ethereum?

---

# What Makes Ethereum Work?
1. Cryptographic Hashes
* Properties:
    * "Digital Fingerprint"
    * Collision Prevention
* Uses:
    * Data Origination
    * Data Obfuscation and Verification
    * Merkle Trees

<img src="https://cdn-images-1.medium.com/max/800/1*5xWwPX2R8d37MeWSFOJPnA.png" width="80%">

"Everyone should bow down and pray to Ralph Merkle" - Vitalik, DevCon3

???

Cryptographic hashes is at the heart of what enables Ethereum,
no blockchain technology would work without something that had the properties of the hashing function.
A hashing function is something that takes a set of data and performs an operation on that variable-sized data,
quickly returning a fixed-sized dataset (typically 32 bytes) representing that data, sort of like a "digital fingerprint".
It is a repeatable operation, i.e. it will always return the same output for a given input.
It is also considered a one-way operation, i.e. it is not feasible to determine the input from the output,
without manually computing all possible combinations of the input,
which is computationally infeasible without any additional information.

A cryptographic hash has some additional features that make it ideal for security-conscious uses like cryptocurrencies.
The first is that a cryptographic hash is collision-resistant,
i.e. is equally likely to inhabit any output value for a given input.
The second is that any small change in the input should produce a massive and uncorrelated change in the output,
which makes it easy to identify malicious or corrupt changes.
The last is that it should be computationally infeasible to find another set of data with the same hash as a given input.
This prevents the possibility of overwriting data stored with a different set of data that matches the given hash.

A cryptographic hash can be used to ensure the integrity of any given set of data,
one example being in the blockchain itself, where each block contains the cryptographic hash of the previous block,
so that each chain "locks" into the previous and prevents any one block from being modified without breaking the chain.
This works for data that isn't visible publicly, as a cryptographic hash of some private document can be verified by
any third party by simple running the cryptographic hash again and verifying the output.

Because Ethereum is storing so much data from so many parties,
and has to ensure the security and immutability of the data in a fast and efficient manner,
there was a need for an algorithm that can store and prove the integrity of arbitrary key-pairs.
The Merkle tree, a data structure patented by Ralph Merkle in 1979, was co-opted for this use.
It relies primarily on the properties of the cryptographic hash to enable secure data storage with
quick data access and verification, without having to store the entire data tree.

---

# What Makes Ethereum Work?
1. Cryptographic Hashes
2. Public Key Cryptography
* Everything is an account (stored at an address)
* Two types of accounts:
    * "External Accounts" - 20 bytes of public key hash
    * "Smart Contracts" - Schema + Rules + Datastore
* `2^160 = 1.46 x 10^48` total accounts

![Transactions](https://cdn-images-1.medium.com/max/1600/1*I635Y9btMh667inOhDBQ_g.png)

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

# What Makes Ethereum Work?
1. Cryptographic Hashes
2. Public Key Cryptography
3. Economics!

We can now (re-)write the Digital Economy!
* Token Economies - "Own your project"
* Self-soverign Identity - "Own your identity"
* Data Ownership - Well, you get the idea ("Own your data lol")
* Business Crowdfunding - "ICOs!"
* Fungible Rewards - "Wait, I can buy and sell skymiles?"
* Supporting Open Source Software! - "Hell yes!"

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

---

# Ethereum 2.0
* Three big problems:
    1. Scalability
    2. Privacy
    3. Smart Contract Security

Some solutions:
* Sharding - reduce scalabilty issues
* Proof of Stake - improve transaction finality
* Zcash collaboration - enable private transactions
* Vyper Smart Contract Langauge - more secure langauge

???

The future of Ethereum is very bright, but there are some problem areas that are in work.

Currently, the Ethereum network has a theorhetical limit of 15 transactions/sec,
which is much less than the 45k txns/sec that payment processors like Visa can manage,
and far, far less than what would be needed to enable general-purpose dapps.
Initiaves like Sharding and Proof of Stake are intended to reduce the costs,
both economic and computational, with running the Ethereum network, as well as
improve the transaction bandwidth to the level required to handle the demand of a
universe full of dapps.
Proof of Stake also has the nice side effect of nearly eliminating the environmental impacts
of safeguarding blockchain networks, the emissions of which, by 2020, will be more than
an industrialized western nation like Denmark.

In order to protect the privacy and security of the general population,
there needs to be a reasonable means of making private transactions.
For vulnerable populations like refugees and citizens of authoratarian regimes
this is especially important, with key members of the community promoting this
as one of the primary needs of users of this technonolgy.
Recently, the Ethereum community was able to integrate the technology behind
privacy-focused cryptocurrency Z-cash, which is called zk-SNARKS or "zero-knowledge proofs",
and send a private transaction that is secured by the public Ethereum network.
Future colloborations of this type are becoming increasingly important to the project.

Lastly, as some of you may know, there are big problems with Solidity,
the Smart Contract language Ethereum currently uses to create Dapps.
Almost a billion dollars of funds (at a Ether price of $1000) were lost since the project's inception,
a frankly unsustainable amount of money for the platform to be successful in the long term.
While Solidity was successful in getting web developers onboard early in the project's life,
security-orientated languages (like Vyper) will need to be developed that mitigate many of the
issues that have been discovered with smart contracts, and allow developers to create safe, optimal
contracts for their Dapps with minimal hassle and special knowledge.
