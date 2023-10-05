import "./featured.css"
import hotel from '../../../src/images/1.jpg'
const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src={hotel} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h1>123 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={hotel} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Águas Lindas</h1>
                <h1>4 propriedades</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={hotel} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Pérola</h1>
                <h1>5 lugares</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured