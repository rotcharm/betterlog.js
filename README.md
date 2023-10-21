# BetterLog.js

Upgrade your console logs with BetterLog.js - Better logs, better experience!

![logo](https://cdn.discordapp.com/attachments/1031615083702394940/1059798584410775622/betterlogjs.png)

## Installation

To install the BetterLog package using one command: `npm install betterlog.js`
Then require it with `const betterlog = require('betterlog.js')`.

![log](https://cdn.discordapp.com/attachments/1058432471349346395/1103763991429386460/image.png)

## Default Logs

`info`, `debug`, `warn`, `error`

## Discord Logs

`ready`, `database`, `heartbeat`, `shard`, `cluster`, `command`, `event`

## Other Logs

`notice`, `critical`, `trace`

## Getting Started


```javascript
const betterlog = require('betterlog.js')

// Default logs
betterlog.info('Hello world!');
betterlog.debug('Hello world!');
betterlog.warn('Hello world!');
betterlog.error('Hello world!');

// Discord logs
betterlog.ready('Hello world!');
betterlog.database('Hello world!');
betterlog.heartbeat('Hello world!');
betterlog.shard('Hello world!');
betterlog.cluster('Hello world!');
betterlog.command('Hello world!');
betterlog.event('Hello world!');

// Other logs
betterlog.notice('Hello world!');
betterlog.critical('Hello world!');
betterlog.trace('Hello world!');

```

## Support

If you need help with something, don't hesitate to contact me on Discord. My Discord tag is `rotcharm#9999`.

