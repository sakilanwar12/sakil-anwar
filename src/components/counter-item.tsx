import { Plus } from "lucide-react";
const CounterItem = ({ value }: { value: number }) => {
  return (
    <div className="text-end text-primary text-3xl font-bold font-anton inline-flex items-center gap-1">
      {value} <Plus className="size-4"/>
    </div>
  );
};

export default CounterItem;
