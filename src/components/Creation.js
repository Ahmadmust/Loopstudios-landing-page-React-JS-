import React from 'react'
import data from '../data-mobile'

const Creation= ()=>{
    const [cards, setCards] = React.useState(data)
  return (
    <>
    <section className='creation-mobile'>
        <h2>our Creation</h2>
        <div className='creation-images'>
            {cards.map((card) =>{
                const {id,image,title} = card
                return(
                    <article key={id}>
                        <div>
                            <img src={image} alt=""></img>
                        </div>
                        <h3>{title}</h3>
                    </article>
                )
            })}
        </div>
        <button className='see-all'>See all</button>
    </section>
    </>
  )
}

export default Creation