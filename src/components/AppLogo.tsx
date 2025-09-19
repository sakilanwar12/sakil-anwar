import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AppLogo() {
  return (
    <Avatar className="size-7">
      <AvatarImage
        src={"/images/developer.png"}
        alt="Logo"
        width={50}
        height={50}
      />
      <AvatarFallback>SA</AvatarFallback>
    </Avatar>
  );
}

export default AppLogo;
