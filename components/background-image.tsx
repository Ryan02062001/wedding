import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0">
      <Image
        src="/background2.JPG"
        alt="Background Image"
        fill
        className="object-cover object-[20%_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#8B9E88]/20" />
    </div>
  );
};

export default BackgroundImage;
