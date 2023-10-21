function log (level, color, log) {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    console.log(`[\x1b[34m${hours}:${minutes}:${seconds}\x1b[0m => \x1b[${color}${level}\x1b[0m] - ${log}`);
  };
  
  const log = (log) => log('LOG', '32m', log);
  const warn = (log) => log('WARN', '2;33m', log);
  const info = (log) => log('INFO', '32m', log);
  const error = (log) => log('ERROR', '31m', log);
  const debug = (log) => log('DEBUG', '90m', log);
  const ready = (log) => log('READY', '34m', log);
  const database = (log) => log('DATABASE', '36m', log);
  const event = (log) => log('EVENT', '33m', log);
  const heartbeat = (log) => log('HEARTBEAT', '35m', log);
  const shard = (log) => log('SHARD', '32m', log);
  const cluster = (log) => log('CLUSTER', '90m', log);
  const command = (log) => log('COMMAND', '36m', log);
  const notice = (log) => log('NOTICE', '36m', log);
  const critical = (log) => log('CRITICAL', '31m', log);
  const trace = (log) => log('TRACE', '34m', log);
  
  module.exports = {
    warn, log, info, error, debug, ready, database, event, heartbeat, shard, cluster, command, notice, critical, trace
  };
