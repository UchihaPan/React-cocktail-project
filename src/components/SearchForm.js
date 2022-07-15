import React from 'react'
import { useGlobalContext } from '../context'
import { useRef } from 'react'
import { useEffect } from 'react'

const SearchForm = () => {
  const {setsearchterm}=useGlobalContext()
  const searchvalue=useRef()

  useEffect(()=>{
    searchvalue.current.focus()

  },[])
  const  funr = () => {
    setsearchterm(searchvalue.current.value)


  }
  const  handleform = (e) => {
    e.preventDefault()


  }

  
  return (
    <section className="section search">
      <form  className="search-form" onSubmit={handleform} >
        <div className="form-control">
          <label htmlFor="name">Enter your favourite cocktail</label>
          <input type="text"  id='name' ref={searchvalue} onChange={funr} />
        </div>

      </form>
    </section>
  )
}

export default SearchForm
