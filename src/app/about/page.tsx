import Image from "next/image";
import image from "@/assets/Screenshot 2024-09-26 210904.png";
import List from "@/components/List";
import ScrollAnimation from "@/components/ScrollAnimation";

const AboutPage = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        {/* <Image src={image} alt="image"></Image> */}
        <div>
          <List></List>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <ScrollAnimation></ScrollAnimation>
      </div>
    </>
  );
};

export default AboutPage;
