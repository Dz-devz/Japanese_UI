import DesignOne from "../assets/Bodaq-blog-post-pics-1-1-3-1024x648.jpg";
import DesignFour from "../assets/Bodaq-blog-post-pics-1-16-1024x648.jpg";
import DesignThree from "../assets/Bodaq-blog-post-pics-1-2-3-1024x648.jpg";
import DesignTwo from "../assets/Bodaq-blog-post-pics-1-9-1-1024x648.jpg";
import "../style/clip.css";

export default function Showcase() {
  const imageAssets = [
    {
      productId: 1,
      productImage: DesignOne,
      productLabel: "Interior Design",
    },
    {
      productId: 2,
      productImage: DesignTwo,
      productLabel: "Interior Design",
    },
    {
      productId: 3,
      productImage: DesignThree,
      productLabel: "Interior Design",
    },
    {
      productId: 4,
      productImage: DesignFour,
      productLabel: "Interior Design",
    },
  ];
  return (
    <section className="bg-[#F8F7EC] h-full cursor-sakura">
      <div className="container flex justify-between mr-auto ml-auto items-center pb-[4.3rem]">
        <span className="text-9xl font-reenie photo">
          <span className="relative text-black">
            Interior <br /> Design
          </span>
        </span>
        <div className="grid grid-cols-2 max-w-[70%] gap-4 mt-5">
          {imageAssets.map((collection) => (
            <img
              className="rounded-md block transition duration-[1.3s] ease-in-out hover:scale-[1.1]"
              src={collection.productImage}
              alt={collection.productLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
