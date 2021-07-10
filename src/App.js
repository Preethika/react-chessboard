import React from 'react';
import './style.css';

export default function App() {
  let dim = 8;
  let arr = Array(8).fill(null);

  return (
    <div>
      <h1>Chess board!</h1>
      <div className="chess-board">
        {arr.map((elHorz, i) => {
          return (
            <div className="row">
              {arr.map((elVert, j) => {

                if(i%2 === 0 && j%2 === 1
                  || i%2 === 1 && j%2 === 0)
                  return <span className="el fill" />;
                else if(i%2 === 0 && j%2 === 0
                  || i%2 === 1 && j%2 === 1)
                  return <span className="el blank" />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
