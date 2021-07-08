import client from '../img/clients.png';
import leader1 from '../img/leader1.jpg';
import leader2 from '../img/leader22.jpg';
function Home () {
    return(
        <div>
            
            <div className="wrap">
                <h1 className="description">JAYASAKTHI PRINTERS <br></br></h1>
                <p className="quotes">Hoisery and Textile Printing</p>
                <p className="tagline"><span>Tirupur's Largest Textile Screen Exporters </span><br></br> Working with world largest Mutli-brand companys</p>
                
                <img src="https://images.unsplash.com/photo-1531956468651-8fc931f28a9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=823&q=80" height="550px"px width="1500px"></img>
            </div>
            <br></br><br></br>
            <div className="full">
                <div className="details">
                    <p>Established in YEAR 2000 by a perfect Duo from Tirupur,Jayasakthi printers has grown to be a Tirupur largest Textile Exporters that working with a world largest Multi-brand Companys
                        with One unit functioning in Tirupur.We have more 25-50 Staffs working in various sections.And we are more committed to our customers with production of more than 10,000 Quantity perday
                        with following the rules and regulations of Environmental safety and measures
                    </p>
                </div>

            {/*  <br></br><br></br>
            <div className="admin">
                <div className="admin-btn">
                    <button>
                        <a href="https://jspstockmanagement.web.app">ADMIN</a>
                    </button>
                </div>
            </div>*/}

                <div className="founders">
                    
                    <p className="fnames">Faces of JSP</p>
                    <br></br>

                    <div class="container">
                        
            
                        <div class="row leader ">
                            <div class="col-md-6 faces">
                                <div class="face-img">
                                    <img src={leader1} alt="" width="150px" height="160px"></img>
                                </div>
                                <h5 id="leaders" class="mt-4">Mr.V.Saravana Kumar</h5>
                                <h6 id="leaders"><b>Founder</b></h6>
                                <p id="leader-info"  class="my-3">A leadership coach who focus on helping leaders create succussful work environments. He emphiasizes being empathetic and talking ownership for both leaders and employees.This allows leaders to understand what is motivating their employees to work hard, which can go a long way towards increasing productivity in the workplace.</p>
                                <hr id="bordering"></hr>
                                <a href="/linkedin"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        

                        
                            <div class="col-md-6 faces">
                                <div class="face-img">
                                    <img src={leader2} alt="" width="150px" height="160px"></img>
                                </div>
                                <h5 id="leaders"class="mt-4">Mr.Palanisamy</h5>
                                <h6 id="leaders"> <b>Managing Director</b></h6>
                                <p id="leader-info" class="my-3">leadership coach who focus on helping leaders create succussful work environments. He emphiasizes being empathetic and talking ownership for both leaders and employees.This allows leaders to understand what is motivating their employees to work hard, which can go a long way towards increasing productivity in the workplace.</p>
                                <hr id="bordering"></hr>
                                <a href="/linkedin"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="admin">
                <div className="admin-btn">
                    <button>
                        <a href="https://jspstockmanagement.web.app">ADMIN</a>
                    </button>
                </div>
            </div>

                </div>
            </div>

                {/* CLIENTS */}

                <div className="client-area">
                    <div className="container-client">
                        <h4 className="fnames">Our Clients</h4>
                        <div className="client-wrapper">
                        <img id="client-svg"src={client}alt="client-svg"></img>
                        <section className="logo-area-slider">
                            <div className="client-c">                          
                              <div className="slide"><img src="https://besthqwallpapers.com/img/original/49654/tommy-hilfiger-logo-emblem-4k-silk-texture.jpg"></img></div>
                            <div className="slide"><img src="https://tse2.mm.bing.net/th?id=OIP.08Ng3T4ZUVESBn8LvZlHbgHaFH&pid=Api&P=0&w=238&h=165"></img></div>
                            </div>
                            <div className="client-c">
                            <div className="slide"><img src="https://tse4.mm.bing.net/th?id=OIP.01SohrJAdaj9NlO2ZxvXuQHaF7&pid=Api&P=0&w=239&h=192"></img></div>
                            <div className="slide"><img src="https://tse2.mm.bing.net/th?id=OIP.JvnnuE2oEMC63WVhKWYsjgHaD_&pid=Api&P=0&w=290&h=157"></img></div>
                            </div>
                        </section>
                        </div>
                        <p id="client-info">
                            We manage projects for clients ,companies and individuals across a wide swath of buissness sectors.We have provided our clients with design and development.
                       </p>
                    </div>
                </div>
                <br></br>
        </div>
    ) ;
}


export default Home;