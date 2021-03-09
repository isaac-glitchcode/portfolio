import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Load from './components/loading/loading'
import Logo from './components/loading/img/logo.png'
import Main from './components/main/main';
import Git from './components/main/img/git.png';
import Link from './components/main/img/link.png';

// import Img from './components/main/img/im.jpg';
// import About from './components/main/img/About.jpg';
// import Portfolio from './components/main/img/Portfolio.jpg';
// import Extras from './components/main/img/Extras.jpg';
// import GitHub from './components/main/img/Github.jpg';
// import LinkedIn from './components/main/img/Linkedin.jpg';
// import AboutPage from './components/about/about';
// import Avatar from './components/about/img/me.png';
// import FingerPrint from './components/about/img/fp.png';
function App() {

  // const [menu] = useState(
  //               [
  //                 "About",
  //                 "Portfolio",
  //                 "Extras",
  //                 "GitHub",
  //                 "LinkedIn"
  //               ]
  // );
  // const [option, setOption] = useState("");
  // const [image, setImage] = useState("")
  // const [show, setHidde] = useState(0);
  const [turnOn, setTurnOn] = useState(1);
  // const [page] = useState({AboutPage});
  // const [style, setStyle] = React.useState({});


  // const handleOption=(newOption)=>{
  //   setOption(newOption)
  //   switch(newOption){
  //     case "About":
  //       // setImage(Img);
  //       setImage(About);
  //       break
  //     case "Portfolio":
  //       // setImage(Img)
  //       setImage(Portfolio)
  //       break
  //     case "Extras":
  //       // setImage(Img)
  //       setImage(Extras)
  //       break
  //     case "GitHub":
  //       // setImage(Img)
  //       setImage(GitHub)
  //       break
  //     case "LinkedIn":
  //       // setImage(Img)
  //       setImage(LinkedIn)
  //       break
  //     default:
  //       // setImage(Img)
  //       setImage(About)
  //   }
  // }
  const handler = (value) => {
    setTurnOn(value)
    // setTurnOn(!turnOn)
  }
  // setTimeout(() => {
  //       const style_show={opacity:1}
  //       setStyle(style_show)
  //   },2100)

  // const handlerLightBar = () => {
  //   console.log(show) 
  // }

  return (
    <div className=" App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              <Main 
              logo = {Logo} 
              // menu = {menu} 
              // handle={handleOption} 
              // option={option} 
              // img={image} 
              imgGit={Git} 
              imgLink={Link}
              // handleTurnOn={handlerLightBar}
              turn={turnOn}
              handler = {handler}/>
            }
          </Route>
          <Route path="/about">
            {/* <AboutPage avatar={Avatar} fp={FingerPrint}/> */}
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
