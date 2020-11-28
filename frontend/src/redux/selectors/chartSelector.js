const getMonthlyReport = state => state.user.monthReports;
// const getSomeMonthReport = (state, actualMonth = 10) => {
//   const reports = getMonthlyReport(state);
//   return console.log('obreportsject++++++++', reports);
//   //return reports.find(report => report.reportDate === actualMonth);
// };

// const actualReport = (state, date) => {
//   const reports = getMonthlyReport(state);
//   return reports.find(report => report.totalSavings === date);
// };
// console.log('actualReport', actualReport);
export default { getMonthlyReport };
