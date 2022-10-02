export default function compute_dates(date, daysAgo) {
    const millisInDay = 60 * 60 * 24 * 1000;

    return new Date(date.valueOf() - daysAgo * millisInDay);
}
