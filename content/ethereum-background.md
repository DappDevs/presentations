# What is Ethereum?
.left-column.width-25[
1. It's a blockchain (duh)
]

.right-column.width-75[
![State Machine](https://cdn-images-1.medium.com/max/800/1*jZ-VRXBJtOnePofB0z2Q8A.png)
![Blockchain](https://cdn-images-1.medium.com/max/800/1*l_H58_pGm3XGwGoQlO9FVQ.png)
]

???

Well, it is a blockchain. [hilarity ensues]

Ethereum stores transactions on an immutable ledger, basically like any other blockchain.

What makes Ethereum special is that the transactions aren't simply the transfer of a coin,
but the execution of pre-programmed computer logic statements called Smart Contracts,
which can transfer valuable assets of any type or specification over a common framework.

For those who haven't learned too much about blockchains, a brief description:
A blockchain stores a series of transactions into blocks,
where each block is linked to the previous through network consensus rules.
Any modification of a "link" in the chain would be detectable,
so all other parties would know a change was made,
and can handle it appropriately.

Each of these transactions progresses the "state" of Ethereum, moving valuable assets
between parties by executing smart contracts (which are themselves stored in the "state").
Since all parties know and trust the rules by which smart contracts are executed,
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
* Gas price, fluctuates based on usage (20 Gwei average)

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
a transaction, this not only prevents the attacks from occurring, but rewards the miners for
their activity. Every user that sends a transaction is expected to pay a fee to get it accepted,
and that fee is transferred to the miner regardless of the success of the transaction.

The miners also agree on a gas limit, which is the total amount of gas a transaction can use.
Exceeding this limit will also fail the transaction, resulting in the miner getting all of
fees no matter what happens.

Due to these costs, it is only useful to store small programs and limited data "on-chain",
so a Dapp Developer must be very smart in determining what code and data is important enough
to live in Ethereum, and when to store it elsewhere.

---

# What is Ethereum?
.left-column.width-33[
1. It's a blockchain
2. It's a computer
3. It's really a database

A Turing-complete database for the Decentralized Web!

<br><br>
**Most Databases are ACID compliant**
]

.right-column.width-66[

![ACID](http://codes.pratikkataria.com/wp-content/uploads/2017/04/image.png)
]

???

In my opinion, the best way to think of Ethereum is a really interesting back-end database 
for decentralized applications.
Like most databases, Ethereum is ACID compliant,
meaning transactions are Atomic, Consistent, Isolated, and Durable

When a transaction is sent, it is applied atomically.
In Ethereum, this means if a transaction fails because it runs out of gas
or encounters an exception, then the transaction does not change the overall state.
All nodes process this transaction together, so the transaction is applied
"all or nothing" if confirmed by the network.

Since every node agrees to the underlying rules to participate in the network,
and how those rules are changed or extended through Smart Contracts,
that means that every transaction is "consistently" applied and no node will
disagree on the state.

Each transaction is applied in the order it was received, and since each
node is synchronized by block, all transactions are applied independently
and do not affect each other.
That is not to say that the order of the transactions is not important,
but that all nodes agree on the order of the transactions and how to apply them.

Lastly, thanks to the durability of the network, if even one of the
tens of thousands of Ethereum nodes is still up and running, then the network
is live and doesn't lose data. The up-time of Ethereum is almost 100%!

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
* Self-sovereign Identity - "Own your identity"
* Data Ownership - "Own your data" (you get the idea)
* Business Crowd-funding - "ICOs! Network effects!"
* Fungible Rewards - "Wait, I can buy and sell sky miles?"
* Supporting Open Source Software! - "Heck yes!"

<br><br>
*Are you excited? I'm excited. I hope I sound excited enough.*
]

???

What makes Ethereum really work though is economics, or *CryptoEconomics* as we like to call it.
CryptoEconomics is the process of designing economic incentives in order to reward good behaviors,
and punish bad behaviors, on a blockchain network.

For example, the consensus and mining processes for adding to the blockchain are secured
using a combination of different incentives including fees and the block reward.

Similarly, decentralized applications need to make use of economic incentives to ensure
their features are robust against attacks from bad actors in the system.

This might mean having a fee to protect against spam from a bot-net,
or adding a staking mechanism to protect against whales having undue influence.

Economics also dictate HOW you code.
Identifying risk and designing around it is a big part of designing in Ethereum.
You don't want hold vast amounts of funds in insecure smart contracts,
at least more than what anyone is willing to lose.

CryptoEconomics are probably the most exciting outcome of blockchain technology in general.
For the first time in history, we can write the rules of the digital economy!
