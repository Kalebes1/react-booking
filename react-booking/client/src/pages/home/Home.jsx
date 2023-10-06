import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/featuredProperties"
import Header from "../../components/header/Header"
import NavBar from "../../components/navbar/NavBar"
import PropertyList from "../../components/propertyList/propertyList"
import "./home.css"


const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Planejar sua viagem ficou fácil e rápido</h1>
          <PropertyList/>
          <h1>Conheça o Brasil</h1>
          <FeaturedProperties/>
      </div>
    </div>
  )
}

export default Home