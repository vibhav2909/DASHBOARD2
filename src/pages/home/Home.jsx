import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import Bargraph from "../../components/chart/Bargraph"

const Home = () => {
  return (
    <div
      className="home">
         <Sidebar/>
         <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="Impressions"/>
            <Widget type="Total Audience"/>
            <Widget type="Engagements"/>
            <Widget type="Engaged Audience"/>
          </div>
          <div className="charts">
            
          <Chart/>

          </div>
          <Bargraph/>
          <div className="circle">
          <Featured/>  
            
             
          </div>         
          <div className="listContainer">
            <div className="listTitle"> Course Status</div>
            <Table/>
           
          </div>
         </div>
    </div>
  )
}

export default Home
