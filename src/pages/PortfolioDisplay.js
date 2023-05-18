import React from "react";
import { useParams } from "react-router-dom";
import { PortfolioList } from "../helpers/PortfolioList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/PortfolioDisplay.css";

function PortfolioDisplay() {
    const { id } = useParams();
  const portfolio = PortfolioList[id];

  return (
    <div className="portfolio">
        <h1> {portfolio.name}</h1>
      <img src={portfolio.image} />
      <p>
        <b>Skills:</b> {portfolio.skills}
      </p>
      <GitHubIcon />
    </div>
  )
}

export default PortfolioDisplay