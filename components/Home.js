
import '../styles/scss/home.scss';

const Home = () =>
{
    return(
        <section className="Home">
            <div className="banner_home">
                <div className="logo_home">
                    <img src="/static/logo.jpg"></img>
                </div>
                <div className="text_home">
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <div className="headtext"><h1> ISTE MANIT <br></br> Student's Chapter</h1></div>
                    <p>Best Student Chapter in Madhya-Pradesh Chattisgarh region <br></br> from last consecutive Three years.</p>
                    <br></br><br></br>
                </div>
                <div className="image_home">
                  <div className="homeimg1">
                    <img src="/static/dark1.jpg" />
                  </div>
                  <div className="homeimg2">
                    <img src="/static/anubhuti.jpg" />
                  </div><div className="homeimg3">
                    <img src="/static/codathon.jpg" />
                    <br></br><br></br><br></br><br></br>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default Home;