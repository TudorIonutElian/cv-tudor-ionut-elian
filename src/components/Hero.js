import profileImage from "../assets/images/ionuteliantudor.jfif";
import HeroLine from "./HeroLine";

function Hero() {
    return (
        <div className="Hero h-80 bg-gray-100 flex flex-row items-center justify-center">
            <div className="h-40 mx-6">
                <img src={profileImage} className="rounded-full h-40" alt="TudorIonutElian"/>
            </div>
            <div className="flex flex-col h-40 mx-10">
                <HeroLine left="My desired position: " right="Full Stack Developer" />
                <HeroLine left="My curent position: " right="JavaScript Games Developer" />
                <HeroLine left="My desired worktype: " right="Remote/Hybrid" />
                <HeroLine left="My FRONTEND Tech: " right="HTML, CSS, JAVASCRIPT, SCSS, VUE.js, React.js, Tailwinds" />
                <HeroLine left="My BACKEND Tech: " right="NodeJS, PHP" />
                <HeroLine left="My Database Tech: " right="All SQL, MongoDB" />
            </div>
        </div>
    );
}

export default Hero;