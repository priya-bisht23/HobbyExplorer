import React from "react";

const Contact = () => {
  return (
    <>
      <div class="container">
        <div class="footer_get_touch_inner grid-70-30">
          <div class="colmun-70 get_form">
            <div class="get_form_inner">
              <div class="get_form_inner_text">
                <h3>Get In Touch</h3>
              </div>
              <form action="#">
                <div class="grid-50-50">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="email" placeholder="Email" />
                  <input type="tel" placeholder="Phone/Skype" />
                </div>
                <div class="grid-full">
                  <textarea placeholder="Tell us about your hobby" cols="30" rows="10"></textarea>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
          <div class="colmun-30 get_say_form">
            <h5>Say Hi!</h5>
            <ul class="get_say_info_sec">
              <li>
                <i class="fa fa-envelope"></i>
                <a href="mailto:">info@hobbyfind.com</a>
              </li>
              <li>
                <i class="fa fa-whatsapp"></i>
                <a href="tel:">+353 766524346143</a>
              </li>
              <li>
                <i class="fa fa-skype"></i>
                <a href="#">TheHobbyExplorer</a>
              </li>
            </ul>
            <ul class="get_say_social-icn">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
