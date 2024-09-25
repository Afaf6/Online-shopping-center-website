import "../Contact/Contact.css";
import Form from "../../Form/Form";
import map from "../../../../public/Images/map.png";
import phone from "../../../../public/Images/phone.png";
import time from "../../../../public/Images/time.png";
import background from "../../../../public/Images/background-1.png";
import logo from "../../../../public/Images/Meubel House_Logos-05.png";


function Contact () {
  const ArrayofDetails = [
    {
      id:1,
      icon:map,
      title: "Address",
      detail: {
        part1: "236 5th SE Avenue,",
        part2: "New York NY10000, United States",
      },
  },
  {
      id:2,
      icon:phone,
      title: "Phone",
      detail: {
        part1: "236 5th SE Avenue,",
        part2: "New York NY10000, United States",
      },
  },
  {
      id:3,
      icon:time,
      title: "Work Time",
      detail: {
        part1: "Monday-Friday: 9:00 - 22:00",
        part2: "Saturday-Sunday: 9:00 - 21:00",
      },
  },
  ]
  
  
  
    return (
        <>
        <div id="background" >
            <img src={background}/>
            <div className="overflowcontect">
            <img className="logo" src={logo}/>
                <h1>Contact</h1>
                <div className="pagestitlecontect">
                    <h5>Home</h5>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m6 15l5-5l-5-5l1-2l7 7l-7 7z"></path></svg> </span>
                    <h6>Contact</h6>
                </div>
            </div>
        </div>
          <div id="titleheader">
            <h1>Get In Touch With Us</h1>
            <p>For More Information About Our Proudect & Service. Please Feel Free To Drop Us An Email. Our Staff Alawys Be There To Hellp You Out. Do NOt Hesitate!</p>
          </div>
          <div className="contectdetails">
            
            <div >

              {ArrayofDetails.map((details) => (
                <div className="contectgroup1" key={details.id}>
                  <div>
                    <img src= {details.icon}/>
                  </div>
                  

                  <div className="arrange">
                    <h3> {details.title} </h3>
                    <p> {details.detail.part1} </p> 
                    <p> {details.detail.part2} </p>
                  </div>
                  
                </div>
              ))}
            </div>
            <div className="contectgroup2">
            <Form></Form>
            </div>
          </div>
        </>
    );
}
export default Contact;