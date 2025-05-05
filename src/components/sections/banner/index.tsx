import CounterItem from "@/components/counter-item";
import { Button } from "@/components/ui/button";

const BannerSection = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center">
      <div className="container mx-auto mt-[180px]">
        <h1 className="text-[80px] leading-[80px] uppercase">
          <span className="text-primary">Frontend </span> <br />
          <span className="ms-4 text-white">Developer</span>
        </h1>
        <p className="max-w-[500px] mt-5 text-default-300 mb-4">
          Hi! {"I'm"} <span className="text-default-50">Sakil Anwar</span>. A
          creative Frontend Developer with 3+ years of experience in building
          high-performance, scalable, and responsive web solutions.
        </p>
        <Button
          size={"xl"}
          className=" uppercase text-xl text-default-900 rounded-sm font-anton tracking-wider"
        >
          Hire Me
        </Button>
      </div>
      <div className="flex justify-end pe-10">
        <div className="space-y-4">
          <div>
            <CounterItem value={3} />
            <p className="text-lg ">Years of Experience</p>
          </div>
          <div>
            <CounterItem value={13} />
            <p>Completed Projects</p>
          </div>
          <div>
            <CounterItem value={3} />
            <p>Hours Worked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
