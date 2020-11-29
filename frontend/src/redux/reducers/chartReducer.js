import chartConstants from '../constants/chartConstants';
const initialState = {
  monthlyReport: [
    {
      totalExpenses: 0,
      totalSavings: 0,
      totalIncome: 0,
      expectedSavingsPercentage: 0,
      expectedSavings: 0,
      reportDate: 0,
    },
  ],
};

const monthlyReport = (
  state = initialState.monthlyReport,
  { type, payload },
) => {
  switch (type) {
    case chartConstants.GET_REPORT_SUCCESS:
      //console.log('payload from monthlyReport', payload);
      return { ...payload };
    default:
      return state;
  }
};
export default monthlyReport;
