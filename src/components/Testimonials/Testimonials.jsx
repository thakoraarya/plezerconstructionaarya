import { testimonials } from "@/Data/testimonials";
// import SliderComponent from "../SliderComponent/SliderComponent";
const Testimonials = () => {

    return (
        <section className="w-full bg-white py-4">
            <div className="">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary pb-4">Testimonials</h2>
                    <p className="pt-6 border-t-2 border-gray-200 mb-8 font-light text-secondary lg:mb-16 sm:text-xl ">Don&apos;t Just Believe Us, Hear it from the Customers.</p>
                </div>
                {/* <SliderComponent slides={testimonials} img={false} /> */}
            </div>
        </section>
    )
}

export default Testimonials