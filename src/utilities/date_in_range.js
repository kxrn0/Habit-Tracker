export default function date_in_range(date, range) {
    const value = date.valueOf();
    let start, end;

    if (range.from === "free") start = Number.NEGATIVE_INFINITY;
    else start = new Date(range.from).valueOf();
    if (range.to === "free") end = Number.POSITIVE_INFINITY;
    else end = new Date(range.to).valueOf();

    return start <= value && value < end;
}
