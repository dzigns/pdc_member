import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_ADDRESS = 'https://randomuser.me/api/?results=50';

const data = [];


class Members extends Component {
    state = {
        data: [],
        memberQuery: ''
      };
      updateMemberQuery = event => {
          var mq = event.target.value.toLowerCase();
          this.setState({memberQuery: mq});
          console.log("This MemberQuery:",this.state.memberQuery)
      }
      componentDidMount() {
        fetch(`${API_ADDRESS}`)
        .then(response => response.json())
        .then(json => this.setState({ data: json.results }))
        .catch(error => alert(error.message));
      }
     
      render() {
        const { data, memberQuery } = this.state;
        return ( 
            <div>
              <div className='form-small'>
                <fieldset className="flex">

                    <input onChange={this.updateMemberQuery} onKeyPress={this.handleKeyPress} placeholder="Search for an Member" />
               
                    </fieldset>
                </div>
            
              <div className='flex'>
              
              {
                  this.state.data.filter(member=>member.name.first.toLowerCase().includes(memberQuery)).map(member => {
                      const {id} = member;
                      return (
                       <Link to='/member' state={{member}} > 
                        <div>
                          <article className="card small"  key={id}>
                          <img src={member.picture.large} alt="profile" className='profilePic' />
                            <footer> <p className='smallText'>{member.name.first} {member.name.last}</p><span className='badgeButton lightText' >Age: {member.dob.age}</span></footer>
                          </article>
                        </div>
                        </Link> 
                      )
                  })
              }
              </div>
            </div>
        )
        
      }

}

export default Members;