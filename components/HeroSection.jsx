import BackgroundText from "./BackgroundText";
import HeroModel from "./HeroModel";

function HeroSection() {
    return (
        <section className="lg:min-h-[80vh] grid items-center max-w-4xl mx-auto relative lg:py-0 py-10 mb-16 lg:mb-0">
            <p className="lg:text-3xl text-2xl lg:mt-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 max-w-xl leading-relaxed lg:leading-loose">
                Hi ✋ Welcome to my portfolio. My name is Eh Masuk and I&apos;m a fullstack web developer.
            </p>
            <HeroModel />
            <BackgroundText text="welcome" />
        </section>
    );
}

export default HeroSection;
