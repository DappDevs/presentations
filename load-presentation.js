// Place all of your files here
sourceUrls = [
    'intro.md',
    'content/whats-a-dapp.md',
    'content/why-ethereum.md',
    'content/ethereum-history.md',
    'content/ethereum-background.md',
    'content/ethereum-technical.md',
    'content/ethereum-future.md',
    'content/how-to-dappdev.md',
    'questions.md',
    '-content/references.md',
    '-content/ethereum-ecosystem.md',
];

var xmlhttp = new XMLHttpRequest();

var source = document.getElementById("source")

for (var i = 0; i < sourceUrls.length; i++) {
    var sourcefile = sourceUrls[i];
    var ignore = false;
    if (sourcefile[0] == '-') {
        ignore = true;
        sourcefile = sourcefile.substring(1, sourcefile.length);
    }
    xmlhttp.open('GET', sourcefile, false);
    xmlhttp.send();

    if (i > 0) source.innerHTML += "---\n"
    if (ignore) source.innerHTML += 'count: false\n';

    var content = xmlhttp.responseText;
    if (ignore) content = content.replace('---', '---\ncount: false');
    source.innerHTML += "\n" + content;
};

var slideshow = remark.create({
    ratio: '16:9',
    navigation: {
        scroll: false,
        touch: true,
        click: false
    },
});
