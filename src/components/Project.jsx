import ProjectSection from "./ProjectSection";
import Style_Hub from "../assets/Style_Hub.png";
import Hungry_Hub from "../assets/Hungry_Hub.png";
import Job_Uplift from "../assets/Job_Uplift.png";
import Amazon_Clone from "../assets/Amazon_Clone.png";
import Portfolio from "../assets/Portfolio.png";
import Nike from "../assets/Nike.png";

const Project = () => {
  return (
    <div id="projects" className="h-full md:pl-[75px] lg:mb-[750px] lg:mr-8 ">
      <p className="lg:text-6xl text-4xl font-semibold text-center">Projects</p>{" "}
      <p className="text-center lg:text-xl text-white/60 my-4">
        I&apos; ve gained experience through various projects. Here&apos;s a
        selection of them.
      </p>
      <div className="grid lg:grid-cols-3 lg:h-[600px] ">
        <ProjectSection
          url={Style_Hub}
          skills={[
            "HTML",
            "CSS",
            "React",
            "Tailwind",
            "JavaScript",
            "MongoDB",
            "Redux",
            "Git",
          ]}
          title="Style Hub"
          date="12-Feb-2023 - 12-Apr-2023"
          desc="I've created a Style Hub, a sophisticated web application meticulously crafted to replicate the renowned design and features of leading fashion platforms. From its sleek and intuitive interface to its comprehensive catalog and personalized recommendations."
          liveUrl="https://style-hub-project.vercel.app/"
          GitHub="https://github.com/rahul-singh-takuli56/StyleHub"
        />
        <ProjectSection
          url={Hungry_Hub}
          skills={[
            "HTML",
            "CSS",
            "React",
            "Tailwind",
            "JavaScript",
            "MongoDB",
            "Redux",
            "Git",
          ]}
          title="Hungry Hub"
          date="12-Feb-2023 - 12-Apr-2023"
          desc="I've created a Food Hub, a web application meticulously crafted to mirror the renowned features and design of leading food delivery platforms. From seamless ordering to intuitive navigation, Food Hub delivers an unparalleled user experience, ensuring convenience and satisfaction for every user."
          liveUrl="https://hungry-hub-eta.vercel.app/"
          GitHub="https://github.com/rahul-singh-takuli56/Hungry-Hub"
        />

        <ProjectSection
          url={Job_Uplift}
          skills={[
            "HTML",
            "CSS",
            "React",
            "Tailwind",
            "JavaScript",
            "MongoDB",
            "Redux",
            "Git",
          ]}
          title="Job Uplift "
          date="12-Feb-2023 - 12-Apr-2023"
          desc="I've engineered a Job Uplift Website, a comprehensive web application that mirrors the acclaimed design and functionality of top-tier job portals. With a focus on user-centric features and seamless navigation, Job Portal Hub offers job seekers and employers alike a superior platform for connecting."
          liveUrl="https://job-portal-website-sigma.vercel.app/"
          GitHub="https://github.com/rahul-singh-takuli56/Job_Portal_Website"
        />

        <ProjectSection
          url={Amazon_Clone}
          skills={[
            "HTML",
            "CSS",
            "React",
            "Tailwind",
            "JavaScript",
            "MongoDB",
            "Redux",
            "Git",
          ]}
          title="E-commerce"
          date="12-Feb-2023 - 12-Apr-2023"
          desc="I've developed an Amazon Clone, a robust web application meticulously designed to emulate the renowned features and user experience of the leading e-commerce giant. From its intuitive interface. "
          liveUrl="https://e-commerce-website-amazon.vercel.app/"
          GitHub="https://github.com/rahul-singh-takuli56/amazon-clone"
        />

        <ProjectSection
          url={Portfolio}
          skills={[
            "HTML",
            "CSS",
            "React",
            "Tailwind",
            "JavaScript",
            "MongoDB",
            "Redux",
            "Git",
          ]}
          title="PortFolio"
          date="12-Feb-2023 - 12-Apr-2023"
          desc="I've built a Portfolio Showcase, a dynamic web application meticulously designed to emulate the style and functionality of leading portfolio platforms. From its sleek and customizable layout."
          liveUrl="https://personal-portfolio-jade-seven.vercel.app/"
          GitHub="https://github.com/rahul-singh-takuli56/Personal-Portfolio"
        />
        <ProjectSection
          url={Nike}
          skills={[
            "HTML",
            "CSS",
            "React",
            "Tailwind",
            "JavaScript",
            "MongoDB",
            "Redux",
            "Git",
          ]}
          title="Nike Store"
          date="12-Feb-2023 - 12-Apr-2023"
          desc="I've crafted a Nike Store Replica, a sophisticated web application that faithfully replicates the esteemed design and functionality of the renowned Nike online store."
          liveUrl="https://nike-store-iota-ten.vercel.app/"
          GitHub="https://github.com/rahul-singh-takuli56/Nike-Store"
        />
      </div>
    </div>
  );
};

export default Project;
