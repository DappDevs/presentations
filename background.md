
# What is Ethereum?
1. It's a blockchain

Specifically, a "Secure, Transaction-based State Machine"-on-a-Blockchain
![State Machine](https://cdn-images-1.medium.com/max/800/1*jZ-VRXBJtOnePofB0z2Q8A.png)
This is a Blockchain:
![Blockchain](https://cdn-images-1.medium.com/max/800/1*l_H58_pGm3XGwGoQlO9FVQ.png)

---

# What is Ethereum?
1. It's a blockchain
2. It's a computer

The Ethereum Virtual Machine (EVM) is a stack-based processor
* Stack, 1024 stack limit
* Memory, 256-bit registers
* Storage, unlimited storage ($$$)
* Pay-per-use of resources in "gas" (solves Halting Problem)
* [Ethereum Network Statistics](https://ethstats.net/)

---

# What is Ethereum?
1. It's a blockchain
2. It's a computer
3. It's really a database

A turing complete decentralized database engine
* Lookups are fast, thanks to "Merkle Trees"

"Everyone should bow down and pray to Ralph Merkle" - Vitalik, DevCon3
* Schema + Rules (Queries) are stored in "Smart Contracts"

---

# How does Ethereum work?
* Everything is an address (20 byte public key checksum)
* Two types of addresses:
    * "External Accounts" Basically Users
    * "Smart Contracts" Pieces of code
* External Accounts store Ether and start transactions
* Each node has 1 or more external accounts
* Smart Contracts are compiled bytecode stored at a specific location
* They interact with other addresses based on the rules

---

# Programming Languages

```javascript
/* Solidity (JavaScript-based syntax, current king) */
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
# Viper (python-based syntax, heavy development)
domains: { owner: address, ip: num }[bytes32]

def register(domain_name: bytes32):
    assert not self.domains[domain_name].owner
    self.domains[domain_name].owner = msg.sender

def set_ip(domain_name: bytes32, ip: num):
    assert self.domains[domain_name].owner == msg.sender
    self.domains[domain_name].ip = ip
```

---

# Tools
* Nodes (Geth, PyEVM, Parity)
* IDEs (Truffle, Populus, Remix)
* Web3 (Web3.js, Web3.py)
* Still Growing at an incredible rate
      
---

# Ethereum 2.0
* Three big problems:
    1. Scalability
    2. Privacy
    3. Smart Contract Security
* Sharding
    1. "Enable the multiverse"
    2. "Shards" will be subscribable, e.g. you only get what you're interested in
    3. Shards share consensus with the main blockchain, have to break all shards
* Proof of Stake
    1. Reduces e-waste and energy consumption
    2. Enable small-time hodlers to participate as much as large instiutions
* Zcash collaboration (zk-SNARKS)
    1. "Zero knowledge proofs" - Private transactions
    2. Basically "I know that you did this correctly"
* Viper
    1. Easier, Python-like syntax
    2. Restricted language expressiveness (90% common solution)
    3. Formal Verification "batteries included"
