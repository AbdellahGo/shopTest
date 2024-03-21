import { useEffect, useState } from "react"
import axios from 'axios'



const Search = () => {
    const [categoriesData, setCategoriesData] = useState('')

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('http://localhost:3000/categories')
            setCategoriesData(res.data)
        }
        fetch()
    }, [categoriesData])
    return (
        <div className="search">
            {console.log(categoriesData)}
            {categoriesData && categoriesData.map(({ id, title, numberOfItem, image }) => (
                <div key={id} className="box">
                    <div className="image-box">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <p>0{numberOfItem} items</p>
                </div>
            ))}
        </div>
    )
}

export default Search