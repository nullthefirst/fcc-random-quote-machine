import React from 'react';
import Buttons from './Buttons';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      apiContent: [],
    };
    this.fetchNewQuote = this.fetchNewQuote.bind(this);
  }

  fetchApiResults() {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then(
        (apiResult) => {
          this.setState({
            hasLoaded: true,
            apiContent: apiResult,
          });
        },
        (error) => {
          this.setState({
            hasLoaded: true,
            error,
          });
        },
      );
  }

  componentDidMount() {
    this.fetchApiResults();
  }

  fetchNewQuote() {
    this.fetchApiResults();
  }

  getRandomQuote(content) {
    // set maxIndex to last index number on incoming content
    const maxIndex = content.length - 1;
    // derive a random index using the maxIndex as a key variable
    const randomIndex = Math.floor(Math.random() * maxIndex);
    // return random quote object
    return content[randomIndex];
  }

  render() {
    const { hasLoaded, apiContent, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!hasLoaded) {
      return <div>Loading ...</div>;
    } else {
      const tweetContent = `https://twitter.com/intent/tweet?text=🔊 ${
        this.getRandomQuote(apiContent)['text']
      }  👤 ${
        this.getRandomQuote(apiContent)['author']
      }  🔗 https://null-fcc-random-quote-machine.netlify.app/`;
      return (
        <div>
          <h1 id="text">{this.getRandomQuote(apiContent)['text']}</h1>
          <p id="author" className="hue">
            {this.getRandomQuote(apiContent)['author']}
          </p>
          <Buttons tweetQuote={tweetContent} newQuote={this.fetchNewQuote} />
        </div>
      );
    }
  }
}

export default Content;
