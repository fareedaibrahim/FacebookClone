export const getSequence = (initial, maximum) => {
    const data = [];
  
    for (let i = initial; i <= maximum; i++) {
      data.push(i);
    }
  
    return data;
  };
  
  export const getMonths = () => {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  };