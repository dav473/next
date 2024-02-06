import React from 'react'

//Catch-all Segments


interface Props{
    params:{
        slug:string[]
    },
    searchParams:{sortOrder:string}
}
const ProductPage = ({params:{slug}, searchParams:{sortOrder}}:Props) => {
  return (
  //Catch-all Segments(
<>
<div>ProductPage URL in details is {slug}</div>
    <div>Sort order is {sortOrder}</div>

</>
    
  )
}

//Catch-all Segments
export default ProductPage