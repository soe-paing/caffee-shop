import './contact.css';
import contactBg from '../../assets/contactBg.png';

const Contact = () => {
    return (
        <section id="contact" style={{backgroundImage: `url(${contactBg})`}} >
            <div className='container'>
                <div className='contact-container'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.036549679657!2d96.16802721763003!3d16.774857097300984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec8a8e7c09b1%3A0x199a99cd60c8f465!2s50%20Street%20Lower%20Block%20Bus%20Stop!5e0!3m2!1sen!2smm!4v1721903983732!5m2!1sen!2smm" allowfullscreen="" loading="lazy"></iframe>
                    <div className='contact-info'>
                        <div className='info-container'>
                            <div className='info-head'>
                                <h2>Contact Us</h2>
                            </div>
                            <span>Location:
                                <p>Brewed Awakening Coffee Shop <br />
                                    123 Java Lane <br />
                                    Espressoville, CO 80201
                                </p>
                            </span>
                            <span>Phone Number:
                                <p>(555) 123-4567</p>
                            </span>
                            <span>Email:
                                <p>info@brewedawakening.com</p>
                            </span>
                            <span>Hours of Operation:
                                <p>Monday - Friday: 7:00 AM - 6:00 PM <br />
                                Saturday - Sunday: 8:00 AM - 4:00 PM</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
