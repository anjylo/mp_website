import Marquee from "react-fast-marquee";
import images from "@js/marquees"

const CardMarquee = () => {
  const cards = images.map((img, key) => {
    return <div key={key} className="max-w-xs mx-5 bg-white border rounded-lg shadow-lg overflow-hidden">
            <img className="w-78 h-82 object-cover" src={img} alt="image"/>
          </div>
  })

  return (
    <Marquee>
      <div className="flex">
        {cards}
      </div>
    </Marquee>
  );
};

export default CardMarquee;
