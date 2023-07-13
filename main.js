//! Math.floor() >= تستخدم لتقريب عدد عشري إلى أقرب عدد صحيح
//!  Math.random() تستخدم لإنشاء رقم عشوائي بين 0 و1. وتعتمد
/*
إذا كانت المصفوفة تحتوي على 5 اقتباسات، فإن
Math.random() ستنتج رقمًا عشوائيًا بين 0 و1، وعند ضربه بـ 5
(quotes.length) سيتم إنتاج رقم عشوائي بين 0 و4. ثم يتم استخدام
Math.floor() لتقريب هذا الرقم إلى أقرب عدد صحيح أصغر منه، مما يتيح
استخدام الرقم المقرب كفهرس (index) للاقتباس العشوائي في المصفوفة.

*/

var quotes = [
  "“Be yourself; everyone else is already taken.”<br> <br>― Oscar Wilde",
  "“So many books, so little time.” <br> <br>― Frank Zappa",
  "“A room without books is like a body without a soul.”<br> <br>― Marcus Tullius Cicero",
  "“You only live once, but if you do it right, once is enough.”<br> <br>― Mae West",
  "“Be the change that you wish to see in the world.” <br> <br>― Mahatma Gandhi",
  "“Always forgive your enemies; nothing annoys them so much.”<br> <br>― Oscar Wilde",
  "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
  "“It is better to be hated for what you are than to be loved for what you are not.”<br> <br>― Andre Gide, Autumn Leaves",
 " “If you tell the truth, you don't have to remember anything.”<br> <br>― Mark Twain"
];

var usedQuotes = [];

function displayRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomIndex];
  
  if (!usedQuotes.includes(quote)) {
    usedQuotes.push(quote);
    document.getElementById("click").innerHTML=(quote);
  } else {
    // reset the usedQuotes array
    if (usedQuotes.length == quotes.length) {
      usedQuotes = [];
    }
    displayRandomQuote();
  }
}