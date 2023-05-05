<h1 align="center">
BetterLog.js
</h1>
<p align="center">
Upgrade your console logs with BetterLog.js - Better logs, better experience!
</p>

<br>
<p align="center">

![logo](https://cdn.discordapp.com/attachments/1031615083702394940/1059798584410775622/betterlogjs.png)

</p>

<h2 align="center">
Installation
</h2>
<p align="center">
To install betterlog package using one command: npm install betterlog.js
<br>
Then require it with const betterlog = require('betterlog.js').
</p>

<br>
<p align="center">

![log](https://cdn.discordapp.com/attachments/1058432471349346395/1103763991429386460/image.png)

</p>
<h2 align="center">
Default Logs
</h2>
<p align="center">
info, debug, warn, error
</p>
<h2 align="center">
Discord Logs
</h2>
<p align="center">
ready, database, heartbeat, shard, cluster, command, event
</p>
<h2 align="center">
Other Logs
</h2>
<p align="center">
notice, critical, trace
</p>
<h2 align="center">
Getting Started
</h2>

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

<h2 align="center">
Support
</h2>
<p align="center">
If you need help with something, don't hesitate to contact me on discord, my discord tag is rotcharm#9999.
</p>
