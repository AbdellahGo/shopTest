import { useEffect, useState } from "react"
import axios from 'axios'



const Search = () => {
    const [categoriesData, setCategoriesData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:8080/categories')
            console.log(res);
            setCategoriesData(res.data)
        }
        fetchData()
    }, [categoriesData])
    return (
        <div className="search">
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