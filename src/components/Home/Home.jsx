import Banner from "../Banner";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard";
import { NavLink } from "react-router-dom";
import Feedback from "../Feedback";

const Home = () => {
  const services = useLoaderData();
  const { servicesData, feedbackData } = services;
  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-4 gap-4 justify-center items-center">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="my-4 flex justify-center">
        <div></div>
        <button className="btn btn-md w-full   mx-auto">
          <NavLink to="/allTreatment">Show more</NavLink>
        </button>
        <div></div>
      </div>

      <Feedback feedbackData={feedbackData}></Feedback>
    </div>
  );
};

export default Home;
