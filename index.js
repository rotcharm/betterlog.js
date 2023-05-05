const log = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[32mLOG\x1b[0m] - ${log}`);
  };

const warn = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[2;33mWARN\x1b[0m] - ${log}`);
};

const info = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[32mINFO\x1b[0m] - ${log}`);
};

const error = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[31mERROR\x1b[0m] - ${log}`);
};

const debug = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[90mDEBUG\x1b[0m] - ${log}`);
};

const ready = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[34mREADY\x1b[0m] - ${log}`);
};

const database = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[36mDATABASE\x1b[0m] - ${log}`);
};

const event = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[33mEVENT\x1b[0m] - ${log}`);
};

const heartbeat = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[35mHEARTBEAT\x1b[0m] - ${log}`);
};

const shard = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[32mSHARD\x1b[0m] - ${log}`);
};

const cluster = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[90mCLUSTER\x1b[0m] - ${log}`);
};

const command = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[36mCOMMAND\x1b[0m] - ${log}`);
};

const notice = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[36mNOTICE\x1b[0m] - ${log}`);
};

const critical = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[31mCRITICAL\x1b[0m] - ${log}`);
};

const trace = (log) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return console.log(`[\x1b[34m${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}\x1b[0m => \x1b[34mTRACE\x1b[0m] - ${log}`);
};

 
module.exports = {
    warn, log, info, error, debug, ready, database, event, heartbeat, shard, cluster, command, notice, critical, trace
};
