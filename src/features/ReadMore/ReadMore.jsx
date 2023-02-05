import React, { useState } from "react";

import "./ReadMore.scss";

const ReadMore = ({ firstHalf, secondHalf }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      {firstHalf.map(item => (
        <ul type="1" key={item.step}>
          <div className="stepsList">
            <li>- {item.step}</li>
          </div>
        </ul>
      ))}
      {readMore &&
        secondHalf.map(item => (
          <ul key={item.step}>
            <div className="stepsList">
              <li>- {item.step}</li>
            </div>
          </ul>
        ))}
      <button onClick={() => setReadMore(prev => !prev)}>
        {readMore ? "Read Less" : "Read More..."}
      </button>
    </div>
  );
};

export default ReadMore;
