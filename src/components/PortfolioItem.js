import React from "react";
import { useNavigate } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

function PortfolioItem({ image, name, id, GitHub }) {
  const navigate = useNavigate();
  return (
    <div
      className="portfolioItem"
      onClick={() => {
        navigate("/portfolio/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <a href={GitHub}><GitHubIcon/></a>
    </div>
  );
}

export default PortfolioItem;