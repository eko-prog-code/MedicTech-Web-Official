import React, { useState } from 'react';
import Banner from './Banner/Banner';
import BtnScroll from './BtnScroll/BtnScroll';
import PaketKesehatan from '../pages/PaketKesehatan/PaketKesehatan';
import Footer from '../pages/Footer/Footer';
import Popup from 'reactjs-popup';
import './Home.css';
import popUp from '../../src/images/popUp.jpg';

const Home = (props) => {
  const [open, setOpen] = useState(true)
  function closePopup(event) {
    // when mouse click at pop up screen
    // get if of current element
    let currentId = event.target.id;
    console.log(currentId);
    if (currentId !== "login") setOpen(false);
  }

  return (
    <div className="text-center">
      <Banner></Banner>
      <BtnScroll></BtnScroll>
      <PaketKesehatan></PaketKesehatan>
      <Footer></Footer>
      <Popup open = {open} onClose={() => setOpen(false)}>
        <div id="mask" className='mask' onClick={closePopup}>
          <img className="attackPopUp" src={popUp} alt="" />
        </div>
      </Popup>
    </div>
  )
};

export default Home;
