import FlowerIcon from "@/components/svg/FlowerIcon";
import WaveText from "@/components/WaveText";

const BannerSection = () => {
  return (
    <div className="h-[calc(100vh-64px)] w-full flex flex-col justify-center">
      <div className="container">
        <div className="text-left relative">
          <WaveText text="FRONTEND" className="text-primary" />
          <span className="ms-10 block">
            <WaveText text="D E V E L O P E R" className="text-white" />
          </span>
          <span className="absolute top-10 right-0">
            <FlowerIcon />
          </span>
        </div>

        <p className="max-w-[800px] leading-12   mt-10 text-3xl  mb-4">
          A creative Frontend Developer with 3+ years of experience crafting
          responsive web solutions, including dashboards, landing pages, and
          more.
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
