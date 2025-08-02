interface IExperienceCard {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
}
const ExperienceCard = ({
  companyName,
  jobTitle,
  startDate,
  endDate,
}: IExperienceCard) => {
  return (
    <div>
      <h3 className="text-lg  text-white">{companyName}</h3>
      <h2 className="text-2xl  text-white py-1">{jobTitle}</h2>
      <p className="text-default-500">
        {startDate} - {endDate}
      </p>
    </div>
  );
};

export default ExperienceCard;
