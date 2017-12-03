
# What is Ethereum?
1. It's a blockchain

![State Machine](https://cdn-images-1.medium.com/max/800/1*jZ-VRXBJtOnePofB0z2Q8A.png)
![Blockchain](https://cdn-images-1.medium.com/max/800/1*l_H58_pGm3XGwGoQlO9FVQ.png)

???

Specifically, a "Secure, Transaction-based State Machine"-on-a-Blockchain

Transactions are stored in blocks, which are mined at regular intervals

---

# What is Ethereum?
1. It's a blockchain
2. It's a computer

The Ethereum Virtual Machine (EVM) processes each transaction

EVM Specs:
* Stack, 1024 stack limit
* Memory, 256-bit registers
* Storage, Merkle Tree

![EVM](https://cdn-images-1.medium.com/max/800/1*UNCaS12SsPln7DEnRvcONQ.png)

???

# EVM
* EVM execution runs concurrently on all nodes
* EVM validates and computes state change for a given transaction
    * Happens before inclusion into block
    * All nodes validate blocks by checking that the transactions occured correctly

# Specs
* Stack limit exceedance is an error, reverts and cancels transaction
* Unlimited registers and storage
    * Very expensive to use memory and modify storage
* Pay-per-use of resources in "gas" (mitigates Halting Problem)

---

# What is Ethereum?
1. It's a blockchain
2. It's a computer
3. It's really a database

A turing complete decentralized database

<img src="https://cdn-images-1.medium.com/max/800/1*5xWwPX2R8d37MeWSFOJPnA.png" width="80%">

"Everyone should bow down and pray to Ralph Merkle" - Vitalik, DevCon3


???

* Lookups are fast, thanks to "Merkle Trees"
* Updates are atomic
* Transaction "receipts" show data commits (include Logs)
* Schema + Rules (Queries) are stored in "Smart Contracts", along with data
* Different data "endpoints" (Smart Contracts) can interact with other endpoints

---

# How does Ethereum work?
* Everything is an address (20 byte public key checksum)
* Two types of addresses:
    * "External Accounts"
    * "Smart Contracts" - Schema + Rules + Datastore

![Transactions](https://cdn-images-1.medium.com/max/1600/1*I635Y9btMh667inOhDBQ_g.png)

???

# External Accounts
* Private key corresponding to that address (Public Key)
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

# Solidity
* JavaScript-based syntax
* Enables a wide range of features for dapps
* current king

# Viper
* Easier, Python-like syntax
* Restricted language expressiveness (90% common solution)
* Formal Verification "batteries included"

# Others...

---

# Tools
* Clients 
    * Geth
    * Parity
    * MetaMask
* Web3
    * Web3.js
    * Web3.py
* IDEs
    * Truffle
    * Populus
    * Remix

???

# Clients
* Interact with Ethereum
* Basically access State and Send Transactions

# Web3
* Libraries for interacting with Ethereum on the Web

# IDEs
* Help write, test, and deploy Smart Contracts

Tools are still growing and changing at an incredible rate!
      
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
# Sharding
* "Enable the multiverse"
* "Shards" will be subscribable, e.g. you only get what you're interested in
* Shards share consensus with the main blockchain, have to break all shards

# Proof of Stake
* Reduces e-waste and energy consumption
* Will enable small-time hodlers to participate as much as large instiutions can

# Privacy e.g. Zcash collaboration
* "Zero knowledge proofs" - Private transactions
    * Basically "I know that you did this correctly" without knowing what you did
* Ring signatures
    * Basically I only know that someone in this group of addresses did this transaction
    * Make groups larger, make it expontentially harder to figure out the origination
* Privacy is important!
    * Refugees
    * Authoritarian Regimes
    * Private data (health records, financial statements)

Viper is intended to conquer Smart Contract Security

