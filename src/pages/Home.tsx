import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { CustomServices } from '../components/CustomServices';
import { Partners } from '../components/Partners';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <CustomServices />
                <Partners />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
};
