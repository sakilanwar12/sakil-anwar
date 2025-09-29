import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AppLogo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-9">
        <AvatarImage
          src={"/images/developer.png"}
          alt="Logo"
          width={50}
          height={50}
        />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>

      <h3 className="text-default-300 text-sm leading-[18px] font-bold uppercase">
        Md. Sakil <br /> <span className="tracking-wider">Anwar .</span>
      </h3>
    </div>
  );
}

export default AppLogo;
