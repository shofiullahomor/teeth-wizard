import { NavLink } from "react-router-dom";
const ServiceCard = (service) => {
  const { treatment_name, treatment_description, image, cost, id } =
    service.service;
  return (
    <div>
      <div className="card bg-base-100 p-4 rounded-xl ">
        <figure className="">
          <img className=" w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {treatment_name}
            <div className="badge badge-secondary">{cost}</div>
          </h2>
          <p>{treatment_description}</p>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">${cost}</div>
          </div>
        </div>
      </div>
      <NavLink to={`/details/${id}`}>
        <button className="btn btn-primary mx-auto block">
          Check Out more
        </button>
      </NavLink>
    </div>
  );
};

export default ServiceCard;
