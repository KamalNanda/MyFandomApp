import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router'
import Navbar from './Components/navbar/navbar'
import Title from './Components/title/title'
import Menu from './Components/menu/menu'
import Footer from './Components/footer/footer'
import GamePage  from './Pages/Game/Game'
import MoviePage  from './Pages/Movie/Movie'
import {data} from './Data/MenuData.json' 
import {ACData} from './Data/ACData.json'
import {GOWData} from './Data/GOWData.json'
import {GTAData} from './Data/GTAData.json'
import {HPData} from './Data/HarryPotterData.json'
import {LOTRDATA} from './Data/LOTRData.json'
import {WitcherData} from './Data/WitcherData.json'
class App extends React.Component{
  render(){
    return(
      <div className="App container-fluid">
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={() => <Menu data={data}/>} />
          <Route exact path="/assassinscreed" component={() => <Title link="assassinscreed"  data={ACData}/>} />
          <Route exact path="/assassinscreed/:name" component={(props) => <GamePage {...props} />} />
          <Route exact path="/godofwar" component={() => <Title link="godofwar" data={GOWData}/>} />
          <Route exact path="/godofwar/:name" component={(props) => <GamePage {...props} />} />
          <Route exact path="/grandtheftauto" component={() => <Title link="grandtheftauto" data={GTAData}/>} />
          <Route exact path="/grandtheftauto/:name" component={(props) => <GamePage {...props} />} />
          <Route exact path="/witcher" component={() => <Title link="witcher" data={WitcherData}/>} />
          <Route exact path="/witcher/:name" component={(props) => <GamePage {...props} />} />
          <Route exact path="/harrypotter" component={() => <Title link="harrypotter" data={HPData}/>} />
          <Route exact path="/harrypotter/:name" component={(props) => <MoviePage {...props} />} />
          <Route exact path="/lordoftherings" component={() => <Title link="lordoftherings" data={LOTRDATA}/>} />
          <Route exact path="/lordoftherings/:name" component={(props) => <MoviePage {...props} />} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App;
