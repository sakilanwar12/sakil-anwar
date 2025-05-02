const BannerSection = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center">
      <div className="container mx-auto">
        <h1 className="text-7xl">
          <span className="text-primary">Frontend </span> <br />
          <span>Developer</span>
        </h1>
        <p className="max-w-[400px]">
         {" Hi! I'm Sakil Anwar. A creative Frontend Developer with 3+ years of  experience in building high-performance, scalable, and responsive web solutions."}
        </p>
        
      </div>
    </div>
  );
};

export default BannerSection;
