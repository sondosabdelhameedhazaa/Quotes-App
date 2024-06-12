var quotes = [
    { quote: "“Things change. And friends leave. Life doesn't stop for anybody.”", author: "― Stephen Chbosky" },
    { quote: "“Life isn't about finding yourself. Life is about creating yourself.”", author: "― George Shaw" },
    { quote: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde" },
    { quote: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West" },
    { quote: "“We accept the love we think we deserve.”", author: "― Stephen Chbosky" },
    { quote: "“Without music, life would be a mistake.”", author: "― Friedrich Nietzsche" },
    { quote: "“Be the change that you wish to see in the world.”", author: "― Mahatma Gandhi" },
    { quote: "“In three words I can sum up everything I've learned about life: it goes on.”", author: "― Robert Frost" },
    { quote: "“If you tell the truth, you don't have to remember anything.”", author: "― Mark Twain" },

]
var lastnumber;
var alreadydisplayed = [];
function getquote() {

    if (alreadydisplayed.length == quotes.length) {
        alreadydisplayed = [];
    }

    do { var newnumber = Math.floor(Math.random() * quotes.length); }
    while (lastnumber == newnumber || alreadydisplayed.includes(newnumber));
    lastnumber = newnumber;
    alreadydisplayed.push(newnumber);
    console.log(alreadydisplayed);
    console.log(newnumber);
    write(quotes[newnumber].quote, 'quote')
    write(quotes[newnumber].author, 'author')

}

function write(string, place) {
    var typed = new Typed(`#${place}`, {
        strings: [string],
        typeSpeed: 10,
        showCursor: false,
    });
}
