
// random number generator
function randomNum (num) {
    return Math.floor(Math.random() * num);
  }
  
  // quotes from famous people to be selected at random via an index
  const quotes = {
    mohatmaGandhi: ['Change yourself – you are in control.',
                   'Without action, you aren’t going anywhere.',
                   'The difference between what we do and what we are capable of doing would suffice to solve most of the world’s problems.',
                   'Happiness is when what you think, what you say, and what you do are in harmony.',
                   'You must be the change you wish to see in the world.'],
  
    dalaiLama: ['The goal is not to be better than the other man, but your previous self.',
               'Share your knowledge. It is a way to achieve immortality.',
               'A disciplined mind leads to happiness, and an undisciplined mind leads to suffering.',
               'Our prime purpose in this life is to help others. And if you can\'t help them, at least don\'t hurt them.',
               'Carefully consider, what prevents you from living the way you want to live your life?',
               'An open heart is an open mind.'],
    albertEinstein: ['Only a life lived for others is a life worthwhile.',
                    'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
                    'A person who never made a mistake never tried anything new.',
                    'Try not to become a man of success, but rather try to become a man of value.',
                    'Life is like riding a bicycle. To keep your balance, you must keep moving.']
  };
  
  // variable to hold each randomly selected quote
  const quoteArr = [];
  
  // function to loop through each key value pair of the quotes object and push each randomly selected 
  // quote to the quoteArr veriable
  function chooseQuote() {
    for (let person in quotes) {
      let index = randomNum(quotes[person].length);
      if (person === 'mohatmaGandhi') {
        quoteArr.push(`Mohatma Gandhi quote: ${quotes[person][index]}`);
      }
      else if (person === 'dalaiLama') {
        quoteArr.push(`Dalai Lama quote: ${quotes[person][index]}`);
      }
      else {
        quoteArr.push(`Albert Einstein quote: ${quotes[person][index]}`);
      }
    }
    // joins the quoteArr to output a string and adds 2 new lines between each quote
    console.log(quoteArr.join('\n\n'));
  }
  // calls the chooseQuote function
  chooseQuote();
  
  