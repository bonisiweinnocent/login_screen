import * as fun from 'everyday-fun';

export default function Quotes() {
  return {
    init() {
      this.getQuote();
      this.getJoke();
    },
    quote: {},
    jokes: {},

    getQuote() {
      this.quote = fun.getRandomQuote()
    },

    getJoke() {
      this.jokes = fun.getRandomJoke()
    }

  }

}