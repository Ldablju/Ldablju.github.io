import '../styles/project.css'
import React from 'react';
import Back from './back'
import Front from './front'

class Project extends React.Component {

    state = {
        navactiv: true
    }
    handleSwitch() {
            this.setState({
                navactiv: !this.state.navactiv
            })
    }
    render() {
        return (
            <div className="App-content-route">
                <div className="projects">
                    <div className="nav-projects">
                        <div className="nav-project" className={this.state.navactiv ? 'nav-project activenav' : 'nav-project'} onClick={this.handleSwitch.bind(this)}>
                            HTML + CSS + JS
                        </div>
                        <div className={!this.state.navactiv ? 'nav-project activenav' : 'nav-project'} onClick={this.handleSwitch.bind(this)}>
                            Node.js + Express.js + React.js + MongoDB
                        </div>
                    </div>
                    <div className="project-content">
                        {this.state.navactiv ? <Front /> : <Back />}
                    </div>
                </div>
            </div>
        );

    }
}

export default Project;