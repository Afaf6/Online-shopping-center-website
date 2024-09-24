import "./Footer.css";


function Footer () {
    return(
        <>
        <div id="mainfooter">
        <div className="group">
            <h1> Funiro </h1>
            <p id="textstyle"> 
                400 University Drive Suite 200 Coral 
                <br/>
                Gables,
                <br/>
                Fl 33134 USA
            </p>
        </div>

        <div className="group">
            <p>Links</p>
            <div className="links">
                <a href="/" >Home</a>
                <a href="/shop"> Shop </a>
                <a href="/" >About</a>
                <a href="/Contact" >Contact</a>
            </div>
        </div>

        <div className="group">
            <p>Help</p>
            <h3>Payment Options</h3>
            <h3>Returns</h3>
            <h3>Privacy Policies</h3>
        </div>

        <div className="group1">
            <p>Newsletter</p>
            <div id="sendemail">
                <input placeholder="Enter Your Email Address"/>
                <button >SUBSCRIBE</button>
            </div>
        </div>
        </div>
        <div id="end">
            <span> 2023 furino. All rights reverved </span>
        </div>
        </>
    );
}
export default Footer;