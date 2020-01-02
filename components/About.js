import '../styles/scss/about.scss';

const About = () =>
{
    return(
        <section className="about">
            <div className="about_main">
                <div className="about_anim1">
                    <img src="/static/anim1.png"></img>
                </div>
                <div className="about_team">
                    <img src="/static/aboutus.jpg"></img>
                </div>
                <div className="about_content">
                    <div className="about_head"><h1 >Who are we?</h1></div>
                    <p>The Indian Society for Technical Education (ISTE) is the 
                        leading national professional non-profit making society for
                        the technical education system in our country. ISTE Students’ Chapter
                        MANIT is one of the oldest and most prestigious student organization of 
                        MANIT Bhopal. ISTE MANIT aims to bring respite to the students from
                        the monologue classroom lectures, thereby providing a platform to 
                        facilitate healthy discussions and information exchange on technical 
                        education. The blue chip event Chimera, established in 2003, has been 
                        a success ever since its inception. Chimera has major events in its closet
                        like Anubhuti, Chimera X, Codathon, Megatreopuz, and Pro-shows.
                    </p>
                </div>
                <div className="about_anim2">
                    <img src="/static/anim2.png"></img>
                </div>
            </div>
        </section>

    )
}
export default About;