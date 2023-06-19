import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className='section__title>'>Contact</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">

            <div className='contact__content'>
                <h3 className='contact__icon'><i class='bx bx-mail-send' ></i></h3>
                <h3 className="contact__title">Email</h3>

                <div className='contact__box'>
                    <div className="contact__group">

                        <div className='contact__data'>
                            <div>
                            <h3 className='contact__name'>atul123@gmail.com</h3>
                            <h3 className="contact__level"><a href="https://mail.google.com/">Send<i class='bx bx-right-arrow-alt' ></i> </a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='contact__content'>
            <h3 className='contact__icon'><i class='bx bxl-whatsapp' ></i></h3>
                <h3 className="contact__title">Whatsapp</h3>

                <div className='contact__box'>
                    <div className="contact__group">

                        <div className='contact__data'>
                            <div>
                            <h3 className='contact__name'>+91 9876543210</h3>
                            <h3 className="contact__level"><a href="https://web.whatsapp.com/">Send<i class='bx bx-right-arrow-alt' ></i></a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='contact__content'>
            <h3 className='contact__icon'><i class='bx bxl-skype' ></i></h3>
                <h3 className="contact__title">Skype</h3>

                <div className='contact__box'>
                    <div className="contact__group">

                        <div className='contact__data'>
                            <div>
                            <h3 className='contact__name'>User:123ak</h3>
                            <h3 className="contact__level"><a href="https://www.skype.com/en/">Send<i class='bx bx-right-arrow-alt' ></i></a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Contact;