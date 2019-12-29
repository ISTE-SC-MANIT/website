import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import '../styles/scss/Contact.scss';

const Contact = () =>{
    return(
<section className="Contact">
    <div className="heading3">Contact Us</div>
    <div className="contact_content">
        <div className="Address">
            <div className="heading2"><HomeIcon/>Address</div>
            <div className="content"><p>Maulana Azad National Institute of Technology,
                                        Bhopal, Madhya Pradesh - 462003
                                        India
                                    </p>
            </div>
        </div>
        <div className="Email">
            <div className="heading2"><EmailIcon/>Email</div>
                <div className="content"><p>istemanitsc@gmail.com
                                        </p>
                </div>
        </div>
        <div className="phone">
            <div className="heading2"><PhoneIcon/>Phone</div>
                <div className="content"><p>Tarun Goyal:123456789<br></br>
                                             Tarun Goyal:123456789
                                        </p>
                </div>
        </div>
        <div className="Social">
        <div className="heading2">Find us at</div>
                <div className="content"><p><FacebookIcon/>Facebook<br></br>
                                            <YouTubeIcon/>Youtube<br></br>

                                            <InstagramIcon/>Instagram<br></br>    
                                        </p>
                </div>
        </div>
    </div>
</section>
    )
}

export default Contact;