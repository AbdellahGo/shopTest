import { useEffect, useState } from "react"
import axios from 'axios'


const Products = () => {



  const [productsData, setProductsData] = useState('')

  useEffect(() => {
      const fetch = async () => {
          const res = await axios.get('http://localhost:3000/products')
          setProductsData(res.data)
      }
      fetch()
  }, [productsData])

  return (
    <div className='products'>
      {productsData && productsData.map(({ id, title, image, price }) => (
        <div key={id} className='box'>
          <div className='image-box'>
            <img src={image} alt="image" />
          </div>
          <div className='text'>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products