import React from 'react';
import Content from './../content/poems.json'
import  Card  from './Card';



  const CardList = props => (
   
  <div className='card-list'>
{console.log(props)}
    {props.content.map((poemlist , index)=> (
        
      <Card key={index} poem={poemlist} />
    ))}
  </div>
);
export default CardList