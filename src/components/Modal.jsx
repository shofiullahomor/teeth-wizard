const Modal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = form.target;
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
