import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Load from './components/loading/loading'
import Logo from './components/loading/img/logo.png'
import Main from './components/main/main';
import About from './components/main/img/About.jpg';
import Portfolio from './components/main/img/Portfolio.jpg';
import Extras from './components/main/img/Extras.jpg';
import GitHub from './components/main/img/GitHub.jpg';
import LinkedIn from './components/main/img/LinkedIn.jpg';
import AboutPage from './components/about/about';
import Avatar from './components/about/img/me.png';
import FingerPrint from './components/about/img/fp.png';
function App() {

  const [menu] = useState(
                [
                  "About",
                  "Portfolio",
                  "Extras",
                  "GitHub",
                  "LinkedIn"
                ]
  );
  const [option, setOption] = useState("");
  const [image, setImage] = useState("")
  const [show, setHidde] = useState(1);
  // const [page] = useState({AboutPage});
  const [style, setStyle] = React.useState({});


  const handleOption=(newOption)=>{
    setOption(newOption)
    switch(newOption){
      case "About":
        setImage(About);
        break
      case "Portfolio":
        setImage(Portfolio)
        break
      case "Extras":
        setImage(Extras)
        break
      case "GitHub":
        setImage(GitHub)
        break
      case "LinkedIn":
        setImage(LinkedIn)
        break
      default:
        setImage(About)
    }
  }
  const handler = () =>{
    setHidde(0)
  }
  setTimeout(() => {
        const style_show={opacity:1}
        setStyle(style_show)
    },2100)

  return (
    <div className=" App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              show ? <Load logo = {Logo} handler = {handler} style={style}/>
              :
              <Main menu = {menu} handle={handleOption} option={option} img={image} />
            }
          </Route>
          <Route path="/about">
            <AboutPage avatar={Avatar} fp={FingerPrint}/>
          </Route>
          {/* <Route exact path="/">
            <Link to="/index" className="link"><Load logo = {Logo} handler = {handler} style={style}/></Link>
          </Route>
          <Route path="/index">
            <Main menu = {menu} handle={handleOption} handlerPage={handlerPage} option={option} img={image} />
          </Route> */}
        </Switch> 
     </Router> 
    </div>
  );
}

export default App;
