import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Modal = ({ treatment_name }) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const email = e.target.email.value;
    const phonenumber = e.target.pnumber.value;
    const date = e.target.date.value;
    const address = e.target.address.value;

    const info = {
      fname,
      lname,
      email: user.email,

      phonenumber,
      date,
    };
    let saveData = [];
    const localData = localStorage.getItem("appointments");
    if (localData) {
      saveData = JSON.parse(localData);
    }
    saveData.push(info);
    localStorage.setItem("appointments", JSON.stringify(saveData));
  };
  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle overflow-visible "
      >
        <div className="modal-box w-11/12 max-w-5xl ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-xl" htmlFor="">
                First Name
              </label>
              <input
                type="text"
                placeholder=" First Name"
                name="fname"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl" htmlFor="">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl" htmlFor="">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl" htmlFor="">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                name="pnumber"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl" htmlFor="">
                Appointment Date
              </label>
              <input
                type="date"
                placeholder="Type here"
                name="date"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl" htmlFor="">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn btn-primary" type="submit">
                Make an Appointment
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
