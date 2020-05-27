import React, { Component } from 'react';
import NewsPage from './NewsPage';
import StudentsPage from './StudentsPage';

class Home extends Component {

    render() {
        return <div style={{ color: "light blue" }}>
            <div className="row mt-2 mr-2 ml-2">
                <div className="col md-6">
                    <div className="card">
                        <div className="card-body">
                            <NewsPage/>
                        </div>
                    </div>
                </div>
                <div className="col md-6">
                    <div className="card">
                        <div className="card-body">
                            <StudentsPage/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;
