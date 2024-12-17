// eslint-disable-next-line react/prop-types
const Feedback = ({ feedbackData }) => {
  console.log(feedbackData);
  // const { name, user_image, review } = feedbackData;

  return (
    <div>
      <h1 className="py-8 text-6xl text-blue-500 font-extrabold text-center">
        Our Client Say's
      </h1>

      <div className="grid grid-cols-3 gap-2">
        {feedbackData.map((feed) => (
          <div key={feed.review_id} className="p-4 m-4 bg-base-100  shadow-xl">
            <figure className=" flex justify-between gap-4 w-full">
              <img
                className="w-16 h-16 rounded-full "
                src={feed.user_image}
                alt="Shoes"
              />
              <h2 className="card-title">{feed.name}</h2>
              <span>{new Date().toLocaleDateString()}</span>
            </figure>
            <div className="card-body items-center text-center">
              <p>{feed.review}</p>
              <div className="card-actions">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
