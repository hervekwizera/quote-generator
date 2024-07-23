let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"the best way to find yourself is to lose yourself in the
    service of others"`,
    person: `Mahatma gandi`
},
{
    quote: `"if you want to live a happy life , tie it to a goal, not
    to people or things"`,
    person: `Albert Einstein`
},
{
    quote: `"at his best, man is the noblest of all animals;separated
    from law and justice he is the worst."`,
    person: `Aristotle`
},
{
    quote: `"your time is limited , so dont waste it living someone
    else's life"`,
    person: `Steve Jobs`
},
{
    quote: `"tell me and i forget. teach me and i remember.Involve me
    and i learn"`,
    person: `Benjamin Franklin`
},
{
    quote: `"if you look at what you have in life, you'll always have
    more. if you look at what you don't have in life, you'll never 
    have enough"`,
    person: `Oprah winfrey`
},
{
    quote: `"it does not matter how slowly you go as long as you do not
    stop"`,
    person: `confucius`
},
{
    quote: `"Our life begin to end the day we become silent about
    things that matter."`,
    person: `Martin Luther king, Jr.`
},
{
    quote: `"remember that not getting what you want is sometimes a
    wonderful stroke of lucky."`,
    person: `Dalai lama`
},
{
    quote: `"a journey of a thousand miles begins with one step."`,
    person: `Lao tzu`
}

];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})