export default function start(date) {
    const millisInSeconds = 3600 * 24 * 1000;

    return new Date(date.valueOf() - millisInSeconds * date.getDay());
}
