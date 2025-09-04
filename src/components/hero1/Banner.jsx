import Image from "next/image";

const Banner = () => {
  return (
    <div className="main">
      <Image
        src="/assets/love.png"
        alt=""
        width={475}
        height={630}
        priority={true}
      />
    </div>
  );
};

export default Banner;
