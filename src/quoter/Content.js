import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      apiContent: [],
    };
  }

  componentDidMount() {
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
      return (
        <div>
          <h1>{this.getRandomQuote(apiContent)['text']}</h1>
          <p className="hue">{this.getRandomQuote(apiContent)['author']}</p>
        </div>
      );
    }
  }
}

export default Content;
