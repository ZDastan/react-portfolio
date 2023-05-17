import React from 'react'
import PortfolioItem from "../components/PortfolioItem";
import { PortfolioList } from '../helpers/PortfolioList';


import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="Portfolio">
       <h1>Portfolio</h1>
       <div className="portfolioList">
        {PortfolioList.map((portfolio, idx) => {
          return (
            <PortfolioItem id={idx} name={portfolio.name} image={portfolio.image} GitHub={portfolio.GitHub}/>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio