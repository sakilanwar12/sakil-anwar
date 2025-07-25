interface ISubTitle {
  subTitle?: string;
}
function SubTitle({ subTitle="frontend" }: ISubTitle) {
  return <h5 className="text-[48px] uppercase">{subTitle}</h5>;
}

export default SubTitle;
