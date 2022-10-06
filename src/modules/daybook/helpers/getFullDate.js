const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getFullDate = (dateString) => {
    const date = new Date(dateString);
    return {
        day: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
        weekday: days[date.getDay()],
        fullDate: `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }
}

export default getFullDate;

