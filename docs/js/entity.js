// TODO: make this generic enough so the script will crawl down all the nodes and place their values into a the right containers

function captureSvgCode() {
  const eachSvg = document.getElementsByTagName('svg');
  console.log(eachSvg);
}
captureSvgCode();

const encodedSvg = document.querySelector('svg').outerHTML;
// console.log(encodedSvg);
// put the value of the svg into the text
document.getElementById('nypl-logoArea').value = encodedSvg;

if (typeof escapeHtmlEntities == 'undefined') {
  escapeHtmlEntities = function(text) {
    return text.replace(/[\u00A0-\u2666<>\&]/g, function(c) {
      return '&' + (escapeHtmlEntities.entityTable[c.charCodeAt(0)] || '#' + c.charCodeAt(0)) + ';';
    });
  };

  // Partial List of HTML4 entities as defined here: http://www.w3.org/TR/html4/sgml/entities.html
  // added: amp, lt, gt, quot and apos
  escapeHtmlEntities.entityTable = {
    34: 'quot',
    38: 'amp',
    39: 'apos',
    60: 'lt',
    62: 'gt',
    160: 'nbsp',
  };
}

// get the chunk of html and run the escaper
// console.log(escapeHtmlEntities (encodedSvg));
const theEncodedCode = escapeHtmlEntities(encodedSvg);
// send the escaped output to the page:
const insertEntity = document.querySelector('pre code.xml');

insertEntity.insertAdjacentHTML('afterbegin', theEncodedCode);
// console.log(insertEntity);
