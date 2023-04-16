import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience,Research, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />

        <Tech />
        <Projects />
        <Research/>
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;