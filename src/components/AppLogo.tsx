import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AppLogo = () => {
  return (
    <Avatar>
      <AvatarImage
        src={"/images/developer.png"}
        alt="Logo"
        width={50}
        height={50}
      />
      <AvatarFallback>SA</AvatarFallback>
    </Avatar>
  );
};

export default AppLogo;
