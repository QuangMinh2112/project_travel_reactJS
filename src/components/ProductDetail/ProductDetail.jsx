import { useState } from 'react'
import '../../asset/styles/productDetail.css';
import hotel1 from '../../asset/images/hotel1.jpeg'
import hotel2 from '../../asset/images/hotel2.jpeg'
import hotel3 from '../../asset/images/hotel3.jpeg'
import hotel4 from '../../asset/images/hotel4.jpeg'
import hotel5 from '../../asset/images/hotel5.jpeg'


const arr = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel5];

const ProductDetail = () => {
    const [image, setImage] = useState(hotel1)
    const [indexImage, setIndexImage] = useState(0)

    const handleChangeImage = (item, index) => {
        setImage(item)
        setIndexImage(index)
    }
    return (
        <div className="ProductDetail container flex-row justify-content-center mt-2">
            <h1 className="text-center">Villa Phú Quốc</h1>
            <div className="ImageShow" style={{ width: "90%", height: "70vh", overflow: "hidden", margin: '0 auto' }}>
                <img style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "1rem" }} src={image} />
            </div>
            <div className="ListImage row mt-4">
                {
                    arr.map((item, index) => (
                        <div
                            key={index}
                            className='col-2'
                            style={indexImage === index ? { cursor: "pointer", opacity: "1" } : { cursor: "pointer", opacity: '0.4' }}
                            onClick={() => handleChangeImage(item, index)}>
                            <img style={{ width: "100%", borderRadius: "1rem" }} src={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductDetail;