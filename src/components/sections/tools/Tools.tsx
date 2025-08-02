import SingleItem from "@/components/SingleItem";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";

const Tools = () => {
  return (
    <section className="py-20">
      <div className="container space-y-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-none w-full lg:max-w-[400px]">
            <Title />
            <SubTitle />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-8">
              <SingleItem image="/images/js.png" name="JavaScript" />
              <SingleItem image="/images/ts.png" name="TypeScript" />
              <SingleItem image="/images/react.png" name="React" />
              <SingleItem image="/images/next.webp" name="Next.js" />
              <SingleItem image="/images/redux.png" name="Redux" />
              <SingleItem image="/images/tailwind.png" name="Tailwind CSS" />
              <SingleItem image="/images/gsap.png" name="GSAP" />
              <SingleItem
                image="/images/framer-motion.webp"
                name="Framer Motion"
              />
              <SingleItem image="/images/sass.webp" name="Sass" />
              <SingleItem image="/images/bootstrap.svg" name="Bootstrap" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-none w-full lg:max-w-[400px]">
            <SubTitle subTitle="Backend" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-8">
              <SingleItem image="/images/node.png" name="Node.js" />
              <SingleItem image="/images/nest.svg" name="Nest.js" />
              <SingleItem image="/images/express.png" name="Express.js" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  gap-6">
          <div className="flex-none w-full lg:max-w-[400px]">
            <SubTitle subTitle="Database" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-8">
              <SingleItem image="/images/mysql.svg" name="MySQL" />
              <SingleItem image="/images/postgreSQL.webp" name="PostgreSQL" />
              <SingleItem image="/images/mongodb.svg" name="MongoDB" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  gap-6">
          <div className="flex-none w-full lg:max-w-[400px]">
            <SubTitle subTitle="ORM" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-8">
              <SingleItem image="/images/prisma.png" name="Prisma" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  gap-6">
          <div className="flex-none w-full lg:max-w-[400px]">
            <SubTitle subTitle="Tools" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-8">
              <SingleItem image="/images/git.png" name="Git" />
              <SingleItem image="/images/vscode.png" name="VSCode" />
              <SingleItem image="/images/docker.svg" name="Docker" />
              <SingleItem image="/images/aws.webp" name="Aws" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
