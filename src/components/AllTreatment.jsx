import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const AllTreatment = () => {
  const services = useLoaderData();
  return (
    <div className="grid md:grid-cols-4 gap-4 justify-center items-center">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllTreatment;
