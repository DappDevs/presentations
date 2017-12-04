
# Let's Hack!
* Initialize a client node
* Get Ether from the faucet
* Create, build, and deploy a "smart-wallet" smart contract
* Participate in an "ICO" on the testnet
* Use tokens to bid on an auction and win a prize!

???

Enough talk, let's hack!

Here's what we're going to do

---

# Client node
* Download MetaMask extension for Chrome (or the Brave browser)
* Create a new encrypted DEN with your password
* **NOTE**: All networks use the same address **DO NOT FORGET THIS**

---

# Give me ETH!
* Visit [Rinkeby Faucet](https://faucet.rinkeby.io/)
* Create a public social media post with your MetaMask address
* Share the URL and ask for 18.75 Ethers

---

# Where do I put it?
* [Reference Wallet](./contracts/Wallet.sol)
* Not necessary, but encouraged
    * You can participate in the ICO via your client directly
* Write it in Solidity via [Remix](http://remix.ethereum.org/)
* Bonus points: Write it in [Viper](https://viper.tools/) instead!

---

# I Made This, Now What?
* Deploy via Remix through MetaMask
    * Specify "Injected Web3 Provider"
* Deploy raw bytecode via Remix or Mist

---

# What are these ICOs everyone is talking about?
* "Whitelist" (pre-register) with the [ICO contract](./contracts/ICO.sol)
    * I will give you the Address
* I will start the ICO once everyone has registered
* Buy Tokens with your Rinkeby Eth
    * ICO will last for 5 mins

---

# Beware the FOMO!!!
* Auction is secret
* Rules will hold and refund tokens
* [Source code](./contracts/SecretAuction.sol) (Parameters are [randomized](./contracts/deploy.py))
* Everyone has equally good odds of winning auction
    * Don't send all your tokens at once!
* The auction will last 10 minutes
    * or until someone figures out the winning strategy
* The prize is really, really awesome...
* **DO IT NOW!!!!!**
