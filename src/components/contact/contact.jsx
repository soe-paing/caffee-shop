import './contact.css';
import contactBg from '../../assets/contactBg.png';

const Contact = () => {
    return (
        <section id="contact" style={{backgroundImage: `url(${contactBg})`}}>
            <div className='container'>
                <h5 className="section-head">
                    <span>Caffee</span><br/>
                    Contact Us
                </h5>
                <div className='contact-container'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.036549679657!2d96.16802721763003!3d16.774857097300984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec8a8e7c09b1%3A0x199a99cd60c8f465!2s50%20Street%20Lower%20Block%20Bus%20Stop!5e0!3m2!1sen!2smm!4v1721903983732!5m2!1sen!2smm" allowfullscreen="" loading="lazy"></iframe>
                    <div className='contact-info'>
                        <div>
                            <span>Example:
                                <p> simple</p>
                            </span>
                            <span>Example:
                                <p> simple</p>
                            </span>
                            <span>Example:
                                <p> simple</p>
                            </span>
                            <span>Example:
                                <p> simple</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
