import './gallery.css';
import  React from 'react';
import worksvg from '../img/works.png';



function Gallery() 
{
             
  return (
      <div className="gallery-container">
          <div className="header">
          <div className="gallery-title">
              <h2>Here Are Some Our Works For You!!</h2>
          </div>
          </div>
          <div className="cont">  
          <div className="gallery-content">
              <h4>
             Screen Foil Printing 
              </h4>
              <p id="parag">
                  Foil screen printing is similiar to traditional screen printing but an adhesive glue Ink is used instead of standard plastisol Inks . the foil is cut in squares off a large rool of foil . it is then placed over the glue adhesive print and heat pressed. The heat press activates the glue adhesive and grabs onto the foil
              </p>
          </div>       
           <div className="p-1">
                <div className="big">
                    <img id="img" src="http://greekcornerprinting.com/wp-content/uploads/2016/01/Shop-1.5.16_2.jpg" alt="big">
                    </img>
                </div>
                <div className="small-container">
                <div className="small">
                    <img  id="img" src="https://i.pinimg.com/originals/7d/74/5f/7d745f6c6748448ec1470f7a9683b81a.jpg " alt="small"></img>
                </div>
                <div className="small">
                    <img id="img" src="https://www.beltonmochamber.org/wp-content/uploads/2017/05/Manual-Silk-Screen-Printing-Machine-6-Color.jpeg" alt="small"></img>
                </div>
                </div>
          </div>
         
          </div>

          <div className="cont"> 
          <div className="p-2">
                <div className="full-height-big">
                    <div className="block">
                    <img id="img" src="http://screenprintingmachine.net/wp-content/uploads/2017/12/4-Color-4-Station-Silk-Screen-Printing-Machine-Press-DIY-T-Shirt-Printer-698x400.jpg" alt="big">
                    </img>
                    </div>
                </div>
                <div className="small-container-2">
                <div className="half-height-small">
                    <img id="img"src="https://cdn.shopify.com/s/files/1/0053/1602/products/O4400F_800x.jpg?v=1586896472" alt="small"></img>
                </div>
                <div className="half-height-small">
                    <img id="img"src="https://fusemakerspace.org/wp-content/uploads/2018/10/screen-printing-1.jpg" alt="small"></img>
                </div>
                </div>
          </div>
          <div id="right-content" className="gallery-content">
              <h4>
              Screen fuse printing
              </h4>
              <p id="parag">
                 The fuse 1 is setting the new standard for SLS printing . It brings production-Ready technology once reserved for service bureus to your benchtop at a tench of the cost of industrial SLS  alternatives without compromising print quantity
              </p>
          </div>  
          </div>
          <div className="cont">  
          <div className="gallery-content">
              <h4>
              Screen Scrapper Printing 
              </h4>
              <p id="parag">
                 The aqueegee is used to squeeeze out the Ink on the screen, making it a leak-proof printing on a tool. in accordance with the diffrent uses, screen printing ink scraper can be piped into hand scaping board and machines scraper two.Scratch board by the rubber strip and fixture (handle) composed of two parts.
                   </p>

          </div>  
          <div className="p-1">
                <div className="big">
                    <img id="img"src="https://images.bonanzastatic.com/afu/images/94cf/f5a3/dc56_9552195409/5140iutocyl.jpg" alt="big">
                    </img>
                </div>
                <div className="small-container">
                <div className="small">
                    <img id="img" src="http://www.freemanscreenprinters.com/wp-content/uploads/2013/06/screenprint2.png" alt="small"></img>
                </div>
                <div className="small">
                    <img id="img" src="http://craftsmanave.com/v2/wp-content/uploads/2018/09/RHandt_0613_CA_ScreenPrinting_035.jpg" alt="small"></img>
                </div>
                </div>
          </div>
          </div>

 </div>
  );
}
export default Gallery;
