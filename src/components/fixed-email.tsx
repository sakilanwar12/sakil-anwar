interface IFixedEmail {
  email?: string;
}
const FixedEmail = ({ email = "sakilanwar60@gmail.com" }: IFixedEmail) => {
  return (
    <div className="max-xl:hidden fixed bottom-32 left-2 block z-[99999]">
      <a
        href="mailto:tasmirolislam@gmail.com"
        className="px-3 text-muted-foreground hover:text-default-100 tracking-[1px] transition-all !bg-bottom hover:!bg-center"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        {email}
      </a>
    </div>
  );
};

export default FixedEmail;
