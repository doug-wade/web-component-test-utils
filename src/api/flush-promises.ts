export default function(interval = 0) {
    return new Promise(res => setTimeout(res, interval));
};