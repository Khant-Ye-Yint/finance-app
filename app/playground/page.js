import PageHeader from '@/components/page-header';
import Trend from '@/components/trend';
import TransitionItem from '@/components/transitionItem';
import TransitionSummaryItem from '@/components/transitionSummaryItem';
import Button from '@/components/button';
import Label from '@/components/label';
import Input from '@/components/input';
import Select from '@/components/select';

const PlayGroundPage = () => {
  return (
    <main className="space-y-8 mb-44">
      <h1 className="mt-8 text-4xl">Playground</h1>
      <div>
        <h2 className="mb-4 font-mono text-lg ">Page Header</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="flex space-x-4 ">
          <PageHeader />
        </div>
      </div>
      <div>
        <h2 className="mb-4 font-mono text-lg ">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="flex space-x-4 ">
          <Trend type="Income" amount={1500} prevAmount={980} />
          <Trend type="Expense" amount={700} prevAmount={1000} />
          <Trend type="Investment" amount={500} prevAmount={200} />
          <Trend type="Savings" amount={300} prevAmount={500} />
        </div>
      </div>
      <div>
        <h2 className="mb-4 font-mono text-lg ">
          TransitionSummaryItem + TransitionItem
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="space-y-4 ">
          <TransitionSummaryItem amount={4500} date="2024-05-01" />
          <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
          <TransitionItem
            type="Income"
            category=""
            description="Salary"
            amount={2000}
          />
          <TransitionItem
            type="Expense"
            category="Food"
            description="Going out with friends"
            amount={100}
          />
          <TransitionItem
            type="Savings"
            description="For children"
            amount={500}
          />
          <TransitionItem
            type="Investment"
            description="Stakeland"
            amount={9000}
          />
        </div>
      </div>
      <div>
        <h2 className="mb-4 font-mono text-lg ">Button</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="space-x-4 ">
          <Button>Hello</Button>
          <Button varient="outline">Hello</Button>
          <Button varient="ghost">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="xs">Hello</Button>
          <Button size="lg">Hello</Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 font-mono text-lg ">Forms</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="block mb-1 " htmlFor="name">
              Your name
            </Label>
            <Input placeholder="Type something in here.." id="name" />
          </div>
          <div>
            <Label htmlFor="city" className="block mb-1 ">
              City
            </Label>
            <Select id="city" placeholder="Type something in here..">
              <option>London</option>
              <option>Califonia</option>
              <option>Yangon</option>
            </Select>
          </div>
          <div className="flex items-center ">
            <Input type="checkbox" id="terms" className="" />
            <Label className="ml-2 " htmlFor="terms">
              Virgin
            </Label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlayGroundPage;
