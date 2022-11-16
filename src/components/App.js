import React, { Component } from 'react';
import profile from '../assets/profile.png';
import Members from './Members';


class App extends Component {
   
    render() {
        
        return (
            <div><img src={profile} alt='profile' className='profile' />
                <h1>Welcome to Our Member Site</h1><p></p>
               
                <hr />
                <Members />
               
               </div>
        )
    }

}

export default App;
