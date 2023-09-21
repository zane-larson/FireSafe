import React from 'react';
import "./styles/contact.css"
import {useState} from 'react'
function ContactForm() {

  const [formData, setFormData] = useState({
    Name: '',
    Address: '',
    Email: '',
    PhoneNumber: '',
    AdditionalNotes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("WE DID IT")
      console.log(formData)
    fetch('http://127.0.0.1:5000/email', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from backend:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    
    <div className="new_home_web">
      <div className="responsive-container-block big-container">
        {/* <img className="imgBG"   /> */}
        <div className="responsive-container-block textContainer">
          <div className="topHead">
            <p className="text-blk heading">
              Contact
              <span className="orangeText">
                Us
              </span>
            </p>
            <div className="orangeLine" id="w-c-s-bgc_p-2-dm-id"></div>
          </div>
          <p className="text-blk subHeading">
            North County fire inspection and prevention agency. Our team is focused on communication and helping our customers. Email or call today.
          </p>
          <h3 class="pnumber">Call</h3>
          <h3 class="pnumber">(760) 638 9640 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    (760) 638 0368</h3> 
          <h4 class="pnumber">OR</h4>
          <h3 class="pnumber">Email</h3> <h3 class="pnumber">Firestop@stopfireusa.com</h3>
        </div>
        <h1 className='contact title-text book-appointment-header'>Book an Apppointment Now $250</h1>
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b">
            <form className="form-box" id="myForm" onSubmit={handleSubmit}>
              <div className="container-block form-wrapper">
                <div className="responsive-container-block">
                  <div className="left4">
                    <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-2">
                      <input onChange={handleInputChange} className="input" id="ijowk-2" name="Name" placeholder="Name" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <input onChange={handleInputChange} className="input" id="indfi-2" name="Address" placeholder="Address" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <input onChange={handleInputChange} className="input" id="ipmgh-2" name="Email" placeholder="Email Address" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                      <input onChange={handleInputChange} className="input" id="imgis-2" name="PhoneNumber" placeholder="Phone Number" />
                    </div>
                  </div>
                  
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-2">
                    <input onChange={handleInputChange} className="textinput" id="i5vyy-2" name="AdditionalNotes" placeholder="Additional Notes"></input>
                  </div>
                </div>
                <button type="submit"></button>
                <a className="send" href="#send" id="w-c-s-bgc_p-1-dm-id" >
                  <button className='send-button'>Send</button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
