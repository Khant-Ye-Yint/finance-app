import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

export const categories = [
  'Housing',
  'Transport',
  'Health',
  'Food',
  'Education',
  'Other',
];

export const types = ['Income', 'Expense', 'Savings', 'Investment'];

const seed = async () => {
  let transactions = [];

  for (let i = 0; i < 10; i++) {
    const created_at = faker.date.past();
    let amount = faker.number.int();
    const type = faker.helpers.arrayElement(types);
    const category = faker.helpers.arrayElement(categories);
    switch (type) {
      case 'Income':
        amount = faker.number.int({ min: 20000, max: 90000 });
        break;
      case 'Expense':
        amount = faker.number.int({ min: 2000, max: 20000 });
        break;
      case 'Savings':
        amount = faker.number.int({ min: 10000, max: 100000 });
        break;
      case 'Investment':
        amount = faker.number.int({ min: 2000, max: 9000 });
        break;
    }

    transactions.push({
      created_at,
      amount,
      type,
      category,
      description: faker.lorem.sentence(),
    });
  }

  const { error } = await supabase.from('transactions').insert(transactions);
  if (error) {
    console.error('Error Inserting Data', error);
  } else {
    console.log('Data inserted.');
  }
};

seed().catch(console.error());
