import React from 'react'
import ImgTestimonial from '../img/customers.jpg'

export const About = () => {
  return (
    <div>
    <div className='section1'>
    <h2 className= "chair-spacial">What makes our chairs special</h2>
    <div className="grid-3-col">
      <div className="grid item 1">
        <p className="nadpis">Science meets design</p>
        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus similique adipisci praesentium askromalen</p>
      </div>
      <div className="grid item 2">
        <p className="nadpis">Maximal comfort</p>
        <p className="text">Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis error maxime magnam.</p>
      </div>
    
      <div className="grid item 3">
        <p className="nadpis">Ethical and sustainable</p>
        <p className="text">Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat omnis est laudantium voluptatem voluptas!</p>
      </div>
        
    </div>
    </div>

<div className="grid-testimonial">
<img className="foto-testimonial" src={ImgTestimonial}/>
<div className="testimonial-box">
  <h2 className="testimonial-nadpis">"We couldn't live without these chairs anymore"</h2>
  <blockquote className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat at, nesciunt quia cum minima ipsum culpa totam sapiente recusandae earum debitis doloribus in quasi voluptatibus!</blockquote>
  <p className="testimonial-author">— Mary and Sarah Johnson</p>
</div>
</div>
</div>
    
  )
}
