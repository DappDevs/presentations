
.left-column.width-50[
# What is a Dapp?

A Dapp is a *Decentralized Application*

**Facts:**
1. Users like Web-connected Apps
2. Apps come from The Internet
3. The Internet uses servers
4. Servers are complicated
5. Apps run on AWS instead

**Centralization Problems:**
1. Central point of failure
2. Empowers central parties
3. Monopolization Risk
4. Doesn't scale
5. Reduced bandwidth

]


.right-column.width-50[
<br>
<br>
![Network Topology](http://www.truthcoin.info/images/cent-decent.png)

(No dapp presentation is complete without this figure)
]

???

*Decentralized* might be an unfamiliar term for some,
but everyone here knows what a software application is.
Most software applications work because they are networked
to other users of the application through what we call *The Internet*.

The Internet, as it exists today, serves these applications to users
from centralized servers that provide the application developers's code
to the client's browser so they can run the applications they want.
After they get the application, they also use the server to read and store
data from the application, so they don't have to worry about storing it themselves.
Everyone trusts the server to provide the right code, store the right data,
and not lose or change the information in a malicious way.

When we use centralized applications, we accept certain issues with this design.
For example, if that central authority were to fail or become malicious,
we risk losing access to our applications and our data.
We also give this party undue power by having them be custodians of our apps and data.
This leads to the risks of exclusive control:
uncompetitive practices, higher costs, reduced innovation.

On top of that, we also accept performance problems.
If you have an app that really takes off, it requires provisioning thousands
of new servers on AWS or some other provider to meet demand.
Routing all these applications through these centralized nodes
reduces speeds, taking more bandwidth to accomplish a simple task.

---

.left-column.width-50[
# Decentralized Apps

**What we needed:**
1. Powerful Client Devices
2. Content Delivery Networks
3. Client-Side Frameworks
4. Great UX and UI
5. Blockchains to store critical data

![CryptoKitties](https://www.cryptokitties.co/images/landing-kitty06.svg)

*Also, we need more CryptoKitties*
]

.right-column.width-50[
<br><br><br>
![CryptoKitties Mobile](http://www.cryptokitties.care/wp-content/uploads/2017/12/Screen-Shot-2017-12-13-at-7.27.46-PM.png)
]

???

So, if centralization is bad, how do we create apps that aren't centralized?

We already have most of the technology required to build a decentralized app.
Computers are more powerful they've ever been. Today's smartphones can run more
sophisticated applications than the super computers of the 90's.
We have technologies that let us serve content quickly and easy from any server.
We have Javascript frameworks that let us build client-side applications without
needing any server code.
We have people who are experts in creating great user experiences and graphical interfaces.
And now we finally have blockchains, a way to ensure that important logic and data
gets stored securely and transparently.

Most of these technologies are state of the art as of the past few years,
and now that we finally have them all, we can start building decentralized applications!

---

# Architecture of a Dapp?

![Dapp](https://blog.ethereum.org/wp-content/uploads/2016/07/Screen-Shot-2016-07-08-at-5.37.32-PM.png)

???

So what is a decentralized application *technically*?

Well, let's start with user's devices. These are the core of any application.
They provide the client that the user interacts with.
They can be a cell-phone, laptop, smartwatch, IoT Fridge, hardware wallet, smart toaster,
whatever device that has a processor and enough memory and storage to run the application and it's framework.
In a Dapp, each user device will store one or more cryptographic key pairs,
identifying that client by giving it a unique *address* on the Ethereum network.

The user device must also run application code. In a typical webapp, this means running
HTML and Javascript code in a browser, including any Javascript frameworks that are required.
This will keep evolving as we learn the best ways for clients to load and run application code.

But where does this code come from? The Content Delivery Network provides that.
Unlike traditional Content Delivery Networks, CDNs for Dapps won't be controlled by centralized servers.
The files stored on a CDN will become a commodity that is served by a combination of user devices
and servers incentivized to serve content via file storage networks like Sia and Storj.
When a client requests an app it doesn't already have the latest version of, it will use this CDN
and download the code in parallel from many different servers and other clients, like Bittorrent.
Temporary storage for data like messages and alerts will be provided in a similar manner.
This will massively improve speed and reliability of dapps over their centralized counterparts.

Of course, blockchains are the major enabling technology for Dapps.
Not just for sending magic internet money anymore,
it is really the *backend* of the distributed internet.
Data like user profiles, application state, and the rules for interacting and manipulating that data
are all publically available and immutable, enabling dapps to avoid the need to store duplicate data
on centralized servers that are prone to hacks and data losses and endless user frustrations.
This will not only enable our dapps to trustlessly interact with each other,
but much of the underlying infrastructure will be built on this technology as well.

Every component of the Dapp is open source, auditable,
and designed to be secure against unauthorized tampering.
The private keys used to provide access to your user credentials or upload files to the CDN
are yours and yours alone, never having to leave your device.
