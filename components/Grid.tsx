import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {[
          {title: "Title1", description: "desc1" ,id:1},
          {title: "Title1", description: "desc1" ,id:2},
          {title: "Title1", description: "desc1" ,id:3},
          {title: "Title1", description: "desc1" ,id:4}
        ].map((item, i)=>(
          <BentoGridItem 
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid