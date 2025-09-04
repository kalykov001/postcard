import Image from "next/image";
import React from "react";

const HeroBefore = () => {
  return (
    <div className="main">
      <Image
        src="/assets/footer$.png"
        alt="love me"
        width={475}
        height={630}
        priority={false}
      />
    </div>
  );
};

export default HeroBefore;
