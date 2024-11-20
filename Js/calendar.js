
//------------------------CALANDER 1--------------------------//

const body = document.body;
const monthYear = document.getElementById('monthYear');
const weekdaysContainer = document.getElementById('weekdays');
const daysContainer = document.getElementById('days');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let currentDate = new Date();
let selectedDates = [5, 13]; // Default selected dates
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = `${months[month]} ${year}`;

    weekdaysContainer.innerHTML = weekdays.map(day => `<div>${day}</div>`).join('');

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevMonthLastDate = new Date(year, month, 0).getDate();

    let days = [];

    for (let i = firstDay; i > 0; i--) {
        days.push(`<div class="day other-month">${prevMonthLastDate - i + 1}</div>`);
    }

    for (let i = 1; i <= lastDate; i++) {
        const isSelected = selectedDates.includes(i);
        const isToday = i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
        days.push(`<div class="day${isSelected ? ' selected' : ''}${isToday ? ' today' : ''}" data-date="${i}">${i}</div>`);
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
        days.push(`<div class="day other-month">${i}</div>`);
    }

    daysContainer.innerHTML = days.join('');

    daysContainer.querySelectorAll('.day:not(.other-month)').forEach(day => {
        day.addEventListener('click', () => {
            const date = parseInt(day.dataset.date);
            if (selectedDates.includes(date)) {
                selectedDates = selectedDates.filter(d => d !== date);
                day.classList.remove('selected');
            } else {
                selectedDates.push(date);
                day.classList.add('selected');
            }
        });
    });
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();