import React from "react";
import "./footer.css";

function Footer() {
  return (
    
    <footer>

    <div className="footer-content">

        <h3>  Jayasakthi Printers</h3>

        <p>The earliest screen prints were done on silk ,but almost any textile from wool to cotton can
          be used.Modern technology makes it possible to print on a much wider variety of materials,including wood,papper,ceramic,electonics and glass,of course!
        </p>

        <ul className="socials">

            <li><a href="#"><i className="fa fa-facebook"></i></a></li>

            <li><a href="#"><i className="fa fa-twitter"></i></a></li>

            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>

            <li><a href="#"><i className="fa fa-youtube"></i></a></li>

            <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>

        </ul>

    </div>

    <div className="footer-bottom">

        <p>copyright &copy;2021 JayaSakthi Printers</p>

  </div>

</footer>
    
  );
}

export default Footer;
