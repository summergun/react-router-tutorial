import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
render(<App />, document.getElementById('app'))

render((
    <Router history={hashHistory}>
        {/*hashHistory--it manages the routing history with the hash portion of the url.*/}
        <Route path="/" component={App}>
            {/* make about and repos children of `App` */}
                <Route path="/repos" component={Repos} />
                <Route path="/repos/:userName/:repoName" component={Repo}/>
               <Route path="/About" component={About} />
            
        </Route>
     
    </Router>
    
), document.getElementById('app'));


console.log(this.props);