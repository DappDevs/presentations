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

What makes Ethereum special is that the transactions aren't simply the transfer of a coin,
but the execution of pre-programmed computer logic statements called Smart Contracts,
which can transfer valuable assets of any type or specification over a common framework.

For those who haven't learned too much about blockchains, a brief decription:
A blockchain stores a series of transactions into blocks,
where each block is linked to the previous through network consensus rules.
Any modification of a "link" in the chain would be detectable,
so all other parties would know a change was made.

Each of these transactions progresses the "state" of Ethereum, moving valuable assets
between parties by executing smart contracts (which are themselves stored in the "state").
Since all parties know and trust the rules by which transactions are executed,
they can trust that the "state" has been correctly maintained.

Since Ethereum transactions are more than simple transfers of assets in a distributed ledger,
you can think of Ethereum as more than a blockchain.

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

Every transaction that is stored in the blockchain is processed by the Ethereum
Virtual Machine, a simple computing device that determines the "state" of Ethereum.
The EVM is run on every node of the network concurrently, such that
each transaction results in the exact same modification of the underlying state
no matter what implementation of the node software is used.
Since the "state" itself is one of the parameters logged in the block by the miners,
all parties agree that the state is consistent when they come to consensus via mining.

Because the EVM is a Turing Machine, it suffers from the Halting problem,
which means it's not possible to tell if a transaction will be computable in a finite amount of time.
This means it would be possible to stop the network from processing transactions,
and result in a denial of service.
To solve this, and many other potential attacks, Ethereum introduces the concept of Gas.

For every instruction executed in a transaction, "Gas" is charged according the resources
used, whether it be computing cycles, memory storage, or storage to the global data store.
The miners decide what they want the "gas price" to be in order to collect fees from processing
a transaction, this not only prevents the attacks from occuring, but rewards the miners for
their activity. Every user that sends a transaction is expected to pay a fee to get it accepted,
and that fee is transferred to the miner regardless of the success of the transaction.

The miners also agree on a gas limit, which is the total amount of gas a transaction can use.
Exceeding this limit will also fail the transaction, resulting in the miner getting all of
fees for processing your transaction.

Due to these costs, it is only useful to store small programs and limited data "on-chain",
so a Dapp Developer must be very smart in determining what code and data is important enough
to live in Ethereum, and when to store it elsewhere.

---

# What is Ethereum?
.left-column.width-33[
1. It's a blockchain
2. It's a computer
3. It's really a database

A turing-complete database for the Decentralized Web!

<br><br>
**Most Databases are ACID compliant**
]

.right-column.width-66[

![ACID](http://codes.pratikkataria.com/wp-content/uploads/2017/04/image.png)
]

???

In my opinion, the best way to think of Ethereum is a really interesting backend database 
for decentralized applications.
Like any database (MySQL, PostgreSQL, MSSQL, etc), Ethereum has ACID compliance:
Atomicity, Consistency, Isolation, Durability

When a transaction is sent, it is applied atomically.
In Ethereum, this means if a transaction fails because it runs out of gas
or encounters an exception, then the transaction is not applied.
All nodes process this transaction together, so the transaction is applied
"all or nothing" if confirmed by the network.

Since every node agrees to the underlying rules to participate in the network,
and how those rules are changed or extended through Smart Contracts,
that means that every transaction is "consistently" applied and no node will
disagree on the state.

Each transaction is applied in the order it was received, and since each
node is synchronized by block, all transactions are applied independantly
and do not affect each other.
That is not to say that the order of the transactions is not important,
but that all nodes agree on the order of the transactions and how to apply them.

Lastly, thanks to the amazing properties of the network, if even one of the
tens of thousands of Ethereum nodes are still up and running, then the network
remains consistent and doesn't lose data. The uptime of Ethereum is almost 100%!

---

# Ethereum Accounts

.left-column.width-25[
**2 Different Account Types**

*External Account*
* Originate Transactions
* Can be endpoints 

*Smart Contracts*
* Activated via External Account
* Perform stored code
* Can call more transactions
]

.right-column.width-75[
![Transactions](https://cdn-images-1.medium.com/max/1600/1*I635Y9btMh667inOhDBQ_g.png)
]

???

Ethereum is implemented using two different types of accounts, or addresses.

When you start using Ethereum, you will need an External Account,
which is a Public/Private keypair provided by your node software or hardware wallet.
You can have as many External Accounts as you desire.
External accounts can hold Ether and are (currently) the only way to create and pay for a transaction.
Each transaction is signed by the private key associated with the external account,
which verifies the origin of the given transaction using the the public key.

An external account can create a transaction that passes through one or more Smart Contracts.
Smart Contracts are compiled EVM bytecode stored at a specific location.

They interact with themselves and other accounts based on the code stored at their address.
You compile EVM Bytecode from a higher level language like Solidity or Viper,
and deploys that bytecode to a special address that forever assigns it to a new account.
Once bytecode is saved to a specific smart contract account by the deployment process,
it is impossible to modify that bytecode, unless operations are provided to allow it to be.

They also have a datastore which holds the state associated with their address.
Each smart contract's datastore is stored in the state trie, and the merkle root
of the state trie is stored in the blockchain after each set of transactions is applied.
This shows that all states are consistent when processing the chain.

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

A bit more of a detailed walk-through



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
