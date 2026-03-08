import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";

function AppLogo() {
  return (
    <Avatar className="size-10">
      <AvatarImage src="/images/logo/me-circle.png" />
      <AvatarFallback>SA</AvatarFallback>
    </Avatar>
  );
}

export default AppLogo;
