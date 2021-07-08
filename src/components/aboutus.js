import './aboutus.css';
import  React from 'react';
import svg from '../img/about-us.png';
import work from '../img/process.png';
import img from '../img/process-img-1.jpg';
import map from '../img/map.png';

function About() {
  return (
    <div className="aboutus">
      <div className="detials-cont">
        <div className="svg-conatiner">
          <img id="about-svg"src={svg}></img>
        </div>
        <div className="about-cont">
          <div className="title">
            <h4 >About Us</h4>
          </div>
          <div className="content">
            <p>Established in YEAR 2000 by a perfect Duo from Tirupur,Jayasakthi printers has grown to be a Tirupur largest Textile Exporters that working with a world largest Multi-brand Companys
                        with One unit functioning in Tirupur.We have more 25-50 Staffs working in various sections.And we are more committed to our customers with production of more than 10,000 Quantity perday
                        with following the rules and regulations of Environmental safety and measures</p>
          </div>
        </div>
      </div>
      <div className="process">
          <div className="process-cont">
              <div className="process-content">
                  <div className="process-title">
                    <h4>
                      How We Process?
                    </h4>
                  </div>
                  <div className="process-list">
                   <p>1.Recieving Order 
                      2.Colour Matching 
                      3.Sample Design 
                      4.Approval  
                      5.Bulk Order 
                      6.Rate Quotation 
                      7.Delievery</p>
                  </div>
              </div>
              <div className="process-svg">
                  <img id="work-svg" src={work}></img>
              </div>
      </div>
      </div>
      <div className="photo-cont">
        <div className="photo-title">
          <h5>This Is How We Process</h5>
        </div>
        <div className="process-card-1">
          <div className="photo-1">
            <img id="process-img1" src={img}></img>
            <div className="title">
              <h5 id="title">Screen Print Machines</h5>
              </div>
            <div className="process-para">
              <p id="para">Screen print machines have an edge over other print processes in the sense that they can print on subtrates of any shape,thickness and size..Rotary Screen Printiung machines are widely used in a large number of industries for faster and finer printing solutions. </p>
            </div>
          </div>
          <div className="photo-1">
            <img id="process-img1" src="https://images.unsplash.com/photo-1615902135353-b7ace986e359?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></img>
            <div className="title">
              <h5 id="title">Screen Table Printing</h5>
              </div>
            <div className="process-para">
              <p id="para">Screen Table printing is a printing technique where a mesh is used to transfer ink onto a substrate,except in areas made impermeable to the ink by a blocking stencil ... It is also known as serigraphy printing and serigraph printing. </p>
            </div>
          </div>
        </div>
        <div className="process-card-1">
          <div className="photo-1">
            <img id="process-img1" src={img}></img>
            <div className="title">
              <h5 id="title">Screen DYes Printing </h5>
              </div>
            <div className="process-para">
              <p id="para">Most forms of textile materials can be dyed at almost any stage.quality woollen goods are frequently dyed in the form of loose fibre,but top dyeing or cheese dyeing is favoured in treating worsteds.Manufacturs prefer piece dyeing,which allows stocking of white goods, reducing the risk of being overstacked with cloth dyed in colours that have not been ordered.
                </p>
              </div>
          </div>
          <div className="photo-1">
            <img id="process-img1" src="https://images.unsplash.com/photo-1615902135353-b7ace986e359?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></img>
            <div className="title">
              <h5 id="title">Screen Glitter Printing</h5>
              </div>
            <div className="process-para">
              <p id="para">SFXC Glitter Base Screen Printing Ink is a ready to use neutral glitter screen printing  Ink. it is very pale, grey, almost translucent and full of tiny glitter particles.
              </p>
                </div>          
          </div>

        </div>

        </div>

          <div className="Map">
        <div className="map-content">
            <div className="map-svg">
              <img id="map-svg" src={map}></img>
            </div>
            <h3 id="map-title">
                You Can Locate Us Here!
            </h3>
        </div>
        <div className="map-img">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6566031863035!2d77.3147030148033!3d11.064351792126491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9a9078cfb5ee1%3A0x34287e0fe247428!2sJaya%20Sakthi%20Printers!5e0!3m2!1sen!2sin!4v1620537953700!5m2!1sen!2sin" alt="map"></iframe>
                </div>
       </div>


       </div>
       );
     }
     export default About;