import React, { Component } from 'react';
import { Link , useLocation } from 'react-router-dom';

import email from '../assets/email_icon.png';
import github from '../assets/github_icon.png';
import twitter from '../assets/twitter_icon.png';
import linkedin from '../assets/linkedin_icon.png';

const Member = () => {
    const location = useLocation();

    const memberInfo = location.state.member;

    const date = new Date(memberInfo.dob.date);
    const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year:"numeric"
    });

    
        return(
            
            <div >
                <nav className='success'>
                    <Link to="/" >Home</Link>/ {memberInfo.name.first}
                </nav>
                <div class="main padding">
                    <div className='colCard'>
                        <article className="card" >
                        <img src={memberInfo.picture.large} alt="profile" className="profilePicLarge" />
                            <footer> <h3>{memberInfo.name.first} {memberInfo.name.last}</h3></footer>
                        </article>
                    </div>
                    <div >
                        <article className="card large" >
                        <div id="table">
                                <div className="table-row">
                                    <div className="table-cell"><h4>Full Name</h4></div>
                                    <div className="table-cell">{memberInfo.name.first} {memberInfo.name.last}</div> 
                                </div>
                                <div className="table-row">
                                    <div className="table-cell"><h4>Address</h4></div>
                                    <div className="table-cell"> 
                                        <span>{memberInfo.location.street.number} {memberInfo.location.street.name}</span><br />
                                        <span>{memberInfo.location.city}, {memberInfo.location.state} {memberInfo.location.postcode}</span>
                                    </div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell"><h4>Email</h4></div>
                                    <div className="table-cell">{memberInfo.email}</div>     
                                </div>
                                <div className="table-row">
                                    <div className="table-cell"><h4>Birth Date</h4></div>
                                    <div className="table-cell">{formattedDate}</div>   
                                </div>
                            </div>
                            <footer className="social">
                                <div style={{display: 'inline-block', width:80, margin: 5}}> 
                                    <img src={email} alt='profile' style={{width: 50, height: 50, }} />
                                </div>
                                <div style={{display: 'inline-block', width:80, margin: 5}}> 
                                    <img src={github} alt='profile' style={{width: 50, height: 50, }} />
                                </div>
                                <div style={{display: 'inline-block', width:80, margin: 5}}> 
                                    <img src={twitter} alt='profile' style={{width: 50, height: 50, }} />
                                </div>
                                <div style={{display: 'inline-block', width:80, margin: 5}}> 
                                    <img src={linkedin} alt='profile' style={{width: 50, height: 50, }} />
                                </div>
                            </footer>
                        </article>
                    </div>
                </div>
            </div>
             
        )
    }



export default Member;