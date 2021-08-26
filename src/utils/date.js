export const getSequence = (initial, maximum) => {
    const data = [];
  
    for (let i = initial; i <= maximum; i++) {
      data.push(i);
    }
  
    return data;
  };
  
  export const getMonths = () => {
    return [
      {
        month_number: "01", 
        month_name:"January"
      },
      {
        month_number:"02",
        month_name: "February"},
      {
        month_number:"03",
        month_name: "March"},
      {
        month_number:"04",
        month_name: "Aprail"},
      {
        month_number:"05",
        month_name: "May"},
      {
        month_number:"06",
        month_name: "June"},
      {
        month_number:"07",
        month_name: "July"},
      {
        month_number:"08",
        month_name: "August"},
      {
        month_number:"09",
        month_name: "September"},
      {
        month_number:"10",
        month_name: "October"},
      {
        month_number:"11",
        month_name: "November"},
      {
        month_number:"12",
        month_name: "December"},
    ];
  };