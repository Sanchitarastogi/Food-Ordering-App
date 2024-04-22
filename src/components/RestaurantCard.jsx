export const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, costForTwoString, deliveryTime } =
    props;
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="img-food"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h4>{avgRating}</h4>
      <h4>{costForTwoString}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
