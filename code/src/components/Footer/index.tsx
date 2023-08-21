import Links from "./../Nav/page-links";
import Socials from "./socials";

const Footer = () => {
  return (
    <footer className="bg-bg2 text-text md:h-80 h-44 flex md:p-10 p-4">
      <div className="bg-bg w-1/3 md:p-10 p-4 flex flex-col gap-2">
        <h2 className="font-Berlin md:text-5xl text-3xl">Explore</h2>
        <div className="flex flex-col md:gap-2 text-text md:text-2xl text-lg italic font-semibold w-40">
          <Links link="/" text="home" />
          <Links link="/gallery" text="gallery" />
          <Links link="about" text="about" />
        </div>
      </div>
      <div className="bg-bg w-1/3 flex justify-center items-center">
        <img
          src={"/img/logo.png"}
          alt="official rat gallery logo kinda big"
          className="md:h-28 h-20"
        />
      </div>
      <div className="bg-bg w-1/3 flex justify-end items-center p-10">
        <div className="h-full md:w-16 w-12 flex flex-col justify-around md:gap-0 gap-4">
          <Socials
            link="https://github.com/mpu69"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            alt="github"
          />
          <Socials
            link="https://twitter.com/mpu006"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"
            alt="twitter"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
