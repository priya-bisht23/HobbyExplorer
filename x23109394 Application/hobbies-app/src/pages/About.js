import React from "react";

const About = () => {
    return (
        <>
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-6 text-center">
                        <img src="https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-md-6 pt-3">
                        <small class="text-uppercase" >About us</small>
                        <h1 class="h2 mb-4" >Our Mission</h1>
                        <p class="text-secondary" >At HobbyFinder, we believe that everyone has a hobby waiting to be discovered. Whether you're looking to explore new interests, reconnect with an old pastime, or simply shake up your routine,
                         our mission is to make the process as exciting and accessible as possible.
                          We're here to inspire you to step out of your comfort zone, to try something new,
                           and to find joy in the journey of discovery.
                           </p>

                        <a href="#"  class="btn px-4 py-3 text-white d-flex align-items-center justify-content-between">
                            <span>Download Profile</span>
                          
                        </a>
                    </div>
                </div>
            </div>




            

        </>
    );
};

export default About;
