import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const data = {
  categories: [
      {
          id: 1,
          image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-1.jpg&w=96&q=75',
          title: 'Vegetables',
          numberOfItem: 7
      },
      {
          id: 2,
          image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-1.jpg&w=96&q=75',
          title: 'Fresh Fruits',
          numberOfItem: 2
      },
      {
          id: 3,
          image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-1.jpg&w=96&q=75',
          title: 'Fruit Drink',
          numberOfItem: 3
      },
      {
          id: 4,
          image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcatagory%2Fcategory-1.jpg&w=96&q=75',
          title: 'Fresh Bakery',
          numberOfItem: 9
      }
  ],
  products: [
      {
          id: 1,
          image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-15.jpg&w=256&q=75',
          title: 'Banana, Beautiful Skin, Good For Health 1Kg',
          price: '20.00'
      },
      {
          id: 2,
          image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-15.jpg&w=256&q=75',
          title: 'Banana, Beautiful Skin, Good For Health 1Kg',
          price: '30.00'
      },
      {
          id: 3,
          image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-15.jpg&w=256&q=75',
          title: 'Fresh Organic Dragon Fruit Vietnam Number-1',
          price: '90.00'
      },
      {
          id: 4,
          image: 'https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fproduct%2Fnew%2Fproduct-img-15.jpg&w=256&q=75',
          title: 'Fresh Organic Dragon Fruit Vietnam Number-1',
          price: '19.00'
      }
  ]
};


app.get('/', (req, res) => {
  res.status(200).send(
    {
      'categories': '/categories',
      'products': '/products',
    }
  )
})

app.get('/categories', (req, res) => {
  res.status(200).send(data.categories)
})


app.get('/products', (req, res) => {
  res.status(200).send(data.products)
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
})