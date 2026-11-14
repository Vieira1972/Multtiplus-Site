import { Header } from '../components/Header';
import { TestHero } from '../components/TestHero';
import { TestServices } from '../components/TestServices';
import { TestPartners } from '../components/TestPartners';
import { TestAbout } from '../components/TestAbout';
import { TestContact } from '../components/TestContact';
import { Footer } from '../components/Footer';

export const TestHome = () => {
    return (
        <>
            <Header />
            <main>
                <TestHero />
                <TestServices />
                <TestPartners />
                <TestAbout />
                <TestContact />
            </main>
            <Footer />
        </>
    );
};
