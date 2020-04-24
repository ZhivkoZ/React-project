import React, { Component } from 'react';
import StudentsList from './students-list/index';

class Home extends Component{
render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <StudentsList/>
                </div>
            </div>
        </div>
    );
}
}

export default Home;