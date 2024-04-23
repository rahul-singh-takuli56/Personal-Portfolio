import {
  Navbar,
  About,
  Contact,
  Education,
  // Experience,
  Project,
} from "./components";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
  return (
    <main className="font-roboto text-white lg:h-[4900px] h-[8300px]  bg-gray-800">
      <header>
        <Navbar />
      </header>

      <section>
        <About />
      </section>

      <section>
        <Skills />
      </section>

      {/* <section>
        <Experience />
      </section> */}

      <section>
        <Project />
      </section>

      <section>
        <Education />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
