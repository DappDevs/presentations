// Place all of your files here
sourceUrls = [
    'intro.md',
    'content/whats-a-dapp.md',
    'content/why-ethereum.md',
    'content/ethereum-history.md',
    'content/ethereum-background.md',
    'content/ethereum-technical.md',
    'content/ethereum-ecosystem.md',
    'content/ethereum-future.md',
    'content/how-to-dappdev.md',
    'questions.md'
];

var xmlhttp = new XMLHttpRequest();

var source = document.getElementById("source")

for (var i = 0; i < sourceUrls.length; i++) {
    xmlhttp.open('GET', sourceUrls[i], false);
    xmlhttp.send();

    if (i > 0) source.innerHTML += "---\n"
    source.innerHTML += "\n" + xmlhttp.responseText;
};

var slideshow = remark.create({
    ratio: '16:9',
    navigation: {
        scroll: false,
        touch: true,
        click: false
    },
});
