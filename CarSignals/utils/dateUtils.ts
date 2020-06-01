import moment from 'moment';

export const getLastWeekDate = () => {
    return moment().subtract(7,'days').hours(0).format('DD-MM-YYYY');
}

export const getLastMonthDate = () => {
    return moment().subtract(30,'days').hours(0).format('DD-MM-YYYY');
}

export const getLastYearDate = () => {
    return moment().subtract(365,'days').hours(0).format('DD-MM-YYYY');
}

export const isDateGreaterThan = (date1: string, date2: string) => {
    const newDate1 = date1.split('-');
    const newDate2 = date2.split('-');
    
    const dateOne = new Date(parseInt(newDate1[2]), parseInt(newDate1[1]) - 1, parseInt(newDate1[0]));   
    const dateTwo = new Date(parseInt(newDate2[2]), parseInt(newDate2[1]) - 1, parseInt(newDate2[0]));  

    return dateOne > dateTwo;
}