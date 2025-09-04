import Image from "next/image";

const Four = () => {
  return (
    <div className="main">
      <Image
        src="/assets/kollashImg5.png"
        alt=""
        width={475}
        height={630}
        priority={false}
      />
    </div>
  );
};

export default Four;
