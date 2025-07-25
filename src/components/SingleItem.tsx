import Image from "next/image";

interface ISingleItem {
  image: string;
  name: string;
}
function SingleItem({ image, name }: ISingleItem) {
  return (
    <div className="flex items-center gap-3">
      <Image src={image} alt="Javascript" width={36} height={36} />
      <p className="text-2xl">{name}</p>
    </div>
  );
}

export default SingleItem;
