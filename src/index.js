export default (...args) => {
    return args.filter(item => !!item).join(" ");
}