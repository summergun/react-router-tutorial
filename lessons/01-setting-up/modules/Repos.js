import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
    render(){
        return(
            
            <div className="well">
                <h2>Repos</h2>
                <ul>
                    <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                    </ul>

            </div>
        ) 
    }
})

    //Index.js:  <Route path="/repos/:userName/:repoName" component={Repo}/>
    //Repo.js <h2>{this.props.params.repoName}</h2>
    // the parameter name in the route 'path' becomes the property name in the component
    // Both userName and repoName are available  on this.props.params of my component