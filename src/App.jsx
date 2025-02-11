import Expressions from "./components/Expressions";
import Home from "./components/Home";
import KodexCards from "./components/KodexCards";
import Lists from "./components/Lists";
import Props from "./components/Props";
import logo from "./assets/img2.jpg";
import img2 from "./assets/react.svg";
import Conditional from "./components/Conditional";
import Button from "./components/Button";
import Events from "./components/Events";
import StateOne from "./components/Hooks/Usestate/StateOne";
import Forms from "./components/Hooks/Usestate/Forms";
import StateTwo from "./components/Hooks/Usestate/StateTwo";
import StateThree from "./components/Hooks/Usestate/StateThree";
function App() {
  return (
    <section className="">
      <h1>hello world </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in
        impedit sed totam vero dicta eligendi tempora incidunt, cumque quasi.
      </p>
      {/* <label htmlFor=""></label> */}
      <Home></Home>
      <Home />
      <Expressions />
      <Lists />
      <Props text="hello world" />
      <Props text="Bye bye world" />
      <div className="flex gap-10 px-16">
        <KodexCards
          heading="Kodex Academy"
          para="Kodex Academy Provides an Extensive selection of courses covering full-stack web development, mobile app development, UI/UX design, and data analysis."
          btnText="Learn More"
          img={img2}
        />
        <KodexCards
          heading="Kodex Build"
          para="Kodex Build operates as a complete development studio, delivering cutting-edge product development services to both corporate clients and individuals."
          btnText="Download"
          img={logo}
        />
        <KodexCards
          heading="Kodex Build"
          para="Kodex Build operates as a complete development studio, delivering cutting-edge product development services to both corporate clients and individuals."
          btnText="Download"
          img={logo}
        />
      </div>
      <div className="flex justify-center items-center  h-40">
        <Conditional />
      </div>
      <Button text="Get in touch" styles="bg-red-600 !p-4 text-white" />
      <Button text="send" styles="bg-black !p-4 text-white" />
      <Button text="send" styles="bg-black !p-4 text-white" />
      <Events />
      <StateOne />
      <Forms />

      <StateTwo />
      <StateThree />
    </section>
    // <>
    //   <h1>hello </h1>
    //   <p>paragraph</p>
    // </>
  );
}

export default App;
