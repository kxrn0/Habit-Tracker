function end(date) {
    const millisInDay = 3600 * 24 * 1000;

    return new Date(date.valueOf() - millisInDay * (date.getDay() + 1));
}

export default function present_day(offset, weeks) {
    const millisInDay = 3600 * 24 * 1000;
    const daysInWeek = 7;
    let presentTime;

    if (offset === 0) {
        presentTime = new Date(new Date().valueOf() + millisInDay);
    } else {
        presentTime = end(
            new Date(
                new Date().valueOf() - offset * weeks * daysInWeek * millisInDay
            )
        );
        presentTime = new Date(presentTime.valueOf() + millisInDay);
    }
    return presentTime;
}
