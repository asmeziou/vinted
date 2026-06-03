import Banner from "../assets/banner.jpg";
const Hero = () => {
  //   console.log(restaurant);// OK
  return (
    <section className="hero">
      <div className="container">
        <img src={Banner} />
      </div>
    </section>
  );
};

export default Hero;
