import "../src/style/clip.scss";

export default function Showcase() {
  return (
    <section className="bg-[#F8F7EC] h-screen">
      <div className="container flex justify-between mr-auto ml-auto items-center">
        <span className="text-9xl font-reenie photo">
          <span className="relative text-black">
            Interior <br /> Design
          </span>
        </span>
        <div className="grid grid-cols-2 max-w-[70%] gap-4 mt-5">
          <img
            className="rounded-md block"
            src="./src/assets/Bodaq-blog-post-pics-1-1-3-1024x648.jpg"
            alt=""
          />
          <img
            className="rounded-md block"
            src="./src/assets/Bodaq-blog-post-pics-1-9-1-1024x648.jpg"
            alt=""
          />
          <img
            className="rounded-md block"
            src="./src/assets/Bodaq-blog-post-pics-1-2-3-1024x648.jpg"
            alt=""
          />
          <img
            className="rounded-md block"
            src="./src/assets/Bodaq-blog-post-pics-1-16-1024x648.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
