import React from 'react';
import '../App.css';

const AboutBeatlesPage = () => {
  return (
    <>
      {/*This is the About Beatles Page */}
      <h1> This is all about the Beatles! </h1>
      <p>
        <img
          style={{
            width: 200,
            float: 'left',
            margin: '0 2rem 2rem 0'
          }}
          src={
            'https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg'
          }
          alt={'The Beatles'}
        />
      </p>
      <div>
        <p>
          The Beatles were an English rock band formed in Liverpool in 1960. The
          group, whose best-known line-up comprised John Lennon, Paul McCartney,
          George Harrison and Ringo Starr, are regarded as one of the most
          influential bands of all time. They were integral to the development
          of 1960s counterculture and popular music's recognition as an art
          form. Rooted in skiffle, beat and 1950s rock and roll, their sound
          incorporated elements of classical music and traditional pop in
          innovative ways; the band later explored music styles ranging from
          ballads and Indian music to psychedelia and hard rock. As pioneers in
          recording, songwriting and artistic presentation, the Beatles
          revolutionised many aspects of the music industry and were often
          publicised as leaders of the era's youth and sociocultural movements.
        </p>
      </div>
      <div>
        <p>
          The Beatles built their reputation playing clubs in Liverpool and
          Hamburg over a three-year period from 1960, with Stuart Sutcliffe
          initially serving as bass player. The core of Lennon, McCartney and
          Harrison went through a succession of drummers, most notably Pete
          Best, before asking Starr to join them. Manager Brian Epstein molded
          them into a professional act, and producer George Martin guided and
          developed their recordings, greatly expanding their popularity in the
          United Kingdom after their first hit, "Love Me Do", in late 1962. They
          acquired the nickname "the Fab Four" as Beatlemania grew in Britain
          the next year, and by early 1964 became international stars, leading
          the "British Invasion" of the United States pop market. From 1965
          onward, the Beatles produced increasingly innovative recordings,
          including the widely influential albums Rubber Soul (1965), Revolver
          (1966), Sgt. Pepper's Lonely Hearts Club Band (1967), The Beatles
          (commonly known as the White Album, 1968) and Abbey Road (1969).
        </p>
        <p>
          After their break-up in 1970, they each enjoyed successful musical
          careers of varying lengths. McCartney and Starr, the surviving
          members, remain musically active. Lennon was shot and killed in
          December 1980, and Harrison died of lung cancer in November 2001.
        </p>
        <p>
          According to the RIAA, the Beatles are the best-selling music artists
          in the United States, with 178 million certified units. They have had
          more number-one albums on the British charts and sold more singles in
          the UK than any other act. In 2008, the group topped Billboard
          magazine's list of the all-time most successful "Hot 100" artists; as
          of 2016, they hold the record for most number-one hits on the Hot 100
          chart with twenty. They have received ten Grammy Awards, an Academy
          Award for Best Original Song Score and fifteen Ivor Novello Awards.
          Collectively included in Time magazine's compilation of the twentieth
          century's 100 most influential people, they are the best-selling band
          in history, with estimated sales of over 600 million records
          worldwide.The group was inducted into the Rock and Roll Hall of Fame
          in 1988, and all four were inducted individually from 1994 to 2015.
        </p>
      </div>
      <div>
        <a href={'https://www.thebeatles.com/'}>Beatles Official Page</a>
        <a
          href={
            'https://www.google.com/search?q=the+beatles&oq=The+Beatles&aqs=chrome.0.69i59j46i39j0i433l2j46l2j0j0i433.3327j0j15&sourceid=chrome&ie=UTF-8'
          }
        >
          Beatles Search
        </a>
        <a href={'https://www.youtube.com/results?search_query=The+Beatels'}>
          Beatles YouTube
        </a>
        <a href={'https://en.wikipedia.org/wiki/The_Beatles'}>
          Beatles Wikipedia
        </a>
      </div>
    </>
  );
};

export default AboutBeatlesPage;
