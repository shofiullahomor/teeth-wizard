import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { treatment_name, treatment_description, image, cost } =
    useLoaderData();
  return (
    <div className="flex justify-between gap-5 m-5 p-5">
      <div className="w-1/2">
        <img className="w-full rounded-xl " src={image} alt="" />
      </div>
      <div className="w-1/2 ml-5">
        <h1 className="text-5xl font-extrabold text-blue-500 text-center my-4">
          {treatment_name}
        </h1>
        <p className="text-xl text-slate-500">{treatment_description}</p>
        <p className="text-2xl text-slate-500 my-5"> Price : {cost}</p>
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn btn-primary"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Details;
