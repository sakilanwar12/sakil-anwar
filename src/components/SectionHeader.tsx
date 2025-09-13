interface ISectionHeader {
  title: string;
  description: string;
}
function SectionHeader({ title, description }: ISectionHeader) {
  return (
    <div className="text-center mb-12 space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        My{" "}
        <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <p className="text-xl text-default-400 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
