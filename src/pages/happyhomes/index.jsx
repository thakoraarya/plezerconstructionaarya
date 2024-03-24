import Header from "@/components/Header/Header";
import ProjectComponent from "@/components/ProjectComponent/ProjectComponent";
import Testimonials from "@/components/Testimonials/Testimonials";
import { HappyHomesMap } from "@/components/ProjectComponent/MapComponent";
import BrochureComponent from "@/components/Brochure/BrochureComponent";
const Project = () => {
  return (
    <section className="flex flex-col gap-3">
      <Header active={"HappyHomes"} />
      <ProjectComponent />
      <BrochureComponent />
      <Testimonials />
      <HappyHomesMap />
    </section>
  )
}

export default Project