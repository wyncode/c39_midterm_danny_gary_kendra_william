import React from 'react';
import '../App.css';

const AboutBeatlesPage = () => {
    return <>
            {/*This is the About Beatles Page */}
            <h1> This is all about the Beatles! </h1>
            <p>
                <img style={{ 
                    width: 200,
                    float: "left",
                    margin: "0 2rem 2rem 0"
                }}
                src={"https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg"} />
            </p>
            <div>
                <p>The Beatles were an English rock band formed in Liverpool in 1960. The group, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr, are regarded as one of the most influential bands of all time. They were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements.</p>
            </div>
        </>
};

export default AboutBeatlesPage;