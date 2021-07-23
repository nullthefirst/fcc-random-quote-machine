import React from 'react';

function Buttons() {
  return (
    <div className="button-group">
      <a
        href="https://twitter.com/intent/tweet"
        target="_blank"
        rel="noreferrer"
        id="tweet-quote"
        className="button">
        Tweet Quote
      </a>
      <span id="new-quote" className="button">
        New Quote
      </span>
    </div>
  );
}

export default Buttons;