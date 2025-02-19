import { chartConfig } from "@/data/index";
import { Progress } from "@/components/ui/progress"
import StorageAreaChart from "@/charts/AreaChat";
import StoragePieChart from "@/charts/PieChart";
import StorageBarChart from "@/charts/BarChart";
import { TableDemo } from "./TableDemo";

const Dashboard = () => {
  return (
    <div className='flex flex-col flex-1 gap-4 mb-5'>
      <div className="gap-4 grid md:grid-cols-4 mb-6 sm:grid-cols-2">
        {Object.keys(chartConfig).map((key) => (
          <div key={chartConfig[key].label} className="bg-sidebar shadow-xl border-2 p-4 border-accent rounded-xl size-full">
            <div className="mb-3">
              <img src={chartConfig[key].url} alt={chartConfig[key].label} width={45} />
            </div>
            <div className="mb-6">
              <span className='font-semibold text-xl'>
                {chartConfig[key].label}
              </span>
            </div>
            <div>
              <Progress value={(parseInt(chartConfig[key].data) / 500) * 100} className='mb-2' />
              <span className='sm:text-sm lg:text-sm md:text-xl'>
                {chartConfig[key].data !== '' ? chartConfig[key].data : 0}
                <span className='text-muted-foreground'> of 500 MB</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="w-full lg:w-1/2">
          <StorageBarChart />
        </div>
        <div className="w-full lg:w-1/2 rounded-xl">
          <StoragePieChart />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mb-6">
        <div className="w-full ">
          <TableDemo />
        </div>
        <div className="w-full lg:w-10/12">
          <StorageAreaChart />
        </div>
      </div>



    </div>
  );
};

export default Dashboard;