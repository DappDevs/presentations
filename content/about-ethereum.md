background-image: url(https://www.ethereum.org/images/logos/ETHEREUM-LOGO_PORTRAIT_Black_small.png)

???

{Segue into "What is Ethereum"}

---

# What is Ethereum?
1. It's a blockchain (duh)

![State Machine](https://cdn-images-1.medium.com/max/800/1*jZ-VRXBJtOnePofB0z2Q8A.png)
![Blockchain](https://cdn-images-1.medium.com/max/800/1*l_H58_pGm3XGwGoQlO9FVQ.png)

???

Yes, it is a blockchain

Specifically, a "Secure, Transaction-based State Machine"-on-a-Blockchain

The transactions are stored in blocks, which are mined at regular intervals

Due to the blockchain properties, any accepted transaction becomes immutable

---

# What is Ethereum?
1. It's a blockchain
2. It's a computer

The World's Largest and Most Expensive Computing Device

Ethereum Virtual Machine (EVM) Specs:
* Stack, 1024 stack limit
* Memory, 256-bit registers, max governed by gas limit
* Storage, unlimited ($$$), stored per Contract in a Merkle Tree

![EVM](https://cdn-images-1.medium.com/max/800/1*UNCaS12SsPln7DEnRvcONQ.png)

???

TODO: we may need to clarify `gas` and `merkle tree` here
also who is running the EVM? miners? how?

Ethereum is also a computer. A really big one, that's also really simple

# EVM
* Processes every transaction before inclusion into the Ethereum Blockchain
* EVM execution runs concurrently on all nodes
* EVM validates and computes state change for each transaction
    * Transactions that cause exceptions are rejected

# Specs
* Pay-per-use of resources in "gas" (mitigates Halting Problem)
* Gas Limit practically limits the amount of computation that can occur
* Nearly unlimited storage
* Very expensive to use resources and modify storage

---

# What is Ethereum?
1. It's a blockchain
2. It's a computer
3. It's really a database

A turing-complete database for the Decentralized Web!

???

In my opinion, the best way to think of Ethereum is as a really interesting database
Properties of an ACID Database (MySQL, PostgreSQL, MSSQL, etc): Atomicity, Consistency, Isolation, Durability

* Updates are "atomic", "concurrent", and "consistent", thanks to EVM execution
* Data storage is "durable" thanks to the blockchain
* Lookups are fast, thanks to "Merkle Trees" (TODO: define this sooner?)
* Transaction "receipts" show data commits (include Logs) easily for "Light Clients"
* Arbitrary Schema + Rules (Queries) are stored in "Smart Contracts", along with contract datastore
* Different data "endpoints" (Smart Contracts) can interact with other endpoints easily

---

# How does Ethereum Work?
1. Lots of Accounts
* Everything is an account (or address)
* Two types of addresses:
    * "External Accounts" - 20 bytes of public key hash
    * "Smart Contracts" - Schema + Rules + Datastore

![Transactions](https://cdn-images-1.medium.com/max/1600/1*I635Y9btMh667inOhDBQ_g.png)

???

Ethereum is implemented using two different types of accounts, or addresses

# External Accounts
* Public/Private key pair corresponding to a particular address
* External Accounts can store Ether and originate (sign) transactions
* There is no code associated with an External Account
* Could be:
    * Software-managed Wallet (e.g. MetaMask, Mist, etc.)
    * Hardware-managed Wallet (e.g. Ledger, Trezor, etc.)
    * Paper Wallet (don't do this except for cold storage)

# Smart Contracts
* Smart Contracts are compiled bytecode stored at a specific location
* They interact with themselves and other addresses based on the rules
* They have data in the datastore (state) associated with their address
* They have a spec for their datastore, so EVM knows how to interact with storage

You write EVM Bytecode in a higher level language like Solidity or Viper

TODO: tell a use case / user story. Example: flight insurance

---

# How does Ethereum Work?
1. Lots of Accounts
2. Cryptographic Primatives and Merkle Trees

Also Powers Underlying Tech:
* Cryptographically-secure hashing
    * Collision Prevention
    * Data Origination
    * Data Obfuscation and Verification
* Merkle Trees

<img src="https://cdn-images-1.medium.com/max/800/1*5xWwPX2R8d37MeWSFOJPnA.png" width="80%">

"Everyone should bow down and pray to Ralph Merkle" - Vitalik, DevCon3

???
Cryptography is at the heart of what Ethereum does, but it also enables some of th underlying tech:

Because Ethereum is storing so much data,
and has to ensure the security and immutability of the data in a fast and efficient manner,
there was a need for an algorithm that can store and prove the integrity of arbitrary key-pairs.

Merkle trees

TODO: maybe move this slide up earlier

---

# How does Ethereum Work?
1. Lots of Accounts
2. Cryptographic Primatives and Merkle Trees
3. Economics!

We can now (re-)write the Digital Economy!
* Token Economies - "Own your project"
* Self-soverign Identity - "Own your identity"
* Data Ownership - Well, you get the idea ("Own your data lol")
* Business Crowdfunding - "ICOs!"
* Fungible Rewards - "Wait, I can buy and sell skymiles?"
* Supporting Open Source Software! - "Hell yes!"

???

TODO: I think we should re-organize the materials a little
a rough idea to start a conversation
1. What is a vanilla crypto currency
2. History (why did the ETH project start)
3. What makes ETH different
4. How does one use the ETH network (user stories)

For the first time in history, we can re-write the economic rules of large industries.
Ethereum enables some facinating new economic rules for interacting with the digital economy.

---

# Ethereum 2.0
* Three big problems:
    1. Scalability
    2. Privacy
    3. Smart Contract Security

* Some solutions:
    * Sharding - "The multiverse approach"
    * Proof of Stake - "Consensus via Financial Incentives"
    * Zcash collaboration - zk-SNARKS in Ethereum
    * Viper Smart Contract Langauge

???

The future of Ethereum is very bright, but there are some problem areas

# Sharding
* "Enable the multiverse"
* "Shards" will be subscribable, e.g. you only get what you're interested in
* Shards share consensus with the main blockchain, have to break all shards

# Proof of Stake
* Reduces e-waste and energy consumption
* Will enable small-time hodlers to participate as much as large instiutions can

# Privacy e.g. Zcash collaboration
* "Zero knowledge proofs" - Private transactions
    * "I know that you did this correctly" without knowing what you did
* Ring signatures
    * I only know that someone in this group of addresses did this transaction
* Privacy is important!
    * Authoritarian Regimes and marginalized groups
    * Private data (health records, financial statements)

Viper is intended to conquer Smart Contract Security

---

# The Ethereum Ecosystem

* Clients
* Programming Langauges
* Tools

???

There are many different pieces of the Ethereum Ecosystem

---


# Programming Languages

```javascript
/* Solidity */
contract DNS {
    mapping (bytes32 => {address owner, uint128 ip}) domains
    function register(bytes32 domainName) {
        require(domains[domainName].owner == 0x0);
        domains[domainName].owner = msg.sender;
    }
    function setIP(bytes32 domainName, uint128 ip) {
        require(domains[domainName].owner == msg.sender);
        domains[domainName].ip = ip;
    }
}
```

```python
# Viper
domains: { owner: address, ip: num }[bytes32]

def register(domain_name: bytes32):
    assert not self.domains[domain_name].owner
    self.domains[domain_name].owner = msg.sender

def set_ip(domain_name: bytes32, ip: num):
    assert self.domains[domain_name].owner == msg.sender
    self.domains[domain_name].ip = ip
```

???

Speaking of programming languages, there are a few different options in the Eth ecosystem

# Solidity
* JavaScript-like syntax
* Fully featured
* Wide range of use cases for dapps
* Current king

# Viper
* Easier, Python-like syntax
* Designed to be secure (vs. fully featured)
* Restricted language expressiveness (80% common use solutions)
* Formal Verification "batteries included"
* I contribute!

# Others...

---

# Tools
* Node Clients
    * [Geth](https://geth.ethereum.org/)/[Mist](https://github.com/ethereum/mist/releases)
    * [Parity](https://parity.io)
    * [MetaMask](https://metamask.io/)
* Web3
    * [Web3.js](https://github.com/ethereum/web3.js/)
    * [Web3.py](https://github.com/ethereum/web3.py)
* IDEs and Deployment Management Platforms
    * [Truffle](http://truffleframework.com/)
    * [Populus](https://github.com/ethereum/populus)
    * [Remix](http://remix.ethereum.org/)

???

Some of the tools in the Ethereum Ecosystem we use are

# Nodes or Clients
* Interact with Ethereum
* Basically access State and Send Transactions
* Can be Full (validates all blocks and transactions in blockchain)
* Or Light (only verify integrity and obtains state using Merkle Trees)
* Or Thin (doesn't validate or verify anything, trusts 3rd party)

# Web3
* Interface to the web browser
* Libraries for interacting with Ethereum on the Web

# IDEs and Deployment Management Platforms
* Help write, test, and deploy Smart Contracts
* Remix is suggested for introductory use only

Tools are still growing and changing at an incredible rate!

