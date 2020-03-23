import React, {Component} from 'react'
import {
  Route,
  Link,
  BrowserRouter as Router,
} from'react-router-dom';


const Home  =() =>{
  return(
    <div>
     <h3>Home</h3>
    </div>
  )
}

const About =() =>{
  return(
    <div>
      <h3>About</h3>
    </div>
  )
}
const Topic =({match}) =>console.log(match,"match any given child urls") || (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
const Topics =({match}) =>{
  return(
    <div>
      <h3>Topics</h3>
      <ul>
        {/* *nested links inside*, matching whatever url parent could be*/}
        <li><Link to = {`${match.url}/render`}> Rendering with React</Link></li>
        <li><Link to = {`${match.url}/components`}>Components</Link></li>
        <li><Link to ={`${match.url}/props-v-state`}>Props v State</Link></li>
      </ul>

      {/* <Route  path='/topics/render' component = {Topic}/>
      <Route  path='/topics/components' component ={Topic}/>
      <Route  path ='/topics/props-v-state'component= {Topic}/>  --- -------   or   */}
    
      <Route path ='/topics/:topicId' component ={Topic}/>
      <Route exact path = {match.url} {...console.log(match,'MATCHHH')} render ={()=>(
        <h3>Please select a topic</h3>
      )} />
      {/* whatever topicId is,(render,components,props-v-state), that's
      going to be a props in a Topic component  */} 
    </div>
  )
}

class App extends Component{
  render(){
    return(
      <Router>
        <div>
         <ul>
           {/*just changing urls */}
          <li><Link to = '/'>Home</Link></li> 
          <li><Link to = '/about'>About</Link></li>
          <li><Link to = '/topics'>Topics</Link></li>
         </ul>
         <hr />

         {/* route has to match,if it does-render the component */}
         <Route exact path='/'component={Home}/> 
         <Route path='/about'component={About}/>
         <Route path='/topics'component={Topics}/>
        </div>
        </Router>

    )
  }
}

export default App;