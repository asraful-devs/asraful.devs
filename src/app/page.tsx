import Certificate from '../components/modules/Certificate';
import Contact from '../components/modules/Contact';
import Education from '../components/modules/Education';
import Hero from '../components/modules/Hero';
import MarqueeSkill from '../components/modules/MarqueeSkill';
import Projects from '../components/modules/Project';
import Skill from '../components/modules/Skill';

const Home = () => {
    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <section className='min-h-screen' id='home'>
                <Hero />
            </section>

            {/* Marquee Skills Section */}
            <section className='py-10' id='marquee-skill'>
                <MarqueeSkill />
            </section>

            {/* Projects Section */}
            <section className='py-16' id='projects'>
                <Projects />
            </section>

            {/* Skills Section */}
            <section className='py-16' id='skills'>
                <Skill />
            </section>

            {/* Education Section */}
            <section className='py-16' id='education'>
                <Education />
            </section>

            {/* Certificate Section */}
            <section className='py-16' id='certificates'>
                <Certificate />
            </section>

            {/* Contact Section */}
            <section className='py-16' id='contact'>
                <Contact />
            </section>
        </div>
    );
};

export default Home;
