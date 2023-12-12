

var arrayToRule = [
  {
    quote: `<P>"Beware of what you become in pursuit of what you want."<p/>`,
    author: `--Jim Roan`,
  },
  {
    quote:
      `<P>"It's not what happens to you, but how you react to it that matters."<p/>`,
    author: `--Epictetus`,
  },
  {
    quote: `<P>"The best revenge is massive success."<p/>`,
    author: `--Frank Sinatra`,
  },
  {
    quote: `<P>"You miss 100% of the shots you don't take."<p/>`,
    author: `--Wayne Gretzky`,
  },
  {
    quote:
      `<P>"Resentment is like drinking poison and waiting for your enemies to die."<p/>`,
    author: `--Nelson Mandela`,
  },
  {
    quote:
      ` <p>" Do not take life too seriously. You will not get out alive." <p/>`,
    author: `--Elbert Hubbard`,
  },
];

function test() {
  var x = Math.floor(Math.random() *arrayToRule.length);
  document.getElementById("chang").innerHTML = arrayToRule[x].quote + arrayToRule[x].author;
}
