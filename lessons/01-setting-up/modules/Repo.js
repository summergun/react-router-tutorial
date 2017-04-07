import React from 'react'

export default React.createClass({
    render(){
        return(
            <div>
                <h2>UserName is {this.props.params.userName}</h2>
                <h2>RepoName is {this.props.params.repoName}</h2>
            </div>
        )
    }
})