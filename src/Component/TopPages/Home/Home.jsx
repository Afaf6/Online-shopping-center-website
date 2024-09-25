import "./Home.css";
import { Link } from "react-router-dom";
import background from "../../../../public/Images/background-1.png";
import jewelry from "../../../../public/Images/jewelry.jpg";
import electronics from "../../../../public/Images/electronics.jpg";
import menclothes from "../../../../public/Images/menclothes.jpg";
import womenclothes from "../../../../public/Images/womenclothes.jpg";
import { useEffect, useState } from "react";


function Home () {
    const [data, setData] = useState(null);

    const ArrayOfPictures = [

        { id: 1, name: 'jewelery', Pic: jewelry },
        { id: 2, name: 'electronics', Pic: electronics },
        { id: 3, name: "men's clothing", Pic: menclothes },
        { id: 4, name: "women's clothing", Pic: womenclothes },
    ]
    console.log(ArrayOfPictures)
 

    useEffect(() =>{
        function CallApi (){
            fetch('https://fakestoreapi.com/products/categories')
            .then((response) => {return response.json(); })
            .catch((error) => console.error('Error fetching data:', error))
            .then((finalResult) =>{
            setData(finalResult);
            });
        } CallApi();}, [] ) ;

    return (
        <>
        <div id="background1" >
            <img src={background}/>
        </div>
        <div className="Title">
            <h1> Categories </h1>
        </div>
        <div className="category">
        {data ? data.map((category) => {
                    // Find the corresponding image based on the category name
                    const picture = ArrayOfPictures.find(item => item.name === category);
                    return (
                        <>
                        
                        <Link key={category} to = {`/shop/${category}`} >
                            {picture ? (
                                <div className="label">
                                    <img src={picture.Pic} alt={category} />
                                    <h3>{category}</h3>
                                </div>
                            ) : (
                                <span>No image available</span>
                            )}
                        </Link>
                        </>
                    );
                }) : "No data"}
        </div>
        <div>
        </div>
       
        </>
    );
}
export default Home;
