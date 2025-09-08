import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AppLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="ring ring-primary">
        <AvatarImage
          src={"/images/developer.png"}
          alt="Logo"
          width={50}
          height={50}
        />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>

      <div>
        <h3 className="font-medium text-sm text-default-50">Sakil Anwar</h3>
        <p className="font-medium text-sm text-default-200 -mt-0.5">Frontend Developer</p>
      </div>
    </div>
  );
};

export default AppLogo;
