export default (...args) => {
    return args.filter(item => {
        if(typeof item === "undefined") {
            return false;
        } else if(item === null) {
            return false;
        } else if ([true, false].includes(item)) {
            return false;
        }

        return item.toString().trim().length > 0
    }).join(" ");
}