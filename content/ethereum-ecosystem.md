# The Ethereum Ecosystem

* Clients (Full and Light)
    * [MetaMask](https://metamask.io/), [Mist/geth](https://github.com/ethereum/mist/releases), [MyEtherWallet](http://myetherwallet.com/), etc.
* Programming Langauges
    * [Solidity](http://solidity.readthedocs.io/en/develop/), [Vyper](http://vyper.readthedocs.io/en/latest/), [Bamboo](https://github.com/pirapira/bamboo/blob/master/doc/manifest.md)
* Tools (Web3, IDEs, etc.)
    * [Web3.js](http://web3js.readthedocs.io/en/latest/), [Web3.py](http://web3py.readthedocs.io/en/stable/), [Truffle](http://truffleframework.com/docs/), [Populus](http://populus.readthedocs.io/en/latest/), etc.

See [GitCoin.co](https://gitcoin.co/explorer) to earn Eth for contributions!

???

There are many different pieces of the Ethereum Ecosystem.
They broadly fall into the following categories.

Client software, aka Nodes, includes any of the many implementations
that allow you to interact with the blockchain, and create new transactions.
They typically include means to create and manage Public/Private keypairs,
including importing old accounts and using devices like hardware wallets.
Some clients can be run in a "light client" configuration,
which does not verify blocks or other aspects of the protocol that are resource intensive,
only what is necessary to securely interact with Ethereum in order to use a Dapp.

Ethereum has several programming langauges that allow dapp developers to create and maintain
EVM bytecode for projects in higher level langauges such as Solidity and Viper.
These are compiled languages, with specialized functionality for primatives required by Ethereum,
such as the parameters for messages, transactions, and blocks.
This is the bread and butter of the decentralized application developer's toolkit.

There are many tools for the Ethereum ecosystem that are in development, as the ecosystem is so young.
Web3, with an implementation available in many languages, including Javascript, Haskell, and Python,
is a library that allows interactions with Smart Contracts on the Ethereum blockchain,
including creating transactions and querying data from Smart Contracts.
This not only enables web apps to integrate with Ethereum, but also headless applications
leveraging Machine Learning, Artificial Intelligence, and IoT technology, as well as a myriad
of other technologies.

There is also several IDEs to help you with development of your decentralized applications.
Truffle is the most popular framework, based on NodeJS and integrating with all your favorite JS tools.
Populus is another one under development by the Ethereum Foundation, targeting Python Developers.

The amount of tools is growing at an unbelievable rate, and you will often find them unintuitive
or occasionally buggy.
Therefore, let me encourage you that a part of being a Dapp developer is contributing to the open source projects
that underpin these tools and software you'll need for your everyday development.
This could be from helping identify issues you might find or contributing code that implements features or fixing bugs.
You'll find contributing is quite rewarding, and many of these offer bounties for contributions on major issues and new features
through projects like GitCoin!

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
# Vyper
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
* Most projects use Solidity

# Vyper
* More succinct, Python-like Syntax
* Under active development
* I am a contributor
