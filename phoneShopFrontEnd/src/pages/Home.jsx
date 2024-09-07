import Body from "../components/Main-page/Body";
import MainAnimation from "../components/Main-page/Main-animation";
import Header from "../components/Common-components/Header";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="mainAnimation">
        <MainAnimation></MainAnimation>
      </div>
      <Body></Body>
    </>
  );
}

export default Home;
