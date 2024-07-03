const groupAndSumTransitionByDate = (transitions) => {
  const grouped = {};

  for (const transition of transitions) {
    const date = transition.created_at.split('T')[0];
    if (!grouped[date]) {
      grouped[date] = { transitions: [], amount: 0 };
    }
    grouped[date].transitions.push(transition);
    const amount =
      transition.type === 'Expense' ? -transition.amount : transition.amount;
    grouped[date].amount += amount;
  }

  return grouped;
};

module.exports = {
  groupAndSumTransitionByDate,
};
