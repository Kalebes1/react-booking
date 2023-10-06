import image from "../../images/3.jpg"
import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src={image} alt="" className="fpImage" />
                <span className="fpName">Hotel 5 estrelas</span>
                <span className="fpCity">Brasília</span>
                <span className="fpPrice">A partir de R$ 300</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={image} alt="" className="fpImage" />
                <span className="fpName">Hotel 5 estrelas</span>
                <span className="fpCity">Brasília</span>
                <span className="fpPrice">A partir de R$ 300</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={image} alt="" className="fpImage" />
                <span className="fpName">Hotel 5 estrelas</span>
                <span className="fpCity">Brasília</span>
                <span className="fpPrice">A partir de R$ 300</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={image} alt="" className="fpImage" />
                <span className="fpName">Hotel 5 estrelas</span>
                <span className="fpCity">Brasília</span>
                <span className="fpPrice">A partir de R$ 300</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties