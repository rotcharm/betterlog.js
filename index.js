const warn = (log) => {
    const today = new Date();
    return console.log(`[\x1b[34m${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}\x1b[0m => \x1b[31mWARN\x1b[0m] - ${log}`);
};

const info = (log) => {
    const today = new Date();
    return console.log(`[\x1b[34m${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}\x1b[0m => \x1b[32mINFO\x1b[0m] - ${log}`);
};

const error = (log) => {
    const today = new Date();
    return console.log(`[\x1b[34m${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}\x1b[0m => \x1b[31mERROR\x1b[0m] - ${log}`);
};

const debug = (log) => {
    const today = new Date();
    return console.log(`[\x1b[34m${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}\x1b[0m => \x1b[90mDEBUG\x1b[0m] - ${log}`);
};
  
module.exports = {
    warn, info, error, debug
};