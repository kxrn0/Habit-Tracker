//code stolen from here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
];

export default function valid_file_type(file) {
    return fileTypes.includes(file.type);
}
