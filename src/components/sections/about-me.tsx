import { Separator } from "@/components/ui/separator";

const AboutMe = () => {
  return (
    <section>
      <div className="container">
        <p className="text-[60px] leading-[70px] py-10">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </p>
        <p>This is me</p>
        <Separator className="my-5" />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-none w-full lg:max-w-[400px]">
            <h2>Hi, I'm Sakil Anwar.</h2>
          </div>
          <div className="flex-1">
            <p>
              I'm a frontend web developer dedicated to turning ideas into
              creative solutions. I specialize in creating seamless and
              intuitive user experiences. My approach focuses on creating
              scalable, high-performing solutions tailored to both user needs
              and business objectives. By prioritizing performance,
              accessibility, and responsiveness, I strive to deliver experiences
              that not only engage users but also drive tangible results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
