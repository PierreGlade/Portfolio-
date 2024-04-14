import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'


function Contact() {
    const form = useRef();
    const [confirmationMessage, setConfirmationMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_slvovoh', 'template_fjc83hm', form.current, 'e8VxXA8tsdyyrCefN')
      .then((result) => {
          console.log(result.text);
          setConfirmationMessage ('Message envoyé !');
          setTimeout(() => {
          setConfirmationMessage('');
        }, 5000); 
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setConfirmationMessage('Une erreur est survenue. Veuillez réessayer.')
      });
  };

    
  return (
    <section className='contact' id='contact'>
        <h2 className='title'>Contact</h2>
        <div className='contact__container'>
            <div className='contact__content'>
                <div className='contact__left'>
                    <div className='contact__left-top'>
                        <h3 className='contact__title'>Pierre Glade</h3>
                        <p className='contact__subtitle'>Contactez moi</p>
                    </div>
                    <div className='contact__left-bottom'>
                        <div className='contact__info'>
                            <i className="fa-solid fa-location-dot  "></i> <p className='contact__text'>La Rochelle</p>
                        </div>
                        <div className='contact__info'>
                            <i className="fa-solid fa-envelope"></i> <Link className='contact__text' to='mailto:shahingharbi73@yahoo.com'>glade.pierre@outlook.fr</Link>
                        </div>
                        <div className='contact__info'>
                            <i className="fa-solid fa-phone "></i> <Link className='contact__text' to='tel:0782214993'>07.83.88.25.73</Link>
                        </div>
                    </div>

                </div>
                <div className='contact__right'>
                    <form ref={form} onSubmit={sendEmail} className='contact__form' >
                        <div className='contact__input-container'>
                            <label htmlFor="name" className="contact__label">Nom*</label>
                            <input id="name" name='name' className='contact__input' type="text" placeholder='NOM*' required/>
                        </div>
                        <div className='contact__input-container'>
                            <label htmlFor="email" className="contact__label">Email*</label>
                            <input id="email" name='email' className='contact__input' type="email" placeholder='EMAIL*' required/>
                        </div>
                        <div className='contact__input-container'>
                            <label htmlFor="phone" className="contact__label">Téléphone</label>
                            <input id="phone" name='phone' className='contact__input' type="tel" placeholder='TELEPHONE'/>
                        </div>
                        <div className='contact__input-container'>
                            <label htmlFor="message" className="contact__label">Message*</label>
                            <textarea id="message" className='contact__input' name="message" placeholder='MESSAGE*' rows="5" required></textarea>
                        </div>
                        <input type="submit" className='contact__button' value="Envoyer"/>
                    </form>
                    {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
                </div>

            </div>
        </div>
    </section>
  )
}

export default Contact