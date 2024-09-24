
import pic1 from "../../../public/Images/Pic1.png";
import pic2 from "../../../public/Images/Pic2.png";
import pic3 from "../../../public/Images/Pic3.png";
import pic4 from "../../../public/Images/Pic4.png";
import "./Fram.css"
function Fram (){
   const ArrayofFram = [
    {
        id:1,
        Name:"High Quality",
        Image:pic1,
        Span:"craft from top materials",
    },
    {
        id:2,
        Name:"Warranty Protection",
        Image:pic2,
        Span:"Over 2 years",
    },
    {
        id:3,
        Name:"Free Shopping",
        Image:pic3,
        Span:"Order over 150 $",
    },
    {
        id:4,
        Name:"24 / 7 support",
        Image:pic4,
        Span:"Dedicated support",
    }
   ]



return(
    <div className="Fram">
            {ArrayofFram.map((item) => (
                <div key={item.id} className="items">
                <img src={item.Image} />
                <div>
                    <h3>{item.Name}</h3>
                    <span> {item.Span} </span>
                </div>
            </div>
            ))}
    </div>
)}

export default Fram;