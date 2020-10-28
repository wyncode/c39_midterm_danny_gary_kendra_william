import React from 'react';
import Will from './images/Will.jpg';
import Danny from './images/Danny.jpg';
import Gary from './images/Gary.jpg';

const AboutTeamPage = () => {
    return (
        <>
            <h1> This is all about the Team! </h1>
            <div>
                <img style={{ 
                    width: 200,
                }}
                src={Gary} />
            
                <h5>Gary Chong-Qui</h5>
                    <p>I enjoy developing websites and I'm an avocado aficionado!</p>  
            </div>
            <div>
                <img style={{ 
                    width: 200,
                }}
                src={Will} />
            
                <h5>Will Dillard</h5>
                    <p>I like working through problems and watching the soulutions come to life. I enjoy spending time with my family and enjoy working on becomeing a web developer.</p>
            </div>
            <div>
                <img style={{
                    width: 240,
                }}
                src={Danny} />
            
                <p>I always enjoy a great laugh and a new adventure!</p>
            </div>
            <div>
                <img style={{ 
                    width: 100,
                }}
                src={"#"} />
            
                <p>Kendras Section</p>
            </div>
        </>
    )

};

export default AboutTeamPage;
