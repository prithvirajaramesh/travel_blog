import React from 'react';
import Navbar from './Components/Navbar'
import Main from './Main';
import Data from './Data';
import './App.css';

function App() {

  const Alldata = Data.map(location => {
    return (
      <Main
        key={location.key}
        title={location.title}
        location={location.location}
        map={location.googleMapsUrl}
        date_s={location.startDate}
        date_e={location.endDate}
        img={location.imageUrl}
        para={location.description}
      />
    );
  });

  return (
    <>
      <section className='site_section'>
        <Navbar />
        <Main />
        <div>
          {Alldata}
        </div>
      </section>
    </>
  );
}

export default App;
