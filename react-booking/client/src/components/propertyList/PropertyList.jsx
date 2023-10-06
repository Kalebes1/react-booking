import image from '../../images/2.jpg'
import './propertyList.css'

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className="pListItem">
                <img src={image} alt="" className='pListImg'/>
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={image} alt="" className='pListImg'/>
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={image} alt="" className='pListImg'/>
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={image} alt="" className='pListImg'/>
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            
            
        </div>
    )
}

export default PropertyList