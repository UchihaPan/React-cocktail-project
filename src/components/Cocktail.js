import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,image,name,info,glass}) => {
  return (
   <article className="cocktail">
    <Link to={`cocktail/${id}`}>
    <div className="img-container">

      <img src={image} alt={name} />
      </div>

      </Link>


    <div className="cocktail-footer">
      <h2>{name}</h2>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={`cocktail/${id}`} className="btn btn-primary btn-details">
        More Info
      </Link>


    </div>
   </article>
  )
}

export default Cocktail
