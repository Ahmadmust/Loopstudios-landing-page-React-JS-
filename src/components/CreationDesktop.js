import React from 'react'
import data from '../data-desktop'

const Creation= ()=>{
    const [cards, setCards] = React.useState(data)
  return (
    <>
    <section className='creation-desktop'>
       <div className='creation'>
       <h2>our Creation</h2>
        <button className='see-all'>See all</button>
       </div>
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
    </section>
    </>
  )
}

export default Creation