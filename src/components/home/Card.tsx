import star from "../../assets/icons/Star 1.svg";
import halfStar from "../../assets/icons/Star 5.svg";

interface Props {
  title: string;
  price: number;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  imageUrl: string;
}

const Card = ({ title, price, rating, imageUrl }: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="">
      <img
        src={imageUrl}
        alt={title}
        className="max-w-[295px] max-h-[298px] bg-[rgba(240,_238,_237,_1)] rounded-[20px]"
      />
      <h1 className="mt-[16px] font-bold text-[20px] text-start">{title}</h1>

      <div className="mt-[8px] flex gap-[7px] items-center">
        {[...Array(fullStars)].map((_, idx) => (
          <img key={idx} src={star} alt="star" className="w-[16px] h-[16px]" />
        ))}

        {hasHalfStar && (
          <img src={halfStar} alt="half-star" className="w-[16px] h-[16px]" />
        )}

        <h3 className="text-[14px] font-normal">{rating}/5</h3>
      </div>

      <h1 className="text-start mt-[8px] text-[24px] font-bold">${price}</h1>
    </div>
  );
};

export default Card;

