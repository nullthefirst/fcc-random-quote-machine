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
    const maxIndex = content.length - 1;
    const randomIndex = Math.floor(Math.random() * maxIndex);
    const { author, text } = content[randomIndex];
    return [author, text];
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
          <h1>{this.getRandomQuote(apiContent)[1]}</h1>
          <p>{this.getRandomQuote(apiContent)[0]}</p>
        </div>
        // <ul>
        //   {apiContent.map((quote) => (
        //     <li>
        //       {quote.author} -- {quote.text}
        //     </li>
        //   ))}
        // </ul>
      );
    }
  }
}

export default Content;
