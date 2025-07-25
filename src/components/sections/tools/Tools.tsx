import SingleItem from "@/components/SingleItem";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";

const Tools = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4">
          <Title />
          <SubTitle />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <SingleItem image="/images/js.png" name="JavaScript" />
        </div>
      </div>
    </section>
  );
};

export default Tools;
