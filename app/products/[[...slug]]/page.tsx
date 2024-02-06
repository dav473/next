import React from 'react'

//Catch-all Segments


interface Props{
    params:{
        slug:string[]
    }
}
const ProductPage = ({params:{slug}}:Props) => {
  return (
  //Catch-all Segments(
    <div>ProductPage URL in details is {slug}</div>
  )
}

//Catch-all Segments
export default ProductPage