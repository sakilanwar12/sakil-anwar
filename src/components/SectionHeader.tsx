function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-gradient-neon mb-3 text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto max-w-lg text-[#8888aa]">{description}</p>
      <div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] opacity-60" />
    </div>
  );
}

export default SectionHeader;
