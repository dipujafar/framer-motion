import Image from "next/image";
import image from "@/assets/Screenshot 2024-09-26 210904.png";

const AboutPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Image src={image} alt="image"></Image>
    </div>
  );
};

export default AboutPage;
