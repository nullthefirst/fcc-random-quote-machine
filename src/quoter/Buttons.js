import React from 'react';

function Buttons(props) {
  return (
    <div className="button-group">
      <a
        href={props.tweetQuote}
        target="_blank"
        rel="noreferrer"
        id="tweet-quote"
        className="button">
        Tweet Quote
      </a>
      <span id="new-quote" className="button" onClick={() => props.newQuote()}>
        New Quote
      </span>
    </div>
  );
}

export default Buttons;
