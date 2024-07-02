import BaseTrend from '@/components/trend';
import { createClient } from '@/lib/supabase/server';

const Trend = async ({ type, range }) => {
  const supabase = createClient();

  const { data, error } = await supabase.rpc('calculate_total', {
    type_arg: type,
    range_arg: range,
  });

  if (error) throw new Error('Could not fetch the trend data.');

  const { current_amount: currentAmount, prev_amount: prevAmount } = data[0];

  return (
    <BaseTrend type={type} amount={currentAmount} prevAmount={prevAmount} />
  );
};

export default Trend;
