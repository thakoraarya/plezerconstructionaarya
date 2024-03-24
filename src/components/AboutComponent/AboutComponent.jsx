import Image from 'next/image';
import PlezerLogo from '@/assets/Images/PlezerLogo.JPG';
const AboutComponent = () => {
    const normalTextStyle = "text-sm md:text-lg text-gray-500 text-justify";
    const animatedTextStyle = "min-w-[220px] md:min-w-[600px] px-2 py-1 bg-secondary text-white md:-skew-x-12 rounded-lg border-2 border-primary transform ease-in-out hover:scale-105 duration-300";
    return (
        <section className={`bg-white py-4 rounded-lg mx-3`}>
            <div className={`py-2 md:py-4`}>
                <p className={`mt-4 text-xl md:text-3xl text-tertiary-dark text-center`}>
                    REACH OUT TODAY, DISCOVER HOW WE CAN TURN YOUR DREAM-HOME INTO REALITY.
                </p>
            </div>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
                <div className={`flex flex-col-reverse xl:flex-row items-center lg:justify-between gap-y-4`}>
                    <div className={`flex flex-col gap-2 xl:gap-4 max-w-2xl`}>
                        <h2 className={`text-3xl hidden xl:block font-extrabold text-primary sm:text-4xl border-gray-200 border-b-2`}>
                            Plezer <span className="text-secondary">Construction</span>
                        </h2>
                        <p className={`text-xl text-tertiary-dark`}>
                            Establishing Trust, One Home at a Time
                        </p>
                        <p className={`flex flex-col gap-2 xl:gap-4 ${normalTextStyle}`}>
                            With a decade of proven excellence, we stand as the premier construction firm in our community. Our track record speaks volumes, having successfully crafted over 100 homes that embody our unwavering dedication to quality, expert craftsmanship, and unwavering customer satisfaction.
                        </p>
                        <div className="flex flex-col gap-2 xl:gap-4 text-xs md:text-lg">
                            <span className='text-xl text-tertiary-dark'>Discover what distinguishes us: </span>
                            <ul className='flex flex-col gap-y-2 xl:gap-y-4'>
                                <li className={`${animatedTextStyle}`}>
                                    Experience: Navigating the local building landscape is second nature to us, and we possess the expertise to handle projects of any scale.
                                </li>
                                <li className={`${animatedTextStyle}`}>
                                    Quality: Utilizing only the finest materials and construction methods, we ensure your home is not just built but built to endure.
                                </li>
                                <li className={`${animatedTextStyle}`}>
                                    Craftsmanship: Our team of skilled professionals takes immense pride in their work, evident in the impeccable finished product.
                                </li>
                                <li className={`${animatedTextStyle}`}>
                                    Customer Satisfaction: Surpassing your expectations is our pledge, guiding you seamlessly through every stage of the process.
                                </li>
                            </ul>
                        </div>
                        <div className={`${normalTextStyle}`}>
                            <p>Choosing us means selecting a dedicated partner for your entire building journey. From the initial consultation to the final walkthrough, we&apos;re here to provide guidance and answer your questions.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            className="m-h-64 object-fit mix-blend-multiply max-w-64  mx-auto lg:mx-0"
                            src={PlezerLogo}
                            alt="About Us"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent;