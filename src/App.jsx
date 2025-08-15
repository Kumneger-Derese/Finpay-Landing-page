import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Feature from "./components/Feature.jsx";
import Statics from "./components/Statics.jsx";
import Steps from "./components/Steps.jsx";
import Mission from "./components/Mission.jsx";
import Plan from "./components/Plan.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import {useTheme} from "./context/ThemeContext.jsx";

const App = () => {
    const {isDark} = useTheme()
    return (
        <div className={`dark:bg-secondary transition-colors duration-300 dark:text-white text-base bg-light
         ${isDark ? "dark" : ""}`}>
            <div className={' px-8 '}>
                <Navbar/>
                <Hero/>
                <Feature/>
            </div>

            <div className={'bg-white dark:bg-base dark:text-light'}>
                <Statics/>
            </div>

            <div className={'bg-secondary '}>
                <Steps/>
            </div>

            <div className={'px-8 bg-white dark:bg-base dark:text-light'}>
                <Mission/>
                <Plan/>
                <CTA/>
            </div>

            <Footer/>
        </div>
    );
};

export default App;