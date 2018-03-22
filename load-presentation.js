function getJsonFromUrl(hashBased) {
  var query;
  if(hashBased) {
    var pos = location.href.indexOf("?");
    if(pos==-1) return [];
    query = location.href.substr(pos+1);
  } else {
    query = location.search.substr(1);
  }
  var pos = query.indexOf("#");
  if (pos > 0) query = query.substring(0, pos);
  var result = {};
  query.split("&").forEach(function(part) {
    if(!part) return;
    part = part.split("+").join(" "); // replace every + with space, regexp-free version
    var eq = part.indexOf("=");
    var key = eq>-1 ? part.substr(0,eq) : part;
    var val = eq>-1 ? decodeURIComponent(part.substr(eq+1)) : "";
    var from = key.indexOf("[");
    if(from==-1) result[decodeURIComponent(key)] = val;
    else {
      var to = key.indexOf("]",from);
      var index = decodeURIComponent(key.substring(from+1,to));
      key = decodeURIComponent(key.substring(0,from));
      if(!result[key]) result[key] = [];
      if(!index) result[key].push(val);
      else result[key][index] = val;
    }
  });
  return result;
}

function toUpper(str) {
return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        return word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join(' ');
}

function kebabCaseToTitle(kebabCase) {
    // Needs to replace twice, one letter words screw this up
    return toUpper(kebabCase.replace("-"," ").replace("-"," "));
}

const urlParams = getJsonFromUrl(window.location.href);
var sourceUrls = ['intro.md', 'agenda.md'];
var questionsAdded = false;
const contentLocation = 'content/'

if (urlParams.content) {
    for (var i = 0; i < urlParams.content.length; i++) {
        if (!questionsAdded & urlParams.content[i][0] == '-') {
            questionsAdded = true;
            sourceUrls.push('questions.md');
        }
        if (urlParams.content[i][0] == '-') {
            sourceUrls.push('-'+contentLocation+urlParams.content[i]
                .substring(1, urlParams.content[i].length));
        } else {
            sourceUrls.push(contentLocation+urlParams.content[i]);
        }
    }
}

if (!questionsAdded) sourceUrls.push('questions.md');

var xmlhttp = new XMLHttpRequest();

var source = '';

const agenda = urlParams.content
    .filter(function(file) {
        // Ignore files that start with '-', these are extra files
        return file.charAt(0) != '-';
    })
    .map(function(file) {
        // Turn this into a markdown blleted list
        return "* "+kebabCaseToTitle(file.replace(".md",""))
    })
    .join('\n');

for (var i = 0; i < sourceUrls.length; i++) {
    var sourcefile = sourceUrls[i];
    var ignore = false;
    if (sourcefile[0] == '-') {
        ignore = true;
        sourcefile = sourcefile.substring(1, sourcefile.length);
    }
    xmlhttp.open('GET', sourcefile, false);
    xmlhttp.send();

    if (i > 0) source += "---\n"
    if (ignore) source += 'count: false\n';

    var content = xmlhttp.responseText;
    // Do the replaces
    content = content.replace('{{ title }}', urlParams.title);
    content = content.replace('{{ author }}', urlParams.author);
    content = content.replace('{{ agenda }}', agenda);

    if (ignore) content = content.replace('---', '---\ncount: false');
    source += "\n" + content;
};

var slideshow = remark.create({
    source: source,
    ratio: '16:9',
    navigation: {
        scroll: false,
        touch: true,
        click: false
    },
});
