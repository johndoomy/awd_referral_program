import image from '../images/referral-flyer.jpeg';

function Main() {
  return (
    <div className="">
      <img
        className="sm:rounded-xl sm:shadow-xl sm:border-2"
        src={image}
        alt="referral flyer"
      />
    </div>
  );
}

export default Main;
