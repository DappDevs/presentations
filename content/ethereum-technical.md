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

Let's dive a little bit into the technical of Ethereum.

Ethereum is implemented using two different types of accounts, or addresses.

When you start using Ethereum, you will need an External Account,
which is a Public/Private key-pair provided by your node software or hardware wallet.

You can have as many External Accounts as you desire.
External accounts can hold Ether and are (currently) the only way to create and pay for a transaction.
Each transaction is signed by the private key associated with the external account,
which verifies the origin of the given transaction using the the corresponding public key.

An external account can create a transaction that passes through one or more Smart Contracts.
Smart Contracts are compiled EVM bytecode stored at a specific location.
You compile EVM Bytecode from a higher level language like Solidity or Viper,
and deploy that bytecode to a special address that forever assigns it to a new account.
Once bytecode is saved to a specific smart contract account by the deployment process,
it is impossible to modify that bytecode, unless the rules specifically allow it.

Smart Contracts interact with themselves and other accounts based on the code stored at their address.
They also have a datastore which holds the state associated with their address.
Each smart contract's datastore is generated locally, but a hash of the resulting state
is stored in the blockchain after each set of transactions is applied.
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

A bit more of a detailed walk-through of how a transaction works.

First, the client generates a set of data corresponding to the transaction,
such as the destination, how much value to send, and some other parameters.
Then that transaction is signed by the private key associated with the sender's account.

Next, the client provides an amount of gas to pay for the transaction and broadcasts it
to the entire Ethereum network.

A miner listening on the network will hear this broadcasted transaction and,
based on the gas price being paid and the gas limit stated,
they will begin processing that transaction for inclusion into the block they are mining.

For the first destination of the transaction, any Ether is transferred and any
code available at the destination gets executed according the data provided.
If the call matches a function definition, it will execute that function with the given
parameters, recording each instruction and how much gas it uses.

If the function contains another function call, this cycle repeats and
the call will forward to the appropriate contract's function and additional gas will be used.
When the call completes, the total gas usage is recorded, multiplied by the gas price,
and the resulting fee is debited from the sender and credited to the miner.

That processed transaction is then committed to the ledger (including a hash of the corresponding
state post-execution), and mined along with several other transactions into a block.

Every miner on the network is attempting to convince the others that they have the latest block.
The first one to solve the PoW puzzle will get their block accepted, and they will receive
the block reward and any fees from the transactions they process.

The transaction is now on the blockchain!
