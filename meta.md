# Bundle Analysis Report

This report helps identify bundle size issues, dependency bloat, and optimization opportunities.

## Table of Contents

- [Quick Summary](#quick-summary)
- [Largest Modules by Output Contribution](#largest-modules-by-output-contribution)
- [Entry Point Analysis](#entry-point-analysis)
- [Dependency Chains](#dependency-chains)
- [Full Module Graph](#full-module-graph)
- [Raw Data for Searching](#raw-data-for-searching)

---

## Quick Summary

| Metric | Value |
|--------|-------|
| Total output size | 0.83 MB |
| Input modules | 518 |
| Entry points | 1 |
| node_modules contribution | 517 files (0.82 MB) |
| ESM modules | 2 |
| CommonJS modules | 515 |
| External imports | 85 |

## Largest Modules by Output Contribution

Modules sorted by bytes contributed to the output bundle. Large modules may indicate bloat.

| Output Bytes | % of Total | Module | Format |
|--------------|------------|--------|--------|
| 82.75 KB | 10.0% | `node_modules/@vladfrangu/async_event_emitter/dist/index.cjs` | cjs |
| 66.54 KB | 8.1% | `node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` | cjs |
| 50.45 KB | 6.1% | `node_modules/@discordjs/builders/dist/index.js` | cjs |
| 26.51 KB | 3.2% | `node_modules/@discordjs/ws/dist/index.js` | cjs |
| 21.20 KB | 2.6% | `node_modules/@discordjs/rest/dist/index.js` | cjs |
| 19.0 KB | 2.3% | `node_modules/magic-bytes.js/dist/model/pattern-tree.js` | cjs |
| 18.65 KB | 2.3% | `node_modules/discord-api-types/rest/common.js` | cjs |
| 13.20 KB | 1.6% | `node_modules/discord.js/src/structures/Guild.js` | cjs |
| 11.36 KB | 1.4% | `node_modules/discord.js/src/structures/Message.js` | cjs |
| 11.31 KB | 1.4% | `node_modules/tslib/tslib.js` | cjs |
| 10.26 KB | 1.2% | `node_modules/discord-api-types/rest/v10/index.js` | cjs |
| 9.40 KB | 1.1% | `node_modules/discord.js/src/errors/Messages.js` | cjs |
| 7.52 KB | 0.9% | `node_modules/discord.js/src/structures/GuildAuditLogsEntry.js` | cjs |
| 7.45 KB | 0.9% | `node_modules/@postfmly/logger/index.js` | esm |
| 7.36 KB | 0.9% | `node_modules/discord.js/src/client/Client.js` | cjs |
| 6.99 KB | 0.8% | `node_modules/@discordjs/formatters/dist/index.js` | cjs |
| 6.91 KB | 0.8% | `node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js` | cjs |
| 6.89 KB | 0.8% | `node_modules/@discordjs/rest/node_modules/@discordjs/collection/dist/index.js` | cjs |
| 6.55 KB | 0.8% | `node_modules/discord-api-types/payloads/v10/message.js` | cjs |
| 6.51 KB | 0.8% | `node_modules/discord.js/src/index.js` | cjs |

*...and 498 more modules with output contribution*

## Entry Point Analysis

Each entry point and the total code it loads (including shared chunks).

### Entry: `index.ts`

**Output file**: `./index.js`
**Bundle size**: 0.83 MB
**Exports**: `checkRate`

**Bundled modules** (sorted by contribution):

| Bytes | Module |
|-------|--------|
| 82.75 KB | `node_modules/@vladfrangu/async_event_emitter/dist/index.cjs` |
| 66.54 KB | `node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` |
| 50.45 KB | `node_modules/@discordjs/builders/dist/index.js` |
| 26.51 KB | `node_modules/@discordjs/ws/dist/index.js` |
| 21.20 KB | `node_modules/@discordjs/rest/dist/index.js` |
| 19.0 KB | `node_modules/magic-bytes.js/dist/model/pattern-tree.js` |
| 18.65 KB | `node_modules/discord-api-types/rest/common.js` |
| 13.20 KB | `node_modules/discord.js/src/structures/Guild.js` |
| 11.36 KB | `node_modules/discord.js/src/structures/Message.js` |
| 11.31 KB | `node_modules/tslib/tslib.js` |
| 10.26 KB | `node_modules/discord-api-types/rest/v10/index.js` |
| 9.40 KB | `node_modules/discord.js/src/errors/Messages.js` |
| 7.52 KB | `node_modules/discord.js/src/structures/GuildAuditLogsEntry.js` |
| 7.45 KB | `node_modules/@postfmly/logger/index.js` |
| 7.36 KB | `node_modules/discord.js/src/client/Client.js` |

*...and 503 more modules*

## Dependency Chains

For each module, shows what files import it. Use this to understand why a module is included.

### Most Commonly Imported Modules

Modules imported by many files. Extracting these to shared chunks may help.

| Import Count | Module | Imported By |
|--------------|--------|-------------|
| 17 | `node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` | `node_modules/@discordjs/builders/dist/index.js`, `node_modules/@discordjs/builders/dist/index.js`, `node_modules/@discordjs/builders/dist/index.js`+14 more |
| 9 | `node_modules/@discordjs/collection/dist/index.js` | `node_modules/discord.js/src/index.js`, `node_modules/@discordjs/rest/dist/index.js`, `node_modules/@discordjs/ws/dist/index.js`+6 more |
| 6 | `node_modules/discord.js/src/util/Events.js` | `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js`, `node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js`+3 more |
| 6 | `node_modules/ts-mixer/dist/cjs/index.js` | `node_modules/@discordjs/builders/dist/index.js`, `node_modules/@discordjs/builders/dist/index.js`, `node_modules/@discordjs/builders/dist/index.js`+3 more |
| 5 | `node_modules/discord.js/src/util/Transformers.js` | `node_modules/discord.js/src/util/Options.js`, `node_modules/discord.js/src/structures/Message.js`, `node_modules/discord.js/src/structures/User.js`+2 more |
| 4 | `node_modules/discord.js/src/errors/index.js` | `node_modules/discord.js/src/managers/ApplicationEmojiManager.js`, `node_modules/discord.js/src/managers/GuildManager.js`, `node_modules/discord.js/src/structures/SoundboardSound.js`+1 more |
| 3 | `node_modules/discord.js/src/structures/Presence.js` | `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/index.js` |
| 3 | `node_modules/discord.js/src/errors/DJSError.js` | `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/index.js` |
| 2 | `node_modules/discord.js/src/util/AttachmentFlagsBitField.js` | `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/structures/Attachment.js` |
| 2 | `node_modules/discord.js/src/structures/SoundboardSound.js` | `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js` |
| 2 | `node_modules/discord.js/src/structures/User.js` | `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/managers/PollAnswerVoterManager.js` |
| 2 | `node_modules/discord.js/src/managers/PollAnswerVoterManager.js` | `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/structures/PollAnswer.js` |
| 2 | `node_modules/discord.js/src/structures/PollAnswer.js` | `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/client/actions/Action.js` |
| 2 | `node_modules/@vladfrangu/async_event_emitter/dist/index.cjs` | `node_modules/@discordjs/ws/dist/index.js`, `node_modules/@discordjs/ws/dist/index.js` |
| 2 | `node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js` | `node_modules/discord.js/src/index.js`, `node_modules/discord.js/src/index.js` |

## Full Module Graph

Complete dependency information for each module.

### `index.ts`

- **Output contribution**: 391 bytes
- **Format**: esm
- **Imported by**: (entry point or orphan)
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord.js/src/index.js` (import-statement, specifier: `discord.js`)
  - `/opt/git/checkrate/node_modules/@postfmly/logger/index.js` (import-statement, specifier: `@postfmly/logger`)
  - `/opt/git/checkrate/node_modules/discord.js-rate-limiter/dist/index.js` (import-statement, specifier: `discord.js-rate-limiter`)
  - `/opt/git/checkrate/node_modules/ms/index.js` (import-statement, specifier: `ms`)

### `node_modules/@discordjs/builders/dist/index.js`

- **Output contribution**: 50.45 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `@discordjs/formatters` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `@discordjs/util` (require-call)
  - `discord-api-types/v10` (require-call)
  - `fast-deep-equal` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js` (require-call, specifier: `ts-mixer`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js` (require-call, specifier: `ts-mixer`)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js` (require-call, specifier: `ts-mixer`)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js` (require-call, specifier: `ts-mixer`)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js` (require-call, specifier: `ts-mixer`)
  - `discord-api-types/v10` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js` (require-call, specifier: `ts-mixer`)
  - `/opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/shapeshift`)
  - `discord-api-types/v10` (require-call)

### `node_modules/@discordjs/collection/dist/index.js`

- **Output contribution**: 5.97 KB
- **Format**: cjs
- **Imported by** (9 files): `node_modules/discord.js/src/index.js` `node_modules/@discordjs/rest/dist/index.js` `node_modules/@discordjs/ws/dist/index.js` `node_modules/@discordjs/ws/dist/index.js` `node_modules/@discordjs/ws/dist/index.js` +4 more

### `node_modules/@discordjs/formatters/dist/index.js`

- **Output contribution**: 6.99 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`

### `node_modules/@discordjs/rest/dist/index.js`

- **Output contribution**: 21.20 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `buffer` (require-call, **external**)
  - `@discordjs/util` (require-call)
  - `undici` (require-call, **external**)
  - `http` (require-call, **external**)
  - `url` (require-call, **external**)
  - `util` (require-call, **external**)
  - `undici` (require-call, **external**)
  - `discord-api-types/v10` (require-call)
  - `@discordjs/util` (require-call)
  - `discord-api-types/v10` (require-call)
  - `/opt/git/checkrate/node_modules/@discordjs/rest/node_modules/@discordjs/collection/dist/index.js` (require-call, specifier: `@discordjs/collection`)
  - `/opt/git/checkrate/node_modules/@discordjs/rest/node_modules/@sapphire/snowflake/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/snowflake`)
  - `@vladfrangu/async_event_emitter` (require-call)
  - `magic-bytes.js` (require-call)
  - `@sapphire/async-queue` (require-call)

### `node_modules/@discordjs/rest/node_modules/@discordjs/collection/dist/index.js`

- **Output contribution**: 6.89 KB
- **Format**: cjs
- **Imported by**: (entry point or orphan)

### `node_modules/@discordjs/rest/node_modules/@sapphire/snowflake/dist/cjs/index.cjs`

- **Output contribution**: 2.0 KB
- **Format**: cjs
- **Imported by**: (entry point or orphan)

### `node_modules/@discordjs/util/dist/index.js`

- **Output contribution**: 2.55 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/index.js`

### `node_modules/@discordjs/ws/dist/index.js`

- **Output contribution**: 26.51 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `worker_threads` (require-call, **external**)
  - `/opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js` (require-call, specifier: `@discordjs/collection`)
  - `events` (require-call, **external**)
  - `path` (require-call, **external**)
  - `worker_threads` (require-call, **external**)
  - `/opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js` (require-call, specifier: `@discordjs/collection`)
  - `/opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js` (require-call, specifier: `@discordjs/collection`)
  - `buffer` (require-call, **external**)
  - `events` (require-call, **external**)
  - `timers` (require-call, **external**)
  - `timers/promises` (require-call, **external**)
  - `url` (require-call, **external**)
  - `util` (require-call, **external**)
  - `zlib` (require-call, **external**)
  - `/opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js` (require-call, specifier: `@discordjs/collection`)
  - `@discordjs/util` (require-call)
  - `/opt/git/checkrate/node_modules/@sapphire/async-queue/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/async-queue`)
  - `/opt/git/checkrate/node_modules/@vladfrangu/async_event_emitter/dist/index.cjs` (require-call, specifier: `@vladfrangu/async_event_emitter`)
  - `discord-api-types/v10` (require-call)
  - `ws` (require-call, **external**)
  - `process` (require-call, **external**)
  - `/opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js` (require-call, specifier: `@discordjs/collection`)
  - `@discordjs/util` (require-call)
  - `discord-api-types/v10` (require-call)
  - `timers/promises` (require-call, **external**)
  - `/opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js` (require-call, specifier: `@discordjs/collection`)
  - `/opt/git/checkrate/node_modules/@sapphire/async-queue/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/async-queue`)
  - `zlib-sync` (dynamic-import, **external**)
  - `worker_threads` (require-call, **external**)
  - `/opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js` (require-call, specifier: `@discordjs/collection`)
  - `@discordjs/util` (require-call)
  - `@discordjs/util` (require-call)
  - `/opt/git/checkrate/node_modules/@vladfrangu/async_event_emitter/dist/index.cjs` (require-call, specifier: `@vladfrangu/async_event_emitter`)
  - `discord-api-types/v10` (require-call)
  - `bun:wrap` (import-statement)

### `node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js`

- **Output contribution**: 6.91 KB
- **Format**: cjs
- **Imported by**: (entry point or orphan)

### `node_modules/@postfmly/logger/index.js`

- **Output contribution**: 7.45 KB
- **Format**: esm
- **Imported by** (1 files): `index.ts`
- **Imports**:
  - `util` (import-statement, **external**, specifier: `node:util`)

### `node_modules/@sapphire/async-queue/dist/cjs/index.cjs`

- **Output contribution**: 1.67 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/@discordjs/ws/dist/index.js` `node_modules/@discordjs/ws/dist/index.js`

### `node_modules/@sapphire/shapeshift/dist/cjs/index.cjs`

- **Output contribution**: 66.54 KB
- **Format**: cjs
- **Imported by** (17 files): `node_modules/@discordjs/builders/dist/index.js` `node_modules/@discordjs/builders/dist/index.js` `node_modules/@discordjs/builders/dist/index.js` `node_modules/@discordjs/builders/dist/index.js` `node_modules/@discordjs/builders/dist/index.js` +12 more
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/get.js` (require-call, specifier: `lodash/get.js`)
  - `/opt/git/checkrate/node_modules/fast-deep-equal/es6/index.js` (require-call, specifier: `fast-deep-equal/es6/index.js`)
  - `/opt/git/checkrate/node_modules/lodash/uniqWith.js` (require-call, specifier: `lodash/uniqWith.js`)

### `node_modules/@sapphire/snowflake/dist/cjs/index.cjs`

- **Output contribution**: 1.91 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/@discordjs/rest/dist/index.js`

### `node_modules/@vladfrangu/async_event_emitter/dist/index.cjs`

- **Output contribution**: 82.75 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/@discordjs/ws/dist/index.js` `node_modules/@discordjs/ws/dist/index.js`

### `node_modules/discord-api-types/gateway/v10.js`

- **Output contribution**: 5.97 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/v10.js`

### `node_modules/discord-api-types/globals.js`

- **Output contribution**: 1.15 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/v10.js`

### `node_modules/discord-api-types/payloads/common.js`

- **Output contribution**: 1.37 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js`

- **Output contribution**: 471 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js`

### `node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js`

- **Output contribution**: 0.51 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js` (require-call, specifier: `./_chatInput/shared`)

### `node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js`

- **Output contribution**: 397 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js`

### `node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js`

- **Output contribution**: 1.25 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/interactions.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js` (require-call, specifier: `./_applicationCommands/chatInput`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js` (require-call, specifier: `./_applicationCommands/permissions`)

### `node_modules/discord-api-types/payloads/v10/_interactions/responses.js`

- **Output contribution**: 0.88 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/interactions.js`

### `node_modules/discord-api-types/payloads/v10/application.js`

- **Output contribution**: 1.84 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/auditLog.js`

- **Output contribution**: 3.40 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/autoModeration.js`

- **Output contribution**: 0.94 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/channel.js`

- **Output contribution**: 2.14 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/gateway.js`

- **Output contribution**: 1.19 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/guild.js`

- **Output contribution**: 4.79 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js`

- **Output contribution**: 1.52 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/index.js`

- **Output contribution**: 0.74 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/v10.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/common.js` (require-call, specifier: `../common`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/application.js` (require-call, specifier: `./application`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/auditLog.js` (require-call, specifier: `./auditLog`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/autoModeration.js` (require-call, specifier: `./autoModeration`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/channel.js` (require-call, specifier: `./channel`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/gateway.js` (require-call, specifier: `./gateway`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/guild.js` (require-call, specifier: `./guild`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js` (require-call, specifier: `./guildScheduledEvent`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/interactions.js` (require-call, specifier: `./interactions`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/invite.js` (require-call, specifier: `./invite`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/message.js` (require-call, specifier: `./message`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/monetization.js` (require-call, specifier: `./monetization`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/oauth2.js` (require-call, specifier: `./oauth2`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/permissions.js` (require-call, specifier: `./permissions`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/poll.js` (require-call, specifier: `./poll`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/stageInstance.js` (require-call, specifier: `./stageInstance`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/sticker.js` (require-call, specifier: `./sticker`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/teams.js` (require-call, specifier: `./teams`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/user.js` (require-call, specifier: `./user`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/webhook.js` (require-call, specifier: `./webhook`)

### `node_modules/discord-api-types/payloads/v10/interactions.js`

- **Output contribution**: 0.53 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js` (require-call, specifier: `./_interactions/applicationCommands`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/responses.js` (require-call, specifier: `./_interactions/responses`)

### `node_modules/discord-api-types/payloads/v10/invite.js`

- **Output contribution**: 456 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/message.js`

- **Output contribution**: 6.55 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/monetization.js`

- **Output contribution**: 0.99 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/oauth2.js`

- **Output contribution**: 1.19 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/permissions.js`

- **Output contribution**: 163 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/poll.js`

- **Output contribution**: 171 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/stageInstance.js`

- **Output contribution**: 220 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/sticker.js`

- **Output contribution**: 341 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/teams.js`

- **Output contribution**: 354 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/user.js`

- **Output contribution**: 2.40 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/payloads/v10/webhook.js`

- **Output contribution**: 0.74 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/payloads/v10/index.js`

### `node_modules/discord-api-types/rest/common.js`

- **Output contribution**: 18.65 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/rest/v10/index.js`

### `node_modules/discord-api-types/rest/v10/channel.js`

- **Output contribution**: 207 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/rest/v10/index.js`

### `node_modules/discord-api-types/rest/v10/index.js`

- **Output contribution**: 10.26 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/v10.js`
- **Imports**:
  - `../../utils/internals` (require-call)
  - `/opt/git/checkrate/node_modules/discord-api-types/rest/common.js` (require-call, specifier: `../common`)
  - `/opt/git/checkrate/node_modules/discord-api-types/rest/v10/channel.js` (require-call, specifier: `./channel`)
  - `/opt/git/checkrate/node_modules/discord-api-types/rest/v10/monetization.js` (require-call, specifier: `./monetization`)

### `node_modules/discord-api-types/rest/v10/monetization.js`

- **Output contribution**: 198 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/rest/v10/index.js`

### `node_modules/discord-api-types/rpc/common.js`

- **Output contribution**: 3.12 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/rpc/v10.js`

### `node_modules/discord-api-types/rpc/v10.js`

- **Output contribution**: 3.69 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/v10.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord-api-types/rpc/common.js` (require-call, specifier: `./common`)

### `node_modules/discord-api-types/utils/internals.js`

- **Output contribution**: 196 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/v10.js`

### `node_modules/discord-api-types/utils/v10.js`

- **Output contribution**: 1.52 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord-api-types/v10.js`
- **Imports**:
  - `../payloads/v10/index` (require-call)

### `node_modules/discord-api-types/v10.js`

- **Output contribution**: 1.11 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord-api-types/gateway/v10.js` (require-call, specifier: `./gateway/v10`)
  - `/opt/git/checkrate/node_modules/discord-api-types/globals.js` (require-call, specifier: `./globals`)
  - `/opt/git/checkrate/node_modules/discord-api-types/payloads/v10/index.js` (require-call, specifier: `./payloads/v10/index`)
  - `/opt/git/checkrate/node_modules/discord-api-types/rest/v10/index.js` (require-call, specifier: `./rest/v10/index`)
  - `/opt/git/checkrate/node_modules/discord-api-types/rpc/v10.js` (require-call, specifier: `./rpc/v10`)
  - `/opt/git/checkrate/node_modules/discord-api-types/utils/internals.js` (require-call, specifier: `./utils/internals`)
  - `/opt/git/checkrate/node_modules/discord-api-types/utils/v10.js` (require-call, specifier: `./utils/v10`)

### `node_modules/discord.js-rate-limiter/dist/index.js`

- **Output contribution**: 198 bytes
- **Format**: cjs
- **Imported by** (1 files): `index.ts`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord.js-rate-limiter/dist/rate-limiter.js` (require-call, specifier: `./rate-limiter`)

### `node_modules/discord.js-rate-limiter/dist/rate-limiter.js`

- **Output contribution**: 433 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js-rate-limiter/dist/index.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/limiter/dist/cjs/index.js` (require-call, specifier: `limiter`)

### `node_modules/discord.js/package.json`

- **Output contribution**: 2.64 KB
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/util/Options.js`

### `node_modules/discord.js/src/client/BaseClient.js`

- **Output contribution**: 1.1 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `events` (require-call, **external**, specifier: `node:events`)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `../errors` (require-call)
  - `../util/Options` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/client/Client.js`

- **Output contribution**: 7.36 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./BaseClient` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ActionsManager.js` (require-call, specifier: `./actions/ActionsManager`)
  - `./voice/ClientVoiceManager` (require-call)
  - `./websocket/WebSocketManager` (require-call)
  - `../errors` (require-call)
  - `../managers/BaseGuildEmojiManager` (require-call)
  - `../managers/ChannelManager` (require-call)
  - `../managers/GuildManager` (require-call)
  - `../managers/UserManager` (require-call)
  - `../sharding/ShardClientUtil` (require-call)
  - `../structures/ClientPresence` (require-call)
  - `../structures/GuildPreview` (require-call)
  - `../structures/GuildTemplate` (require-call)
  - `../structures/Invite` (require-call)
  - `../structures/SoundboardSound` (require-call)
  - `../structures/Sticker` (require-call)
  - `../structures/StickerPack` (require-call)
  - `../structures/VoiceRegion` (require-call)
  - `../structures/Webhook` (require-call)
  - `../structures/Widget` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/Events` (require-call)
  - `../util/IntentsBitField` (require-call)
  - `../util/Options` (require-call)
  - `../util/PermissionsBitField` (require-call)
  - `../util/Status` (require-call)
  - `../util/Sweepers` (require-call)
  - `worker_threads` (require-call, **external**, specifier: `node:worker_threads`)

### `node_modules/discord.js/src/client/WebhookClient.js`

- **Output contribution**: 0.59 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseClient` (require-call)
  - `../errors` (require-call)
  - `../structures/Webhook` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/client/actions/Action.js`

- **Output contribution**: 2.24 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ChannelUpdate.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `../../structures/Poll.js` (require-call)
  - `../../structures/PollAnswer.js` (require-call)
  - `../../util/Partials.js` (require-call)

### `node_modules/discord.js/src/client/actions/ActionsManager.js`

- **Output contribution**: 2.84 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/Client.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js` (require-call, specifier: `./ApplicationCommandPermissionsUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js` (require-call, specifier: `./AutoModerationActionExecution.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js` (require-call, specifier: `./AutoModerationRuleCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js` (require-call, specifier: `./AutoModerationRuleDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js` (require-call, specifier: `./AutoModerationRuleUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ChannelCreate.js` (require-call, specifier: `./ChannelCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ChannelDelete.js` (require-call, specifier: `./ChannelDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ChannelUpdate.js` (require-call, specifier: `./ChannelUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/EntitlementCreate.js` (require-call, specifier: `./EntitlementCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/EntitlementDelete.js` (require-call, specifier: `./EntitlementDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/EntitlementUpdate.js` (require-call, specifier: `./EntitlementUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js` (require-call, specifier: `./GuildAuditLogEntryCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildBanAdd.js` (require-call, specifier: `./GuildBanAdd.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildBanRemove.js` (require-call, specifier: `./GuildBanRemove.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js` (require-call, specifier: `./GuildChannelsPositionUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildDelete.js` (require-call, specifier: `./GuildDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildEmojiCreate.js` (require-call, specifier: `./GuildEmojiCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildEmojiDelete.js` (require-call, specifier: `./GuildEmojiDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js` (require-call, specifier: `./GuildEmojiUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js` (require-call, specifier: `./GuildEmojisUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js` (require-call, specifier: `./GuildIntegrationsUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildMemberRemove.js` (require-call, specifier: `./GuildMemberRemove.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildMemberUpdate.js` (require-call, specifier: `./GuildMemberUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildRoleCreate.js` (require-call, specifier: `./GuildRoleCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildRoleDelete.js` (require-call, specifier: `./GuildRoleDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildRoleUpdate.js` (require-call, specifier: `./GuildRoleUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js` (require-call, specifier: `./GuildRolesPositionUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js` (require-call, specifier: `./GuildScheduledEventCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js` (require-call, specifier: `./GuildScheduledEventDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js` (require-call, specifier: `./GuildScheduledEventUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js` (require-call, specifier: `./GuildScheduledEventUserAdd.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js` (require-call, specifier: `./GuildScheduledEventUserRemove.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js` (require-call, specifier: `./GuildSoundboardSoundDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildStickerCreate.js` (require-call, specifier: `./GuildStickerCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildStickerDelete.js` (require-call, specifier: `./GuildStickerDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildStickerUpdate.js` (require-call, specifier: `./GuildStickerUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildStickersUpdate.js` (require-call, specifier: `./GuildStickersUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildUpdate.js` (require-call, specifier: `./GuildUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/InteractionCreate.js` (require-call, specifier: `./InteractionCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/InviteCreate.js` (require-call, specifier: `./InviteCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/InviteDelete.js` (require-call, specifier: `./InviteDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageCreate.js` (require-call, specifier: `./MessageCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageDelete.js` (require-call, specifier: `./MessageDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageDeleteBulk.js` (require-call, specifier: `./MessageDeleteBulk.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js` (require-call, specifier: `./MessagePollVoteAdd.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js` (require-call, specifier: `./MessagePollVoteRemove.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageReactionAdd.js` (require-call, specifier: `./MessageReactionAdd.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageReactionRemove.js` (require-call, specifier: `./MessageReactionRemove.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js` (require-call, specifier: `./MessageReactionRemoveAll.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js` (require-call, specifier: `./MessageReactionRemoveEmoji.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageUpdate.js` (require-call, specifier: `./MessageUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/PresenceUpdate.js` (require-call, specifier: `./PresenceUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/StageInstanceCreate.js` (require-call, specifier: `./StageInstanceCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/StageInstanceDelete.js` (require-call, specifier: `./StageInstanceDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/StageInstanceUpdate.js` (require-call, specifier: `./StageInstanceUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadCreate.js` (require-call, specifier: `./ThreadCreate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadDelete.js` (require-call, specifier: `./ThreadDelete.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadListSync.js` (require-call, specifier: `./ThreadListSync.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js` (require-call, specifier: `./ThreadMemberUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js` (require-call, specifier: `./ThreadMembersUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/TypingStart.js` (require-call, specifier: `./TypingStart.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/UserUpdate.js` (require-call, specifier: `./UserUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/VoiceStateUpdate.js` (require-call, specifier: `./VoiceStateUpdate.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/WebhooksUpdate.js` (require-call, specifier: `./WebhooksUpdate.js`)

### `node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js`

- **Output contribution**: 233 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js`

- **Output contribution**: 219 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../structures/AutoModerationActionExecution` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js`

- **Output contribution**: 231 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js`

- **Output contribution**: 285 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js`

- **Output contribution**: 289 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/ChannelCreate.js`

- **Output contribution**: 212 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/ChannelDelete.js`

- **Output contribution**: 194 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/ChannelUpdate.js`

- **Output contribution**: 481 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord.js/src/client/actions/Action.js` (require-call, specifier: `./Action`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Channels.js` (require-call, specifier: `../../util/Channels`)

### `node_modules/discord.js/src/client/actions/EntitlementCreate.js`

- **Output contribution**: 186 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/EntitlementDelete.js`

- **Output contribution**: 235 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/EntitlementUpdate.js`

- **Output contribution**: 249 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js`

- **Output contribution**: 236 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../structures/GuildAuditLogsEntry` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildBanAdd.js`

- **Output contribution**: 184 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildBanRemove.js`

- **Output contribution**: 266 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../structures/GuildBan` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js`

- **Output contribution**: 237 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)

### `node_modules/discord.js/src/client/actions/GuildDelete.js`

- **Output contribution**: 375 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildEmojiCreate.js`

- **Output contribution**: 204 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildEmojiDelete.js`

- **Output contribution**: 181 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js`

- **Output contribution**: 170 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js`

- **Output contribution**: 444 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)

### `node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js`

- **Output contribution**: 183 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildMemberRemove.js`

- **Output contribution**: 404 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)
  - `../../util/Status` (require-call)

### `node_modules/discord.js/src/client/actions/GuildMemberUpdate.js`

- **Output contribution**: 0.52 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)
  - `../../util/Status` (require-call)

### `node_modules/discord.js/src/client/actions/GuildRoleCreate.js`

- **Output contribution**: 257 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildRoleDelete.js`

- **Output contribution**: 261 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildRoleUpdate.js`

- **Output contribution**: 299 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js`

- **Output contribution**: 231 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)

### `node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js`

- **Output contribution**: 258 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js`

- **Output contribution**: 302 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js`

- **Output contribution**: 340 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js`

- **Output contribution**: 296 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js`

- **Output contribution**: 299 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js`

- **Output contribution**: 311 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action.js` (require-call)
  - `../../util/Events.js` (require-call)

### `node_modules/discord.js/src/client/actions/GuildStickerCreate.js`

- **Output contribution**: 212 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildStickerDelete.js`

- **Output contribution**: 187 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildStickerUpdate.js`

- **Output contribution**: 174 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/GuildStickersUpdate.js`

- **Output contribution**: 458 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)

### `node_modules/discord.js/src/client/actions/GuildUpdate.js`

- **Output contribution**: 242 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/InteractionCreate.js`

- **Output contribution**: 1.36 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./Action` (require-call)
  - `../../structures/AutocompleteInteraction` (require-call)
  - `../../structures/ButtonInteraction` (require-call)
  - `../../structures/ChannelSelectMenuInteraction` (require-call)
  - `../../structures/ChatInputCommandInteraction` (require-call)
  - `../../structures/MentionableSelectMenuInteraction` (require-call)
  - `../../structures/MessageContextMenuCommandInteraction` (require-call)
  - `../../structures/ModalSubmitInteraction` (require-call)
  - `../../structures/PrimaryEntryPointCommandInteraction` (require-call)
  - `../../structures/RoleSelectMenuInteraction` (require-call)
  - `../../structures/StringSelectMenuInteraction` (require-call)
  - `../../structures/UserContextMenuCommandInteraction` (require-call)
  - `../../structures/UserSelectMenuInteraction` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/InviteCreate.js`

- **Output contribution**: 300 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/InviteDelete.js`

- **Output contribution**: 335 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../structures/Invite` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/MessageCreate.js`

- **Output contribution**: 0.53 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/MessageDelete.js`

- **Output contribution**: 359 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/MessageDeleteBulk.js`

- **Output contribution**: 457 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js`

- **Output contribution**: 459 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js`

- **Output contribution**: 468 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/MessageReactionAdd.js`

- **Output contribution**: 0.76 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)
  - `../../util/Partials` (require-call)

### `node_modules/discord.js/src/client/actions/MessageReactionRemove.js`

- **Output contribution**: 498 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js`

- **Output contribution**: 371 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js`

- **Output contribution**: 422 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/MessageUpdate.js`

- **Output contribution**: 391 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)

### `node_modules/discord.js/src/client/actions/PresenceUpdate.js`

- **Output contribution**: 0.76 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)
  - `../../util/Partials` (require-call)

### `node_modules/discord.js/src/client/actions/StageInstanceCreate.js`

- **Output contribution**: 275 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/StageInstanceDelete.js`

- **Output contribution**: 322 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/StageInstanceUpdate.js`

- **Output contribution**: 356 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/ThreadCreate.js`

- **Output contribution**: 230 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/ThreadDelete.js`

- **Output contribution**: 210 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/ThreadListSync.js`

- **Output contribution**: 0.68 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js`

- **Output contribution**: 284 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js`

- **Output contribution**: 498 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/TypingStart.js`

- **Output contribution**: 393 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../structures/Typing` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/UserUpdate.js`

- **Output contribution**: 270 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/VoiceStateUpdate.js`

- **Output contribution**: 0.57 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `./Action` (require-call)
  - `../../structures/VoiceState` (require-call)
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/actions/WebhooksUpdate.js`

- **Output contribution**: 346 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ActionsManager.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `./Action` (require-call)

### `node_modules/discord.js/src/client/voice/ClientVoiceManager.js`

- **Output contribution**: 474 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/WebSocketManager.js`

- **Output contribution**: 5.57 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `events` (require-call, **external**, specifier: `node:events`)
  - `process` (require-call, **external**, specifier: `node:process`)
  - `timers` (require-call, **external**, specifier: `node:timers`)
  - `@discordjs/collection` (require-call)
  - `@discordjs/ws` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./WebSocketShard` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/index.js` (require-call, specifier: `./handlers`)
  - `../../errors` (require-call)
  - `../../util/Events` (require-call)
  - `../../util/Status` (require-call)
  - `../../util/WebSocketShardEvents` (require-call)
  - `zlib-sync` (require-call, **external**)

### `node_modules/discord.js/src/client/websocket/WebSocketShard.js`

- **Output contribution**: 1.87 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `events` (require-call, **external**, specifier: `node:events`)
  - `process` (require-call, **external**, specifier: `node:process`)
  - `timers` (require-call, **external**, specifier: `node:timers`)
  - `discord-api-types/v10` (require-call)
  - `../../util/Status` (require-call)
  - `../../util/WebSocketShardEvents` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/APPLICATION_COMMAND_PERMISSIONS_UPDATE.js`

- **Output contribution**: 100 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_ACTION_EXECUTION.js`

- **Output contribution**: 94 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_CREATE.js`

- **Output contribution**: 89 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_DELETE.js`

- **Output contribution**: 89 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_UPDATE.js`

- **Output contribution**: 89 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js`

- **Output contribution**: 78 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js`

- **Output contribution**: 78 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js`

- **Output contribution**: 220 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js`

- **Output contribution**: 149 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_CREATE.js`

- **Output contribution**: 82 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_DELETE.js`

- **Output contribution**: 82 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_UPDATE.js`

- **Output contribution**: 82 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_AUDIT_LOG_ENTRY_CREATE.js`

- **Output contribution**: 89 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js`

- **Output contribution**: 76 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js`

- **Output contribution**: 79 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js`

- **Output contribution**: 268 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)
  - `../../../util/Status` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js`

- **Output contribution**: 76 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js`

- **Output contribution**: 82 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js`

- **Output contribution**: 88 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js`

- **Output contribution**: 396 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js`

- **Output contribution**: 206 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)
  - `../../../util/Status` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js`

- **Output contribution**: 86 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js`

- **Output contribution**: 86 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js`

- **Output contribution**: 80 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js`

- **Output contribution**: 80 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js`

- **Output contribution**: 80 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_CREATE.js`

- **Output contribution**: 90 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_DELETE.js`

- **Output contribution**: 90 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_UPDATE.js`

- **Output contribution**: 90 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_ADD.js`

- **Output contribution**: 91 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_REMOVE.js`

- **Output contribution**: 94 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js`

- **Output contribution**: 264 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `../../../util/Events.js` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js`

- **Output contribution**: 182 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events.js` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_DELETE.js`

- **Output contribution**: 93 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js`

- **Output contribution**: 243 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events.js` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_STICKERS_UPDATE.js`

- **Output contribution**: 84 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js`

- **Output contribution**: 76 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/INTERACTION_CREATE.js`

- **Output contribution**: 82 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js`

- **Output contribution**: 77 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js`

- **Output contribution**: 77 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js`

- **Output contribution**: 78 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js`

- **Output contribution**: 78 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js`

- **Output contribution**: 82 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_ADD.js`

- **Output contribution**: 83 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_REMOVE.js`

- **Output contribution**: 86 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js`

- **Output contribution**: 83 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js`

- **Output contribution**: 86 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js`

- **Output contribution**: 89 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js`

- **Output contribution**: 91 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js`

- **Output contribution**: 149 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js`

- **Output contribution**: 79 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js`

- **Output contribution**: 371 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `discord-api-types/v10` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/READY.js`

- **Output contribution**: 337 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../structures/ClientApplication` (require-call)
  - `../../../structures/ClientUser` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/RESUMED.js`

- **Output contribution**: 132 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js`

- **Output contribution**: 253 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `../../../util/Events.js` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_CREATE.js`

- **Output contribution**: 84 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_DELETE.js`

- **Output contribution**: 84 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_UPDATE.js`

- **Output contribution**: 84 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js`

- **Output contribution**: 133 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js`

- **Output contribution**: 183 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js`

- **Output contribution**: 197 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/THREAD_CREATE.js`

- **Output contribution**: 77 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/THREAD_DELETE.js`

- **Output contribution**: 77 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/THREAD_LIST_SYNC.js`

- **Output contribution**: 79 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBERS_UPDATE.js`

- **Output contribution**: 84 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBER_UPDATE.js`

- **Output contribution**: 83 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js`

- **Output contribution**: 148 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js`

- **Output contribution**: 76 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js`

- **Output contribution**: 75 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js`

- **Output contribution**: 165 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`
- **Imports**:
  - `../../../structures/VoiceChannelEffect` (require-call)
  - `../../../util/Events` (require-call)

### `node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js`

- **Output contribution**: 139 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js`

- **Output contribution**: 81 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js`

- **Output contribution**: 79 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/handlers/index.js`

### `node_modules/discord.js/src/client/websocket/handlers/index.js`

- **Output contribution**: 2.23 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/websocket/WebSocketManager.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/APPLICATION_COMMAND_PERMISSIONS_UPDATE.js` (require-call, specifier: `./APPLICATION_COMMAND_PERMISSIONS_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_ACTION_EXECUTION.js` (require-call, specifier: `./AUTO_MODERATION_ACTION_EXECUTION`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_CREATE.js` (require-call, specifier: `./AUTO_MODERATION_RULE_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_DELETE.js` (require-call, specifier: `./AUTO_MODERATION_RULE_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_UPDATE.js` (require-call, specifier: `./AUTO_MODERATION_RULE_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js` (require-call, specifier: `./CHANNEL_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js` (require-call, specifier: `./CHANNEL_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js` (require-call, specifier: `./CHANNEL_PINS_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js` (require-call, specifier: `./CHANNEL_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_CREATE.js` (require-call, specifier: `./ENTITLEMENT_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_DELETE.js` (require-call, specifier: `./ENTITLEMENT_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_UPDATE.js` (require-call, specifier: `./ENTITLEMENT_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_AUDIT_LOG_ENTRY_CREATE.js` (require-call, specifier: `./GUILD_AUDIT_LOG_ENTRY_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js` (require-call, specifier: `./GUILD_BAN_ADD`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js` (require-call, specifier: `./GUILD_BAN_REMOVE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js` (require-call, specifier: `./GUILD_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js` (require-call, specifier: `./GUILD_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js` (require-call, specifier: `./GUILD_EMOJIS_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js` (require-call, specifier: `./GUILD_INTEGRATIONS_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js` (require-call, specifier: `./GUILD_MEMBERS_CHUNK`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js` (require-call, specifier: `./GUILD_MEMBER_ADD`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js` (require-call, specifier: `./GUILD_MEMBER_REMOVE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js` (require-call, specifier: `./GUILD_MEMBER_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js` (require-call, specifier: `./GUILD_ROLE_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js` (require-call, specifier: `./GUILD_ROLE_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js` (require-call, specifier: `./GUILD_ROLE_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_CREATE.js` (require-call, specifier: `./GUILD_SCHEDULED_EVENT_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_DELETE.js` (require-call, specifier: `./GUILD_SCHEDULED_EVENT_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_UPDATE.js` (require-call, specifier: `./GUILD_SCHEDULED_EVENT_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_ADD.js` (require-call, specifier: `./GUILD_SCHEDULED_EVENT_USER_ADD`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_REMOVE.js` (require-call, specifier: `./GUILD_SCHEDULED_EVENT_USER_REMOVE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js` (require-call, specifier: `./GUILD_SOUNDBOARD_SOUNDS_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js` (require-call, specifier: `./GUILD_SOUNDBOARD_SOUND_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_DELETE.js` (require-call, specifier: `./GUILD_SOUNDBOARD_SOUND_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js` (require-call, specifier: `./GUILD_SOUNDBOARD_SOUND_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_STICKERS_UPDATE.js` (require-call, specifier: `./GUILD_STICKERS_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js` (require-call, specifier: `./GUILD_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/INTERACTION_CREATE.js` (require-call, specifier: `./INTERACTION_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js` (require-call, specifier: `./INVITE_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js` (require-call, specifier: `./INVITE_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js` (require-call, specifier: `./MESSAGE_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js` (require-call, specifier: `./MESSAGE_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js` (require-call, specifier: `./MESSAGE_DELETE_BULK`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_ADD.js` (require-call, specifier: `./MESSAGE_POLL_VOTE_ADD`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_REMOVE.js` (require-call, specifier: `./MESSAGE_POLL_VOTE_REMOVE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js` (require-call, specifier: `./MESSAGE_REACTION_ADD`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js` (require-call, specifier: `./MESSAGE_REACTION_REMOVE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js` (require-call, specifier: `./MESSAGE_REACTION_REMOVE_ALL`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js` (require-call, specifier: `./MESSAGE_REACTION_REMOVE_EMOJI`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js` (require-call, specifier: `./MESSAGE_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js` (require-call, specifier: `./PRESENCE_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js` (require-call, specifier: `./RATE_LIMITED`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/READY.js` (require-call, specifier: `./READY`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/RESUMED.js` (require-call, specifier: `./RESUMED`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js` (require-call, specifier: `./SOUNDBOARD_SOUNDS`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_CREATE.js` (require-call, specifier: `./STAGE_INSTANCE_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_DELETE.js` (require-call, specifier: `./STAGE_INSTANCE_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_UPDATE.js` (require-call, specifier: `./STAGE_INSTANCE_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js` (require-call, specifier: `./SUBSCRIPTION_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js` (require-call, specifier: `./SUBSCRIPTION_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js` (require-call, specifier: `./SUBSCRIPTION_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_CREATE.js` (require-call, specifier: `./THREAD_CREATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_DELETE.js` (require-call, specifier: `./THREAD_DELETE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_LIST_SYNC.js` (require-call, specifier: `./THREAD_LIST_SYNC`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBERS_UPDATE.js` (require-call, specifier: `./THREAD_MEMBERS_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBER_UPDATE.js` (require-call, specifier: `./THREAD_MEMBER_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js` (require-call, specifier: `./THREAD_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js` (require-call, specifier: `./TYPING_START`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js` (require-call, specifier: `./USER_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js` (require-call, specifier: `./VOICE_CHANNEL_EFFECT_SEND`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js` (require-call, specifier: `./VOICE_SERVER_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js` (require-call, specifier: `./VOICE_STATE_UPDATE`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js` (require-call, specifier: `./WEBHOOKS_UPDATE`)

### `node_modules/discord.js/src/errors/DJSError.js`

- **Output contribution**: 0.68 KB
- **Format**: cjs
- **Imported by** (3 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./ErrorCodes` (require-call)
  - `./Messages` (require-call)

### `node_modules/discord.js/src/errors/ErrorCodes.js`

- **Output contribution**: 2.79 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`

### `node_modules/discord.js/src/errors/Messages.js`

- **Output contribution**: 9.40 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/errors/index.js`
- **Imports**:
  - `./ErrorCodes` (require-call)

### `node_modules/discord.js/src/errors/index.js`

- **Output contribution**: 90 bytes
- **Format**: cjs
- **Imported by** (4 files): `node_modules/discord.js/src/managers/ApplicationEmojiManager.js` `node_modules/discord.js/src/managers/GuildManager.js` `node_modules/discord.js/src/structures/SoundboardSound.js` `node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js`
- **Imports**:
  - `./DJSError` (require-call)
  - `./ErrorCodes` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/errors/Messages.js` (require-call, specifier: `./Messages`)

### `node_modules/discord.js/src/index.js`

- **Output contribution**: 6.51 KB
- **Format**: cjs
- **Imported by** (1 files): `index.ts`
- **Imports**:
  - `/opt/git/checkrate/node_modules/@discordjs/util/dist/index.js` (require-call, specifier: `@discordjs/util`)
  - `/opt/git/checkrate/node_modules/tslib/tslib.js` (require-call, specifier: `tslib`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/BaseClient.js` (require-call, specifier: `./client/BaseClient`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/Client.js` (require-call, specifier: `./client/Client`)
  - `/opt/git/checkrate/node_modules/discord.js/src/sharding/Shard.js` (require-call, specifier: `./sharding/Shard`)
  - `/opt/git/checkrate/node_modules/discord.js/src/sharding/ShardClientUtil.js` (require-call, specifier: `./sharding/ShardClientUtil`)
  - `/opt/git/checkrate/node_modules/discord.js/src/sharding/ShardingManager.js` (require-call, specifier: `./sharding/ShardingManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/WebhookClient.js` (require-call, specifier: `./client/WebhookClient`)
  - `/opt/git/checkrate/node_modules/discord.js/src/errors/DJSError.js` (require-call, specifier: `./errors/DJSError`)
  - `/opt/git/checkrate/node_modules/discord.js/src/errors/DJSError.js` (require-call, specifier: `./errors/DJSError`)
  - `/opt/git/checkrate/node_modules/discord.js/src/errors/DJSError.js` (require-call, specifier: `./errors/DJSError`)
  - `/opt/git/checkrate/node_modules/discord.js/src/errors/ErrorCodes.js` (require-call, specifier: `./errors/ErrorCodes`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/ActivityFlagsBitField.js` (require-call, specifier: `./util/ActivityFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/ApplicationFlagsBitField.js` (require-call, specifier: `./util/ApplicationFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/AttachmentFlagsBitField.js` (require-call, specifier: `./util/AttachmentFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/BaseManager.js` (require-call, specifier: `./managers/BaseManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/BitField.js` (require-call, specifier: `./util/BitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/ChannelFlagsBitField.js` (require-call, specifier: `./util/ChannelFlagsBitField`)
  - `/opt/git/checkrate/node_modules/@discordjs/collection/dist/index.js` (require-call, specifier: `@discordjs/collection`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Constants.js` (require-call, specifier: `./util/Constants`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Colors.js` (require-call, specifier: `./util/Colors`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Events.js` (require-call, specifier: `./util/Events`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Formatters.js` (require-call, specifier: `./util/Formatters`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/GuildMemberFlagsBitField.js` (require-call, specifier: `./util/GuildMemberFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/IntentsBitField.js` (require-call, specifier: `./util/IntentsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/InviteFlagsBitField.js` (require-call, specifier: `./util/InviteFlagsBitField.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/LimitedCollection.js` (require-call, specifier: `./util/LimitedCollection`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/MessageFlagsBitField.js` (require-call, specifier: `./util/MessageFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Options.js` (require-call, specifier: `./util/Options`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Partials.js` (require-call, specifier: `./util/Partials`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/PermissionsBitField.js` (require-call, specifier: `./util/PermissionsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/RoleFlagsBitField.js` (require-call, specifier: `./util/RoleFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/ShardEvents.js` (require-call, specifier: `./util/ShardEvents`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/SKUFlagsBitField.js` (require-call, specifier: `./util/SKUFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Status.js` (require-call, specifier: `./util/Status`)
  - `/opt/git/checkrate/node_modules/@sapphire/snowflake/dist/cjs/index.cjs` (require-call, specifier: `@sapphire/snowflake`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Sweepers.js` (require-call, specifier: `./util/Sweepers`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/SystemChannelFlagsBitField.js` (require-call, specifier: `./util/SystemChannelFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js` (require-call, specifier: `./util/ThreadMemberFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/UserFlagsBitField.js` (require-call, specifier: `./util/UserFlagsBitField`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Util.js` (require-call, specifier: `./util/Util.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/WebSocketShardEvents.js` (require-call, specifier: `./util/WebSocketShardEvents`)
  - `/opt/git/checkrate/node_modules/discord.js/package.json` (require-call, specifier: `../package.json`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/ApplicationCommandManager.js` (require-call, specifier: `./managers/ApplicationCommandManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/ApplicationEmojiManager.js` (require-call, specifier: `./managers/ApplicationEmojiManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js` (require-call, specifier: `./managers/ApplicationCommandPermissionsManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/AutoModerationRuleManager.js` (require-call, specifier: `./managers/AutoModerationRuleManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/BaseGuildEmojiManager.js` (require-call, specifier: `./managers/BaseGuildEmojiManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/CachedManager.js` (require-call, specifier: `./managers/CachedManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/ChannelManager.js` (require-call, specifier: `./managers/ChannelManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/voice/ClientVoiceManager.js` (require-call, specifier: `./client/voice/ClientVoiceManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/DataManager.js` (require-call, specifier: `./managers/DataManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/DMMessageManager.js` (require-call, specifier: `./managers/DMMessageManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/EntitlementManager.js` (require-call, specifier: `./managers/EntitlementManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildApplicationCommandManager.js` (require-call, specifier: `./managers/GuildApplicationCommandManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildBanManager.js` (require-call, specifier: `./managers/GuildBanManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildChannelManager.js` (require-call, specifier: `./managers/GuildChannelManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildEmojiManager.js` (require-call, specifier: `./managers/GuildEmojiManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildEmojiRoleManager.js` (require-call, specifier: `./managers/GuildEmojiRoleManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildForumThreadManager.js` (require-call, specifier: `./managers/GuildForumThreadManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildInviteManager.js` (require-call, specifier: `./managers/GuildInviteManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildManager.js` (require-call, specifier: `./managers/GuildManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildMemberManager.js` (require-call, specifier: `./managers/GuildMemberManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildMemberRoleManager.js` (require-call, specifier: `./managers/GuildMemberRoleManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildMessageManager.js` (require-call, specifier: `./managers/GuildMessageManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildScheduledEventManager.js` (require-call, specifier: `./managers/GuildScheduledEventManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js` (require-call, specifier: `./managers/GuildSoundboardSoundManager.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildStickerManager.js` (require-call, specifier: `./managers/GuildStickerManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/GuildTextThreadManager.js` (require-call, specifier: `./managers/GuildTextThreadManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/MessageManager.js` (require-call, specifier: `./managers/MessageManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/PermissionOverwriteManager.js` (require-call, specifier: `./managers/PermissionOverwriteManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/PollAnswerVoterManager.js` (require-call, specifier: `./managers/PollAnswerVoterManager.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/PresenceManager.js` (require-call, specifier: `./managers/PresenceManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/ReactionManager.js` (require-call, specifier: `./managers/ReactionManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/ReactionUserManager.js` (require-call, specifier: `./managers/ReactionUserManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/RoleManager.js` (require-call, specifier: `./managers/RoleManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/StageInstanceManager.js` (require-call, specifier: `./managers/StageInstanceManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/SubscriptionManager.js` (require-call, specifier: `./managers/SubscriptionManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/ThreadManager.js` (require-call, specifier: `./managers/ThreadManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/ThreadMemberManager.js` (require-call, specifier: `./managers/ThreadMemberManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/UserManager.js` (require-call, specifier: `./managers/UserManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/VoiceStateManager.js` (require-call, specifier: `./managers/VoiceStateManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/WebSocketManager.js` (require-call, specifier: `./client/websocket/WebSocketManager`)
  - `/opt/git/checkrate/node_modules/discord.js/src/client/websocket/WebSocketShard.js` (require-call, specifier: `./client/websocket/WebSocketShard`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ActionRow.js` (require-call, specifier: `./structures/ActionRow`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ActionRowBuilder.js` (require-call, specifier: `./structures/ActionRowBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Presence.js` (require-call, specifier: `./structures/Presence`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/AnonymousGuild.js` (require-call, specifier: `./structures/AnonymousGuild`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/interfaces/Application.js` (require-call, specifier: `./structures/interfaces/Application`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ApplicationCommand.js` (require-call, specifier: `./structures/ApplicationCommand`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ApplicationEmoji.js` (require-call, specifier: `./structures/ApplicationEmoji`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ApplicationRoleConnectionMetadata.js` (require-call, specifier: `./structures/ApplicationRoleConnectionMetadata`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/AutocompleteInteraction.js` (require-call, specifier: `./structures/AutocompleteInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/AutoModerationActionExecution.js` (require-call, specifier: `./structures/AutoModerationActionExecution`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/AutoModerationRule.js` (require-call, specifier: `./structures/AutoModerationRule`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Base.js` (require-call, specifier: `./structures/Base`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/BaseGuild.js` (require-call, specifier: `./structures/BaseGuild`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/BaseGuildEmoji.js` (require-call, specifier: `./structures/BaseGuildEmoji`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/BaseGuildTextChannel.js` (require-call, specifier: `./structures/BaseGuildTextChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js` (require-call, specifier: `./structures/BaseGuildVoiceChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ButtonBuilder.js` (require-call, specifier: `./structures/ButtonBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ButtonComponent.js` (require-call, specifier: `./structures/ButtonComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ButtonInteraction.js` (require-call, specifier: `./structures/ButtonInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/CategoryChannel.js` (require-call, specifier: `./structures/CategoryChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/BaseChannel.js` (require-call, specifier: `./structures/BaseChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ChatInputCommandInteraction.js` (require-call, specifier: `./structures/ChatInputCommandInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ClientApplication.js` (require-call, specifier: `./structures/ClientApplication`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ClientPresence.js` (require-call, specifier: `./structures/ClientPresence`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ClientUser.js` (require-call, specifier: `./structures/ClientUser`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/CommandInteraction.js` (require-call, specifier: `./structures/CommandInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/interfaces/Collector.js` (require-call, specifier: `./structures/interfaces/Collector`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js` (require-call, specifier: `./structures/CommandInteractionOptionResolver`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Component.js` (require-call, specifier: `./structures/Component`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ContainerComponent.js` (require-call, specifier: `./structures/ContainerComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js` (require-call, specifier: `./structures/ContextMenuCommandInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/DirectoryChannel.js` (require-call, specifier: `./structures/DirectoryChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/DMChannel.js` (require-call, specifier: `./structures/DMChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Embed.js` (require-call, specifier: `./structures/Embed`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/EmbedBuilder.js` (require-call, specifier: `./structures/EmbedBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Emoji.js` (require-call, specifier: `./structures/Emoji`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Entitlement.js` (require-call, specifier: `./structures/Entitlement`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/FileComponent.js` (require-call, specifier: `./structures/FileComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ForumChannel.js` (require-call, specifier: `./structures/ForumChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Guild.js` (require-call, specifier: `./structures/Guild`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildAuditLogs.js` (require-call, specifier: `./structures/GuildAuditLogs`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildAuditLogsEntry.js` (require-call, specifier: `./structures/GuildAuditLogsEntry`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildBan.js` (require-call, specifier: `./structures/GuildBan`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildChannel.js` (require-call, specifier: `./structures/GuildChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildEmoji.js` (require-call, specifier: `./structures/GuildEmoji`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildMember.js` (require-call, specifier: `./structures/GuildMember`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildOnboarding.js` (require-call, specifier: `./structures/GuildOnboarding`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildOnboardingPrompt.js` (require-call, specifier: `./structures/GuildOnboardingPrompt`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js` (require-call, specifier: `./structures/GuildOnboardingPromptOption`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildPreview.js` (require-call, specifier: `./structures/GuildPreview`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildPreviewEmoji.js` (require-call, specifier: `./structures/GuildPreviewEmoji`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildScheduledEvent.js` (require-call, specifier: `./structures/GuildScheduledEvent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/GuildTemplate.js` (require-call, specifier: `./structures/GuildTemplate`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Integration.js` (require-call, specifier: `./structures/Integration`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/IntegrationApplication.js` (require-call, specifier: `./structures/IntegrationApplication`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/InteractionCallback.js` (require-call, specifier: `./structures/InteractionCallback`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/InteractionCallbackResource.js` (require-call, specifier: `./structures/InteractionCallbackResource`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/InteractionCallbackResponse.js` (require-call, specifier: `./structures/InteractionCallbackResponse`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/BaseInteraction.js` (require-call, specifier: `./structures/BaseInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/InteractionCollector.js` (require-call, specifier: `./structures/InteractionCollector`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/InteractionResponse.js` (require-call, specifier: `./structures/InteractionResponse`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/InteractionWebhook.js` (require-call, specifier: `./structures/InteractionWebhook`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Invite.js` (require-call, specifier: `./structures/Invite`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/InviteStageInstance.js` (require-call, specifier: `./structures/InviteStageInstance`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/InviteGuild.js` (require-call, specifier: `./structures/InviteGuild`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/LabelComponent.js` (require-call, specifier: `./structures/LabelComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Message.js` (require-call, specifier: `./structures/Message`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Attachment.js` (require-call, specifier: `./structures/Attachment`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/AttachmentBuilder.js` (require-call, specifier: `./structures/AttachmentBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ModalBuilder.js` (require-call, specifier: `./structures/ModalBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MediaChannel.js` (require-call, specifier: `./structures/MediaChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MediaGalleryComponent.js` (require-call, specifier: `./structures/MediaGalleryComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MediaGalleryItem.js` (require-call, specifier: `./structures/MediaGalleryItem`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MessageCollector.js` (require-call, specifier: `./structures/MessageCollector`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MessageComponentInteraction.js` (require-call, specifier: `./structures/MessageComponentInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js` (require-call, specifier: `./structures/MessageContextMenuCommandInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MessageMentions.js` (require-call, specifier: `./structures/MessageMentions`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MessagePayload.js` (require-call, specifier: `./structures/MessagePayload`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MessageReaction.js` (require-call, specifier: `./structures/MessageReaction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ModalSubmitInteraction.js` (require-call, specifier: `./structures/ModalSubmitInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ModalSubmitFields.js` (require-call, specifier: `./structures/ModalSubmitFields`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/NewsChannel.js` (require-call, specifier: `./structures/NewsChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/OAuth2Guild.js` (require-call, specifier: `./structures/OAuth2Guild`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/PartialGroupDMChannel.js` (require-call, specifier: `./structures/PartialGroupDMChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/PermissionOverwrites.js` (require-call, specifier: `./structures/PermissionOverwrites`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Poll.js` (require-call, specifier: `./structures/Poll`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/PollAnswer.js` (require-call, specifier: `./structures/PollAnswer`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js` (require-call, specifier: `./structures/PrimaryEntryPointCommandInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Presence.js` (require-call, specifier: `./structures/Presence`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ReactionCollector.js` (require-call, specifier: `./structures/ReactionCollector`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ReactionEmoji.js` (require-call, specifier: `./structures/ReactionEmoji`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Presence.js` (require-call, specifier: `./structures/Presence`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Role.js` (require-call, specifier: `./structures/Role`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/SectionComponent.js` (require-call, specifier: `./structures/SectionComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/SelectMenuBuilder.js` (require-call, specifier: `./structures/SelectMenuBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js` (require-call, specifier: `./structures/ChannelSelectMenuBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js` (require-call, specifier: `./structures/MentionableSelectMenuBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js` (require-call, specifier: `./structures/RoleSelectMenuBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/StringSelectMenuBuilder.js` (require-call, specifier: `./structures/StringSelectMenuBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/UserSelectMenuBuilder.js` (require-call, specifier: `./structures/UserSelectMenuBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/BaseSelectMenuComponent.js` (require-call, specifier: `./structures/BaseSelectMenuComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/SelectMenuComponent.js` (require-call, specifier: `./structures/SelectMenuComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js` (require-call, specifier: `./structures/ChannelSelectMenuComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js` (require-call, specifier: `./structures/MentionableSelectMenuComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/RoleSelectMenuComponent.js` (require-call, specifier: `./structures/RoleSelectMenuComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/StringSelectMenuComponent.js` (require-call, specifier: `./structures/StringSelectMenuComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/UserSelectMenuComponent.js` (require-call, specifier: `./structures/UserSelectMenuComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/SelectMenuInteraction.js` (require-call, specifier: `./structures/SelectMenuInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js` (require-call, specifier: `./structures/ChannelSelectMenuInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js` (require-call, specifier: `./structures/MentionableSelectMenuInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js` (require-call, specifier: `./structures/MentionableSelectMenuInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js` (require-call, specifier: `./structures/RoleSelectMenuInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/StringSelectMenuInteraction.js` (require-call, specifier: `./structures/StringSelectMenuInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/UserSelectMenuInteraction.js` (require-call, specifier: `./structures/UserSelectMenuInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js` (require-call, specifier: `./structures/SelectMenuOptionBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/SeparatorComponent.js` (require-call, specifier: `./structures/SeparatorComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/SKU.js` (require-call, specifier: `./structures/SKU`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/SoundboardSound.js` (require-call, specifier: `./structures/SoundboardSound.js`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js` (require-call, specifier: `./structures/StringSelectMenuOptionBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/StageChannel.js` (require-call, specifier: `./structures/StageChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/StageInstance.js` (require-call, specifier: `./structures/StageInstance`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Subscription.js` (require-call, specifier: `./structures/Subscription`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Sticker.js` (require-call, specifier: `./structures/Sticker`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/StickerPack.js` (require-call, specifier: `./structures/StickerPack`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Team.js` (require-call, specifier: `./structures/Team`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/TeamMember.js` (require-call, specifier: `./structures/TeamMember`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/TextChannel.js` (require-call, specifier: `./structures/TextChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/TextDisplayComponent.js` (require-call, specifier: `./structures/TextDisplayComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/TextInputBuilder.js` (require-call, specifier: `./structures/TextInputBuilder`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/TextInputComponent.js` (require-call, specifier: `./structures/TextInputComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ThreadChannel.js` (require-call, specifier: `./structures/ThreadChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ThreadMember.js` (require-call, specifier: `./structures/ThreadMember`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ThreadOnlyChannel.js` (require-call, specifier: `./structures/ThreadOnlyChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/ThumbnailComponent.js` (require-call, specifier: `./structures/ThumbnailComponent`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Typing.js` (require-call, specifier: `./structures/Typing`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/UnfurledMediaItem.js` (require-call, specifier: `./structures/UnfurledMediaItem`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/User.js` (require-call, specifier: `./structures/User`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js` (require-call, specifier: `./structures/UserContextMenuCommandInteraction`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/VoiceChannelEffect.js` (require-call, specifier: `./structures/VoiceChannelEffect`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/VoiceChannel.js` (require-call, specifier: `./structures/VoiceChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/VoiceRegion.js` (require-call, specifier: `./structures/VoiceRegion`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/VoiceState.js` (require-call, specifier: `./structures/VoiceState`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Webhook.js` (require-call, specifier: `./structures/Webhook`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/Widget.js` (require-call, specifier: `./structures/Widget`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/WidgetMember.js` (require-call, specifier: `./structures/WidgetMember`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/WelcomeChannel.js` (require-call, specifier: `./structures/WelcomeChannel`)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/WelcomeScreen.js` (require-call, specifier: `./structures/WelcomeScreen`)
  - `/opt/git/checkrate/node_modules/discord-api-types/v10.js` (require-call, specifier: `discord-api-types/v10`)
  - `/opt/git/checkrate/node_modules/@discordjs/builders/dist/index.js` (require-call, specifier: `@discordjs/builders`)
  - `/opt/git/checkrate/node_modules/@discordjs/formatters/dist/index.js` (require-call, specifier: `@discordjs/formatters`)
  - `/opt/git/checkrate/node_modules/@discordjs/rest/dist/index.js` (require-call, specifier: `@discordjs/rest`)
  - `/opt/git/checkrate/node_modules/@discordjs/util/dist/index.js` (require-call, specifier: `@discordjs/util`)
  - `/opt/git/checkrate/node_modules/@discordjs/ws/dist/index.js` (require-call, specifier: `@discordjs/ws`)

### `node_modules/discord.js/src/managers/ApplicationCommandManager.js`

- **Output contribution**: 2.84 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `@discordjs/util` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./ApplicationCommandPermissionsManager` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/ApplicationCommand` (require-call)
  - `../util/PermissionsBitField` (require-call)

### `node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js`

- **Output contribution**: 4.39 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./BaseManager` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/managers/ApplicationEmojiManager.js`

- **Output contribution**: 1.51 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/errors/index.js` (require-call, specifier: `../errors`)
  - `../structures/ApplicationEmoji` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/DataResolver.js` (require-call, specifier: `../util/DataResolver`)

### `node_modules/discord.js/src/managers/AutoModerationRuleManager.js`

- **Output contribution**: 2.61 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../structures/AutoModerationRule` (require-call)

### `node_modules/discord.js/src/managers/BaseGuildEmojiManager.js`

- **Output contribution**: 0.72 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./CachedManager` (require-call)
  - `../structures/ApplicationEmoji` (require-call)
  - `../structures/GuildEmoji` (require-call)
  - `../structures/ReactionEmoji` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/managers/BaseManager.js`

- **Output contribution**: 108 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`

### `node_modules/discord.js/src/managers/CachedManager.js`

- **Output contribution**: 0.57 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./DataManager` (require-call)
  - `../util/Symbols` (require-call)

### `node_modules/discord.js/src/managers/CategoryChannelChildManager.js`

- **Output contribution**: 330 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/structures/CategoryChannel.js`
- **Imports**:
  - `./DataManager` (require-call)
  - `../structures/GuildChannel` (require-call)

### `node_modules/discord.js/src/managers/ChannelManager.js`

- **Output contribution**: 1.45 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../structures/BaseChannel` (require-call)
  - `../util/Channels` (require-call)
  - `../util/Constants` (require-call)
  - `../util/Events` (require-call)

### `node_modules/discord.js/src/managers/DMMessageManager.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./MessageManager` (require-call)

### `node_modules/discord.js/src/managers/DataManager.js`

- **Output contribution**: 495 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseManager` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/managers/EntitlementManager.js`

- **Output contribution**: 1.94 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors/index` (require-call)
  - `../structures/Entitlement` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/managers/GuildApplicationCommandManager.js`

- **Output contribution**: 159 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./ApplicationCommandManager` (require-call)
  - `./ApplicationCommandPermissionsManager` (require-call)

### `node_modules/discord.js/src/managers/GuildBanManager.js`

- **Output contribution**: 2.51 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/GuildBan` (require-call)
  - `../structures/GuildMember` (require-call)

### `node_modules/discord.js/src/managers/GuildChannelManager.js`

- **Output contribution**: 5.76 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `./GuildTextThreadManager` (require-call)
  - `../errors` (require-call)
  - `../structures/GuildChannel` (require-call)
  - `../structures/PermissionOverwrites` (require-call)
  - `../structures/ThreadChannel` (require-call)
  - `../structures/Webhook` (require-call)
  - `../util/ChannelFlagsBitField` (require-call)
  - `../util/Channels` (require-call)
  - `../util/Constants` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/managers/GuildEmojiManager.js`

- **Output contribution**: 2.20 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./BaseGuildEmojiManager` (require-call)
  - `../errors` (require-call)
  - `../util/DataResolver` (require-call)

### `node_modules/discord.js/src/managers/GuildEmojiRoleManager.js`

- **Output contribution**: 1.10 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./DataManager` (require-call)
  - `../errors` (require-call)
  - `../structures/Role` (require-call)

### `node_modules/discord.js/src/managers/GuildForumThreadManager.js`

- **Output contribution**: 0.64 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./ThreadManager` (require-call)
  - `../errors` (require-call)
  - `../structures/MessagePayload` (require-call)

### `node_modules/discord.js/src/managers/GuildInviteManager.js`

- **Output contribution**: 1.75 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/Invite` (require-call)
  - `../util/DataResolver` (require-call)

### `node_modules/discord.js/src/managers/GuildManager.js`

- **Output contribution**: 4.0 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `timers` (require-call, **external**, specifier: `node:timers`)
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors/index.js` (require-call)
  - `../sharding/ShardClientUtil` (require-call)
  - `../structures/Guild` (require-call)
  - `../structures/GuildChannel` (require-call)
  - `../structures/GuildEmoji` (require-call)
  - `../structures/GuildMember` (require-call)
  - `../structures/Invite` (require-call)
  - `../structures/OAuth2Guild` (require-call)
  - `../structures/Role` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/Events` (require-call)
  - `../util/PermissionsBitField` (require-call)
  - `../util/SystemChannelFlagsBitField` (require-call)
  - `../util/Transformers.js` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/managers/GuildMemberManager.js`

- **Output contribution**: 6.51 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `timers` (require-call, **external**, specifier: `node:timers`)
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `@discordjs/util` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/BaseGuildVoiceChannel` (require-call)
  - `../structures/GuildMember` (require-call)
  - `../structures/Role` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/Events` (require-call)
  - `../util/GuildMemberFlagsBitField` (require-call)
  - `../util/Partials` (require-call)

### `node_modules/discord.js/src/managers/GuildMemberRoleManager.js`

- **Output contribution**: 2.47 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./DataManager` (require-call)
  - `../errors` (require-call)
  - `../structures/Role` (require-call)

### `node_modules/discord.js/src/managers/GuildMessageManager.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./MessageManager` (require-call)

### `node_modules/discord.js/src/managers/GuildScheduledEventManager.js`

- **Output contribution**: 3.0 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/GuildScheduledEvent` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js`

- **Output contribution**: 2.0 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/util` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager.js` (require-call)
  - `../errors/index.js` (require-call)
  - `../structures/SoundboardSound.js` (require-call)
  - `../util/DataResolver.js` (require-call)
  - `/opt/git/checkrate/node_modules/magic-bytes.js/dist/index.js` (require-call, specifier: `magic-bytes.js`)

### `node_modules/discord.js/src/managers/GuildStickerManager.js`

- **Output contribution**: 1.62 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/MessagePayload` (require-call)
  - `../structures/Sticker` (require-call)

### `node_modules/discord.js/src/managers/GuildTextThreadManager.js`

- **Output contribution**: 0.80 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./ThreadManager` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/managers/MessageManager.js`

- **Output contribution**: 3.44 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/Message` (require-call)
  - `../structures/MessagePayload` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Symbols.js` (require-call, specifier: `../util/Symbols`)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/structures/PartialGroupDMChannel.js`
- **Imports**:
  - `./MessageManager` (require-call)

### `node_modules/discord.js/src/managers/PermissionOverwriteManager.js`

- **Output contribution**: 1.70 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/PermissionOverwrites` (require-call)
  - `../structures/Role` (require-call)

### `node_modules/discord.js/src/managers/PollAnswerVoterManager.js`

- **Output contribution**: 506 bytes
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/structures/PollAnswer.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager.js` (require-call)
  - `../structures/User.js` (require-call)

### `node_modules/discord.js/src/managers/PresenceManager.js`

- **Output contribution**: 409 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./CachedManager` (require-call)
  - `../structures/Presence` (require-call)

### `node_modules/discord.js/src/managers/ReactionManager.js`

- **Output contribution**: 375 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../structures/MessageReaction` (require-call)

### `node_modules/discord.js/src/managers/ReactionUserManager.js`

- **Output contribution**: 0.98 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/User` (require-call)

### `node_modules/discord.js/src/managers/RoleManager.js`

- **Output contribution**: 4.29 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/Role` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/PermissionsBitField` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/managers/StageInstanceManager.js`

- **Output contribution**: 1.47 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/StageInstance` (require-call)

### `node_modules/discord.js/src/managers/SubscriptionManager.js`

- **Output contribution**: 0.80 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors/index` (require-call)
  - `../structures/Subscription` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/managers/ThreadManager.js`

- **Output contribution**: 1.85 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/ThreadChannel` (require-call)
  - `../util/Symbols` (require-call)

### `node_modules/discord.js/src/managers/ThreadMemberManager.js`

- **Output contribution**: 2.19 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/ThreadMember` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/managers/UserManager.js`

- **Output contribution**: 1.50 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../errors` (require-call)
  - `../structures/GuildMember` (require-call)
  - `../structures/Message` (require-call)
  - `../structures/ThreadMember` (require-call)
  - `../structures/User` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/managers/VoiceStateManager.js`

- **Output contribution**: 0.55 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./CachedManager` (require-call)
  - `../structures/VoiceState` (require-call)

### `node_modules/discord.js/src/sharding/Shard.js`

- **Output contribution**: 4.92 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `events` (require-call, **external**, specifier: `node:events`)
  - `path` (require-call, **external**, specifier: `node:path`)
  - `process` (require-call, **external**, specifier: `node:process`)
  - `timers` (require-call, **external**, specifier: `node:timers`)
  - `timers/promises` (require-call, **external**, specifier: `node:timers/promises`)
  - `worker_threads` (require-call, **external**, specifier: `node:worker_threads`)
  - `../errors` (require-call)
  - `../util/ShardEvents` (require-call)
  - `../util/Util` (require-call)
  - `child_process` (require-call, **external**, specifier: `node:child_process`)
  - `worker_threads` (require-call, **external**, specifier: `node:worker_threads`)

### `node_modules/discord.js/src/sharding/ShardClientUtil.js`

- **Output contribution**: 3.42 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/util` (require-call)
  - `../errors` (require-call)
  - `../util/Events` (require-call)
  - `../util/Util` (require-call)
  - `worker_threads` (require-call, **external**, specifier: `node:worker_threads`)

### `node_modules/discord.js/src/sharding/ShardingManager.js`

- **Output contribution**: 4.0 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `events` (require-call, **external**, specifier: `node:events`)
  - `fs` (require-call, **external**, specifier: `node:fs`)
  - `path` (require-call, **external**, specifier: `node:path`)
  - `process` (require-call, **external**, specifier: `node:process`)
  - `timers/promises` (require-call, **external**, specifier: `node:timers/promises`)
  - `@discordjs/collection` (require-call)
  - `./Shard` (require-call)
  - `../errors` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/ActionRow.js`

- **Output contribution**: 428 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `util` (require-call, **external**, specifier: `node:util`)
  - `@discordjs/util` (require-call)
  - `./Component` (require-call)
  - `../util/Components` (require-call)

### `node_modules/discord.js/src/structures/ActionRowBuilder.js`

- **Output contribution**: 311 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Components` (require-call)
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/structures/AnonymousGuild.js`

- **Output contribution**: 0.79 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseGuild` (require-call)

### `node_modules/discord.js/src/structures/ApplicationCommand.js`

- **Output contribution**: 5.94 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `fast-deep-equal` (require-call)
  - `./Base` (require-call)
  - `../managers/ApplicationCommandPermissionsManager` (require-call)
  - `../util/PermissionsBitField` (require-call)

### `node_modules/discord.js/src/structures/ApplicationEmoji.js`

- **Output contribution**: 0.85 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Emoji` (require-call)

### `node_modules/discord.js/src/structures/ApplicationRoleConnectionMetadata.js`

- **Output contribution**: 277 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`

### `node_modules/discord.js/src/structures/Attachment.js`

- **Output contribution**: 0.99 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `../util/AttachmentFlagsBitField.js` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/AttachmentBuilder.js`

- **Output contribution**: 0.62 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/AutoModerationActionExecution.js`

- **Output contribution**: 0.78 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/structures/AutoModerationRule.js`

- **Output contribution**: 2.21 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./Base` (require-call)
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/structures/AutocompleteInteraction.js`

- **Output contribution**: 0.87 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BaseInteraction` (require-call)
  - `./CommandInteractionOptionResolver` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/structures/Base.js`

- **Output contribution**: 318 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/BaseChannel.js`

- **Output contribution**: 1.1 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/formatters` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `../util/ChannelFlagsBitField` (require-call)
  - `../util/Constants` (require-call)

### `node_modules/discord.js/src/structures/BaseGuild.js`

- **Output contribution**: 0.82 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/rest` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/BaseGuildEmoji.js`

- **Output contribution**: 387 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Emoji` (require-call)

### `node_modules/discord.js/src/structures/BaseGuildTextChannel.js`

- **Output contribution**: 1.43 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./GuildChannel` (require-call)
  - `./interfaces/TextBasedChannel` (require-call)
  - `../managers/GuildMessageManager` (require-call)
  - `../managers/GuildTextThreadManager` (require-call)

### `node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js`

- **Output contribution**: 1.84 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./GuildChannel` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js` (require-call, specifier: `./interfaces/TextBasedChannel`)
  - `../managers/GuildMessageManager` (require-call)

### `node_modules/discord.js/src/structures/BaseInteraction.js`

- **Output contribution**: 3.18 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `util` (require-call, **external**, specifier: `node:util`)
  - `@discordjs/collection` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `../util/Constants` (require-call)
  - `../util/PermissionsBitField` (require-call)

### `node_modules/discord.js/src/structures/BaseSelectMenuComponent.js`

- **Output contribution**: 311 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)

### `node_modules/discord.js/src/structures/ButtonBuilder.js`

- **Output contribution**: 394 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/ButtonComponent.js`

- **Output contribution**: 318 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)

### `node_modules/discord.js/src/structures/ButtonInteraction.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./MessageComponentInteraction` (require-call)

### `node_modules/discord.js/src/structures/CategoryChannel.js`

- **Output contribution**: 116 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./GuildChannel` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/CategoryChannelChildManager.js` (require-call, specifier: `../managers/CategoryChannelChildManager`)

### `node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js`

- **Output contribution**: 231 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js`

- **Output contribution**: 127 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseSelectMenuComponent` (require-call)

### `node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js`

- **Output contribution**: 302 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./MessageComponentInteraction` (require-call)

### `node_modules/discord.js/src/structures/ChatInputCommandInteraction.js`

- **Output contribution**: 499 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./CommandInteraction` (require-call)
  - `./CommandInteractionOptionResolver` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/ClientApplication.js`

- **Output contribution**: 4.12 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./ApplicationRoleConnectionMetadata` (require-call)
  - `./SKU` (require-call)
  - `./Team` (require-call)
  - `./interfaces/Application` (require-call)
  - `../managers/ApplicationCommandManager` (require-call)
  - `../managers/ApplicationEmojiManager` (require-call)
  - `../managers/EntitlementManager` (require-call)
  - `../managers/SubscriptionManager` (require-call)
  - `../util/ApplicationFlagsBitField` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/PermissionsBitField` (require-call)

### `node_modules/discord.js/src/structures/ClientPresence.js`

- **Output contribution**: 1.21 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./Presence` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/structures/ClientUser.js`

- **Output contribution**: 1.10 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./User` (require-call)
  - `../util/DataResolver` (require-call)

### `node_modules/discord.js/src/structures/CommandInteraction.js`

- **Output contribution**: 1.23 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Attachment` (require-call)
  - `./BaseInteraction` (require-call)
  - `./InteractionWebhook` (require-call)
  - `./interfaces/InteractionResponses` (require-call)

### `node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js`

- **Output contribution**: 2.71 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/structures/Component.js`

- **Output contribution**: 257 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `fast-deep-equal` (require-call)

### `node_modules/discord.js/src/structures/ContainerComponent.js`

- **Output contribution**: 506 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)
  - `../util/Components` (require-call)

### `node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js`

- **Output contribution**: 0.71 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/util` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./CommandInteraction` (require-call)
  - `./CommandInteractionOptionResolver` (require-call)
  - `../util/Util` (require-call)
  - `./Message` (require-call)

### `node_modules/discord.js/src/structures/DMChannel.js`

- **Output contribution**: 1.25 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/formatters` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./BaseChannel` (require-call)
  - `./interfaces/TextBasedChannel` (require-call)
  - `../managers/DMMessageManager` (require-call)
  - `../util/Partials` (require-call)

### `node_modules/discord.js/src/structures/DirectoryChannel.js`

- **Output contribution**: 188 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseChannel` (require-call)

### `node_modules/discord.js/src/structures/Embed.js`

- **Output contribution**: 2.18 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `/opt/git/checkrate/node_modules/fast-deep-equal/index.js` (require-call, specifier: `fast-deep-equal`)

### `node_modules/discord.js/src/structures/EmbedBuilder.js`

- **Output contribution**: 336 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/Emoji.js`

- **Output contribution**: 0.95 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/formatters` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/Entitlement.js`

- **Output contribution**: 1.29 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/FileComponent.js`

- **Output contribution**: 234 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)
  - `./UnfurledMediaItem` (require-call)

### `node_modules/discord.js/src/structures/ForumChannel.js`

- **Output contribution**: 221 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./ThreadOnlyChannel` (require-call)

### `node_modules/discord.js/src/structures/Guild.js`

- **Output contribution**: 13.20 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/rest` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./AnonymousGuild` (require-call)
  - `./GuildAuditLogs` (require-call)
  - `./GuildOnboarding` (require-call)
  - `./GuildPreview` (require-call)
  - `./GuildTemplate` (require-call)
  - `./Integration` (require-call)
  - `./Webhook` (require-call)
  - `./WelcomeScreen` (require-call)
  - `../errors` (require-call)
  - `../managers/AutoModerationRuleManager` (require-call)
  - `../managers/GuildApplicationCommandManager` (require-call)
  - `../managers/GuildBanManager` (require-call)
  - `../managers/GuildChannelManager` (require-call)
  - `../managers/GuildEmojiManager` (require-call)
  - `../managers/GuildInviteManager` (require-call)
  - `../managers/GuildMemberManager` (require-call)
  - `../managers/GuildScheduledEventManager` (require-call)
  - `../managers/GuildSoundboardSoundManager` (require-call)
  - `../managers/GuildStickerManager` (require-call)
  - `../managers/PresenceManager` (require-call)
  - `../managers/RoleManager` (require-call)
  - `../managers/StageInstanceManager` (require-call)
  - `../managers/VoiceStateManager` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/Status` (require-call)
  - `../util/SystemChannelFlagsBitField` (require-call)
  - `../util/Transformers.js` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/GuildAuditLogs.js`

- **Output contribution**: 0.99 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./ApplicationCommand` (require-call)
  - `./GuildAuditLogsEntry` (require-call)
  - `./Integration` (require-call)
  - `./Webhook` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/GuildAuditLogsEntry.js`

- **Output contribution**: 7.52 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./AutoModerationRule` (require-call)
  - `./GuildOnboardingPrompt` (require-call)
  - `./GuildScheduledEvent` (require-call)
  - `./Integration` (require-call)
  - `./Invite` (require-call)
  - `./StageInstance` (require-call)
  - `./Sticker` (require-call)
  - `./Webhook` (require-call)
  - `../util/Partials` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/GuildBan.js`

- **Output contribution**: 347 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/GuildChannel.js`

- **Output contribution**: 5.1 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./BaseChannel` (require-call)
  - `../errors` (require-call)
  - `../managers/PermissionOverwriteManager` (require-call)
  - `../util/Constants` (require-call)
  - `../util/PermissionsBitField` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/GuildEmoji.js`

- **Output contribution**: 1.27 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BaseGuildEmoji` (require-call)
  - `../errors` (require-call)
  - `../managers/GuildEmojiRoleManager` (require-call)

### `node_modules/discord.js/src/structures/GuildMember.js`

- **Output contribution**: 5.65 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `./VoiceState` (require-call)
  - `./interfaces/TextBasedChannel` (require-call)
  - `../errors` (require-call)
  - `../managers/GuildMemberRoleManager` (require-call)
  - `../util/GuildMemberFlagsBitField` (require-call)
  - `../util/PermissionsBitField` (require-call)

### `node_modules/discord.js/src/structures/GuildOnboarding.js`

- **Output contribution**: 479 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./Base` (require-call)
  - `./GuildOnboardingPrompt` (require-call)

### `node_modules/discord.js/src/structures/GuildOnboardingPrompt.js`

- **Output contribution**: 462 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./Base` (require-call)
  - `./GuildOnboardingPromptOption` (require-call)

### `node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js`

- **Output contribution**: 0.64 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./Base` (require-call)
  - `./Emoji.js` (require-call)

### `node_modules/discord.js/src/structures/GuildPreview.js`

- **Output contribution**: 1.55 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `./GuildPreviewEmoji` (require-call)
  - `./Sticker` (require-call)

### `node_modules/discord.js/src/structures/GuildPreviewEmoji.js`

- **Output contribution**: 122 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseGuildEmoji` (require-call)

### `node_modules/discord.js/src/structures/GuildScheduledEvent.js`

- **Output contribution**: 4.15 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/structures/GuildTemplate.js`

- **Output contribution**: 1.95 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `timers` (require-call, **external**, specifier: `node:timers`)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/Events` (require-call)

### `node_modules/discord.js/src/structures/Integration.js`

- **Output contribution**: 1.59 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `./IntegrationApplication` (require-call)

### `node_modules/discord.js/src/structures/IntegrationApplication.js`

- **Output contribution**: 0.66 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./interfaces/Application` (require-call)

### `node_modules/discord.js/src/structures/InteractionCallback.js`

- **Output contribution**: 0.51 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)

### `node_modules/discord.js/src/structures/InteractionCallbackResource.js`

- **Output contribution**: 377 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/util` (require-call)
  - `./Message` (require-call)

### `node_modules/discord.js/src/structures/InteractionCallbackResponse.js`

- **Output contribution**: 226 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./InteractionCallback` (require-call)
  - `./InteractionCallbackResource` (require-call)

### `node_modules/discord.js/src/structures/InteractionCollector.js`

- **Output contribution**: 3.75 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./interfaces/Collector` (require-call)
  - `../util/Events` (require-call)

### `node_modules/discord.js/src/structures/InteractionResponse.js`

- **Output contribution**: 0.83 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `../errors` (require-call)
  - `./InteractionCollector` (require-call)

### `node_modules/discord.js/src/structures/InteractionWebhook.js`

- **Output contribution**: 365 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Webhook` (require-call)

### `node_modules/discord.js/src/structures/Invite.js`

- **Output contribution**: 3.28 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `./GuildScheduledEvent` (require-call)
  - `./IntegrationApplication` (require-call)
  - `./InviteStageInstance` (require-call)
  - `../errors` (require-call)
  - `../util/InviteFlagsBitField.js` (require-call)
  - `./InviteGuild` (require-call)

### `node_modules/discord.js/src/structures/InviteGuild.js`

- **Output contribution**: 185 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./AnonymousGuild` (require-call)
  - `./WelcomeScreen` (require-call)

### `node_modules/discord.js/src/structures/InviteStageInstance.js`

- **Output contribution**: 0.59 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/LabelComponent.js`

- **Output contribution**: 313 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)
  - `../util/Components` (require-call)

### `node_modules/discord.js/src/structures/MediaChannel.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./ThreadOnlyChannel` (require-call)

### `node_modules/discord.js/src/structures/MediaGalleryComponent.js`

- **Output contribution**: 219 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)
  - `./MediaGalleryItem` (require-call)

### `node_modules/discord.js/src/structures/MediaGalleryItem.js`

- **Output contribution**: 273 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./UnfurledMediaItem` (require-call)

### `node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js`

- **Output contribution**: 235 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseSelectMenuComponent` (require-call)

### `node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js`

- **Output contribution**: 0.69 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./MessageComponentInteraction` (require-call)
  - `../util/Events` (require-call)

### `node_modules/discord.js/src/structures/Message.js`

- **Output contribution**: 11.36 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/formatters` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Attachment` (require-call)
  - `./Base` (require-call)
  - `./ClientApplication` (require-call)
  - `./Embed` (require-call)
  - `./InteractionCollector` (require-call)
  - `./MessageMentions` (require-call)
  - `./MessagePayload` (require-call)
  - `./Poll.js` (require-call)
  - `./ReactionCollector` (require-call)
  - `./Sticker` (require-call)
  - `../errors` (require-call)
  - `../managers/ReactionManager` (require-call)
  - `../util/Components` (require-call)
  - `../util/Constants` (require-call)
  - `../util/MessageFlagsBitField` (require-call)
  - `../util/PermissionsBitField` (require-call)
  - `../util/Transformers.js` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/MessageCollector.js`

- **Output contribution**: 1.82 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./interfaces/Collector` (require-call)
  - `../util/Events` (require-call)

### `node_modules/discord.js/src/structures/MessageComponentInteraction.js`

- **Output contribution**: 0.72 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/util` (require-call)
  - `./BaseInteraction` (require-call)
  - `./InteractionWebhook` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/structures/interfaces/InteractionResponses.js` (require-call, specifier: `./interfaces/InteractionResponses`)
  - `../util/Components` (require-call)
  - `./Message` (require-call)

### `node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js`

- **Output contribution**: 133 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./ContextMenuCommandInteraction` (require-call)

### `node_modules/discord.js/src/structures/MessageMentions.js`

- **Output contribution**: 2.80 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/MessagePayload.js`

- **Output contribution**: 4.38 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `buffer` (require-call, **external**, specifier: `node:buffer`)
  - `@discordjs/util` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `../errors` (require-call)
  - `../util/DataResolver` (require-call)
  - `../util/MessageFlagsBitField` (require-call)
  - `../util/Util` (require-call)
  - `./BaseInteraction` (require-call)
  - `./Webhook` (require-call)
  - `../client/WebhookClient` (require-call)
  - `./User` (require-call)
  - `./GuildMember` (require-call)
  - `./Message` (require-call)
  - `../managers/MessageManager` (require-call)
  - `./InteractionWebhook` (require-call)

### `node_modules/discord.js/src/structures/MessageReaction.js`

- **Output contribution**: 2.14 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./ApplicationEmoji` (require-call)
  - `./GuildEmoji` (require-call)
  - `./ReactionEmoji` (require-call)
  - `../managers/ReactionUserManager` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/ModalBuilder.js`

- **Output contribution**: 310 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/structures/ModalSubmitFields.js`

- **Output contribution**: 2.27 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/structures/ModalSubmitInteraction.js`

- **Output contribution**: 2.0 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@discordjs/util` (require-call)
  - `./BaseInteraction` (require-call)
  - `./InteractionWebhook` (require-call)
  - `./ModalSubmitFields` (require-call)
  - `./interfaces/InteractionResponses` (require-call)
  - `../util/Util` (require-call)
  - `./Message` (require-call)
  - `./Attachment` (require-call)

### `node_modules/discord.js/src/structures/NewsChannel.js`

- **Output contribution**: 345 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BaseGuildTextChannel` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/structures/OAuth2Guild.js`

- **Output contribution**: 184 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseGuild` (require-call)
  - `../util/PermissionsBitField` (require-call)

### `node_modules/discord.js/src/structures/PartialGroupDMChannel.js`

- **Output contribution**: 1.16 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseChannel` (require-call)
  - `./interfaces/TextBasedChannel` (require-call)
  - `../errors` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js` (require-call, specifier: `../managers/PartialGroupDMMessageManager`)

### `node_modules/discord.js/src/structures/PermissionOverwrites.js`

- **Output contribution**: 1.46 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `./Role` (require-call)
  - `../errors` (require-call)
  - `../util/PermissionsBitField` (require-call)

### `node_modules/discord.js/src/structures/Poll.js`

- **Output contribution**: 1.45 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/client/actions/Action.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./Base` (require-call)
  - `./PollAnswer` (require-call)
  - `../errors/DJSError` (require-call)
  - `../errors/index` (require-call)

### `node_modules/discord.js/src/structures/PollAnswer.js`

- **Output contribution**: 0.95 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/client/actions/Action.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `./Base.js` (require-call)
  - `./Emoji.js` (require-call)
  - `../managers/PollAnswerVoterManager.js` (require-call)

### `node_modules/discord.js/src/structures/Presence.js`

- **Output contribution**: 3.1 KB
- **Format**: cjs
- **Imported by** (3 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Base` (require-call)
  - `./Emoji` (require-call)
  - `../util/ActivityFlagsBitField` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./CommandInteraction.js` (require-call)

### `node_modules/discord.js/src/structures/ReactionCollector.js`

- **Output contribution**: 2.87 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./interfaces/Collector` (require-call)
  - `../util/Events` (require-call)

### `node_modules/discord.js/src/structures/ReactionEmoji.js`

- **Output contribution**: 223 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Emoji` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/Role.js`

- **Output contribution**: 3.58 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/formatters` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `../errors` (require-call)
  - `../util/PermissionsBitField` (require-call)
  - `../util/RoleFlagsBitField` (require-call)

### `node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js`

- **Output contribution**: 228 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/structures/RoleSelectMenuComponent.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseSelectMenuComponent` (require-call)

### `node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js`

- **Output contribution**: 279 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./MessageComponentInteraction` (require-call)

### `node_modules/discord.js/src/structures/SKU.js`

- **Output contribution**: 250 bytes
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/util/Util.js`
- **Imports**:
  - `./Base` (require-call)
  - `../util/SKUFlagsBitField` (require-call)

### `node_modules/discord.js/src/structures/SectionComponent.js`

- **Output contribution**: 318 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Components.js` (require-call, specifier: `../util/Components`)

### `node_modules/discord.js/src/structures/SelectMenuBuilder.js`

- **Output contribution**: 257 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `./StringSelectMenuBuilder` (require-call)

### `node_modules/discord.js/src/structures/SelectMenuComponent.js`

- **Output contribution**: 261 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `./StringSelectMenuComponent` (require-call)

### `node_modules/discord.js/src/structures/SelectMenuInteraction.js`

- **Output contribution**: 265 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `./StringSelectMenuInteraction` (require-call)

### `node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js`

- **Output contribution**: 269 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `./StringSelectMenuOptionBuilder` (require-call)

### `node_modules/discord.js/src/structures/SeparatorComponent.js`

- **Output contribution**: 194 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./Component` (require-call)

### `node_modules/discord.js/src/structures/SoundboardSound.js`

- **Output contribution**: 1.80 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)
  - `./Base.js` (require-call)
  - `./Emoji.js` (require-call)
  - `../errors/index.js` (require-call)

### `node_modules/discord.js/src/structures/StageChannel.js`

- **Output contribution**: 354 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseGuildVoiceChannel` (require-call)

### `node_modules/discord.js/src/structures/StageInstance.js`

- **Output contribution**: 1.17 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/Sticker.js`

- **Output contribution**: 2.00 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `../errors` (require-call)
  - `../util/Constants` (require-call)

### `node_modules/discord.js/src/structures/StickerPack.js`

- **Output contribution**: 0.68 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `./Base` (require-call)
  - `./Sticker` (require-call)

### `node_modules/discord.js/src/structures/StringSelectMenuBuilder.js`

- **Output contribution**: 0.66 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/StringSelectMenuComponent.js`

- **Output contribution**: 110 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseSelectMenuComponent` (require-call)

### `node_modules/discord.js/src/structures/StringSelectMenuInteraction.js`

- **Output contribution**: 129 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./MessageComponentInteraction` (require-call)

### `node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js`

- **Output contribution**: 404 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/Subscription.js`

- **Output contribution**: 0.86 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/Team.js`

- **Output contribution**: 0.77 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `./Base` (require-call)
  - `./TeamMember` (require-call)

### `node_modules/discord.js/src/structures/TeamMember.js`

- **Output contribution**: 438 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/TextChannel.js`

- **Output contribution**: 243 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseGuildTextChannel` (require-call)

### `node_modules/discord.js/src/structures/TextDisplayComponent.js`

- **Output contribution**: 110 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)

### `node_modules/discord.js/src/structures/TextInputBuilder.js`

- **Output contribution**: 220 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/structures/TextInputComponent.js`

- **Output contribution**: 148 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)

### `node_modules/discord.js/src/structures/ThreadChannel.js`

- **Output contribution**: 5.60 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/rest` (require-call)
  - `@discordjs/util` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./BaseChannel` (require-call)
  - `./ThreadOnlyChannel` (require-call)
  - `./interfaces/TextBasedChannel` (require-call)
  - `../errors` (require-call)
  - `../managers/GuildMessageManager` (require-call)
  - `../managers/ThreadMemberManager` (require-call)
  - `../util/ChannelFlagsBitField` (require-call)

### `node_modules/discord.js/src/structures/ThreadMember.js`

- **Output contribution**: 0.95 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Base` (require-call)
  - `../util/ThreadMemberFlagsBitField` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/ThreadOnlyChannel.js`

- **Output contribution**: 1.99 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./GuildChannel` (require-call)
  - `./interfaces/TextBasedChannel` (require-call)
  - `../managers/GuildForumThreadManager` (require-call)
  - `../util/Channels` (require-call)

### `node_modules/discord.js/src/structures/ThumbnailComponent.js`

- **Output contribution**: 291 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Component` (require-call)
  - `./UnfurledMediaItem` (require-call)

### `node_modules/discord.js/src/structures/Typing.js`

- **Output contribution**: 415 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/UnfurledMediaItem.js`

- **Output contribution**: 134 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`

### `node_modules/discord.js/src/structures/User.js`

- **Output contribution**: 5.93 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/managers/PollAnswerVoterManager.js`
- **Imports**:
  - `@discordjs/formatters` (require-call)
  - `@discordjs/rest` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `./Base` (require-call)
  - `./interfaces/TextBasedChannel` (require-call)
  - `../util/Transformers.js` (require-call)
  - `../util/UserFlagsBitField` (require-call)
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js`

- **Output contribution**: 181 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./ContextMenuCommandInteraction` (require-call)

### `node_modules/discord.js/src/structures/UserSelectMenuBuilder.js`

- **Output contribution**: 228 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `@discordjs/util` (require-call)
  - `../util/Transformers` (require-call)

### `node_modules/discord.js/src/structures/UserSelectMenuComponent.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./BaseSelectMenuComponent` (require-call)

### `node_modules/discord.js/src/structures/UserSelectMenuInteraction.js`

- **Output contribution**: 0.56 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `./MessageComponentInteraction` (require-call)
  - `../util/Events` (require-call)

### `node_modules/discord.js/src/structures/VoiceChannel.js`

- **Output contribution**: 0.61 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BaseGuildVoiceChannel` (require-call)

### `node_modules/discord.js/src/structures/VoiceChannelEffect.js`

- **Output contribution**: 504 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Emoji` (require-call)

### `node_modules/discord.js/src/structures/VoiceRegion.js`

- **Output contribution**: 212 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `../util/Util` (require-call)

### `node_modules/discord.js/src/structures/VoiceState.js`

- **Output contribution**: 2.58 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/structures/Webhook.js`

- **Output contribution**: 4.29 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/rest` (require-call)
  - `@discordjs/util` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./MessagePayload` (require-call)
  - `../errors` (require-call)
  - `../util/DataResolver` (require-call)
  - `./Message` (require-call)

### `node_modules/discord.js/src/structures/WelcomeChannel.js`

- **Output contribution**: 399 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Base` (require-call)
  - `./Emoji` (require-call)

### `node_modules/discord.js/src/structures/WelcomeScreen.js`

- **Output contribution**: 405 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `./WelcomeChannel` (require-call)

### `node_modules/discord.js/src/structures/Widget.js`

- **Output contribution**: 0.66 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `./Base` (require-call)
  - `./WidgetMember` (require-call)

### `node_modules/discord.js/src/structures/WidgetMember.js`

- **Output contribution**: 446 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Base` (require-call)

### `node_modules/discord.js/src/structures/interfaces/Application.js`

- **Output contribution**: 1.14 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@sapphire/snowflake` (require-call)
  - `../Base` (require-call)

### `node_modules/discord.js/src/structures/interfaces/Collector.js`

- **Output contribution**: 2.65 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `events` (require-call, **external**, specifier: `node:events`)
  - `timers` (require-call, **external**, specifier: `node:timers`)
  - `@discordjs/collection` (require-call)
  - `../../errors` (require-call)
  - `../../util/Util` (require-call)

### `node_modules/discord.js/src/structures/interfaces/InteractionResponses.js`

- **Output contribution**: 5.69 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/structures/MessageComponentInteraction.js`
- **Imports**:
  - `process` (require-call, **external**, specifier: `node:process`)
  - `util` (require-call, **external**, specifier: `node:util`)
  - `@discordjs/rest` (require-call)
  - `@discordjs/util` (require-call)
  - `discord-api-types/v10` (require-call)
  - `../../errors` (require-call)
  - `../../util/MessageFlagsBitField` (require-call)
  - `../InteractionCallbackResponse` (require-call)
  - `../InteractionCollector` (require-call)
  - `../InteractionResponse` (require-call)
  - `../MessagePayload` (require-call)

### `node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js`

- **Output contribution**: 2.89 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `@sapphire/snowflake` (require-call)
  - `discord-api-types/v10` (require-call)
  - `../../errors` (require-call)
  - `../../util/Constants` (require-call)
  - `../InteractionCollector` (require-call)
  - `../MessageCollector` (require-call)
  - `../MessagePayload` (require-call)
  - `../User` (require-call)
  - `../GuildMember` (require-call)
  - `../../managers/GuildMessageManager` (require-call)

### `node_modules/discord.js/src/util/ActivityFlagsBitField.js`

- **Output contribution**: 110 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/ApplicationFlagsBitField.js`

- **Output contribution**: 113 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/AttachmentFlagsBitField.js`

- **Output contribution**: 108 bytes
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/structures/Attachment.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/BitField.js`

- **Output contribution**: 1.68 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `../errors` (require-call)

### `node_modules/discord.js/src/util/ChannelFlagsBitField.js`

- **Output contribution**: 105 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/Channels.js`

- **Output contribution**: 1.60 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/client/actions/ChannelUpdate.js`
- **Imports**:
  - `@discordjs/util` (require-call)
  - `discord-api-types/v10` (require-call)
  - `../structures/CategoryChannel` (require-call)
  - `../structures/DMChannel` (require-call)
  - `../structures/NewsChannel` (require-call)
  - `../structures/StageChannel` (require-call)
  - `../structures/TextChannel` (require-call)
  - `../structures/ThreadChannel` (require-call)
  - `../structures/VoiceChannel` (require-call)
  - `../structures/DirectoryChannel` (require-call)
  - `../structures/PartialGroupDMChannel` (require-call)
  - `../structures/ForumChannel` (require-call)
  - `../structures/MediaChannel` (require-call)

### `node_modules/discord.js/src/util/Colors.js`

- **Output contribution**: 0.55 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`

### `node_modules/discord.js/src/util/Components.js`

- **Output contribution**: 1.29 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/structures/SectionComponent.js`
- **Imports**:
  - `@discordjs/builders` (require-call)
  - `discord-api-types/v10` (require-call)
  - `../structures/ActionRow` (require-call)
  - `../structures/ActionRowBuilder` (require-call)
  - `../structures/ButtonBuilder` (require-call)
  - `../structures/ButtonComponent` (require-call)
  - `../structures/ChannelSelectMenuBuilder` (require-call)
  - `../structures/ChannelSelectMenuComponent` (require-call)
  - `../structures/Component` (require-call)
  - `../structures/ContainerComponent` (require-call)
  - `../structures/FileComponent` (require-call)
  - `../structures/LabelComponent` (require-call)
  - `../structures/MediaGalleryComponent` (require-call)
  - `../structures/MentionableSelectMenuBuilder` (require-call)
  - `../structures/MentionableSelectMenuComponent` (require-call)
  - `../structures/RoleSelectMenuBuilder` (require-call)
  - `../structures/RoleSelectMenuComponent` (require-call)
  - `../structures/SectionComponent` (require-call)
  - `../structures/SeparatorComponent` (require-call)
  - `../structures/StringSelectMenuBuilder` (require-call)
  - `../structures/StringSelectMenuComponent` (require-call)
  - `../structures/TextDisplayComponent` (require-call)
  - `../structures/TextInputBuilder` (require-call)
  - `../structures/TextInputComponent` (require-call)
  - `../structures/ThumbnailComponent` (require-call)
  - `../structures/UserSelectMenuBuilder` (require-call)
  - `../structures/UserSelectMenuComponent` (require-call)

### `node_modules/discord.js/src/util/Constants.js`

- **Output contribution**: 1.73 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)

### `node_modules/discord.js/src/util/DataResolver.js`

- **Output contribution**: 1.17 KB
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/managers/ApplicationEmojiManager.js` `node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js`
- **Imports**:
  - `buffer` (require-call, **external**, specifier: `node:buffer`)
  - `fs/promises` (require-call, **external**, specifier: `node:fs/promises`)
  - `path` (require-call, **external**, specifier: `node:path`)
  - `undici` (require-call, **external**)
  - `../errors` (require-call)
  - `../structures/Invite` (require-call)
  - `../structures/GuildTemplate` (require-call)

### `node_modules/discord.js/src/util/Enums.js`

- **Output contribution**: 147 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/util/Partials.js`

### `node_modules/discord.js/src/util/Events.js`

- **Output contribution**: 3.35 KB
- **Format**: cjs
- **Imported by** (6 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js` `node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js` `node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js` `node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js` +1 more

### `node_modules/discord.js/src/util/Formatters.js`

- **Output contribution**: 2.26 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `util` (require-call, **external**, specifier: `node:util`)
  - `@discordjs/formatters` (require-call)

### `node_modules/discord.js/src/util/GuildMemberFlagsBitField.js`

- **Output contribution**: 128 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/IntentsBitField.js`

- **Output contribution**: 114 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/InviteFlagsBitField.js`

- **Output contribution**: 112 bytes
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/structures/Invite.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/LimitedCollection.js`

- **Output contribution**: 0.75 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/collection` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/util/MessageFlagsBitField.js`

- **Output contribution**: 105 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/Options.js`

- **Output contribution**: 1.0 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `@discordjs/rest` (require-call)
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Transformers.js` (require-call, specifier: `./Transformers`)
  - `../../package.json` (require-call)
  - `@discordjs/collection` (require-call)
  - `./LimitedCollection` (require-call)
  - `@discordjs/collection` (require-call)

### `node_modules/discord.js/src/util/Partials.js`

- **Output contribution**: 192 bytes
- **Format**: cjs
- **Imported by** (2 files): `node_modules/discord.js/src/index.js` `node_modules/discord.js/src/client/actions/Action.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/discord.js/src/util/Enums.js` (require-call, specifier: `./Enums`)

### `node_modules/discord.js/src/util/PermissionsBitField.js`

- **Output contribution**: 0.53 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/RoleFlagsBitField.js`

- **Output contribution**: 102 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/SKUFlagsBitField.js`

- **Output contribution**: 106 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/ShardEvents.js`

- **Output contribution**: 177 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`

### `node_modules/discord.js/src/util/Status.js`

- **Output contribution**: 176 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `./Enums` (require-call)

### `node_modules/discord.js/src/util/Sweepers.js`

- **Output contribution**: 5.62 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `timers` (require-call, **external**, specifier: `node:timers`)
  - `./Constants` (require-call)
  - `./Events` (require-call)
  - `../errors` (require-call)

### `node_modules/discord.js/src/util/Symbols.js`

- **Output contribution**: 86 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/managers/MessageManager.js`

### `node_modules/discord.js/src/util/SystemChannelFlagsBitField.js`

- **Output contribution**: 120 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js`

- **Output contribution**: 114 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/Transformers.js`

- **Output contribution**: 1.80 KB
- **Format**: cjs
- **Imported by** (5 files): `node_modules/discord.js/src/util/Options.js` `node_modules/discord.js/src/structures/Message.js` `node_modules/discord.js/src/structures/User.js` `node_modules/discord.js/src/managers/GuildManager.js` `node_modules/discord.js/src/structures/Guild.js`
- **Imports**:
  - `@discordjs/util` (require-call)
  - `/opt/git/checkrate/node_modules/lodash.snakecase/index.js` (require-call, specifier: `lodash.snakecase`)
  - `./Util` (require-call)

### `node_modules/discord.js/src/util/UserFlagsBitField.js`

- **Output contribution**: 106 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `discord-api-types/v10` (require-call)
  - `./BitField` (require-call)

### `node_modules/discord.js/src/util/Util.js`

- **Output contribution**: 5.66 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`
- **Imports**:
  - `path` (require-call, **external**, specifier: `node:path`)
  - `process` (require-call, **external**, specifier: `node:process`)
  - `@discordjs/collection` (require-call)
  - `discord-api-types/v10` (require-call)
  - `undici` (require-call, **external**)
  - `./Colors` (require-call)
  - `../errors` (require-call)
  - `../structures/Attachment` (require-call)
  - `../structures/GuildChannel` (require-call)
  - `../structures/SKU.js` (require-call)

### `node_modules/discord.js/src/util/WebSocketShardEvents.js`

- **Output contribution**: 155 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`

### `node_modules/fast-deep-equal/es6/index.js`

- **Output contribution**: 1.16 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/@sapphire/shapeshift/dist/cjs/index.cjs`

### `node_modules/fast-deep-equal/index.js`

- **Output contribution**: 0.72 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/structures/Embed.js`

### `node_modules/just-performance/dist/cjs/node.js`

- **Output contribution**: 209 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/limiter/dist/cjs/clock.js`
- **Imports**:
  - `perf_hooks` (require-call, **external**)

### `node_modules/limiter/dist/cjs/RateLimiter.js`

- **Output contribution**: 1.54 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/limiter/dist/cjs/index.js`
- **Imports**:
  - `./TokenBucket` (require-call)
  - `./clock` (require-call)

### `node_modules/limiter/dist/cjs/TokenBucket.js`

- **Output contribution**: 1.70 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/limiter/dist/cjs/index.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/limiter/dist/cjs/clock.js` (require-call, specifier: `./clock`)

### `node_modules/limiter/dist/cjs/clock.js`

- **Output contribution**: 417 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/limiter/dist/cjs/TokenBucket.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/just-performance/dist/cjs/node.js` (require-call, specifier: `just-performance`)

### `node_modules/limiter/dist/cjs/index.js`

- **Output contribution**: 421 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js-rate-limiter/dist/rate-limiter.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/limiter/dist/cjs/RateLimiter.js` (require-call, specifier: `./RateLimiter`)
  - `/opt/git/checkrate/node_modules/limiter/dist/cjs/TokenBucket.js` (require-call, specifier: `./TokenBucket`)

### `node_modules/lodash.snakecase/index.js`

- **Output contribution**: 4.90 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/util/Transformers.js`

### `node_modules/lodash/_Hash.js`

- **Output contribution**: 298 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_mapCacheClear.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_hashClear.js` (require-call, specifier: `./_hashClear`)
  - `/opt/git/checkrate/node_modules/lodash/_hashDelete.js` (require-call, specifier: `./_hashDelete`)
  - `/opt/git/checkrate/node_modules/lodash/_hashGet.js` (require-call, specifier: `./_hashGet`)
  - `/opt/git/checkrate/node_modules/lodash/_hashHas.js` (require-call, specifier: `./_hashHas`)
  - `/opt/git/checkrate/node_modules/lodash/_hashSet.js` (require-call, specifier: `./_hashSet`)

### `node_modules/lodash/_ListCache.js`

- **Output contribution**: 298 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_mapCacheClear.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_listCacheClear.js` (require-call, specifier: `./_listCacheClear`)
  - `/opt/git/checkrate/node_modules/lodash/_listCacheDelete.js` (require-call, specifier: `./_listCacheDelete`)
  - `/opt/git/checkrate/node_modules/lodash/_listCacheGet.js` (require-call, specifier: `./_listCacheGet`)
  - `/opt/git/checkrate/node_modules/lodash/_listCacheHas.js` (require-call, specifier: `./_listCacheHas`)
  - `/opt/git/checkrate/node_modules/lodash/_listCacheSet.js` (require-call, specifier: `./_listCacheSet`)

### `node_modules/lodash/_Map.js`

- **Output contribution**: 78 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_mapCacheClear.js`
- **Imports**:
  - `./_getNative` (require-call)
  - `./_root` (require-call)

### `node_modules/lodash/_MapCache.js`

- **Output contribution**: 298 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_SetCache.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_mapCacheClear.js` (require-call, specifier: `./_mapCacheClear`)
  - `/opt/git/checkrate/node_modules/lodash/_mapCacheDelete.js` (require-call, specifier: `./_mapCacheDelete`)
  - `/opt/git/checkrate/node_modules/lodash/_mapCacheGet.js` (require-call, specifier: `./_mapCacheGet`)
  - `/opt/git/checkrate/node_modules/lodash/_mapCacheHas.js` (require-call, specifier: `./_mapCacheHas`)
  - `/opt/git/checkrate/node_modules/lodash/_mapCacheSet.js` (require-call, specifier: `./_mapCacheSet`)

### `node_modules/lodash/_Set.js`

- **Output contribution**: 78 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_createSet.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_getNative.js` (require-call, specifier: `./_getNative`)
  - `/opt/git/checkrate/node_modules/lodash/_root.js` (require-call, specifier: `./_root`)

### `node_modules/lodash/_SetCache.js`

- **Output contribution**: 221 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseUniq.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_MapCache.js` (require-call, specifier: `./_MapCache`)
  - `/opt/git/checkrate/node_modules/lodash/_setCacheAdd.js` (require-call, specifier: `./_setCacheAdd`)
  - `/opt/git/checkrate/node_modules/lodash/_setCacheHas.js` (require-call, specifier: `./_setCacheHas`)

### `node_modules/lodash/_Symbol.js`

- **Output contribution**: 65 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseGetTag.js`
- **Imports**:
  - `./_root` (require-call)

### `node_modules/lodash/_arrayIncludes.js`

- **Output contribution**: 118 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseUniq.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_baseIndexOf.js` (require-call, specifier: `./_baseIndexOf`)

### `node_modules/lodash/_arrayIncludesWith.js`

- **Output contribution**: 130 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseUniq.js`

### `node_modules/lodash/_arrayMap.js`

- **Output contribution**: 134 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseToString.js`

### `node_modules/lodash/_assocIndexOf.js`

- **Output contribution**: 129 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_listCacheDelete.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/eq.js` (require-call, specifier: `./eq`)

### `node_modules/lodash/_baseFindIndex.js`

- **Output contribution**: 138 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseIndexOf.js`

### `node_modules/lodash/_baseGet.js`

- **Output contribution**: 167 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/get.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_castPath.js` (require-call, specifier: `./_castPath`)
  - `/opt/git/checkrate/node_modules/lodash/_toKey.js` (require-call, specifier: `./_toKey`)

### `node_modules/lodash/_baseGetTag.js`

- **Output contribution**: 234 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/isSymbol.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_Symbol.js` (require-call, specifier: `./_Symbol`)
  - `/opt/git/checkrate/node_modules/lodash/_getRawTag.js` (require-call, specifier: `./_getRawTag`)
  - `/opt/git/checkrate/node_modules/lodash/_objectToString.js` (require-call, specifier: `./_objectToString`)

### `node_modules/lodash/_baseIndexOf.js`

- **Output contribution**: 125 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_arrayIncludes.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_baseFindIndex.js` (require-call, specifier: `./_baseFindIndex`)
  - `/opt/git/checkrate/node_modules/lodash/_baseIsNaN.js` (require-call, specifier: `./_baseIsNaN`)
  - `/opt/git/checkrate/node_modules/lodash/_strictIndexOf.js` (require-call, specifier: `./_strictIndexOf`)

### `node_modules/lodash/_baseIsNaN.js`

- **Output contribution**: 66 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseIndexOf.js`

### `node_modules/lodash/_baseIsNative.js`

- **Output contribution**: 436 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_getNative.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/isFunction.js` (require-call, specifier: `./isFunction`)
  - `/opt/git/checkrate/node_modules/lodash/_isMasked.js` (require-call, specifier: `./_isMasked`)
  - `/opt/git/checkrate/node_modules/lodash/isObject.js` (require-call, specifier: `./isObject`)
  - `/opt/git/checkrate/node_modules/lodash/_toSource.js` (require-call, specifier: `./_toSource`)

### `node_modules/lodash/_baseToString.js`

- **Output contribution**: 287 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/toString.js`
- **Imports**:
  - `./_Symbol` (require-call)
  - `/opt/git/checkrate/node_modules/lodash/_arrayMap.js` (require-call, specifier: `./_arrayMap`)
  - `./isArray` (require-call)
  - `./isSymbol` (require-call)

### `node_modules/lodash/_baseUniq.js`

- **Output contribution**: 465 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/uniqWith.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_SetCache.js` (require-call, specifier: `./_SetCache`)
  - `/opt/git/checkrate/node_modules/lodash/_arrayIncludes.js` (require-call, specifier: `./_arrayIncludes`)
  - `/opt/git/checkrate/node_modules/lodash/_arrayIncludesWith.js` (require-call, specifier: `./_arrayIncludesWith`)
  - `/opt/git/checkrate/node_modules/lodash/_cacheHas.js` (require-call, specifier: `./_cacheHas`)
  - `/opt/git/checkrate/node_modules/lodash/_createSet.js` (require-call, specifier: `./_createSet`)
  - `/opt/git/checkrate/node_modules/lodash/_setToArray.js` (require-call, specifier: `./_setToArray`)

### `node_modules/lodash/_cacheHas.js`

- **Output contribution**: 71 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseUniq.js`

### `node_modules/lodash/_castPath.js`

- **Output contribution**: 146 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseGet.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/isArray.js` (require-call, specifier: `./isArray`)
  - `/opt/git/checkrate/node_modules/lodash/_isKey.js` (require-call, specifier: `./_isKey`)
  - `/opt/git/checkrate/node_modules/lodash/_stringToPath.js` (require-call, specifier: `./_stringToPath`)
  - `/opt/git/checkrate/node_modules/lodash/toString.js` (require-call, specifier: `./toString`)

### `node_modules/lodash/_coreJsData.js`

- **Output contribution**: 80 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_isMasked.js`
- **Imports**:
  - `./_root` (require-call)

### `node_modules/lodash/_createSet.js`

- **Output contribution**: 149 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseUniq.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_Set.js` (require-call, specifier: `./_Set`)
  - `/opt/git/checkrate/node_modules/lodash/noop.js` (require-call, specifier: `./noop`)
  - `./_setToArray` (require-call)

### `node_modules/lodash/_freeGlobal.js`

- **Output contribution**: 109 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_root.js`

### `node_modules/lodash/_getMapData.js`

- **Output contribution**: 143 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_mapCacheGet.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_isKeyable.js` (require-call, specifier: `./_isKeyable`)

### `node_modules/lodash/_getNative.js`

- **Output contribution**: 115 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_Set.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_baseIsNative.js` (require-call, specifier: `./_baseIsNative`)
  - `/opt/git/checkrate/node_modules/lodash/_getValue.js` (require-call, specifier: `./_getValue`)

### `node_modules/lodash/_getRawTag.js`

- **Output contribution**: 279 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseGetTag.js`
- **Imports**:
  - `./_Symbol` (require-call)

### `node_modules/lodash/_getValue.js`

- **Output contribution**: 82 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_getNative.js`

### `node_modules/lodash/_hashClear.js`

- **Output contribution**: 105 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_Hash.js`
- **Imports**:
  - `./_nativeCreate` (require-call)

### `node_modules/lodash/_hashDelete.js`

- **Output contribution**: 122 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_Hash.js`

### `node_modules/lodash/_hashGet.js`

- **Output contribution**: 238 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_Hash.js`
- **Imports**:
  - `./_nativeCreate` (require-call)

### `node_modules/lodash/_hashHas.js`

- **Output contribution**: 169 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_Hash.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_nativeCreate.js` (require-call, specifier: `./_nativeCreate`)

### `node_modules/lodash/_hashSet.js`

- **Output contribution**: 186 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_Hash.js`
- **Imports**:
  - `./_nativeCreate` (require-call)

### `node_modules/lodash/_isKey.js`

- **Output contribution**: 304 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_castPath.js`
- **Imports**:
  - `./isArray` (require-call)
  - `./isSymbol` (require-call)

### `node_modules/lodash/_isKeyable.js`

- **Output contribution**: 152 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_getMapData.js`

### `node_modules/lodash/_isMasked.js`

- **Output contribution**: 188 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseIsNative.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_coreJsData.js` (require-call, specifier: `./_coreJsData`)

### `node_modules/lodash/_listCacheClear.js`

- **Output contribution**: 81 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_ListCache.js`

### `node_modules/lodash/_listCacheDelete.js`

- **Output contribution**: 223 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_ListCache.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_assocIndexOf.js` (require-call, specifier: `./_assocIndexOf`)

### `node_modules/lodash/_listCacheGet.js`

- **Output contribution**: 123 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_ListCache.js`
- **Imports**:
  - `./_assocIndexOf` (require-call)

### `node_modules/lodash/_listCacheHas.js`

- **Output contribution**: 97 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_ListCache.js`
- **Imports**:
  - `./_assocIndexOf` (require-call)

### `node_modules/lodash/_listCacheSet.js`

- **Output contribution**: 159 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_ListCache.js`
- **Imports**:
  - `./_assocIndexOf` (require-call)

### `node_modules/lodash/_mapCacheClear.js`

- **Output contribution**: 154 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_MapCache.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_Hash.js` (require-call, specifier: `./_Hash`)
  - `/opt/git/checkrate/node_modules/lodash/_ListCache.js` (require-call, specifier: `./_ListCache`)
  - `/opt/git/checkrate/node_modules/lodash/_Map.js` (require-call, specifier: `./_Map`)

### `node_modules/lodash/_mapCacheDelete.js`

- **Output contribution**: 120 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_MapCache.js`
- **Imports**:
  - `./_getMapData` (require-call)

### `node_modules/lodash/_mapCacheGet.js`

- **Output contribution**: 92 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_MapCache.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_getMapData.js` (require-call, specifier: `./_getMapData`)

### `node_modules/lodash/_mapCacheHas.js`

- **Output contribution**: 92 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_MapCache.js`
- **Imports**:
  - `./_getMapData` (require-call)

### `node_modules/lodash/_mapCacheSet.js`

- **Output contribution**: 143 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_MapCache.js`
- **Imports**:
  - `./_getMapData` (require-call)

### `node_modules/lodash/_memoizeCapped.js`

- **Output contribution**: 154 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_stringToPath.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/memoize.js` (require-call, specifier: `./memoize`)

### `node_modules/lodash/_nativeCreate.js`

- **Output contribution**: 75 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_hashHas.js`
- **Imports**:
  - `./_getNative` (require-call)

### `node_modules/lodash/_objectToString.js`

- **Output contribution**: 114 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseGetTag.js`

### `node_modules/lodash/_root.js`

- **Output contribution**: 150 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_Set.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_freeGlobal.js` (require-call, specifier: `./_freeGlobal`)

### `node_modules/lodash/_setCacheAdd.js`

- **Output contribution**: 126 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_SetCache.js`

### `node_modules/lodash/_setCacheHas.js`

- **Output contribution**: 81 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_SetCache.js`

### `node_modules/lodash/_setToArray.js`

- **Output contribution**: 120 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseUniq.js`

### `node_modules/lodash/_strictIndexOf.js`

- **Output contribution**: 120 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseIndexOf.js`

### `node_modules/lodash/_stringToPath.js`

- **Output contribution**: 312 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_castPath.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_memoizeCapped.js` (require-call, specifier: `./_memoizeCapped`)

### `node_modules/lodash/_toKey.js`

- **Output contribution**: 156 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseGet.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/isSymbol.js` (require-call, specifier: `./isSymbol`)

### `node_modules/lodash/_toSource.js`

- **Output contribution**: 178 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseIsNative.js`

### `node_modules/lodash/eq.js`

- **Output contribution**: 82 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_assocIndexOf.js`

### `node_modules/lodash/get.js`

- **Output contribution**: 122 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/@sapphire/shapeshift/dist/cjs/index.cjs`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_baseGet.js` (require-call, specifier: `./_baseGet`)

### `node_modules/lodash/isArray.js`

- **Output contribution**: 59 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_castPath.js`

### `node_modules/lodash/isFunction.js`

- **Output contribution**: 253 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseIsNative.js`
- **Imports**:
  - `./_baseGetTag` (require-call)
  - `./isObject` (require-call)

### `node_modules/lodash/isObject.js`

- **Output contribution**: 113 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_baseIsNative.js`

### `node_modules/lodash/isObjectLike.js`

- **Output contribution**: 88 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/isSymbol.js`

### `node_modules/lodash/isSymbol.js`

- **Output contribution**: 144 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_toKey.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_baseGetTag.js` (require-call, specifier: `./_baseGetTag`)
  - `/opt/git/checkrate/node_modules/lodash/isObjectLike.js` (require-call, specifier: `./isObjectLike`)

### `node_modules/lodash/memoize.js`

- **Output contribution**: 364 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_memoizeCapped.js`
- **Imports**:
  - `./_MapCache` (require-call)

### `node_modules/lodash/noop.js`

- **Output contribution**: 53 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_createSet.js`

### `node_modules/lodash/toString.js`

- **Output contribution**: 91 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/lodash/_castPath.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_baseToString.js` (require-call, specifier: `./_baseToString`)

### `node_modules/lodash/uniqWith.js`

- **Output contribution**: 138 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/@sapphire/shapeshift/dist/cjs/index.cjs`
- **Imports**:
  - `/opt/git/checkrate/node_modules/lodash/_baseUniq.js` (require-call, specifier: `./_baseUniq`)

### `node_modules/magic-bytes.js/dist/index.js`

- **Output contribution**: 0.97 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/magic-bytes.js/dist/model/pattern-tree.js` (require-call, specifier: `./model/pattern-tree`)
  - `/opt/git/checkrate/node_modules/magic-bytes.js/dist/model/toHex.js` (require-call, specifier: `./model/toHex`)

### `node_modules/magic-bytes.js/dist/model/pattern-tree.js`

- **Output contribution**: 19.0 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/magic-bytes.js/dist/index.js`
- **Imports**:
  - `./toHex` (require-call)
  - `/opt/git/checkrate/node_modules/magic-bytes.js/dist/model/tree.js` (require-call, specifier: `./tree`)

### `node_modules/magic-bytes.js/dist/model/toHex.js`

- **Output contribution**: 248 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/magic-bytes.js/dist/index.js`

### `node_modules/magic-bytes.js/dist/model/tree.js`

- **Output contribution**: 0.86 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/magic-bytes.js/dist/model/pattern-tree.js`

### `node_modules/ms/index.js`

- **Output contribution**: 1.50 KB
- **Format**: cjs
- **Imported by** (1 files): `index.ts`

### `node_modules/ts-mixer/dist/cjs/decorator.js`

- **Output contribution**: 2.66 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/ts-mixer/dist/cjs/index.js`
- **Imports**:
  - `./util` (require-call)
  - `./mixin-tracking` (require-call)

### `node_modules/ts-mixer/dist/cjs/index.js`

- **Output contribution**: 0.61 KB
- **Format**: cjs
- **Imported by** (6 files): `node_modules/@discordjs/builders/dist/index.js` `node_modules/@discordjs/builders/dist/index.js` `node_modules/@discordjs/builders/dist/index.js` `node_modules/@discordjs/builders/dist/index.js` `node_modules/@discordjs/builders/dist/index.js` +1 more
- **Imports**:
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/mixins.js` (require-call, specifier: `./mixins`)
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/settings.js` (require-call, specifier: `./settings`)
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/decorator.js` (require-call, specifier: `./decorator`)
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/mixin-tracking.js` (require-call, specifier: `./mixin-tracking`)

### `node_modules/ts-mixer/dist/cjs/mixin-tracking.js`

- **Output contribution**: 0.64 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/ts-mixer/dist/cjs/index.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/util.js` (require-call, specifier: `./util`)

### `node_modules/ts-mixer/dist/cjs/mixins.js`

- **Output contribution**: 1.50 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/ts-mixer/dist/cjs/index.js`
- **Imports**:
  - `/opt/git/checkrate/node_modules/ts-mixer/dist/cjs/proxy.js` (require-call, specifier: `./proxy`)
  - `./settings` (require-call)
  - `./util` (require-call)
  - `./decorator` (require-call)
  - `./mixin-tracking` (require-call)

### `node_modules/ts-mixer/dist/cjs/proxy.js`

- **Output contribution**: 1.32 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/ts-mixer/dist/cjs/mixins.js`
- **Imports**:
  - `./util` (require-call)

### `node_modules/ts-mixer/dist/cjs/settings.js`

- **Output contribution**: 195 bytes
- **Format**: cjs
- **Imported by** (1 files): `node_modules/ts-mixer/dist/cjs/index.js`

### `node_modules/ts-mixer/dist/cjs/util.js`

- **Output contribution**: 1.14 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/ts-mixer/dist/cjs/mixin-tracking.js`

### `node_modules/tslib/tslib.js`

- **Output contribution**: 11.31 KB
- **Format**: cjs
- **Imported by** (1 files): `node_modules/discord.js/src/index.js`

## Raw Data for Searching

This section contains raw, grep-friendly data. Use these patterns:
- `[MODULE:` - Find all modules
- `[OUTPUT_BYTES:` - Find output contribution for each module
- `[IMPORT:` - Find all import relationships
- `[IMPORTED_BY:` - Find reverse dependencies
- `[ENTRY:` - Find entry points
- `[EXTERNAL:` - Find external imports
- `[NODE_MODULES:` - Find node_modules files

### All Modules

```
[MODULE: node_modules/@vladfrangu/async_event_emitter/dist/index.cjs]
[OUTPUT_BYTES: node_modules/@vladfrangu/async_event_emitter/dist/index.cjs = 82749 bytes]
[FORMAT: node_modules/@vladfrangu/async_event_emitter/dist/index.cjs = cjs]
[NODE_MODULES: node_modules/@vladfrangu/async_event_emitter/dist/index.cjs]
[MODULE: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[OUTPUT_BYTES: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs = 66544 bytes]
[FORMAT: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs = cjs]
[NODE_MODULES: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[MODULE: node_modules/@discordjs/builders/dist/index.js]
[OUTPUT_BYTES: node_modules/@discordjs/builders/dist/index.js = 50448 bytes]
[FORMAT: node_modules/@discordjs/builders/dist/index.js = cjs]
[NODE_MODULES: node_modules/@discordjs/builders/dist/index.js]
[MODULE: node_modules/@discordjs/ws/dist/index.js]
[OUTPUT_BYTES: node_modules/@discordjs/ws/dist/index.js = 26506 bytes]
[FORMAT: node_modules/@discordjs/ws/dist/index.js = cjs]
[NODE_MODULES: node_modules/@discordjs/ws/dist/index.js]
[MODULE: node_modules/@discordjs/rest/dist/index.js]
[OUTPUT_BYTES: node_modules/@discordjs/rest/dist/index.js = 21198 bytes]
[FORMAT: node_modules/@discordjs/rest/dist/index.js = cjs]
[NODE_MODULES: node_modules/@discordjs/rest/dist/index.js]
[MODULE: node_modules/magic-bytes.js/dist/model/pattern-tree.js]
[OUTPUT_BYTES: node_modules/magic-bytes.js/dist/model/pattern-tree.js = 19022 bytes]
[FORMAT: node_modules/magic-bytes.js/dist/model/pattern-tree.js = cjs]
[NODE_MODULES: node_modules/magic-bytes.js/dist/model/pattern-tree.js]
[MODULE: node_modules/discord-api-types/rest/common.js]
[OUTPUT_BYTES: node_modules/discord-api-types/rest/common.js = 18650 bytes]
[FORMAT: node_modules/discord-api-types/rest/common.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/rest/common.js]
[MODULE: node_modules/discord.js/src/structures/Guild.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Guild.js = 13198 bytes]
[FORMAT: node_modules/discord.js/src/structures/Guild.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Guild.js]
[MODULE: node_modules/discord.js/src/structures/Message.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Message.js = 11357 bytes]
[FORMAT: node_modules/discord.js/src/structures/Message.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Message.js]
[MODULE: node_modules/tslib/tslib.js]
[OUTPUT_BYTES: node_modules/tslib/tslib.js = 11308 bytes]
[FORMAT: node_modules/tslib/tslib.js = cjs]
[NODE_MODULES: node_modules/tslib/tslib.js]
[MODULE: node_modules/discord-api-types/rest/v10/index.js]
[OUTPUT_BYTES: node_modules/discord-api-types/rest/v10/index.js = 10256 bytes]
[FORMAT: node_modules/discord-api-types/rest/v10/index.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/rest/v10/index.js]
[MODULE: node_modules/discord.js/src/errors/Messages.js]
[OUTPUT_BYTES: node_modules/discord.js/src/errors/Messages.js = 9401 bytes]
[FORMAT: node_modules/discord.js/src/errors/Messages.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/errors/Messages.js]
[MODULE: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js = 7523 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js]
[MODULE: node_modules/@postfmly/logger/index.js]
[OUTPUT_BYTES: node_modules/@postfmly/logger/index.js = 7450 bytes]
[FORMAT: node_modules/@postfmly/logger/index.js = esm]
[NODE_MODULES: node_modules/@postfmly/logger/index.js]
[MODULE: node_modules/discord.js/src/client/Client.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/Client.js = 7356 bytes]
[FORMAT: node_modules/discord.js/src/client/Client.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/Client.js]
[MODULE: node_modules/@discordjs/formatters/dist/index.js]
[OUTPUT_BYTES: node_modules/@discordjs/formatters/dist/index.js = 6990 bytes]
[FORMAT: node_modules/@discordjs/formatters/dist/index.js = cjs]
[NODE_MODULES: node_modules/@discordjs/formatters/dist/index.js]
[MODULE: node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js]
[OUTPUT_BYTES: node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js = 6907 bytes]
[FORMAT: node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js = cjs]
[NODE_MODULES: node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js]
[MODULE: node_modules/@discordjs/rest/node_modules/@discordjs/collection/dist/index.js]
[OUTPUT_BYTES: node_modules/@discordjs/rest/node_modules/@discordjs/collection/dist/index.js = 6889 bytes]
[FORMAT: node_modules/@discordjs/rest/node_modules/@discordjs/collection/dist/index.js = cjs]
[NODE_MODULES: node_modules/@discordjs/rest/node_modules/@discordjs/collection/dist/index.js]
[MODULE: node_modules/discord-api-types/payloads/v10/message.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/message.js = 6553 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/message.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/message.js]
[MODULE: node_modules/discord.js/src/index.js]
[OUTPUT_BYTES: node_modules/discord.js/src/index.js = 6511 bytes]
[FORMAT: node_modules/discord.js/src/index.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/index.js]
[MODULE: node_modules/discord.js/src/managers/GuildMemberManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildMemberManager.js = 6510 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildMemberManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildMemberManager.js]
[MODULE: node_modules/@discordjs/collection/dist/index.js]
[OUTPUT_BYTES: node_modules/@discordjs/collection/dist/index.js = 5971 bytes]
[FORMAT: node_modules/@discordjs/collection/dist/index.js = cjs]
[NODE_MODULES: node_modules/@discordjs/collection/dist/index.js]
[MODULE: node_modules/discord-api-types/gateway/v10.js]
[OUTPUT_BYTES: node_modules/discord-api-types/gateway/v10.js = 5967 bytes]
[FORMAT: node_modules/discord-api-types/gateway/v10.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/gateway/v10.js]
[MODULE: node_modules/discord.js/src/structures/ApplicationCommand.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ApplicationCommand.js = 5941 bytes]
[FORMAT: node_modules/discord.js/src/structures/ApplicationCommand.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ApplicationCommand.js]
[MODULE: node_modules/discord.js/src/structures/User.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/User.js = 5926 bytes]
[FORMAT: node_modules/discord.js/src/structures/User.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/User.js]
[MODULE: node_modules/discord.js/src/managers/GuildChannelManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildChannelManager.js = 5760 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildChannelManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildChannelManager.js]
[MODULE: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js = 5692 bytes]
[FORMAT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js]
[MODULE: node_modules/discord.js/src/util/Util.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Util.js = 5664 bytes]
[FORMAT: node_modules/discord.js/src/util/Util.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Util.js]
[MODULE: node_modules/discord.js/src/structures/GuildMember.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildMember.js = 5652 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildMember.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildMember.js]
[MODULE: node_modules/discord.js/src/util/Sweepers.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Sweepers.js = 5622 bytes]
[FORMAT: node_modules/discord.js/src/util/Sweepers.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Sweepers.js]
[MODULE: node_modules/discord.js/src/structures/ThreadChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ThreadChannel.js = 5597 bytes]
[FORMAT: node_modules/discord.js/src/structures/ThreadChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ThreadChannel.js]
[MODULE: node_modules/discord.js/src/client/websocket/WebSocketManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/WebSocketManager.js = 5565 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/WebSocketManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/WebSocketManager.js]
[MODULE: node_modules/discord.js/src/structures/GuildChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildChannel.js = 5090 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildChannel.js]
[MODULE: node_modules/discord.js/src/sharding/Shard.js]
[OUTPUT_BYTES: node_modules/discord.js/src/sharding/Shard.js = 4924 bytes]
[FORMAT: node_modules/discord.js/src/sharding/Shard.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/sharding/Shard.js]
[MODULE: node_modules/lodash.snakecase/index.js]
[OUTPUT_BYTES: node_modules/lodash.snakecase/index.js = 4903 bytes]
[FORMAT: node_modules/lodash.snakecase/index.js = cjs]
[NODE_MODULES: node_modules/lodash.snakecase/index.js]
[MODULE: node_modules/discord-api-types/payloads/v10/guild.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/guild.js = 4793 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/guild.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/guild.js]
[MODULE: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js = 4388 bytes]
[FORMAT: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js]
[MODULE: node_modules/discord.js/src/structures/MessagePayload.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MessagePayload.js = 4377 bytes]
[FORMAT: node_modules/discord.js/src/structures/MessagePayload.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MessagePayload.js]
[MODULE: node_modules/discord.js/src/managers/RoleManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/RoleManager.js = 4294 bytes]
[FORMAT: node_modules/discord.js/src/managers/RoleManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/RoleManager.js]
[MODULE: node_modules/discord.js/src/structures/Webhook.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Webhook.js = 4293 bytes]
[FORMAT: node_modules/discord.js/src/structures/Webhook.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Webhook.js]
[MODULE: node_modules/discord.js/src/structures/GuildScheduledEvent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildScheduledEvent.js = 4147 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildScheduledEvent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildScheduledEvent.js]
[MODULE: node_modules/discord.js/src/structures/ClientApplication.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ClientApplication.js = 4116 bytes]
[FORMAT: node_modules/discord.js/src/structures/ClientApplication.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ClientApplication.js]
[MODULE: node_modules/discord.js/src/managers/GuildManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildManager.js = 4011 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildManager.js]
[MODULE: node_modules/discord.js/src/sharding/ShardingManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/sharding/ShardingManager.js = 4011 bytes]
[FORMAT: node_modules/discord.js/src/sharding/ShardingManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/sharding/ShardingManager.js]
[MODULE: node_modules/discord.js/src/structures/InteractionCollector.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/InteractionCollector.js = 3752 bytes]
[FORMAT: node_modules/discord.js/src/structures/InteractionCollector.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionCollector.js]
[MODULE: node_modules/discord-api-types/rpc/v10.js]
[OUTPUT_BYTES: node_modules/discord-api-types/rpc/v10.js = 3693 bytes]
[FORMAT: node_modules/discord-api-types/rpc/v10.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/rpc/v10.js]
[MODULE: node_modules/discord.js/src/structures/Role.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Role.js = 3580 bytes]
[FORMAT: node_modules/discord.js/src/structures/Role.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Role.js]
[MODULE: node_modules/discord.js/src/managers/MessageManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/MessageManager.js = 3442 bytes]
[FORMAT: node_modules/discord.js/src/managers/MessageManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/MessageManager.js]
[MODULE: node_modules/discord.js/src/sharding/ShardClientUtil.js]
[OUTPUT_BYTES: node_modules/discord.js/src/sharding/ShardClientUtil.js = 3422 bytes]
[FORMAT: node_modules/discord.js/src/sharding/ShardClientUtil.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/sharding/ShardClientUtil.js]
[MODULE: node_modules/discord-api-types/payloads/v10/auditLog.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/auditLog.js = 3398 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/auditLog.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/auditLog.js]
[MODULE: node_modules/discord.js/src/util/Events.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Events.js = 3345 bytes]
[FORMAT: node_modules/discord.js/src/util/Events.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Events.js]
[MODULE: node_modules/discord.js/src/structures/Invite.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Invite.js = 3281 bytes]
[FORMAT: node_modules/discord.js/src/structures/Invite.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Invite.js]
[MODULE: node_modules/discord.js/src/structures/BaseInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/BaseInteraction.js = 3180 bytes]
[FORMAT: node_modules/discord.js/src/structures/BaseInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseInteraction.js]
[MODULE: node_modules/discord-api-types/rpc/common.js]
[OUTPUT_BYTES: node_modules/discord-api-types/rpc/common.js = 3117 bytes]
[FORMAT: node_modules/discord-api-types/rpc/common.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/rpc/common.js]
[MODULE: node_modules/discord.js/src/structures/Presence.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Presence.js = 3097 bytes]
[FORMAT: node_modules/discord.js/src/structures/Presence.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Presence.js]
[MODULE: node_modules/discord.js/src/managers/GuildScheduledEventManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildScheduledEventManager.js = 3002 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildScheduledEventManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildScheduledEventManager.js]
[MODULE: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js = 2885 bytes]
[FORMAT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js]
[MODULE: node_modules/discord.js/src/structures/ReactionCollector.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ReactionCollector.js = 2874 bytes]
[FORMAT: node_modules/discord.js/src/structures/ReactionCollector.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ReactionCollector.js]
[MODULE: node_modules/discord.js/src/client/actions/ActionsManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ActionsManager.js = 2839 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ActionsManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ActionsManager.js]
[MODULE: node_modules/discord.js/src/managers/ApplicationCommandManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/ApplicationCommandManager.js = 2837 bytes]
[FORMAT: node_modules/discord.js/src/managers/ApplicationCommandManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/ApplicationCommandManager.js]
[MODULE: node_modules/discord.js/src/structures/MessageMentions.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MessageMentions.js = 2798 bytes]
[FORMAT: node_modules/discord.js/src/structures/MessageMentions.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageMentions.js]
[MODULE: node_modules/discord.js/src/errors/ErrorCodes.js]
[OUTPUT_BYTES: node_modules/discord.js/src/errors/ErrorCodes.js = 2790 bytes]
[FORMAT: node_modules/discord.js/src/errors/ErrorCodes.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/errors/ErrorCodes.js]
[MODULE: node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js = 2710 bytes]
[FORMAT: node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js]
[MODULE: node_modules/ts-mixer/dist/cjs/decorator.js]
[OUTPUT_BYTES: node_modules/ts-mixer/dist/cjs/decorator.js = 2660 bytes]
[FORMAT: node_modules/ts-mixer/dist/cjs/decorator.js = cjs]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/decorator.js]
[MODULE: node_modules/discord.js/src/structures/interfaces/Collector.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/interfaces/Collector.js = 2647 bytes]
[FORMAT: node_modules/discord.js/src/structures/interfaces/Collector.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/interfaces/Collector.js]
[MODULE: node_modules/discord.js/package.json]
[OUTPUT_BYTES: node_modules/discord.js/package.json = 2644 bytes]
[NODE_MODULES: node_modules/discord.js/package.json]
[MODULE: node_modules/discord.js/src/managers/AutoModerationRuleManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/AutoModerationRuleManager.js = 2611 bytes]
[FORMAT: node_modules/discord.js/src/managers/AutoModerationRuleManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/AutoModerationRuleManager.js]
[MODULE: node_modules/discord.js/src/structures/VoiceState.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/VoiceState.js = 2584 bytes]
[FORMAT: node_modules/discord.js/src/structures/VoiceState.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/VoiceState.js]
[MODULE: node_modules/@discordjs/util/dist/index.js]
[OUTPUT_BYTES: node_modules/@discordjs/util/dist/index.js = 2549 bytes]
[FORMAT: node_modules/@discordjs/util/dist/index.js = cjs]
[NODE_MODULES: node_modules/@discordjs/util/dist/index.js]
[MODULE: node_modules/discord.js/src/managers/GuildBanManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildBanManager.js = 2511 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildBanManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildBanManager.js]
[MODULE: node_modules/discord.js/src/managers/GuildMemberRoleManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildMemberRoleManager.js = 2472 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildMemberRoleManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildMemberRoleManager.js]
[MODULE: node_modules/discord-api-types/payloads/v10/user.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/user.js = 2398 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/user.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/user.js]
[MODULE: node_modules/discord.js/src/structures/ModalSubmitFields.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ModalSubmitFields.js = 2266 bytes]
[FORMAT: node_modules/discord.js/src/structures/ModalSubmitFields.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ModalSubmitFields.js]
[MODULE: node_modules/discord.js/src/util/Formatters.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Formatters.js = 2261 bytes]
[FORMAT: node_modules/discord.js/src/util/Formatters.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Formatters.js]
[MODULE: node_modules/discord.js/src/client/actions/Action.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/Action.js = 2241 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/Action.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/Action.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/index.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/index.js = 2230 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/index.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/index.js]
[MODULE: node_modules/discord.js/src/structures/AutoModerationRule.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/AutoModerationRule.js = 2210 bytes]
[FORMAT: node_modules/discord.js/src/structures/AutoModerationRule.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/AutoModerationRule.js]
[MODULE: node_modules/discord.js/src/managers/GuildEmojiManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildEmojiManager.js = 2195 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildEmojiManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildEmojiManager.js]
[MODULE: node_modules/discord.js/src/managers/ThreadMemberManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/ThreadMemberManager.js = 2193 bytes]
[FORMAT: node_modules/discord.js/src/managers/ThreadMemberManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/ThreadMemberManager.js]
[MODULE: node_modules/discord.js/src/structures/Embed.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Embed.js = 2175 bytes]
[FORMAT: node_modules/discord.js/src/structures/Embed.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Embed.js]
[MODULE: node_modules/discord-api-types/payloads/v10/channel.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/channel.js = 2143 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/channel.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/channel.js]
[MODULE: node_modules/discord.js/src/structures/MessageReaction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MessageReaction.js = 2138 bytes]
[FORMAT: node_modules/discord.js/src/structures/MessageReaction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageReaction.js]
[MODULE: node_modules/discord.js/src/structures/ModalSubmitInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ModalSubmitInteraction.js = 2043 bytes]
[FORMAT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ModalSubmitInteraction.js]
[MODULE: node_modules/@discordjs/rest/node_modules/@sapphire/snowflake/dist/cjs/index.cjs]
[OUTPUT_BYTES: node_modules/@discordjs/rest/node_modules/@sapphire/snowflake/dist/cjs/index.cjs = 2036 bytes]
[FORMAT: node_modules/@discordjs/rest/node_modules/@sapphire/snowflake/dist/cjs/index.cjs = cjs]
[NODE_MODULES: node_modules/@discordjs/rest/node_modules/@sapphire/snowflake/dist/cjs/index.cjs]
[MODULE: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js = 2006 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js]
[MODULE: node_modules/discord.js/src/structures/Sticker.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Sticker.js = 1996 bytes]
[FORMAT: node_modules/discord.js/src/structures/Sticker.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Sticker.js]
[MODULE: node_modules/discord.js/src/structures/ThreadOnlyChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ThreadOnlyChannel.js = 1988 bytes]
[FORMAT: node_modules/discord.js/src/structures/ThreadOnlyChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ThreadOnlyChannel.js]
[MODULE: node_modules/discord.js/src/structures/GuildTemplate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildTemplate.js = 1954 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildTemplate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildTemplate.js]
[MODULE: node_modules/discord.js/src/managers/EntitlementManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/EntitlementManager.js = 1936 bytes]
[FORMAT: node_modules/discord.js/src/managers/EntitlementManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/EntitlementManager.js]
[MODULE: node_modules/@sapphire/snowflake/dist/cjs/index.cjs]
[OUTPUT_BYTES: node_modules/@sapphire/snowflake/dist/cjs/index.cjs = 1905 bytes]
[FORMAT: node_modules/@sapphire/snowflake/dist/cjs/index.cjs = cjs]
[NODE_MODULES: node_modules/@sapphire/snowflake/dist/cjs/index.cjs]
[MODULE: node_modules/discord.js/src/client/websocket/WebSocketShard.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/WebSocketShard.js = 1865 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/WebSocketShard.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/WebSocketShard.js]
[MODULE: node_modules/discord.js/src/managers/ThreadManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/ThreadManager.js = 1846 bytes]
[FORMAT: node_modules/discord.js/src/managers/ThreadManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/ThreadManager.js]
[MODULE: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js = 1841 bytes]
[FORMAT: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js]
[MODULE: node_modules/discord-api-types/payloads/v10/application.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/application.js = 1836 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/application.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/application.js]
[MODULE: node_modules/discord.js/src/structures/MessageCollector.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MessageCollector.js = 1823 bytes]
[FORMAT: node_modules/discord.js/src/structures/MessageCollector.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageCollector.js]
[MODULE: node_modules/discord.js/src/structures/SoundboardSound.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/SoundboardSound.js = 1798 bytes]
[FORMAT: node_modules/discord.js/src/structures/SoundboardSound.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/SoundboardSound.js]
[MODULE: node_modules/discord.js/src/util/Transformers.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Transformers.js = 1797 bytes]
[FORMAT: node_modules/discord.js/src/util/Transformers.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Transformers.js]
[MODULE: node_modules/discord.js/src/managers/GuildInviteManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildInviteManager.js = 1748 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildInviteManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildInviteManager.js]
[MODULE: node_modules/discord.js/src/util/Constants.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Constants.js = 1729 bytes]
[FORMAT: node_modules/discord.js/src/util/Constants.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Constants.js]
[MODULE: node_modules/discord.js/src/managers/PermissionOverwriteManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/PermissionOverwriteManager.js = 1702 bytes]
[FORMAT: node_modules/discord.js/src/managers/PermissionOverwriteManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/PermissionOverwriteManager.js]
[MODULE: node_modules/limiter/dist/cjs/TokenBucket.js]
[OUTPUT_BYTES: node_modules/limiter/dist/cjs/TokenBucket.js = 1695 bytes]
[FORMAT: node_modules/limiter/dist/cjs/TokenBucket.js = cjs]
[NODE_MODULES: node_modules/limiter/dist/cjs/TokenBucket.js]
[MODULE: node_modules/discord.js/src/util/BitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/BitField.js = 1684 bytes]
[FORMAT: node_modules/discord.js/src/util/BitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/BitField.js]
[MODULE: node_modules/@sapphire/async-queue/dist/cjs/index.cjs]
[OUTPUT_BYTES: node_modules/@sapphire/async-queue/dist/cjs/index.cjs = 1674 bytes]
[FORMAT: node_modules/@sapphire/async-queue/dist/cjs/index.cjs = cjs]
[NODE_MODULES: node_modules/@sapphire/async-queue/dist/cjs/index.cjs]
[MODULE: node_modules/discord.js/src/managers/GuildStickerManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildStickerManager.js = 1624 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildStickerManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildStickerManager.js]
[MODULE: node_modules/discord.js/src/util/Channels.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Channels.js = 1601 bytes]
[FORMAT: node_modules/discord.js/src/util/Channels.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Channels.js]
[MODULE: node_modules/discord.js/src/structures/Integration.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Integration.js = 1586 bytes]
[FORMAT: node_modules/discord.js/src/structures/Integration.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Integration.js]
[MODULE: node_modules/discord.js/src/structures/GuildPreview.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildPreview.js = 1550 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildPreview.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildPreview.js]
[MODULE: node_modules/limiter/dist/cjs/RateLimiter.js]
[OUTPUT_BYTES: node_modules/limiter/dist/cjs/RateLimiter.js = 1543 bytes]
[FORMAT: node_modules/limiter/dist/cjs/RateLimiter.js = cjs]
[NODE_MODULES: node_modules/limiter/dist/cjs/RateLimiter.js]
[MODULE: node_modules/discord-api-types/utils/v10.js]
[OUTPUT_BYTES: node_modules/discord-api-types/utils/v10.js = 1521 bytes]
[FORMAT: node_modules/discord-api-types/utils/v10.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/utils/v10.js]
[MODULE: node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js = 1517 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js]
[MODULE: node_modules/discord.js/src/managers/ApplicationEmojiManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/ApplicationEmojiManager.js = 1514 bytes]
[FORMAT: node_modules/discord.js/src/managers/ApplicationEmojiManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/ApplicationEmojiManager.js]
[MODULE: node_modules/ts-mixer/dist/cjs/mixins.js]
[OUTPUT_BYTES: node_modules/ts-mixer/dist/cjs/mixins.js = 1501 bytes]
[FORMAT: node_modules/ts-mixer/dist/cjs/mixins.js = cjs]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/mixins.js]
[MODULE: node_modules/discord.js/src/managers/UserManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/UserManager.js = 1498 bytes]
[FORMAT: node_modules/discord.js/src/managers/UserManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/UserManager.js]
[MODULE: node_modules/ms/index.js]
[OUTPUT_BYTES: node_modules/ms/index.js = 1496 bytes]
[FORMAT: node_modules/ms/index.js = cjs]
[NODE_MODULES: node_modules/ms/index.js]
[MODULE: node_modules/discord.js/src/managers/StageInstanceManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/StageInstanceManager.js = 1470 bytes]
[FORMAT: node_modules/discord.js/src/managers/StageInstanceManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/StageInstanceManager.js]
[MODULE: node_modules/discord.js/src/structures/PermissionOverwrites.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/PermissionOverwrites.js = 1458 bytes]
[FORMAT: node_modules/discord.js/src/structures/PermissionOverwrites.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/PermissionOverwrites.js]
[MODULE: node_modules/discord.js/src/structures/Poll.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Poll.js = 1453 bytes]
[FORMAT: node_modules/discord.js/src/structures/Poll.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Poll.js]
[MODULE: node_modules/discord.js/src/managers/ChannelManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/ChannelManager.js = 1445 bytes]
[FORMAT: node_modules/discord.js/src/managers/ChannelManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/ChannelManager.js]
[MODULE: node_modules/discord.js/src/structures/BaseGuildTextChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/BaseGuildTextChannel.js = 1430 bytes]
[FORMAT: node_modules/discord.js/src/structures/BaseGuildTextChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseGuildTextChannel.js]
[MODULE: node_modules/discord-api-types/payloads/common.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/common.js = 1372 bytes]
[FORMAT: node_modules/discord-api-types/payloads/common.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/common.js]
[MODULE: node_modules/discord.js/src/client/actions/InteractionCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/InteractionCreate.js = 1356 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/InteractionCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/InteractionCreate.js]
[MODULE: node_modules/ts-mixer/dist/cjs/proxy.js]
[OUTPUT_BYTES: node_modules/ts-mixer/dist/cjs/proxy.js = 1315 bytes]
[FORMAT: node_modules/ts-mixer/dist/cjs/proxy.js = cjs]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/proxy.js]
[MODULE: node_modules/discord.js/src/structures/Entitlement.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Entitlement.js = 1294 bytes]
[FORMAT: node_modules/discord.js/src/structures/Entitlement.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Entitlement.js]
[MODULE: node_modules/discord.js/src/util/Components.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Components.js = 1286 bytes]
[FORMAT: node_modules/discord.js/src/util/Components.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Components.js]
[MODULE: node_modules/discord.js/src/structures/GuildEmoji.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildEmoji.js = 1271 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildEmoji.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildEmoji.js]
[MODULE: node_modules/discord.js/src/structures/DMChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/DMChannel.js = 1254 bytes]
[FORMAT: node_modules/discord.js/src/structures/DMChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/DMChannel.js]
[MODULE: node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js = 1252 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js]
[MODULE: node_modules/discord.js/src/structures/CommandInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/CommandInteraction.js = 1225 bytes]
[FORMAT: node_modules/discord.js/src/structures/CommandInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/CommandInteraction.js]
[MODULE: node_modules/discord.js/src/structures/ClientPresence.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ClientPresence.js = 1212 bytes]
[FORMAT: node_modules/discord.js/src/structures/ClientPresence.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ClientPresence.js]
[MODULE: node_modules/discord-api-types/payloads/v10/oauth2.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/oauth2.js = 1190 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/oauth2.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/oauth2.js]
[MODULE: node_modules/discord-api-types/payloads/v10/gateway.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/gateway.js = 1188 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/gateway.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/gateway.js]
[MODULE: node_modules/discord.js/src/util/DataResolver.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/DataResolver.js = 1168 bytes]
[FORMAT: node_modules/discord.js/src/util/DataResolver.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/DataResolver.js]
[MODULE: node_modules/discord.js/src/structures/StageInstance.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/StageInstance.js = 1165 bytes]
[FORMAT: node_modules/discord.js/src/structures/StageInstance.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/StageInstance.js]
[MODULE: node_modules/discord.js/src/structures/PartialGroupDMChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/PartialGroupDMChannel.js = 1164 bytes]
[FORMAT: node_modules/discord.js/src/structures/PartialGroupDMChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/PartialGroupDMChannel.js]
[MODULE: node_modules/fast-deep-equal/es6/index.js]
[OUTPUT_BYTES: node_modules/fast-deep-equal/es6/index.js = 1156 bytes]
[FORMAT: node_modules/fast-deep-equal/es6/index.js = cjs]
[NODE_MODULES: node_modules/fast-deep-equal/es6/index.js]
[MODULE: node_modules/discord-api-types/globals.js]
[OUTPUT_BYTES: node_modules/discord-api-types/globals.js = 1148 bytes]
[FORMAT: node_modules/discord-api-types/globals.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/globals.js]
[MODULE: node_modules/discord.js/src/structures/interfaces/Application.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/interfaces/Application.js = 1141 bytes]
[FORMAT: node_modules/discord.js/src/structures/interfaces/Application.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/interfaces/Application.js]
[MODULE: node_modules/ts-mixer/dist/cjs/util.js]
[OUTPUT_BYTES: node_modules/ts-mixer/dist/cjs/util.js = 1137 bytes]
[FORMAT: node_modules/ts-mixer/dist/cjs/util.js = cjs]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/util.js]
[MODULE: node_modules/discord-api-types/v10.js]
[OUTPUT_BYTES: node_modules/discord-api-types/v10.js = 1111 bytes]
[FORMAT: node_modules/discord-api-types/v10.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/v10.js]
[MODULE: node_modules/discord.js/src/structures/ClientUser.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ClientUser.js = 1103 bytes]
[FORMAT: node_modules/discord.js/src/structures/ClientUser.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ClientUser.js]
[MODULE: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js = 1100 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js]
[MODULE: node_modules/discord.js/src/client/BaseClient.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/BaseClient.js = 1074 bytes]
[FORMAT: node_modules/discord.js/src/client/BaseClient.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/BaseClient.js]
[MODULE: node_modules/discord.js/src/structures/BaseChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/BaseChannel.js = 1074 bytes]
[FORMAT: node_modules/discord.js/src/structures/BaseChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseChannel.js]
[MODULE: node_modules/discord.js/src/util/Options.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Options.js = 1046 bytes]
[FORMAT: node_modules/discord.js/src/util/Options.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Options.js]
[MODULE: node_modules/discord.js/src/structures/GuildAuditLogs.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildAuditLogs.js = 989 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildAuditLogs.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildAuditLogs.js]
[MODULE: node_modules/discord-api-types/payloads/v10/monetization.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/monetization.js = 989 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/monetization.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/monetization.js]
[MODULE: node_modules/discord.js/src/structures/Attachment.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Attachment.js = 986 bytes]
[FORMAT: node_modules/discord.js/src/structures/Attachment.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Attachment.js]
[MODULE: node_modules/discord.js/src/managers/ReactionUserManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/ReactionUserManager.js = 977 bytes]
[FORMAT: node_modules/discord.js/src/managers/ReactionUserManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/ReactionUserManager.js]
[MODULE: node_modules/magic-bytes.js/dist/index.js]
[OUTPUT_BYTES: node_modules/magic-bytes.js/dist/index.js = 971 bytes]
[FORMAT: node_modules/magic-bytes.js/dist/index.js = cjs]
[NODE_MODULES: node_modules/magic-bytes.js/dist/index.js]
[MODULE: node_modules/discord.js/src/structures/ThreadMember.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ThreadMember.js = 950 bytes]
[FORMAT: node_modules/discord.js/src/structures/ThreadMember.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ThreadMember.js]
[MODULE: node_modules/discord.js/src/structures/PollAnswer.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/PollAnswer.js = 949 bytes]
[FORMAT: node_modules/discord.js/src/structures/PollAnswer.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/PollAnswer.js]
[MODULE: node_modules/discord.js/src/structures/Emoji.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Emoji.js = 945 bytes]
[FORMAT: node_modules/discord.js/src/structures/Emoji.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Emoji.js]
[MODULE: node_modules/discord-api-types/payloads/v10/autoModeration.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/autoModeration.js = 941 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/autoModeration.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/autoModeration.js]
[MODULE: node_modules/discord-api-types/payloads/v10/_interactions/responses.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/_interactions/responses.js = 879 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/_interactions/responses.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/responses.js]
[MODULE: node_modules/discord.js/src/structures/AutocompleteInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/AutocompleteInteraction.js = 871 bytes]
[FORMAT: node_modules/discord.js/src/structures/AutocompleteInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/AutocompleteInteraction.js]
[MODULE: node_modules/magic-bytes.js/dist/model/tree.js]
[OUTPUT_BYTES: node_modules/magic-bytes.js/dist/model/tree.js = 863 bytes]
[FORMAT: node_modules/magic-bytes.js/dist/model/tree.js = cjs]
[NODE_MODULES: node_modules/magic-bytes.js/dist/model/tree.js]
[MODULE: node_modules/discord.js/src/structures/Subscription.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Subscription.js = 855 bytes]
[FORMAT: node_modules/discord.js/src/structures/Subscription.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Subscription.js]
[MODULE: node_modules/discord.js/src/structures/ApplicationEmoji.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ApplicationEmoji.js = 849 bytes]
[FORMAT: node_modules/discord.js/src/structures/ApplicationEmoji.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ApplicationEmoji.js]
[MODULE: node_modules/discord.js/src/structures/InteractionResponse.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/InteractionResponse.js = 826 bytes]
[FORMAT: node_modules/discord.js/src/structures/InteractionResponse.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionResponse.js]
[MODULE: node_modules/discord.js/src/structures/BaseGuild.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/BaseGuild.js = 819 bytes]
[FORMAT: node_modules/discord.js/src/structures/BaseGuild.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseGuild.js]
[MODULE: node_modules/discord.js/src/managers/SubscriptionManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/SubscriptionManager.js = 798 bytes]
[FORMAT: node_modules/discord.js/src/managers/SubscriptionManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/SubscriptionManager.js]
[MODULE: node_modules/discord.js/src/managers/GuildTextThreadManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildTextThreadManager.js = 796 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildTextThreadManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildTextThreadManager.js]
[MODULE: node_modules/discord.js/src/structures/AnonymousGuild.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/AnonymousGuild.js = 794 bytes]
[FORMAT: node_modules/discord.js/src/structures/AnonymousGuild.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/AnonymousGuild.js]
[MODULE: node_modules/discord.js/src/structures/AutoModerationActionExecution.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/AutoModerationActionExecution.js = 776 bytes]
[FORMAT: node_modules/discord.js/src/structures/AutoModerationActionExecution.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/AutoModerationActionExecution.js]
[MODULE: node_modules/discord.js/src/structures/Team.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Team.js = 773 bytes]
[FORMAT: node_modules/discord.js/src/structures/Team.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Team.js]
[MODULE: node_modules/discord.js/src/client/actions/MessageReactionAdd.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessageReactionAdd.js = 762 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessageReactionAdd.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageReactionAdd.js]
[MODULE: node_modules/discord.js/src/client/actions/PresenceUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/PresenceUpdate.js = 762 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/PresenceUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/PresenceUpdate.js]
[MODULE: node_modules/discord.js/src/util/LimitedCollection.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/LimitedCollection.js = 747 bytes]
[FORMAT: node_modules/discord.js/src/util/LimitedCollection.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/LimitedCollection.js]
[MODULE: node_modules/discord-api-types/payloads/v10/index.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/index.js = 742 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/index.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/index.js]
[MODULE: node_modules/discord-api-types/payloads/v10/webhook.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/webhook.js = 736 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/webhook.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/webhook.js]
[MODULE: node_modules/fast-deep-equal/index.js]
[OUTPUT_BYTES: node_modules/fast-deep-equal/index.js = 724 bytes]
[FORMAT: node_modules/fast-deep-equal/index.js = cjs]
[NODE_MODULES: node_modules/fast-deep-equal/index.js]
[MODULE: node_modules/discord.js/src/structures/MessageComponentInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MessageComponentInteraction.js = 722 bytes]
[FORMAT: node_modules/discord.js/src/structures/MessageComponentInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageComponentInteraction.js]
[MODULE: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js = 719 bytes]
[FORMAT: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js]
[MODULE: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js = 713 bytes]
[FORMAT: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js]
[MODULE: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js = 687 bytes]
[FORMAT: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js]
[MODULE: node_modules/discord.js/src/structures/StickerPack.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/StickerPack.js = 684 bytes]
[FORMAT: node_modules/discord.js/src/structures/StickerPack.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/StickerPack.js]
[MODULE: node_modules/discord.js/src/errors/DJSError.js]
[OUTPUT_BYTES: node_modules/discord.js/src/errors/DJSError.js = 679 bytes]
[FORMAT: node_modules/discord.js/src/errors/DJSError.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/errors/DJSError.js]
[MODULE: node_modules/discord.js/src/client/actions/ThreadListSync.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ThreadListSync.js = 675 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ThreadListSync.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadListSync.js]
[MODULE: node_modules/discord.js/src/structures/Widget.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Widget.js = 659 bytes]
[FORMAT: node_modules/discord.js/src/structures/Widget.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Widget.js]
[MODULE: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js = 658 bytes]
[FORMAT: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js]
[MODULE: node_modules/discord.js/src/structures/IntegrationApplication.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/IntegrationApplication.js = 658 bytes]
[FORMAT: node_modules/discord.js/src/structures/IntegrationApplication.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/IntegrationApplication.js]
[MODULE: node_modules/discord.js/src/managers/GuildForumThreadManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildForumThreadManager.js = 644 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildForumThreadManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildForumThreadManager.js]
[MODULE: node_modules/ts-mixer/dist/cjs/mixin-tracking.js]
[OUTPUT_BYTES: node_modules/ts-mixer/dist/cjs/mixin-tracking.js = 644 bytes]
[FORMAT: node_modules/ts-mixer/dist/cjs/mixin-tracking.js = cjs]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/mixin-tracking.js]
[MODULE: node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js = 635 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js]
[MODULE: node_modules/discord.js/src/structures/AttachmentBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/AttachmentBuilder.js = 621 bytes]
[FORMAT: node_modules/discord.js/src/structures/AttachmentBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/AttachmentBuilder.js]
[MODULE: node_modules/discord.js/src/structures/VoiceChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/VoiceChannel.js = 610 bytes]
[FORMAT: node_modules/discord.js/src/structures/VoiceChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/VoiceChannel.js]
[MODULE: node_modules/ts-mixer/dist/cjs/index.js]
[OUTPUT_BYTES: node_modules/ts-mixer/dist/cjs/index.js = 605 bytes]
[FORMAT: node_modules/ts-mixer/dist/cjs/index.js = cjs]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/index.js]
[MODULE: node_modules/discord.js/src/client/WebhookClient.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/WebhookClient.js = 588 bytes]
[FORMAT: node_modules/discord.js/src/client/WebhookClient.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/WebhookClient.js]
[MODULE: node_modules/discord.js/src/structures/InviteStageInstance.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/InviteStageInstance.js = 585 bytes]
[FORMAT: node_modules/discord.js/src/structures/InviteStageInstance.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/InviteStageInstance.js]
[MODULE: node_modules/discord.js/src/managers/CachedManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/CachedManager.js = 569 bytes]
[FORMAT: node_modules/discord.js/src/managers/CachedManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/CachedManager.js]
[MODULE: node_modules/discord.js/src/client/actions/VoiceStateUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/VoiceStateUpdate.js = 565 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/VoiceStateUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/VoiceStateUpdate.js]
[MODULE: node_modules/discord.js/src/structures/UserSelectMenuInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/UserSelectMenuInteraction.js = 564 bytes]
[FORMAT: node_modules/discord.js/src/structures/UserSelectMenuInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/UserSelectMenuInteraction.js]
[MODULE: node_modules/discord.js/src/managers/VoiceStateManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/VoiceStateManager.js = 554 bytes]
[FORMAT: node_modules/discord.js/src/managers/VoiceStateManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/VoiceStateManager.js]
[MODULE: node_modules/discord.js/src/util/Colors.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Colors.js = 545 bytes]
[FORMAT: node_modules/discord.js/src/util/Colors.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Colors.js]
[MODULE: node_modules/discord.js/src/client/actions/MessageCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessageCreate.js = 532 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessageCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageCreate.js]
[MODULE: node_modules/discord.js/src/util/PermissionsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/PermissionsBitField.js = 531 bytes]
[FORMAT: node_modules/discord.js/src/util/PermissionsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/PermissionsBitField.js]
[MODULE: node_modules/discord-api-types/payloads/v10/interactions.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/interactions.js = 526 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/interactions.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/interactions.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildMemberUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildMemberUpdate.js = 515 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildMemberUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildMemberUpdate.js]
[MODULE: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js = 514 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js]
[MODULE: node_modules/discord.js/src/structures/InteractionCallback.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/InteractionCallback.js = 513 bytes]
[FORMAT: node_modules/discord.js/src/structures/InteractionCallback.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionCallback.js]
[MODULE: node_modules/discord.js/src/managers/PollAnswerVoterManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/PollAnswerVoterManager.js = 506 bytes]
[FORMAT: node_modules/discord.js/src/managers/PollAnswerVoterManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/PollAnswerVoterManager.js]
[MODULE: node_modules/discord.js/src/structures/ContainerComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ContainerComponent.js = 506 bytes]
[FORMAT: node_modules/discord.js/src/structures/ContainerComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ContainerComponent.js]
[MODULE: node_modules/discord.js/src/structures/VoiceChannelEffect.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/VoiceChannelEffect.js = 504 bytes]
[FORMAT: node_modules/discord.js/src/structures/VoiceChannelEffect.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/VoiceChannelEffect.js]
[MODULE: node_modules/discord.js/src/structures/ChatInputCommandInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ChatInputCommandInteraction.js = 499 bytes]
[FORMAT: node_modules/discord.js/src/structures/ChatInputCommandInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ChatInputCommandInteraction.js]
[MODULE: node_modules/discord.js/src/client/actions/MessageReactionRemove.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessageReactionRemove.js = 498 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessageReactionRemove.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageReactionRemove.js]
[MODULE: node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js = 498 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js]
[MODULE: node_modules/discord.js/src/managers/DataManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/DataManager.js = 495 bytes]
[FORMAT: node_modules/discord.js/src/managers/DataManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/DataManager.js]
[MODULE: node_modules/discord.js/src/client/actions/ChannelUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ChannelUpdate.js = 481 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ChannelUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ChannelUpdate.js]
[MODULE: node_modules/discord.js/src/structures/GuildOnboarding.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildOnboarding.js = 479 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildOnboarding.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildOnboarding.js]
[MODULE: node_modules/discord.js/src/client/voice/ClientVoiceManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/voice/ClientVoiceManager.js = 474 bytes]
[FORMAT: node_modules/discord.js/src/client/voice/ClientVoiceManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/voice/ClientVoiceManager.js]
[MODULE: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js = 471 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js]
[MODULE: node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js = 468 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js]
[MODULE: node_modules/lodash/_baseUniq.js]
[OUTPUT_BYTES: node_modules/lodash/_baseUniq.js = 465 bytes]
[FORMAT: node_modules/lodash/_baseUniq.js = cjs]
[NODE_MODULES: node_modules/lodash/_baseUniq.js]
[MODULE: node_modules/discord.js/src/structures/GuildOnboardingPrompt.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildOnboardingPrompt.js = 462 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildOnboardingPrompt.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildOnboardingPrompt.js]
[MODULE: node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js = 459 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildStickersUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildStickersUpdate.js = 458 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildStickersUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildStickersUpdate.js]
[MODULE: node_modules/discord.js/src/client/actions/MessageDeleteBulk.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessageDeleteBulk.js = 457 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessageDeleteBulk.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageDeleteBulk.js]
[MODULE: node_modules/discord-api-types/payloads/v10/invite.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/invite.js = 456 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/invite.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/invite.js]
[MODULE: node_modules/discord.js/src/structures/WidgetMember.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/WidgetMember.js = 446 bytes]
[FORMAT: node_modules/discord.js/src/structures/WidgetMember.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/WidgetMember.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js = 444 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js]
[MODULE: node_modules/discord.js/src/structures/TeamMember.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/TeamMember.js = 438 bytes]
[FORMAT: node_modules/discord.js/src/structures/TeamMember.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/TeamMember.js]
[MODULE: node_modules/lodash/_baseIsNative.js]
[OUTPUT_BYTES: node_modules/lodash/_baseIsNative.js = 436 bytes]
[FORMAT: node_modules/lodash/_baseIsNative.js = cjs]
[NODE_MODULES: node_modules/lodash/_baseIsNative.js]
[MODULE: node_modules/discord.js-rate-limiter/dist/rate-limiter.js]
[OUTPUT_BYTES: node_modules/discord.js-rate-limiter/dist/rate-limiter.js = 433 bytes]
[FORMAT: node_modules/discord.js-rate-limiter/dist/rate-limiter.js = cjs]
[NODE_MODULES: node_modules/discord.js-rate-limiter/dist/rate-limiter.js]
[MODULE: node_modules/discord.js/src/structures/ActionRow.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ActionRow.js = 428 bytes]
[FORMAT: node_modules/discord.js/src/structures/ActionRow.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ActionRow.js]
[MODULE: node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js = 422 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js]
[MODULE: node_modules/limiter/dist/cjs/index.js]
[OUTPUT_BYTES: node_modules/limiter/dist/cjs/index.js = 421 bytes]
[FORMAT: node_modules/limiter/dist/cjs/index.js = cjs]
[NODE_MODULES: node_modules/limiter/dist/cjs/index.js]
[MODULE: node_modules/limiter/dist/cjs/clock.js]
[OUTPUT_BYTES: node_modules/limiter/dist/cjs/clock.js = 417 bytes]
[FORMAT: node_modules/limiter/dist/cjs/clock.js = cjs]
[NODE_MODULES: node_modules/limiter/dist/cjs/clock.js]
[MODULE: node_modules/discord.js/src/structures/Typing.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Typing.js = 415 bytes]
[FORMAT: node_modules/discord.js/src/structures/Typing.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Typing.js]
[MODULE: node_modules/discord.js/src/managers/PresenceManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/PresenceManager.js = 409 bytes]
[FORMAT: node_modules/discord.js/src/managers/PresenceManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/PresenceManager.js]
[MODULE: node_modules/discord.js/src/structures/WelcomeScreen.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/WelcomeScreen.js = 405 bytes]
[FORMAT: node_modules/discord.js/src/structures/WelcomeScreen.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/WelcomeScreen.js]
[MODULE: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js = 404 bytes]
[FORMAT: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildMemberRemove.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildMemberRemove.js = 404 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildMemberRemove.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildMemberRemove.js]
[MODULE: node_modules/discord.js/src/structures/WelcomeChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/WelcomeChannel.js = 399 bytes]
[FORMAT: node_modules/discord.js/src/structures/WelcomeChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/WelcomeChannel.js]
[MODULE: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js = 397 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js = 396 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js]
[MODULE: node_modules/discord.js/src/structures/ButtonBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ButtonBuilder.js = 394 bytes]
[FORMAT: node_modules/discord.js/src/structures/ButtonBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ButtonBuilder.js]
[MODULE: node_modules/discord.js/src/client/actions/TypingStart.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/TypingStart.js = 393 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/TypingStart.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/TypingStart.js]
[MODULE: index.ts]
[OUTPUT_BYTES: index.ts = 391 bytes]
[FORMAT: index.ts = esm]
[MODULE: node_modules/discord.js/src/client/actions/MessageUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessageUpdate.js = 391 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessageUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageUpdate.js]
[MODULE: node_modules/discord.js/src/structures/BaseGuildEmoji.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/BaseGuildEmoji.js = 387 bytes]
[FORMAT: node_modules/discord.js/src/structures/BaseGuildEmoji.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseGuildEmoji.js]
[MODULE: node_modules/discord.js/src/structures/InteractionCallbackResource.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/InteractionCallbackResource.js = 377 bytes]
[FORMAT: node_modules/discord.js/src/structures/InteractionCallbackResource.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionCallbackResource.js]
[MODULE: node_modules/discord.js/src/managers/ReactionManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/ReactionManager.js = 375 bytes]
[FORMAT: node_modules/discord.js/src/managers/ReactionManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/ReactionManager.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildDelete.js = 375 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildDelete.js]
[MODULE: node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js = 371 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js = 371 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js]
[MODULE: node_modules/discord.js/src/structures/InteractionWebhook.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/InteractionWebhook.js = 365 bytes]
[FORMAT: node_modules/discord.js/src/structures/InteractionWebhook.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionWebhook.js]
[MODULE: node_modules/lodash/memoize.js]
[OUTPUT_BYTES: node_modules/lodash/memoize.js = 364 bytes]
[FORMAT: node_modules/lodash/memoize.js = cjs]
[NODE_MODULES: node_modules/lodash/memoize.js]
[MODULE: node_modules/discord.js/src/client/actions/MessageDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/MessageDelete.js = 359 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/MessageDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageDelete.js]
[MODULE: node_modules/discord.js/src/client/actions/StageInstanceUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/StageInstanceUpdate.js = 356 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/StageInstanceUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/StageInstanceUpdate.js]
[MODULE: node_modules/discord.js/src/structures/StageChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/StageChannel.js = 354 bytes]
[FORMAT: node_modules/discord.js/src/structures/StageChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/StageChannel.js]
[MODULE: node_modules/discord-api-types/payloads/v10/teams.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/teams.js = 354 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/teams.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/teams.js]
[MODULE: node_modules/discord.js/src/structures/GuildBan.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildBan.js = 347 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildBan.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildBan.js]
[MODULE: node_modules/discord.js/src/client/actions/WebhooksUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/WebhooksUpdate.js = 346 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/WebhooksUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/WebhooksUpdate.js]
[MODULE: node_modules/discord.js/src/structures/NewsChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/NewsChannel.js = 345 bytes]
[FORMAT: node_modules/discord.js/src/structures/NewsChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/NewsChannel.js]
[MODULE: node_modules/discord-api-types/payloads/v10/sticker.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/sticker.js = 341 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/sticker.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/sticker.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js = 340 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/READY.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/READY.js = 337 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/READY.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/READY.js]
[MODULE: node_modules/discord.js/src/structures/EmbedBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/EmbedBuilder.js = 336 bytes]
[FORMAT: node_modules/discord.js/src/structures/EmbedBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/EmbedBuilder.js]
[MODULE: node_modules/discord.js/src/client/actions/InviteDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/InviteDelete.js = 335 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/InviteDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/InviteDelete.js]
[MODULE: node_modules/discord.js/src/managers/CategoryChannelChildManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/CategoryChannelChildManager.js = 330 bytes]
[FORMAT: node_modules/discord.js/src/managers/CategoryChannelChildManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/CategoryChannelChildManager.js]
[MODULE: node_modules/discord.js/src/client/actions/StageInstanceDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/StageInstanceDelete.js = 322 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/StageInstanceDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/StageInstanceDelete.js]
[MODULE: node_modules/discord.js/src/structures/ButtonComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ButtonComponent.js = 318 bytes]
[FORMAT: node_modules/discord.js/src/structures/ButtonComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ButtonComponent.js]
[MODULE: node_modules/discord.js/src/structures/SectionComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/SectionComponent.js = 318 bytes]
[FORMAT: node_modules/discord.js/src/structures/SectionComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/SectionComponent.js]
[MODULE: node_modules/discord.js/src/structures/Base.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Base.js = 318 bytes]
[FORMAT: node_modules/discord.js/src/structures/Base.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Base.js]
[MODULE: node_modules/discord.js/src/structures/LabelComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/LabelComponent.js = 313 bytes]
[FORMAT: node_modules/discord.js/src/structures/LabelComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/LabelComponent.js]
[MODULE: node_modules/lodash/_stringToPath.js]
[OUTPUT_BYTES: node_modules/lodash/_stringToPath.js = 312 bytes]
[FORMAT: node_modules/lodash/_stringToPath.js = cjs]
[NODE_MODULES: node_modules/lodash/_stringToPath.js]
[MODULE: node_modules/discord.js/src/structures/ActionRowBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ActionRowBuilder.js = 311 bytes]
[FORMAT: node_modules/discord.js/src/structures/ActionRowBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ActionRowBuilder.js]
[MODULE: node_modules/discord.js/src/structures/BaseSelectMenuComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/BaseSelectMenuComponent.js = 311 bytes]
[FORMAT: node_modules/discord.js/src/structures/BaseSelectMenuComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseSelectMenuComponent.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js = 311 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js]
[MODULE: node_modules/discord.js/src/structures/ModalBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ModalBuilder.js = 310 bytes]
[FORMAT: node_modules/discord.js/src/structures/ModalBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ModalBuilder.js]
[MODULE: node_modules/lodash/_isKey.js]
[OUTPUT_BYTES: node_modules/lodash/_isKey.js = 304 bytes]
[FORMAT: node_modules/lodash/_isKey.js = cjs]
[NODE_MODULES: node_modules/lodash/_isKey.js]
[MODULE: node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js = 302 bytes]
[FORMAT: node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js = 302 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js]
[MODULE: node_modules/discord.js/src/client/actions/InviteCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/InviteCreate.js = 300 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/InviteCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/InviteCreate.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildRoleUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildRoleUpdate.js = 299 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildRoleUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildRoleUpdate.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js = 299 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js]
[MODULE: node_modules/lodash/_MapCache.js]
[OUTPUT_BYTES: node_modules/lodash/_MapCache.js = 298 bytes]
[FORMAT: node_modules/lodash/_MapCache.js = cjs]
[NODE_MODULES: node_modules/lodash/_MapCache.js]
[MODULE: node_modules/lodash/_Hash.js]
[OUTPUT_BYTES: node_modules/lodash/_Hash.js = 298 bytes]
[FORMAT: node_modules/lodash/_Hash.js = cjs]
[NODE_MODULES: node_modules/lodash/_Hash.js]
[MODULE: node_modules/lodash/_ListCache.js]
[OUTPUT_BYTES: node_modules/lodash/_ListCache.js = 298 bytes]
[FORMAT: node_modules/lodash/_ListCache.js = cjs]
[NODE_MODULES: node_modules/lodash/_ListCache.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js = 296 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js]
[MODULE: node_modules/discord.js/src/structures/ThumbnailComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ThumbnailComponent.js = 291 bytes]
[FORMAT: node_modules/discord.js/src/structures/ThumbnailComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ThumbnailComponent.js]
[MODULE: node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js = 289 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js]
[MODULE: node_modules/lodash/_baseToString.js]
[OUTPUT_BYTES: node_modules/lodash/_baseToString.js = 287 bytes]
[FORMAT: node_modules/lodash/_baseToString.js = cjs]
[NODE_MODULES: node_modules/lodash/_baseToString.js]
[MODULE: node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js = 285 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js]
[MODULE: node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js = 284 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js]
[MODULE: node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js = 279 bytes]
[FORMAT: node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js]
[MODULE: node_modules/lodash/_getRawTag.js]
[OUTPUT_BYTES: node_modules/lodash/_getRawTag.js = 279 bytes]
[FORMAT: node_modules/lodash/_getRawTag.js = cjs]
[NODE_MODULES: node_modules/lodash/_getRawTag.js]
[MODULE: node_modules/discord.js/src/structures/ApplicationRoleConnectionMetadata.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ApplicationRoleConnectionMetadata.js = 277 bytes]
[FORMAT: node_modules/discord.js/src/structures/ApplicationRoleConnectionMetadata.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ApplicationRoleConnectionMetadata.js]
[MODULE: node_modules/discord.js/src/client/actions/StageInstanceCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/StageInstanceCreate.js = 275 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/StageInstanceCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/StageInstanceCreate.js]
[MODULE: node_modules/discord.js/src/structures/MediaGalleryItem.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MediaGalleryItem.js = 273 bytes]
[FORMAT: node_modules/discord.js/src/structures/MediaGalleryItem.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MediaGalleryItem.js]
[MODULE: node_modules/discord.js/src/client/actions/UserUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/UserUpdate.js = 270 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/UserUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/UserUpdate.js]
[MODULE: node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js = 269 bytes]
[FORMAT: node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js = 268 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildBanRemove.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildBanRemove.js = 266 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildBanRemove.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildBanRemove.js]
[MODULE: node_modules/discord.js/src/structures/SelectMenuInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/SelectMenuInteraction.js = 265 bytes]
[FORMAT: node_modules/discord.js/src/structures/SelectMenuInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/SelectMenuInteraction.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js = 264 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js]
[MODULE: node_modules/discord.js/src/structures/SelectMenuComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/SelectMenuComponent.js = 261 bytes]
[FORMAT: node_modules/discord.js/src/structures/SelectMenuComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/SelectMenuComponent.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildRoleDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildRoleDelete.js = 261 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildRoleDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildRoleDelete.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js = 258 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js]
[MODULE: node_modules/discord.js/src/structures/SelectMenuBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/SelectMenuBuilder.js = 257 bytes]
[FORMAT: node_modules/discord.js/src/structures/SelectMenuBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/SelectMenuBuilder.js]
[MODULE: node_modules/discord.js/src/structures/Component.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/Component.js = 257 bytes]
[FORMAT: node_modules/discord.js/src/structures/Component.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/Component.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildRoleCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildRoleCreate.js = 257 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildRoleCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildRoleCreate.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js = 253 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js]
[MODULE: node_modules/lodash/isFunction.js]
[OUTPUT_BYTES: node_modules/lodash/isFunction.js = 253 bytes]
[FORMAT: node_modules/lodash/isFunction.js = cjs]
[NODE_MODULES: node_modules/lodash/isFunction.js]
[MODULE: node_modules/discord.js/src/structures/SKU.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/SKU.js = 250 bytes]
[FORMAT: node_modules/discord.js/src/structures/SKU.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/SKU.js]
[MODULE: node_modules/discord.js/src/client/actions/EntitlementUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/EntitlementUpdate.js = 249 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/EntitlementUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/EntitlementUpdate.js]
[MODULE: node_modules/magic-bytes.js/dist/model/toHex.js]
[OUTPUT_BYTES: node_modules/magic-bytes.js/dist/model/toHex.js = 248 bytes]
[FORMAT: node_modules/magic-bytes.js/dist/model/toHex.js = cjs]
[NODE_MODULES: node_modules/magic-bytes.js/dist/model/toHex.js]
[MODULE: node_modules/discord.js/src/structures/TextChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/TextChannel.js = 243 bytes]
[FORMAT: node_modules/discord.js/src/structures/TextChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/TextChannel.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js = 243 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildUpdate.js = 242 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildUpdate.js]
[MODULE: node_modules/lodash/_hashGet.js]
[OUTPUT_BYTES: node_modules/lodash/_hashGet.js = 238 bytes]
[FORMAT: node_modules/lodash/_hashGet.js = cjs]
[NODE_MODULES: node_modules/lodash/_hashGet.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js = 237 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js = 236 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js]
[MODULE: node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js = 235 bytes]
[FORMAT: node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js]
[MODULE: node_modules/discord.js/src/client/actions/EntitlementDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/EntitlementDelete.js = 235 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/EntitlementDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/EntitlementDelete.js]
[MODULE: node_modules/discord.js/src/structures/FileComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/FileComponent.js = 234 bytes]
[FORMAT: node_modules/discord.js/src/structures/FileComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/FileComponent.js]
[MODULE: node_modules/lodash/_baseGetTag.js]
[OUTPUT_BYTES: node_modules/lodash/_baseGetTag.js = 234 bytes]
[FORMAT: node_modules/lodash/_baseGetTag.js = cjs]
[NODE_MODULES: node_modules/lodash/_baseGetTag.js]
[MODULE: node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js = 233 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js]
[MODULE: node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js = 231 bytes]
[FORMAT: node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js = 231 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js]
[MODULE: node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js = 231 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js]
[MODULE: node_modules/discord.js/src/client/actions/ThreadCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ThreadCreate.js = 230 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ThreadCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadCreate.js]
[MODULE: node_modules/discord.js/src/structures/UserSelectMenuBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/UserSelectMenuBuilder.js = 228 bytes]
[FORMAT: node_modules/discord.js/src/structures/UserSelectMenuBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/UserSelectMenuBuilder.js]
[MODULE: node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js = 228 bytes]
[FORMAT: node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js]
[MODULE: node_modules/discord.js/src/structures/InteractionCallbackResponse.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/InteractionCallbackResponse.js = 226 bytes]
[FORMAT: node_modules/discord.js/src/structures/InteractionCallbackResponse.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionCallbackResponse.js]
[MODULE: node_modules/discord.js/src/structures/ReactionEmoji.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ReactionEmoji.js = 223 bytes]
[FORMAT: node_modules/discord.js/src/structures/ReactionEmoji.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ReactionEmoji.js]
[MODULE: node_modules/lodash/_listCacheDelete.js]
[OUTPUT_BYTES: node_modules/lodash/_listCacheDelete.js = 223 bytes]
[FORMAT: node_modules/lodash/_listCacheDelete.js = cjs]
[NODE_MODULES: node_modules/lodash/_listCacheDelete.js]
[MODULE: node_modules/discord.js/src/structures/ForumChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ForumChannel.js = 221 bytes]
[FORMAT: node_modules/discord.js/src/structures/ForumChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ForumChannel.js]
[MODULE: node_modules/lodash/_SetCache.js]
[OUTPUT_BYTES: node_modules/lodash/_SetCache.js = 221 bytes]
[FORMAT: node_modules/lodash/_SetCache.js = cjs]
[NODE_MODULES: node_modules/lodash/_SetCache.js]
[MODULE: node_modules/discord.js/src/structures/TextInputBuilder.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/TextInputBuilder.js = 220 bytes]
[FORMAT: node_modules/discord.js/src/structures/TextInputBuilder.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/TextInputBuilder.js]
[MODULE: node_modules/discord-api-types/payloads/v10/stageInstance.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/stageInstance.js = 220 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/stageInstance.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/stageInstance.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js = 220 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js]
[MODULE: node_modules/discord.js/src/structures/MediaGalleryComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MediaGalleryComponent.js = 219 bytes]
[FORMAT: node_modules/discord.js/src/structures/MediaGalleryComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MediaGalleryComponent.js]
[MODULE: node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js = 219 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js]
[MODULE: node_modules/discord.js/src/structures/VoiceRegion.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/VoiceRegion.js = 212 bytes]
[FORMAT: node_modules/discord.js/src/structures/VoiceRegion.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/VoiceRegion.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildStickerCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildStickerCreate.js = 212 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildStickerCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildStickerCreate.js]
[MODULE: node_modules/discord.js/src/client/actions/ChannelCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ChannelCreate.js = 212 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ChannelCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ChannelCreate.js]
[MODULE: node_modules/discord.js/src/client/actions/ThreadDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ThreadDelete.js = 210 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ThreadDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadDelete.js]
[MODULE: node_modules/just-performance/dist/cjs/node.js]
[OUTPUT_BYTES: node_modules/just-performance/dist/cjs/node.js = 209 bytes]
[FORMAT: node_modules/just-performance/dist/cjs/node.js = cjs]
[NODE_MODULES: node_modules/just-performance/dist/cjs/node.js]
[MODULE: node_modules/discord-api-types/rest/v10/channel.js]
[OUTPUT_BYTES: node_modules/discord-api-types/rest/v10/channel.js = 207 bytes]
[FORMAT: node_modules/discord-api-types/rest/v10/channel.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/rest/v10/channel.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js = 206 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildEmojiCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildEmojiCreate.js = 204 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildEmojiCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildEmojiCreate.js]
[MODULE: node_modules/discord.js-rate-limiter/dist/index.js]
[OUTPUT_BYTES: node_modules/discord.js-rate-limiter/dist/index.js = 198 bytes]
[FORMAT: node_modules/discord.js-rate-limiter/dist/index.js = cjs]
[NODE_MODULES: node_modules/discord.js-rate-limiter/dist/index.js]
[MODULE: node_modules/discord-api-types/rest/v10/monetization.js]
[OUTPUT_BYTES: node_modules/discord-api-types/rest/v10/monetization.js = 198 bytes]
[FORMAT: node_modules/discord-api-types/rest/v10/monetization.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/rest/v10/monetization.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js = 197 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js]
[MODULE: node_modules/discord-api-types/utils/internals.js]
[OUTPUT_BYTES: node_modules/discord-api-types/utils/internals.js = 196 bytes]
[FORMAT: node_modules/discord-api-types/utils/internals.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/utils/internals.js]
[MODULE: node_modules/ts-mixer/dist/cjs/settings.js]
[OUTPUT_BYTES: node_modules/ts-mixer/dist/cjs/settings.js = 195 bytes]
[FORMAT: node_modules/ts-mixer/dist/cjs/settings.js = cjs]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/settings.js]
[MODULE: node_modules/discord.js/src/structures/SeparatorComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/SeparatorComponent.js = 194 bytes]
[FORMAT: node_modules/discord.js/src/structures/SeparatorComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/SeparatorComponent.js]
[MODULE: node_modules/discord.js/src/client/actions/ChannelDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/ChannelDelete.js = 194 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/ChannelDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ChannelDelete.js]
[MODULE: node_modules/discord.js/src/util/Partials.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Partials.js = 192 bytes]
[FORMAT: node_modules/discord.js/src/util/Partials.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Partials.js]
[MODULE: node_modules/discord.js/src/structures/DirectoryChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/DirectoryChannel.js = 188 bytes]
[FORMAT: node_modules/discord.js/src/structures/DirectoryChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/DirectoryChannel.js]
[MODULE: node_modules/lodash/_isMasked.js]
[OUTPUT_BYTES: node_modules/lodash/_isMasked.js = 188 bytes]
[FORMAT: node_modules/lodash/_isMasked.js = cjs]
[NODE_MODULES: node_modules/lodash/_isMasked.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildStickerDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildStickerDelete.js = 187 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildStickerDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildStickerDelete.js]
[MODULE: node_modules/discord.js/src/client/actions/EntitlementCreate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/EntitlementCreate.js = 186 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/EntitlementCreate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/EntitlementCreate.js]
[MODULE: node_modules/lodash/_hashSet.js]
[OUTPUT_BYTES: node_modules/lodash/_hashSet.js = 186 bytes]
[FORMAT: node_modules/lodash/_hashSet.js = cjs]
[NODE_MODULES: node_modules/lodash/_hashSet.js]
[MODULE: node_modules/discord.js/src/structures/InviteGuild.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/InviteGuild.js = 185 bytes]
[FORMAT: node_modules/discord.js/src/structures/InviteGuild.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/InviteGuild.js]
[MODULE: node_modules/discord.js/src/structures/OAuth2Guild.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/OAuth2Guild.js = 184 bytes]
[FORMAT: node_modules/discord.js/src/structures/OAuth2Guild.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/OAuth2Guild.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildBanAdd.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildBanAdd.js = 184 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildBanAdd.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildBanAdd.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js = 183 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js = 183 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js = 182 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js]
[MODULE: node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js = 181 bytes]
[FORMAT: node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildEmojiDelete.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildEmojiDelete.js = 181 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildEmojiDelete.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildEmojiDelete.js]
[MODULE: node_modules/lodash/_toSource.js]
[OUTPUT_BYTES: node_modules/lodash/_toSource.js = 178 bytes]
[FORMAT: node_modules/lodash/_toSource.js = cjs]
[NODE_MODULES: node_modules/lodash/_toSource.js]
[MODULE: node_modules/discord.js/src/util/ShardEvents.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/ShardEvents.js = 177 bytes]
[FORMAT: node_modules/discord.js/src/util/ShardEvents.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/ShardEvents.js]
[MODULE: node_modules/discord.js/src/util/Status.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Status.js = 176 bytes]
[FORMAT: node_modules/discord.js/src/util/Status.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Status.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildStickerUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildStickerUpdate.js = 174 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildStickerUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildStickerUpdate.js]
[MODULE: node_modules/discord-api-types/payloads/v10/poll.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/poll.js = 171 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/poll.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/poll.js]
[MODULE: node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js = 170 bytes]
[FORMAT: node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js]
[MODULE: node_modules/lodash/_hashHas.js]
[OUTPUT_BYTES: node_modules/lodash/_hashHas.js = 169 bytes]
[FORMAT: node_modules/lodash/_hashHas.js = cjs]
[NODE_MODULES: node_modules/lodash/_hashHas.js]
[MODULE: node_modules/lodash/_baseGet.js]
[OUTPUT_BYTES: node_modules/lodash/_baseGet.js = 167 bytes]
[FORMAT: node_modules/lodash/_baseGet.js = cjs]
[NODE_MODULES: node_modules/lodash/_baseGet.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js = 165 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js]
[MODULE: node_modules/discord-api-types/payloads/v10/permissions.js]
[OUTPUT_BYTES: node_modules/discord-api-types/payloads/v10/permissions.js = 163 bytes]
[FORMAT: node_modules/discord-api-types/payloads/v10/permissions.js = cjs]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/permissions.js]
[MODULE: node_modules/discord.js/src/managers/GuildApplicationCommandManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildApplicationCommandManager.js = 159 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildApplicationCommandManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildApplicationCommandManager.js]
[MODULE: node_modules/lodash/_listCacheSet.js]
[OUTPUT_BYTES: node_modules/lodash/_listCacheSet.js = 159 bytes]
[FORMAT: node_modules/lodash/_listCacheSet.js = cjs]
[NODE_MODULES: node_modules/lodash/_listCacheSet.js]
[MODULE: node_modules/lodash/_toKey.js]
[OUTPUT_BYTES: node_modules/lodash/_toKey.js = 156 bytes]
[FORMAT: node_modules/lodash/_toKey.js = cjs]
[NODE_MODULES: node_modules/lodash/_toKey.js]
[MODULE: node_modules/discord.js/src/util/WebSocketShardEvents.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/WebSocketShardEvents.js = 155 bytes]
[FORMAT: node_modules/discord.js/src/util/WebSocketShardEvents.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/WebSocketShardEvents.js]
[MODULE: node_modules/lodash/_memoizeCapped.js]
[OUTPUT_BYTES: node_modules/lodash/_memoizeCapped.js = 154 bytes]
[FORMAT: node_modules/lodash/_memoizeCapped.js = cjs]
[NODE_MODULES: node_modules/lodash/_memoizeCapped.js]
[MODULE: node_modules/lodash/_mapCacheClear.js]
[OUTPUT_BYTES: node_modules/lodash/_mapCacheClear.js = 154 bytes]
[FORMAT: node_modules/lodash/_mapCacheClear.js = cjs]
[NODE_MODULES: node_modules/lodash/_mapCacheClear.js]
[MODULE: node_modules/lodash/_isKeyable.js]
[OUTPUT_BYTES: node_modules/lodash/_isKeyable.js = 152 bytes]
[FORMAT: node_modules/lodash/_isKeyable.js = cjs]
[NODE_MODULES: node_modules/lodash/_isKeyable.js]
[MODULE: node_modules/lodash/_root.js]
[OUTPUT_BYTES: node_modules/lodash/_root.js = 150 bytes]
[FORMAT: node_modules/lodash/_root.js = cjs]
[NODE_MODULES: node_modules/lodash/_root.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js = 149 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js = 149 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js]
[MODULE: node_modules/lodash/_createSet.js]
[OUTPUT_BYTES: node_modules/lodash/_createSet.js = 149 bytes]
[FORMAT: node_modules/lodash/_createSet.js = cjs]
[NODE_MODULES: node_modules/lodash/_createSet.js]
[MODULE: node_modules/discord.js/src/structures/TextInputComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/TextInputComponent.js = 148 bytes]
[FORMAT: node_modules/discord.js/src/structures/TextInputComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/TextInputComponent.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js = 148 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js]
[MODULE: node_modules/discord.js/src/util/Enums.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Enums.js = 147 bytes]
[FORMAT: node_modules/discord.js/src/util/Enums.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Enums.js]
[MODULE: node_modules/lodash/_castPath.js]
[OUTPUT_BYTES: node_modules/lodash/_castPath.js = 146 bytes]
[FORMAT: node_modules/lodash/_castPath.js = cjs]
[NODE_MODULES: node_modules/lodash/_castPath.js]
[MODULE: node_modules/lodash/isSymbol.js]
[OUTPUT_BYTES: node_modules/lodash/isSymbol.js = 144 bytes]
[FORMAT: node_modules/lodash/isSymbol.js = cjs]
[NODE_MODULES: node_modules/lodash/isSymbol.js]
[MODULE: node_modules/lodash/_mapCacheSet.js]
[OUTPUT_BYTES: node_modules/lodash/_mapCacheSet.js = 143 bytes]
[FORMAT: node_modules/lodash/_mapCacheSet.js = cjs]
[NODE_MODULES: node_modules/lodash/_mapCacheSet.js]
[MODULE: node_modules/lodash/_getMapData.js]
[OUTPUT_BYTES: node_modules/lodash/_getMapData.js = 143 bytes]
[FORMAT: node_modules/lodash/_getMapData.js = cjs]
[NODE_MODULES: node_modules/lodash/_getMapData.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js = 139 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js]
[MODULE: node_modules/lodash/uniqWith.js]
[OUTPUT_BYTES: node_modules/lodash/uniqWith.js = 138 bytes]
[FORMAT: node_modules/lodash/uniqWith.js = cjs]
[NODE_MODULES: node_modules/lodash/uniqWith.js]
[MODULE: node_modules/lodash/_baseFindIndex.js]
[OUTPUT_BYTES: node_modules/lodash/_baseFindIndex.js = 138 bytes]
[FORMAT: node_modules/lodash/_baseFindIndex.js = cjs]
[NODE_MODULES: node_modules/lodash/_baseFindIndex.js]
[MODULE: node_modules/discord.js/src/structures/UnfurledMediaItem.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/UnfurledMediaItem.js = 134 bytes]
[FORMAT: node_modules/discord.js/src/structures/UnfurledMediaItem.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/UnfurledMediaItem.js]
[MODULE: node_modules/lodash/_arrayMap.js]
[OUTPUT_BYTES: node_modules/lodash/_arrayMap.js = 134 bytes]
[FORMAT: node_modules/lodash/_arrayMap.js = cjs]
[NODE_MODULES: node_modules/lodash/_arrayMap.js]
[MODULE: node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js = 133 bytes]
[FORMAT: node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js = 133 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/RESUMED.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/RESUMED.js = 132 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/RESUMED.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/RESUMED.js]
[MODULE: node_modules/lodash/_arrayIncludesWith.js]
[OUTPUT_BYTES: node_modules/lodash/_arrayIncludesWith.js = 130 bytes]
[FORMAT: node_modules/lodash/_arrayIncludesWith.js = cjs]
[NODE_MODULES: node_modules/lodash/_arrayIncludesWith.js]
[MODULE: node_modules/discord.js/src/structures/StringSelectMenuInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/StringSelectMenuInteraction.js = 129 bytes]
[FORMAT: node_modules/discord.js/src/structures/StringSelectMenuInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/StringSelectMenuInteraction.js]
[MODULE: node_modules/lodash/_assocIndexOf.js]
[OUTPUT_BYTES: node_modules/lodash/_assocIndexOf.js = 129 bytes]
[FORMAT: node_modules/lodash/_assocIndexOf.js = cjs]
[NODE_MODULES: node_modules/lodash/_assocIndexOf.js]
[MODULE: node_modules/discord.js/src/util/GuildMemberFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/GuildMemberFlagsBitField.js = 128 bytes]
[FORMAT: node_modules/discord.js/src/util/GuildMemberFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/GuildMemberFlagsBitField.js]
[MODULE: node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js = 127 bytes]
[FORMAT: node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js]
[MODULE: node_modules/lodash/_setCacheAdd.js]
[OUTPUT_BYTES: node_modules/lodash/_setCacheAdd.js = 126 bytes]
[FORMAT: node_modules/lodash/_setCacheAdd.js = cjs]
[NODE_MODULES: node_modules/lodash/_setCacheAdd.js]
[MODULE: node_modules/lodash/_baseIndexOf.js]
[OUTPUT_BYTES: node_modules/lodash/_baseIndexOf.js = 125 bytes]
[FORMAT: node_modules/lodash/_baseIndexOf.js = cjs]
[NODE_MODULES: node_modules/lodash/_baseIndexOf.js]
[MODULE: node_modules/lodash/_listCacheGet.js]
[OUTPUT_BYTES: node_modules/lodash/_listCacheGet.js = 123 bytes]
[FORMAT: node_modules/lodash/_listCacheGet.js = cjs]
[NODE_MODULES: node_modules/lodash/_listCacheGet.js]
[MODULE: node_modules/discord.js/src/structures/GuildPreviewEmoji.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/GuildPreviewEmoji.js = 122 bytes]
[FORMAT: node_modules/discord.js/src/structures/GuildPreviewEmoji.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildPreviewEmoji.js]
[MODULE: node_modules/lodash/get.js]
[OUTPUT_BYTES: node_modules/lodash/get.js = 122 bytes]
[FORMAT: node_modules/lodash/get.js = cjs]
[NODE_MODULES: node_modules/lodash/get.js]
[MODULE: node_modules/lodash/_hashDelete.js]
[OUTPUT_BYTES: node_modules/lodash/_hashDelete.js = 122 bytes]
[FORMAT: node_modules/lodash/_hashDelete.js = cjs]
[NODE_MODULES: node_modules/lodash/_hashDelete.js]
[MODULE: node_modules/discord.js/src/util/SystemChannelFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/SystemChannelFlagsBitField.js = 120 bytes]
[FORMAT: node_modules/discord.js/src/util/SystemChannelFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/SystemChannelFlagsBitField.js]
[MODULE: node_modules/lodash/_setToArray.js]
[OUTPUT_BYTES: node_modules/lodash/_setToArray.js = 120 bytes]
[FORMAT: node_modules/lodash/_setToArray.js = cjs]
[NODE_MODULES: node_modules/lodash/_setToArray.js]
[MODULE: node_modules/lodash/_strictIndexOf.js]
[OUTPUT_BYTES: node_modules/lodash/_strictIndexOf.js = 120 bytes]
[FORMAT: node_modules/lodash/_strictIndexOf.js = cjs]
[NODE_MODULES: node_modules/lodash/_strictIndexOf.js]
[MODULE: node_modules/lodash/_mapCacheDelete.js]
[OUTPUT_BYTES: node_modules/lodash/_mapCacheDelete.js = 120 bytes]
[FORMAT: node_modules/lodash/_mapCacheDelete.js = cjs]
[NODE_MODULES: node_modules/lodash/_mapCacheDelete.js]
[MODULE: node_modules/lodash/_arrayIncludes.js]
[OUTPUT_BYTES: node_modules/lodash/_arrayIncludes.js = 118 bytes]
[FORMAT: node_modules/lodash/_arrayIncludes.js = cjs]
[NODE_MODULES: node_modules/lodash/_arrayIncludes.js]
[MODULE: node_modules/discord.js/src/structures/CategoryChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/CategoryChannel.js = 116 bytes]
[FORMAT: node_modules/discord.js/src/structures/CategoryChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/CategoryChannel.js]
[MODULE: node_modules/lodash/_getNative.js]
[OUTPUT_BYTES: node_modules/lodash/_getNative.js = 115 bytes]
[FORMAT: node_modules/lodash/_getNative.js = cjs]
[NODE_MODULES: node_modules/lodash/_getNative.js]
[MODULE: node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js = 114 bytes]
[FORMAT: node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js]
[MODULE: node_modules/discord.js/src/util/IntentsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/IntentsBitField.js = 114 bytes]
[FORMAT: node_modules/discord.js/src/util/IntentsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/IntentsBitField.js]
[MODULE: node_modules/lodash/_objectToString.js]
[OUTPUT_BYTES: node_modules/lodash/_objectToString.js = 114 bytes]
[FORMAT: node_modules/lodash/_objectToString.js = cjs]
[NODE_MODULES: node_modules/lodash/_objectToString.js]
[MODULE: node_modules/discord.js/src/util/ApplicationFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/ApplicationFlagsBitField.js = 113 bytes]
[FORMAT: node_modules/discord.js/src/util/ApplicationFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/ApplicationFlagsBitField.js]
[MODULE: node_modules/lodash/isObject.js]
[OUTPUT_BYTES: node_modules/lodash/isObject.js = 113 bytes]
[FORMAT: node_modules/lodash/isObject.js = cjs]
[NODE_MODULES: node_modules/lodash/isObject.js]
[MODULE: node_modules/discord.js/src/util/InviteFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/InviteFlagsBitField.js = 112 bytes]
[FORMAT: node_modules/discord.js/src/util/InviteFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/InviteFlagsBitField.js]
[MODULE: node_modules/discord.js/src/structures/TextDisplayComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/TextDisplayComponent.js = 110 bytes]
[FORMAT: node_modules/discord.js/src/structures/TextDisplayComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/TextDisplayComponent.js]
[MODULE: node_modules/discord.js/src/structures/StringSelectMenuComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/StringSelectMenuComponent.js = 110 bytes]
[FORMAT: node_modules/discord.js/src/structures/StringSelectMenuComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/StringSelectMenuComponent.js]
[MODULE: node_modules/discord.js/src/util/ActivityFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/ActivityFlagsBitField.js = 110 bytes]
[FORMAT: node_modules/discord.js/src/util/ActivityFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/ActivityFlagsBitField.js]
[MODULE: node_modules/lodash/_freeGlobal.js]
[OUTPUT_BYTES: node_modules/lodash/_freeGlobal.js = 109 bytes]
[FORMAT: node_modules/lodash/_freeGlobal.js = cjs]
[NODE_MODULES: node_modules/lodash/_freeGlobal.js]
[MODULE: node_modules/discord.js/src/util/AttachmentFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/AttachmentFlagsBitField.js = 108 bytes]
[FORMAT: node_modules/discord.js/src/util/AttachmentFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/AttachmentFlagsBitField.js]
[MODULE: node_modules/discord.js/src/managers/BaseManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/BaseManager.js = 108 bytes]
[FORMAT: node_modules/discord.js/src/managers/BaseManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/BaseManager.js]
[MODULE: node_modules/discord.js/src/util/SKUFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/SKUFlagsBitField.js = 106 bytes]
[FORMAT: node_modules/discord.js/src/util/SKUFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/SKUFlagsBitField.js]
[MODULE: node_modules/discord.js/src/util/UserFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/UserFlagsBitField.js = 106 bytes]
[FORMAT: node_modules/discord.js/src/util/UserFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/UserFlagsBitField.js]
[MODULE: node_modules/discord.js/src/util/MessageFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/MessageFlagsBitField.js = 105 bytes]
[FORMAT: node_modules/discord.js/src/util/MessageFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/MessageFlagsBitField.js]
[MODULE: node_modules/discord.js/src/util/ChannelFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/ChannelFlagsBitField.js = 105 bytes]
[FORMAT: node_modules/discord.js/src/util/ChannelFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/ChannelFlagsBitField.js]
[MODULE: node_modules/lodash/_hashClear.js]
[OUTPUT_BYTES: node_modules/lodash/_hashClear.js = 105 bytes]
[FORMAT: node_modules/lodash/_hashClear.js = cjs]
[NODE_MODULES: node_modules/lodash/_hashClear.js]
[MODULE: node_modules/discord.js/src/util/RoleFlagsBitField.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/RoleFlagsBitField.js = 102 bytes]
[FORMAT: node_modules/discord.js/src/util/RoleFlagsBitField.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/RoleFlagsBitField.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/APPLICATION_COMMAND_PERMISSIONS_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/APPLICATION_COMMAND_PERMISSIONS_UPDATE.js = 100 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/APPLICATION_COMMAND_PERMISSIONS_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/APPLICATION_COMMAND_PERMISSIONS_UPDATE.js]
[MODULE: node_modules/lodash/_listCacheHas.js]
[OUTPUT_BYTES: node_modules/lodash/_listCacheHas.js = 97 bytes]
[FORMAT: node_modules/lodash/_listCacheHas.js = cjs]
[NODE_MODULES: node_modules/lodash/_listCacheHas.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_REMOVE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_REMOVE.js = 94 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_REMOVE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_REMOVE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_ACTION_EXECUTION.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_ACTION_EXECUTION.js = 94 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_ACTION_EXECUTION.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_ACTION_EXECUTION.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_DELETE.js = 93 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_DELETE.js]
[MODULE: node_modules/lodash/_mapCacheGet.js]
[OUTPUT_BYTES: node_modules/lodash/_mapCacheGet.js = 92 bytes]
[FORMAT: node_modules/lodash/_mapCacheGet.js = cjs]
[NODE_MODULES: node_modules/lodash/_mapCacheGet.js]
[MODULE: node_modules/lodash/_mapCacheHas.js]
[OUTPUT_BYTES: node_modules/lodash/_mapCacheHas.js = 92 bytes]
[FORMAT: node_modules/lodash/_mapCacheHas.js = cjs]
[NODE_MODULES: node_modules/lodash/_mapCacheHas.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_ADD.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_ADD.js = 91 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_ADD.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_ADD.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js = 91 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js]
[MODULE: node_modules/lodash/toString.js]
[OUTPUT_BYTES: node_modules/lodash/toString.js = 91 bytes]
[FORMAT: node_modules/lodash/toString.js = cjs]
[NODE_MODULES: node_modules/lodash/toString.js]
[MODULE: node_modules/discord.js/src/errors/index.js]
[OUTPUT_BYTES: node_modules/discord.js/src/errors/index.js = 90 bytes]
[FORMAT: node_modules/discord.js/src/errors/index.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/errors/index.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_CREATE.js = 90 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_UPDATE.js = 90 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_DELETE.js = 90 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_CREATE.js = 89 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_UPDATE.js = 89 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js = 89 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_AUDIT_LOG_ENTRY_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_AUDIT_LOG_ENTRY_CREATE.js = 89 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_AUDIT_LOG_ENTRY_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_AUDIT_LOG_ENTRY_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_DELETE.js = 89 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js = 88 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js]
[MODULE: node_modules/lodash/isObjectLike.js]
[OUTPUT_BYTES: node_modules/lodash/isObjectLike.js = 88 bytes]
[FORMAT: node_modules/lodash/isObjectLike.js = cjs]
[NODE_MODULES: node_modules/lodash/isObjectLike.js]
[MODULE: node_modules/discord.js/src/util/Symbols.js]
[OUTPUT_BYTES: node_modules/discord.js/src/util/Symbols.js = 86 bytes]
[FORMAT: node_modules/discord.js/src/util/Symbols.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/util/Symbols.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_REMOVE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_REMOVE.js = 86 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_REMOVE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_REMOVE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js = 86 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js = 86 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js = 86 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBERS_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBERS_UPDATE.js = 84 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBERS_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBERS_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_UPDATE.js = 84 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_STICKERS_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_STICKERS_UPDATE.js = 84 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_STICKERS_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_STICKERS_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_CREATE.js = 84 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_DELETE.js = 84 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBER_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBER_UPDATE.js = 83 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBER_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBER_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_ADD.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_ADD.js = 83 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_ADD.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_ADD.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js = 83 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_DELETE.js = 82 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js = 82 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/INTERACTION_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/INTERACTION_CREATE.js = 82 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/INTERACTION_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/INTERACTION_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_UPDATE.js = 82 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_CREATE.js = 82 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js = 82 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js]
[MODULE: node_modules/lodash/_getValue.js]
[OUTPUT_BYTES: node_modules/lodash/_getValue.js = 82 bytes]
[FORMAT: node_modules/lodash/_getValue.js = cjs]
[NODE_MODULES: node_modules/lodash/_getValue.js]
[MODULE: node_modules/lodash/eq.js]
[OUTPUT_BYTES: node_modules/lodash/eq.js = 82 bytes]
[FORMAT: node_modules/lodash/eq.js = cjs]
[NODE_MODULES: node_modules/lodash/eq.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js = 81 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js]
[MODULE: node_modules/lodash/_setCacheHas.js]
[OUTPUT_BYTES: node_modules/lodash/_setCacheHas.js = 81 bytes]
[FORMAT: node_modules/lodash/_setCacheHas.js = cjs]
[NODE_MODULES: node_modules/lodash/_setCacheHas.js]
[MODULE: node_modules/lodash/_listCacheClear.js]
[OUTPUT_BYTES: node_modules/lodash/_listCacheClear.js = 81 bytes]
[FORMAT: node_modules/lodash/_listCacheClear.js = cjs]
[NODE_MODULES: node_modules/lodash/_listCacheClear.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js = 80 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js = 80 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js = 80 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js]
[MODULE: node_modules/lodash/_coreJsData.js]
[OUTPUT_BYTES: node_modules/lodash/_coreJsData.js = 80 bytes]
[FORMAT: node_modules/lodash/_coreJsData.js = cjs]
[NODE_MODULES: node_modules/lodash/_coreJsData.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/THREAD_LIST_SYNC.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/THREAD_LIST_SYNC.js = 79 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/THREAD_LIST_SYNC.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_LIST_SYNC.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js = 79 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js = 79 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js = 79 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js = 78 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js = 78 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js = 78 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js = 78 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js]
[MODULE: node_modules/lodash/_Set.js]
[OUTPUT_BYTES: node_modules/lodash/_Set.js = 78 bytes]
[FORMAT: node_modules/lodash/_Set.js = cjs]
[NODE_MODULES: node_modules/lodash/_Set.js]
[MODULE: node_modules/lodash/_Map.js]
[OUTPUT_BYTES: node_modules/lodash/_Map.js = 78 bytes]
[FORMAT: node_modules/lodash/_Map.js = cjs]
[NODE_MODULES: node_modules/lodash/_Map.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js = 77 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/THREAD_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/THREAD_CREATE.js = 77 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/THREAD_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js = 77 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/THREAD_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/THREAD_DELETE.js = 77 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/THREAD_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js = 76 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js = 76 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js = 76 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js = 76 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js]
[MODULE: node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js]
[OUTPUT_BYTES: node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js = 75 bytes]
[FORMAT: node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js]
[MODULE: node_modules/lodash/_nativeCreate.js]
[OUTPUT_BYTES: node_modules/lodash/_nativeCreate.js = 75 bytes]
[FORMAT: node_modules/lodash/_nativeCreate.js = cjs]
[NODE_MODULES: node_modules/lodash/_nativeCreate.js]
[MODULE: node_modules/discord.js/src/managers/GuildMessageManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/GuildMessageManager.js = 71 bytes]
[FORMAT: node_modules/discord.js/src/managers/GuildMessageManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildMessageManager.js]
[MODULE: node_modules/discord.js/src/structures/RoleSelectMenuComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/RoleSelectMenuComponent.js = 71 bytes]
[FORMAT: node_modules/discord.js/src/structures/RoleSelectMenuComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/RoleSelectMenuComponent.js]
[MODULE: node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js = 71 bytes]
[FORMAT: node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js]
[MODULE: node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js = 71 bytes]
[FORMAT: node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js]
[MODULE: node_modules/discord.js/src/structures/ButtonInteraction.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/ButtonInteraction.js = 71 bytes]
[FORMAT: node_modules/discord.js/src/structures/ButtonInteraction.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/ButtonInteraction.js]
[MODULE: node_modules/discord.js/src/structures/MediaChannel.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/MediaChannel.js = 71 bytes]
[FORMAT: node_modules/discord.js/src/structures/MediaChannel.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/MediaChannel.js]
[MODULE: node_modules/discord.js/src/structures/UserSelectMenuComponent.js]
[OUTPUT_BYTES: node_modules/discord.js/src/structures/UserSelectMenuComponent.js = 71 bytes]
[FORMAT: node_modules/discord.js/src/structures/UserSelectMenuComponent.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/structures/UserSelectMenuComponent.js]
[MODULE: node_modules/discord.js/src/managers/DMMessageManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/DMMessageManager.js = 71 bytes]
[FORMAT: node_modules/discord.js/src/managers/DMMessageManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/DMMessageManager.js]
[MODULE: node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js]
[OUTPUT_BYTES: node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js = 71 bytes]
[FORMAT: node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js = cjs]
[NODE_MODULES: node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js]
[MODULE: node_modules/lodash/_cacheHas.js]
[OUTPUT_BYTES: node_modules/lodash/_cacheHas.js = 71 bytes]
[FORMAT: node_modules/lodash/_cacheHas.js = cjs]
[NODE_MODULES: node_modules/lodash/_cacheHas.js]
[MODULE: node_modules/lodash/_baseIsNaN.js]
[OUTPUT_BYTES: node_modules/lodash/_baseIsNaN.js = 66 bytes]
[FORMAT: node_modules/lodash/_baseIsNaN.js = cjs]
[NODE_MODULES: node_modules/lodash/_baseIsNaN.js]
[MODULE: node_modules/lodash/_Symbol.js]
[OUTPUT_BYTES: node_modules/lodash/_Symbol.js = 65 bytes]
[FORMAT: node_modules/lodash/_Symbol.js = cjs]
[NODE_MODULES: node_modules/lodash/_Symbol.js]
[MODULE: node_modules/lodash/isArray.js]
[OUTPUT_BYTES: node_modules/lodash/isArray.js = 59 bytes]
[FORMAT: node_modules/lodash/isArray.js = cjs]
[NODE_MODULES: node_modules/lodash/isArray.js]
[MODULE: node_modules/lodash/noop.js]
[OUTPUT_BYTES: node_modules/lodash/noop.js = 53 bytes]
[FORMAT: node_modules/lodash/noop.js = cjs]
[NODE_MODULES: node_modules/lodash/noop.js]
```

### All Imports

```
[IMPORT: index.ts -> /opt/git/checkrate/node_modules/discord.js/src/index.js]
[IMPORT: index.ts -> /opt/git/checkrate/node_modules/@postfmly/logger/index.js]
[IMPORT: index.ts -> /opt/git/checkrate/node_modules/discord.js-rate-limiter/dist/index.js]
[IMPORT: index.ts -> /opt/git/checkrate/node_modules/ms/index.js]
[IMPORT: node_modules/discord.js-rate-limiter/dist/index.js -> /opt/git/checkrate/node_modules/discord.js-rate-limiter/dist/rate-limiter.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/@discordjs/util/dist/index.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/tslib/tslib.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/BaseClient.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/Client.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/sharding/Shard.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/sharding/ShardClientUtil.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/sharding/ShardingManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/WebhookClient.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/errors/DJSError.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/errors/DJSError.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/errors/DJSError.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/errors/ErrorCodes.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/ActivityFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/ApplicationFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/AttachmentFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/BaseManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/BitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/ChannelFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/@discordjs/collection/dist/index.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Constants.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Colors.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Events.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Formatters.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/GuildMemberFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/IntentsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/InviteFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/LimitedCollection.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/MessageFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Options.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Partials.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/PermissionsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/RoleFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/ShardEvents.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/SKUFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Status.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/@sapphire/snowflake/dist/cjs/index.cjs]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Sweepers.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/SystemChannelFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/UserFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Util.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/util/WebSocketShardEvents.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/package.json]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/ApplicationCommandManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/ApplicationEmojiManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/AutoModerationRuleManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/BaseGuildEmojiManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/CachedManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/ChannelManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/voice/ClientVoiceManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/DataManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/DMMessageManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/EntitlementManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildApplicationCommandManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildBanManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildChannelManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildEmojiManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildEmojiRoleManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildForumThreadManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildInviteManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildMemberManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildMemberRoleManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildMessageManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildScheduledEventManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildStickerManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/GuildTextThreadManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/MessageManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/PermissionOverwriteManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/PollAnswerVoterManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/PresenceManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/ReactionManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/ReactionUserManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/RoleManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/StageInstanceManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/SubscriptionManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/ThreadManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/ThreadMemberManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/UserManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/VoiceStateManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/WebSocketManager.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/WebSocketShard.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ActionRow.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ActionRowBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Presence.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/AnonymousGuild.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/interfaces/Application.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ApplicationCommand.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ApplicationEmoji.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ApplicationRoleConnectionMetadata.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/AutocompleteInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/AutoModerationActionExecution.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/AutoModerationRule.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Base.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/BaseGuild.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/BaseGuildEmoji.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/BaseGuildTextChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ButtonBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ButtonComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ButtonInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/CategoryChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/BaseChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ChatInputCommandInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ClientApplication.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ClientPresence.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ClientUser.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/CommandInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/interfaces/Collector.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Component.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ContainerComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/DirectoryChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/DMChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Embed.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/EmbedBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Emoji.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Entitlement.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/FileComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ForumChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Guild.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildAuditLogs.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildAuditLogsEntry.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildBan.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildEmoji.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildMember.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildOnboarding.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildOnboardingPrompt.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildPreview.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildPreviewEmoji.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildScheduledEvent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/GuildTemplate.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Integration.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/IntegrationApplication.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/InteractionCallback.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/InteractionCallbackResource.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/InteractionCallbackResponse.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/BaseInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/InteractionCollector.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/InteractionResponse.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/InteractionWebhook.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Invite.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/InviteStageInstance.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/InviteGuild.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/LabelComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Message.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Attachment.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/AttachmentBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ModalBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MediaChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MediaGalleryComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MediaGalleryItem.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MessageCollector.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MessageComponentInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MessageMentions.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MessagePayload.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MessageReaction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ModalSubmitInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ModalSubmitFields.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/NewsChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/OAuth2Guild.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/PartialGroupDMChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/PermissionOverwrites.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Poll.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/PollAnswer.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Presence.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ReactionCollector.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ReactionEmoji.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Presence.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Role.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/SectionComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/SelectMenuBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/StringSelectMenuBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/UserSelectMenuBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/BaseSelectMenuComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/SelectMenuComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/RoleSelectMenuComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/StringSelectMenuComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/UserSelectMenuComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/SelectMenuInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/StringSelectMenuInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/UserSelectMenuInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/SeparatorComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/SKU.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/SoundboardSound.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/StageChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/StageInstance.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Subscription.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Sticker.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/StickerPack.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Team.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/TeamMember.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/TextChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/TextDisplayComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/TextInputBuilder.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/TextInputComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ThreadChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ThreadMember.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ThreadOnlyChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/ThumbnailComponent.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Typing.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/UnfurledMediaItem.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/User.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/VoiceChannelEffect.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/VoiceChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/VoiceRegion.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/VoiceState.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Webhook.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/Widget.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/WidgetMember.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/WelcomeChannel.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/WelcomeScreen.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/discord-api-types/v10.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/@discordjs/builders/dist/index.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/@discordjs/formatters/dist/index.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/@discordjs/rest/dist/index.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/@discordjs/util/dist/index.js]
[IMPORT: node_modules/discord.js/src/index.js -> /opt/git/checkrate/node_modules/@discordjs/ws/dist/index.js]
[EXTERNAL: node_modules/@postfmly/logger/index.js imports util]
[IMPORT: node_modules/discord.js-rate-limiter/dist/rate-limiter.js -> /opt/git/checkrate/node_modules/limiter/dist/cjs/index.js]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberRoleManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberRoleManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberRoleManager.js -> ./DataManager]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberRoleManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberRoleManager.js -> ../structures/Role]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/Subscription.js -> ./Base]
[IMPORT: node_modules/discord.js/src/util/Options.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/util/Options.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Transformers.js]
[IMPORT: node_modules/discord.js/src/util/Options.js -> ../../package.json]
[IMPORT: node_modules/discord.js/src/util/Options.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/util/Options.js -> ./LimitedCollection]
[IMPORT: node_modules/discord.js/src/util/Options.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/ReactionUserManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/ReactionUserManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/ReactionUserManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/ReactionUserManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/ReactionUserManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/ReactionUserManager.js -> ../structures/User]
[IMPORT: node_modules/discord.js/src/structures/GuildPreview.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/GuildPreview.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/GuildPreview.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/GuildPreview.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/GuildPreview.js -> ./GuildPreviewEmoji]
[IMPORT: node_modules/discord.js/src/structures/GuildPreview.js -> ./Sticker]
[EXTERNAL: node_modules/discord.js/src/structures/Emoji.js imports process]
[IMPORT: node_modules/discord.js/src/structures/Emoji.js -> @discordjs/formatters]
[IMPORT: node_modules/discord.js/src/structures/Emoji.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/Emoji.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/ClientPresence.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/ClientPresence.js -> ./Presence]
[IMPORT: node_modules/discord.js/src/structures/ClientPresence.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/ApplicationEmojiManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/ApplicationEmojiManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/ApplicationEmojiManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/ApplicationEmojiManager.js -> /opt/git/checkrate/node_modules/discord.js/src/errors/index.js]
[IMPORT: node_modules/discord.js/src/managers/ApplicationEmojiManager.js -> ../structures/ApplicationEmoji]
[IMPORT: node_modules/discord.js/src/managers/ApplicationEmojiManager.js -> /opt/git/checkrate/node_modules/discord.js/src/util/DataResolver.js]
[IMPORT: node_modules/discord.js/src/structures/Embed.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/Embed.js -> /opt/git/checkrate/node_modules/fast-deep-equal/index.js]
[IMPORT: node_modules/discord.js/src/structures/InteractionCallbackResponse.js -> ./InteractionCallback]
[IMPORT: node_modules/discord.js/src/structures/InteractionCallbackResponse.js -> ./InteractionCallbackResource]
[IMPORT: node_modules/discord.js/src/util/Partials.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Enums.js]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogs.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogs.js -> ./ApplicationCommand]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogs.js -> ./GuildAuditLogsEntry]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogs.js -> ./Integration]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogs.js -> ./Webhook]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogs.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js -> ./MessageComponentInteraction]
[IMPORT: node_modules/discord.js/src/util/BitField.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/MessageMentions.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/MessageMentions.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/MessageMentions.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/client/WebhookClient.js -> ./BaseClient]
[IMPORT: node_modules/discord.js/src/client/WebhookClient.js -> ../errors]
[IMPORT: node_modules/discord.js/src/client/WebhookClient.js -> ../structures/Webhook]
[IMPORT: node_modules/discord.js/src/client/WebhookClient.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/SKU.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/SKU.js -> ../util/SKUFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/Presence.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Presence.js -> ./Emoji]
[IMPORT: node_modules/discord.js/src/structures/Presence.js -> ../util/ActivityFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/Presence.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/managers/SubscriptionManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/SubscriptionManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/SubscriptionManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/SubscriptionManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/SubscriptionManager.js -> ../errors/index]
[IMPORT: node_modules/discord.js/src/managers/SubscriptionManager.js -> ../structures/Subscription]
[IMPORT: node_modules/discord.js/src/managers/SubscriptionManager.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/ButtonComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js -> ./ContextMenuCommandInteraction]
[EXTERNAL: node_modules/discord.js/src/structures/SelectMenuInteraction.js imports process]
[IMPORT: node_modules/discord.js/src/structures/SelectMenuInteraction.js -> ./StringSelectMenuInteraction]
[EXTERNAL: node_modules/discord.js/src/managers/PermissionOverwriteManager.js imports process]
[IMPORT: node_modules/discord.js/src/managers/PermissionOverwriteManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/PermissionOverwriteManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/PermissionOverwriteManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/PermissionOverwriteManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/PermissionOverwriteManager.js -> ../structures/PermissionOverwrites]
[IMPORT: node_modules/discord.js/src/managers/PermissionOverwriteManager.js -> ../structures/Role]
[IMPORT: node_modules/discord.js/src/structures/AutoModerationRule.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/AutoModerationRule.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/AutoModerationRule.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/LabelComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/structures/LabelComponent.js -> ../util/Components]
[IMPORT: node_modules/discord.js/src/structures/ApplicationEmoji.js -> ./Emoji]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> @discordjs/formatters]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./Attachment]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./ClientApplication]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./Embed]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./InteractionCollector]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./MessageMentions]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./MessagePayload]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./Poll.js]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./ReactionCollector]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ./Sticker]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ../managers/ReactionManager]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ../util/Components]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ../util/Constants]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ../util/MessageFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ../util/Transformers.js]
[IMPORT: node_modules/discord.js/src/structures/Message.js -> ../util/Util]
[EXTERNAL: node_modules/discord.js/src/client/websocket/WebSocketManager.js imports events]
[EXTERNAL: node_modules/discord.js/src/client/websocket/WebSocketManager.js imports process]
[EXTERNAL: node_modules/discord.js/src/client/websocket/WebSocketManager.js imports timers]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketManager.js -> @discordjs/ws]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketManager.js -> ./WebSocketShard]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketManager.js -> ../../errors]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketManager.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketManager.js -> ../../util/Status]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketManager.js -> ../../util/WebSocketShardEvents]
[EXTERNAL: node_modules/discord.js/src/client/websocket/WebSocketManager.js imports zlib-sync]
[IMPORT: node_modules/discord.js/src/managers/ThreadManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/ThreadManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/ThreadManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/ThreadManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/ThreadManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/ThreadManager.js -> ../structures/ThreadChannel]
[IMPORT: node_modules/discord.js/src/managers/ThreadManager.js -> ../util/Symbols]
[IMPORT: node_modules/discord.js/src/managers/EntitlementManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/EntitlementManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/EntitlementManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/EntitlementManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/EntitlementManager.js -> ../errors/index]
[IMPORT: node_modules/discord.js/src/managers/EntitlementManager.js -> ../structures/Entitlement]
[IMPORT: node_modules/discord.js/src/managers/EntitlementManager.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/Role.js -> @discordjs/formatters]
[IMPORT: node_modules/discord.js/src/structures/Role.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/Role.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/Role.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Role.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/Role.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/structures/Role.js -> ../util/RoleFlagsBitField]
[EXTERNAL: node_modules/discord.js/src/structures/MessagePayload.js imports buffer]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ../util/MessageFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ./BaseInteraction]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ./Webhook]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ../client/WebhookClient]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ./User]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ./GuildMember]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ./Message]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ../managers/MessageManager]
[IMPORT: node_modules/discord.js/src/structures/MessagePayload.js -> ./InteractionWebhook]
[IMPORT: node_modules/discord.js/src/structures/VoiceRegion.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/managers/GuildApplicationCommandManager.js -> ./ApplicationCommandManager]
[IMPORT: node_modules/discord.js/src/managers/GuildApplicationCommandManager.js -> ./ApplicationCommandPermissionsManager]
[IMPORT: node_modules/discord.js/src/managers/GuildForumThreadManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildForumThreadManager.js -> ./ThreadManager]
[IMPORT: node_modules/discord.js/src/managers/GuildForumThreadManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildForumThreadManager.js -> ../structures/MessagePayload]
[EXTERNAL: node_modules/@discordjs/rest/dist/index.js imports buffer]
[IMPORT: node_modules/@discordjs/rest/dist/index.js -> @discordjs/util]
[EXTERNAL: node_modules/@discordjs/rest/dist/index.js imports undici]
[EXTERNAL: node_modules/@discordjs/rest/dist/index.js imports http]
[EXTERNAL: node_modules/@discordjs/rest/dist/index.js imports url]
[EXTERNAL: node_modules/@discordjs/rest/dist/index.js imports util]
[EXTERNAL: node_modules/@discordjs/rest/dist/index.js imports undici]
[IMPORT: node_modules/@discordjs/rest/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/rest/dist/index.js -> @discordjs/util]
[IMPORT: node_modules/@discordjs/rest/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/rest/dist/index.js -> /opt/git/checkrate/node_modules/@discordjs/rest/node_modules/@discordjs/collection/dist/index.js]
[IMPORT: node_modules/@discordjs/rest/dist/index.js -> /opt/git/checkrate/node_modules/@discordjs/rest/node_modules/@sapphire/snowflake/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/rest/dist/index.js -> @vladfrangu/async_event_emitter]
[IMPORT: node_modules/@discordjs/rest/dist/index.js -> magic-bytes.js]
[IMPORT: node_modules/@discordjs/rest/dist/index.js -> @sapphire/async-queue]
[EXTERNAL: node_modules/discord.js/src/managers/GuildMemberManager.js imports process]
[EXTERNAL: node_modules/discord.js/src/managers/GuildMemberManager.js imports timers]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> ../structures/BaseGuildVoiceChannel]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> ../structures/GuildMember]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> ../structures/Role]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> ../util/Events]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> ../util/GuildMemberFlagsBitField]
[IMPORT: node_modules/discord.js/src/managers/GuildMemberManager.js -> ../util/Partials]
[IMPORT: node_modules/discord.js/src/structures/TextDisplayComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/util/PermissionsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/PermissionsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/util/MessageFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/MessageFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> ./BaseChannel]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> ./ThreadOnlyChannel]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> ./interfaces/TextBasedChannel]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> ../managers/GuildMessageManager]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> ../managers/ThreadMemberManager]
[IMPORT: node_modules/discord.js/src/structures/ThreadChannel.js -> ../util/ChannelFlagsBitField]
[IMPORT: node_modules/discord.js/src/managers/GuildMessageManager.js -> ./MessageManager]
[EXTERNAL: node_modules/discord.js/src/util/Sweepers.js imports timers]
[IMPORT: node_modules/discord.js/src/util/Sweepers.js -> ./Constants]
[IMPORT: node_modules/discord.js/src/util/Sweepers.js -> ./Events]
[IMPORT: node_modules/discord.js/src/util/Sweepers.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/FileComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/structures/FileComponent.js -> ./UnfurledMediaItem]
[EXTERNAL: node_modules/discord.js/src/client/websocket/WebSocketShard.js imports events]
[EXTERNAL: node_modules/discord.js/src/client/websocket/WebSocketShard.js imports process]
[EXTERNAL: node_modules/discord.js/src/client/websocket/WebSocketShard.js imports timers]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketShard.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketShard.js -> ../../util/Status]
[IMPORT: node_modules/discord.js/src/client/websocket/WebSocketShard.js -> ../../util/WebSocketShardEvents]
[IMPORT: node_modules/discord.js/src/structures/PartialGroupDMChannel.js -> ./BaseChannel]
[IMPORT: node_modules/discord.js/src/structures/PartialGroupDMChannel.js -> ./interfaces/TextBasedChannel]
[IMPORT: node_modules/discord.js/src/structures/PartialGroupDMChannel.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/PartialGroupDMChannel.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js]
[IMPORT: node_modules/discord.js/src/structures/RoleSelectMenuComponent.js -> ./BaseSelectMenuComponent]
[IMPORT: node_modules/discord.js/src/structures/GuildScheduledEvent.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/GuildScheduledEvent.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/GuildScheduledEvent.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/GuildScheduledEvent.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/PresenceManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/PresenceManager.js -> ../structures/Presence]
[IMPORT: node_modules/discord.js/src/structures/ThreadOnlyChannel.js -> ./GuildChannel]
[IMPORT: node_modules/discord.js/src/structures/ThreadOnlyChannel.js -> ./interfaces/TextBasedChannel]
[IMPORT: node_modules/discord.js/src/structures/ThreadOnlyChannel.js -> ../managers/GuildForumThreadManager]
[IMPORT: node_modules/discord.js/src/structures/ThreadOnlyChannel.js -> ../util/Channels]
[IMPORT: node_modules/discord-api-types/v10.js -> /opt/git/checkrate/node_modules/discord-api-types/gateway/v10.js]
[IMPORT: node_modules/discord-api-types/v10.js -> /opt/git/checkrate/node_modules/discord-api-types/globals.js]
[IMPORT: node_modules/discord-api-types/v10.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/index.js]
[IMPORT: node_modules/discord-api-types/v10.js -> /opt/git/checkrate/node_modules/discord-api-types/rest/v10/index.js]
[IMPORT: node_modules/discord-api-types/v10.js -> /opt/git/checkrate/node_modules/discord-api-types/rpc/v10.js]
[IMPORT: node_modules/discord-api-types/v10.js -> /opt/git/checkrate/node_modules/discord-api-types/utils/internals.js]
[IMPORT: node_modules/discord-api-types/v10.js -> /opt/git/checkrate/node_modules/discord-api-types/utils/v10.js]
[IMPORT: node_modules/discord.js/src/structures/TextInputBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/TextInputBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/TextInputBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuComponent.js -> ./BaseSelectMenuComponent]
[IMPORT: node_modules/discord.js/src/structures/StickerPack.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/StickerPack.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/StickerPack.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/StickerPack.js -> ./Sticker]
[IMPORT: node_modules/discord.js/src/util/Constants.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/Sticker.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/Sticker.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/Sticker.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Sticker.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/Sticker.js -> ../util/Constants]
[IMPORT: node_modules/discord.js/src/util/LimitedCollection.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/util/LimitedCollection.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/ClientUser.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/ClientUser.js -> ./User]
[IMPORT: node_modules/discord.js/src/structures/ClientUser.js -> ../util/DataResolver]
[EXTERNAL: node_modules/discord.js/src/managers/ChannelManager.js imports process]
[IMPORT: node_modules/discord.js/src/managers/ChannelManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/ChannelManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/ChannelManager.js -> ../structures/BaseChannel]
[IMPORT: node_modules/discord.js/src/managers/ChannelManager.js -> ../util/Channels]
[IMPORT: node_modules/discord.js/src/managers/ChannelManager.js -> ../util/Constants]
[IMPORT: node_modules/discord.js/src/managers/ChannelManager.js -> ../util/Events]
[EXTERNAL: node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js imports process]
[IMPORT: node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js -> ./StringSelectMenuOptionBuilder]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/ReactionCollector.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/ReactionCollector.js -> ./interfaces/Collector]
[IMPORT: node_modules/discord.js/src/structures/ReactionCollector.js -> ../util/Events]
[IMPORT: node_modules/discord.js/src/structures/TextInputComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/managers/DataManager.js -> ./BaseManager]
[IMPORT: node_modules/discord.js/src/managers/DataManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/Typing.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Poll.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/Poll.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Poll.js -> ./PollAnswer]
[IMPORT: node_modules/discord.js/src/structures/Poll.js -> ../errors/DJSError]
[IMPORT: node_modules/discord.js/src/structures/Poll.js -> ../errors/index]
[IMPORT: node_modules/discord.js/src/util/Status.js -> ./Enums]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports worker_threads]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports events]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports path]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports worker_threads]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports buffer]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports events]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports timers]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports timers/promises]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports url]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports util]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports zlib]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> @discordjs/util]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/async-queue/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@vladfrangu/async_event_emitter/dist/index.cjs]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> discord-api-types/v10]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports ws]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports process]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> @discordjs/util]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> discord-api-types/v10]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports timers/promises]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/async-queue/dist/cjs/index.cjs]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports zlib-sync]
[EXTERNAL: node_modules/@discordjs/ws/dist/index.js imports worker_threads]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> @discordjs/util]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> @discordjs/util]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> /opt/git/checkrate/node_modules/@vladfrangu/async_event_emitter/dist/index.cjs]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/ws/dist/index.js -> bun:wrap]
[IMPORT: node_modules/discord.js/src/util/ChannelFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/ChannelFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/managers/AutoModerationRuleManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/AutoModerationRuleManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/AutoModerationRuleManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/AutoModerationRuleManager.js -> ../structures/AutoModerationRule]
[IMPORT: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js -> ../structures/ApplicationEmoji]
[IMPORT: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js -> ../structures/GuildEmoji]
[IMPORT: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js -> ../structures/ReactionEmoji]
[IMPORT: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js -> ./DataManager]
[IMPORT: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js -> ../structures/Role]
[IMPORT: node_modules/discord.js/src/structures/interfaces/Application.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/interfaces/Application.js -> ../Base]
[IMPORT: node_modules/discord.js/src/structures/User.js -> @discordjs/formatters]
[IMPORT: node_modules/discord.js/src/structures/User.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/structures/User.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/User.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/User.js -> ./interfaces/TextBasedChannel]
[IMPORT: node_modules/discord.js/src/structures/User.js -> ../util/Transformers.js]
[IMPORT: node_modules/discord.js/src/structures/User.js -> ../util/UserFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/User.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/managers/VoiceStateManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/VoiceStateManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/VoiceStateManager.js -> ../structures/VoiceState]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ./AutoModerationRule]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ./GuildOnboardingPrompt]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ./GuildScheduledEvent]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ./Integration]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ./Invite]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ./StageInstance]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ./Sticker]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ./Webhook]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ../util/Partials]
[IMPORT: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js -> ../util/Util]
[EXTERNAL: node_modules/discord.js/src/managers/GuildChannelManager.js imports process]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ./GuildTextThreadManager]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../structures/GuildChannel]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../structures/PermissionOverwrites]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../structures/ThreadChannel]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../structures/Webhook]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../util/ChannelFlagsBitField]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../util/Channels]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../util/Constants]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/managers/GuildChannelManager.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildEmoji.js -> ./Emoji]
[IMPORT: node_modules/discord.js/src/structures/ModalBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/ModalBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/ModalBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/InteractionCallback.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/MediaGalleryComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/structures/MediaGalleryComponent.js -> ./MediaGalleryItem]
[IMPORT: node_modules/discord.js/src/managers/ReactionManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/ReactionManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/ReactionManager.js -> ../structures/MessageReaction]
[IMPORT: node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js -> ./MessageComponentInteraction]
[IMPORT: node_modules/discord.js/src/structures/TextChannel.js -> ./BaseGuildTextChannel]
[IMPORT: node_modules/discord.js/src/structures/StageInstance.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/StageInstance.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js -> ./MessageComponentInteraction]
[IMPORT: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js -> ../util/Events]
[IMPORT: node_modules/discord.js/src/structures/GuildEmoji.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/GuildEmoji.js -> ./BaseGuildEmoji]
[IMPORT: node_modules/discord.js/src/structures/GuildEmoji.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/GuildEmoji.js -> ../managers/GuildEmojiRoleManager]
[IMPORT: node_modules/discord.js/src/managers/StageInstanceManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/StageInstanceManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/StageInstanceManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/StageInstanceManager.js -> ../structures/StageInstance]
[IMPORT: node_modules/discord.js/src/util/SystemChannelFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/SystemChannelFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js -> ./CommandInteraction.js]
[IMPORT: node_modules/discord.js/src/util/SKUFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/SKUFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/structures/StringSelectMenuInteraction.js -> ./MessageComponentInteraction]
[IMPORT: node_modules/discord.js/src/structures/ActionRowBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/ActionRowBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/ActionRowBuilder.js -> ../util/Components]
[IMPORT: node_modules/discord.js/src/structures/ActionRowBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/VoiceState.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/VoiceState.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/VoiceState.js -> ../errors]
[EXTERNAL: node_modules/discord.js/src/managers/GuildManager.js imports process]
[EXTERNAL: node_modules/discord.js/src/managers/GuildManager.js imports timers]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../errors/index.js]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../sharding/ShardClientUtil]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../structures/Guild]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../structures/GuildChannel]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../structures/GuildEmoji]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../structures/GuildMember]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../structures/Invite]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../structures/OAuth2Guild]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../structures/Role]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../util/Events]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../util/SystemChannelFlagsBitField]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../util/Transformers.js]
[IMPORT: node_modules/discord.js/src/managers/GuildManager.js -> ../util/Util]
[EXTERNAL: node_modules/discord.js/src/structures/interfaces/Collector.js imports events]
[EXTERNAL: node_modules/discord.js/src/structures/interfaces/Collector.js imports timers]
[IMPORT: node_modules/discord.js/src/structures/interfaces/Collector.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/interfaces/Collector.js -> ../../errors]
[IMPORT: node_modules/discord.js/src/structures/interfaces/Collector.js -> ../../util/Util]
[IMPORT: node_modules/discord.js/src/structures/Invite.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/Invite.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Invite.js -> ./GuildScheduledEvent]
[IMPORT: node_modules/discord.js/src/structures/Invite.js -> ./IntegrationApplication]
[IMPORT: node_modules/discord.js/src/structures/Invite.js -> ./InviteStageInstance]
[IMPORT: node_modules/discord.js/src/structures/Invite.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/Invite.js -> ../util/InviteFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/structures/Invite.js -> ./InviteGuild]
[EXTERNAL: node_modules/discord.js/src/structures/SelectMenuBuilder.js imports process]
[IMPORT: node_modules/discord.js/src/structures/SelectMenuBuilder.js -> ./StringSelectMenuBuilder]
[IMPORT: node_modules/discord.js/src/structures/GuildBan.js -> ./Base]
[IMPORT: node_modules/discord.js/src/errors/DJSError.js -> ./ErrorCodes]
[IMPORT: node_modules/discord.js/src/errors/DJSError.js -> ./Messages]
[EXTERNAL: node_modules/discord.js/src/structures/SelectMenuComponent.js imports process]
[IMPORT: node_modules/discord.js/src/structures/SelectMenuComponent.js -> ./StringSelectMenuComponent]
[EXTERNAL: node_modules/discord.js/src/managers/ThreadMemberManager.js imports process]
[IMPORT: node_modules/discord.js/src/managers/ThreadMemberManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/ThreadMemberManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/ThreadMemberManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/ThreadMemberManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/ThreadMemberManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/ThreadMemberManager.js -> ../structures/ThreadMember]
[IMPORT: node_modules/discord.js/src/managers/ThreadMemberManager.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandManager.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandManager.js -> ./ApplicationCommandPermissionsManager]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandManager.js -> ../structures/ApplicationCommand]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandManager.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/structures/InteractionCallbackResource.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/InteractionCallbackResource.js -> ./Message]
[IMPORT: node_modules/discord.js/src/util/AttachmentFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/AttachmentFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ./ApplicationRoleConnectionMetadata]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ./SKU]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ./Team]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ./interfaces/Application]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ../managers/ApplicationCommandManager]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ../managers/ApplicationEmojiManager]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ../managers/EntitlementManager]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ../managers/SubscriptionManager]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ../util/ApplicationFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/structures/ClientApplication.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/structures/GuildMember.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/GuildMember.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/GuildMember.js -> ./VoiceState]
[IMPORT: node_modules/discord.js/src/structures/GuildMember.js -> ./interfaces/TextBasedChannel]
[IMPORT: node_modules/discord.js/src/structures/GuildMember.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/GuildMember.js -> ../managers/GuildMemberRoleManager]
[IMPORT: node_modules/discord.js/src/structures/GuildMember.js -> ../util/GuildMemberFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/GuildMember.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/structures/InteractionCollector.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/InteractionCollector.js -> ./interfaces/Collector]
[IMPORT: node_modules/discord.js/src/structures/InteractionCollector.js -> ../util/Events]
[IMPORT: node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/managers/GuildTextThreadManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildTextThreadManager.js -> ./ThreadManager]
[IMPORT: node_modules/discord.js/src/managers/GuildTextThreadManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/ThreadMember.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/ThreadMember.js -> ../util/ThreadMemberFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/ThreadMember.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/ChatInputCommandInteraction.js -> ./CommandInteraction]
[IMPORT: node_modules/discord.js/src/structures/ChatInputCommandInteraction.js -> ./CommandInteractionOptionResolver]
[IMPORT: node_modules/discord.js/src/structures/ChatInputCommandInteraction.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/MediaGalleryItem.js -> ./UnfurledMediaItem]
[IMPORT: node_modules/discord.js/src/structures/Entitlement.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/InviteStageInstance.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/InviteStageInstance.js -> ./Base]
[IMPORT: node_modules/discord.js/src/client/voice/ClientVoiceManager.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/util/InviteFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/InviteFlagsBitField.js -> ./BitField]
[EXTERNAL: node_modules/discord.js/src/managers/MessageManager.js imports process]
[IMPORT: node_modules/discord.js/src/managers/MessageManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/MessageManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/MessageManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/MessageManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/MessageManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/MessageManager.js -> ../structures/Message]
[IMPORT: node_modules/discord.js/src/managers/MessageManager.js -> ../structures/MessagePayload]
[IMPORT: node_modules/discord.js/src/managers/MessageManager.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Symbols.js]
[IMPORT: node_modules/discord.js/src/managers/MessageManager.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitFields.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitFields.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitFields.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/WidgetMember.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Integration.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/Integration.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Integration.js -> ./IntegrationApplication]
[IMPORT: node_modules/discord.js/src/util/IntentsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/IntentsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/structures/Component.js -> fast-deep-equal]
[IMPORT: node_modules/discord.js/src/structures/GuildPreviewEmoji.js -> ./BaseGuildEmoji]
[IMPORT: node_modules/discord.js/src/structures/MessageReaction.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/MessageReaction.js -> ./ApplicationEmoji]
[IMPORT: node_modules/discord.js/src/structures/MessageReaction.js -> ./GuildEmoji]
[IMPORT: node_modules/discord.js/src/structures/MessageReaction.js -> ./ReactionEmoji]
[IMPORT: node_modules/discord.js/src/structures/MessageReaction.js -> ../managers/ReactionUserManager]
[IMPORT: node_modules/discord.js/src/structures/MessageReaction.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/Widget.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/Widget.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/Widget.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Widget.js -> ./WidgetMember]
[IMPORT: node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js -> ./ContextMenuCommandInteraction]
[IMPORT: node_modules/discord.js/src/structures/GuildOnboarding.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/GuildOnboarding.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/GuildOnboarding.js -> ./GuildOnboardingPrompt]
[IMPORT: node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/Webhook.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/structures/Webhook.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/Webhook.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/Webhook.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/Webhook.js -> ./MessagePayload]
[IMPORT: node_modules/discord.js/src/structures/Webhook.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/Webhook.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/structures/Webhook.js -> ./Message]
[IMPORT: node_modules/discord.js/src/structures/TeamMember.js -> ./Base]
[EXTERNAL: node_modules/discord.js/src/sharding/Shard.js imports events]
[EXTERNAL: node_modules/discord.js/src/sharding/Shard.js imports path]
[EXTERNAL: node_modules/discord.js/src/sharding/Shard.js imports process]
[EXTERNAL: node_modules/discord.js/src/sharding/Shard.js imports timers]
[EXTERNAL: node_modules/discord.js/src/sharding/Shard.js imports timers/promises]
[EXTERNAL: node_modules/discord.js/src/sharding/Shard.js imports worker_threads]
[IMPORT: node_modules/discord.js/src/sharding/Shard.js -> ../errors]
[IMPORT: node_modules/discord.js/src/sharding/Shard.js -> ../util/ShardEvents]
[IMPORT: node_modules/discord.js/src/sharding/Shard.js -> ../util/Util]
[EXTERNAL: node_modules/discord.js/src/sharding/Shard.js imports child_process]
[EXTERNAL: node_modules/discord.js/src/sharding/Shard.js imports worker_threads]
[EXTERNAL: node_modules/discord.js/src/structures/GuildTemplate.js imports timers]
[IMPORT: node_modules/discord.js/src/structures/GuildTemplate.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/GuildTemplate.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/GuildTemplate.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/structures/GuildTemplate.js -> ../util/Events]
[IMPORT: node_modules/discord.js/src/managers/PollAnswerVoterManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/PollAnswerVoterManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/PollAnswerVoterManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/PollAnswerVoterManager.js -> ./CachedManager.js]
[IMPORT: node_modules/discord.js/src/managers/PollAnswerVoterManager.js -> ../structures/User.js]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildTextChannel.js -> ./GuildChannel]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildTextChannel.js -> ./interfaces/TextBasedChannel]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildTextChannel.js -> ../managers/GuildMessageManager]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildTextChannel.js -> ../managers/GuildTextThreadManager]
[EXTERNAL: node_modules/discord.js/src/managers/GuildBanManager.js imports process]
[IMPORT: node_modules/discord.js/src/managers/GuildBanManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildBanManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/GuildBanManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildBanManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/GuildBanManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildBanManager.js -> ../structures/GuildBan]
[IMPORT: node_modules/discord.js/src/managers/GuildBanManager.js -> ../structures/GuildMember]
[IMPORT: node_modules/discord.js/src/structures/VoiceChannel.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/VoiceChannel.js -> ./BaseGuildVoiceChannel]
[IMPORT: node_modules/discord.js/src/structures/GuildOnboardingPrompt.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/GuildOnboardingPrompt.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/GuildOnboardingPrompt.js -> ./GuildOnboardingPromptOption]
[IMPORT: node_modules/discord.js/src/structures/VoiceChannelEffect.js -> ./Emoji]
[IMPORT: node_modules/discord.js/src/managers/UserManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/UserManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/UserManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/UserManager.js -> ../structures/GuildMember]
[IMPORT: node_modules/discord.js/src/managers/UserManager.js -> ../structures/Message]
[IMPORT: node_modules/discord.js/src/managers/UserManager.js -> ../structures/ThreadMember]
[IMPORT: node_modules/discord.js/src/managers/UserManager.js -> ../structures/User]
[IMPORT: node_modules/discord.js/src/managers/UserManager.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/SoundboardSound.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/SoundboardSound.js -> ./Base.js]
[IMPORT: node_modules/discord.js/src/structures/SoundboardSound.js -> ./Emoji.js]
[IMPORT: node_modules/discord.js/src/structures/SoundboardSound.js -> ../errors/index.js]
[IMPORT: node_modules/discord.js/src/structures/DMChannel.js -> @discordjs/formatters]
[IMPORT: node_modules/discord.js/src/structures/DMChannel.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/DMChannel.js -> ./BaseChannel]
[IMPORT: node_modules/discord.js/src/structures/DMChannel.js -> ./interfaces/TextBasedChannel]
[IMPORT: node_modules/discord.js/src/structures/DMChannel.js -> ../managers/DMMessageManager]
[IMPORT: node_modules/discord.js/src/structures/DMChannel.js -> ../util/Partials]
[IMPORT: node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js -> ./BaseSelectMenuComponent]
[EXTERNAL: node_modules/discord.js/src/util/Formatters.js imports util]
[IMPORT: node_modules/discord.js/src/util/Formatters.js -> @discordjs/formatters]
[IMPORT: node_modules/discord.js/src/structures/ReactionEmoji.js -> ./Emoji]
[IMPORT: node_modules/discord.js/src/structures/ReactionEmoji.js -> ../util/Util]
[EXTERNAL: node_modules/discord.js/src/client/BaseClient.js imports events]
[IMPORT: node_modules/discord.js/src/client/BaseClient.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/client/BaseClient.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/client/BaseClient.js -> ../errors]
[IMPORT: node_modules/discord.js/src/client/BaseClient.js -> ../util/Options]
[IMPORT: node_modules/discord.js/src/client/BaseClient.js -> ../util/Util]
[EXTERNAL: node_modules/discord.js/src/sharding/ShardClientUtil.js imports process]
[IMPORT: node_modules/discord.js/src/sharding/ShardClientUtil.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/sharding/ShardClientUtil.js -> ../errors]
[IMPORT: node_modules/discord.js/src/sharding/ShardClientUtil.js -> ../util/Events]
[IMPORT: node_modules/discord.js/src/sharding/ShardClientUtil.js -> ../util/Util]
[EXTERNAL: node_modules/discord.js/src/sharding/ShardClientUtil.js imports worker_threads]
[IMPORT: node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildInviteManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildInviteManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildInviteManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/GuildInviteManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildInviteManager.js -> ../structures/Invite]
[IMPORT: node_modules/discord.js/src/managers/GuildInviteManager.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/structures/ApplicationCommand.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/ApplicationCommand.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/ApplicationCommand.js -> fast-deep-equal]
[IMPORT: node_modules/discord.js/src/structures/ApplicationCommand.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/ApplicationCommand.js -> ../managers/ApplicationCommandPermissionsManager]
[IMPORT: node_modules/discord.js/src/structures/ApplicationCommand.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/structures/ContainerComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/structures/ContainerComponent.js -> ../util/Components]
[IMPORT: node_modules/discord.js/src/structures/Attachment.js -> ../util/AttachmentFlagsBitField.js]
[IMPORT: node_modules/discord.js/src/structures/Attachment.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/BaseSelectMenuComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/util/ActivityFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/ActivityFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/structures/SeparatorComponent.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/SeparatorComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js -> ./BaseManager]
[IMPORT: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js -> ../errors]
[EXTERNAL: node_modules/discord.js/src/client/Client.js imports process]
[IMPORT: node_modules/discord.js/src/client/Client.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/client/Client.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/client/Client.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ./BaseClient]
[IMPORT: node_modules/discord.js/src/client/Client.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ./voice/ClientVoiceManager]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ./websocket/WebSocketManager]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../errors]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../managers/BaseGuildEmojiManager]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../managers/ChannelManager]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../managers/GuildManager]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../managers/UserManager]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../sharding/ShardClientUtil]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/ClientPresence]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/GuildPreview]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/GuildTemplate]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/Invite]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/SoundboardSound]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/Sticker]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/StickerPack]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/VoiceRegion]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/Webhook]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../structures/Widget]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../util/Events]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../util/IntentsBitField]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../util/Options]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../util/Status]
[IMPORT: node_modules/discord.js/src/client/Client.js -> ../util/Sweepers]
[EXTERNAL: node_modules/discord.js/src/client/Client.js imports worker_threads]
[IMPORT: node_modules/discord.js/src/structures/ForumChannel.js -> ./ThreadOnlyChannel]
[IMPORT: node_modules/discord.js/src/structures/InteractionWebhook.js -> ./Webhook]
[IMPORT: node_modules/discord.js/src/structures/ButtonBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/ButtonBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/ButtonBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/ButtonBuilder.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/InteractionResponse.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/InteractionResponse.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/InteractionResponse.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/InteractionResponse.js -> ./InteractionCollector]
[IMPORT: node_modules/discord.js/src/structures/ButtonInteraction.js -> ./MessageComponentInteraction]
[IMPORT: node_modules/discord.js/src/structures/AnonymousGuild.js -> ./BaseGuild]
[IMPORT: node_modules/discord.js/src/structures/InviteGuild.js -> ./AnonymousGuild]
[IMPORT: node_modules/discord.js/src/structures/InviteGuild.js -> ./WelcomeScreen]
[IMPORT: node_modules/discord.js/src/util/RoleFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/RoleFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/structures/ThumbnailComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/structures/ThumbnailComponent.js -> ./UnfurledMediaItem]
[IMPORT: node_modules/discord.js/src/structures/SectionComponent.js -> ./Component]
[IMPORT: node_modules/discord.js/src/structures/SectionComponent.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Components.js]
[IMPORT: node_modules/discord.js/src/structures/EmbedBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/EmbedBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/EmbedBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/EmbedBuilder.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/UserSelectMenuBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/UserSelectMenuBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/UserSelectMenuBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js -> ./GuildChannel]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js]
[IMPORT: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js -> ../managers/GuildMessageManager]
[IMPORT: node_modules/discord.js/src/structures/StageChannel.js -> ./BaseGuildVoiceChannel]
[EXTERNAL: node_modules/discord.js/src/managers/RoleManager.js imports process]
[IMPORT: node_modules/discord.js/src/managers/RoleManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/RoleManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/RoleManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/RoleManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/RoleManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/RoleManager.js -> ../structures/Role]
[IMPORT: node_modules/discord.js/src/managers/RoleManager.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/managers/RoleManager.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/managers/RoleManager.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/BaseChannel.js -> @discordjs/formatters]
[IMPORT: node_modules/discord.js/src/structures/BaseChannel.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/BaseChannel.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/BaseChannel.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/BaseChannel.js -> ../util/ChannelFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/BaseChannel.js -> ../util/Constants]
[IMPORT: node_modules/discord.js/src/managers/GuildEmojiManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildEmojiManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildEmojiManager.js -> ./BaseGuildEmojiManager]
[IMPORT: node_modules/discord.js/src/managers/GuildEmojiManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildEmojiManager.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/structures/AutocompleteInteraction.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/AutocompleteInteraction.js -> ./BaseInteraction]
[IMPORT: node_modules/discord.js/src/structures/AutocompleteInteraction.js -> ./CommandInteractionOptionResolver]
[IMPORT: node_modules/discord.js/src/structures/AutocompleteInteraction.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/CachedManager.js -> ./DataManager]
[IMPORT: node_modules/discord.js/src/managers/CachedManager.js -> ../util/Symbols]
[IMPORT: node_modules/discord.js/src/structures/PermissionOverwrites.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/PermissionOverwrites.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/PermissionOverwrites.js -> ./Role]
[IMPORT: node_modules/discord.js/src/structures/PermissionOverwrites.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/PermissionOverwrites.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/structures/CategoryChannel.js -> ./GuildChannel]
[IMPORT: node_modules/discord.js/src/structures/CategoryChannel.js -> /opt/git/checkrate/node_modules/discord.js/src/managers/CategoryChannelChildManager.js]
[IMPORT: node_modules/discord.js/src/structures/AutoModerationActionExecution.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/NewsChannel.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/NewsChannel.js -> ./BaseGuildTextChannel]
[IMPORT: node_modules/discord.js/src/structures/NewsChannel.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js -> ./BaseSelectMenuComponent]
[IMPORT: node_modules/discord.js/src/structures/MediaChannel.js -> ./ThreadOnlyChannel]
[IMPORT: node_modules/discord.js/src/structures/UserSelectMenuComponent.js -> ./BaseSelectMenuComponent]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ./AnonymousGuild]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ./GuildAuditLogs]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ./GuildOnboarding]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ./GuildPreview]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ./GuildTemplate]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ./Integration]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ./Webhook]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ./WelcomeScreen]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/AutoModerationRuleManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/GuildApplicationCommandManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/GuildBanManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/GuildChannelManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/GuildEmojiManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/GuildInviteManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/GuildMemberManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/GuildScheduledEventManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/GuildSoundboardSoundManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/GuildStickerManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/PresenceManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/RoleManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/StageInstanceManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../managers/VoiceStateManager]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../util/Status]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../util/SystemChannelFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../util/Transformers.js]
[IMPORT: node_modules/discord.js/src/structures/Guild.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/CommandInteraction.js -> ./Attachment]
[IMPORT: node_modules/discord.js/src/structures/CommandInteraction.js -> ./BaseInteraction]
[IMPORT: node_modules/discord.js/src/structures/CommandInteraction.js -> ./InteractionWebhook]
[IMPORT: node_modules/discord.js/src/structures/CommandInteraction.js -> ./interfaces/InteractionResponses]
[IMPORT: node_modules/discord.js/src/structures/AttachmentBuilder.js -> ../util/Util]
[EXTERNAL: node_modules/discord.js/src/sharding/ShardingManager.js imports events]
[EXTERNAL: node_modules/discord.js/src/sharding/ShardingManager.js imports fs]
[EXTERNAL: node_modules/discord.js/src/sharding/ShardingManager.js imports path]
[EXTERNAL: node_modules/discord.js/src/sharding/ShardingManager.js imports process]
[EXTERNAL: node_modules/discord.js/src/sharding/ShardingManager.js imports timers/promises]
[IMPORT: node_modules/discord.js/src/sharding/ShardingManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/sharding/ShardingManager.js -> ./Shard]
[IMPORT: node_modules/discord.js/src/sharding/ShardingManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/sharding/ShardingManager.js -> ../util/Util]
[EXTERNAL: node_modules/discord.js/src/structures/ActionRow.js imports util]
[IMPORT: node_modules/discord.js/src/structures/ActionRow.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/ActionRow.js -> ./Component]
[IMPORT: node_modules/discord.js/src/structures/ActionRow.js -> ../util/Components]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js -> ./BaseInteraction]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js -> ./InteractionWebhook]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js -> ./ModalSubmitFields]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js -> ./interfaces/InteractionResponses]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js -> ./Message]
[IMPORT: node_modules/discord.js/src/structures/ModalSubmitInteraction.js -> ./Attachment]
[IMPORT: node_modules/discord.js/src/managers/GuildStickerManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildStickerManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildStickerManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/GuildStickerManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildStickerManager.js -> ../structures/MessagePayload]
[IMPORT: node_modules/discord.js/src/managers/GuildStickerManager.js -> ../structures/Sticker]
[IMPORT: node_modules/discord.js/src/managers/GuildScheduledEventManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildScheduledEventManager.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/managers/GuildScheduledEventManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildScheduledEventManager.js -> ./CachedManager]
[IMPORT: node_modules/discord.js/src/managers/GuildScheduledEventManager.js -> ../errors]
[IMPORT: node_modules/discord.js/src/managers/GuildScheduledEventManager.js -> ../structures/GuildScheduledEvent]
[IMPORT: node_modules/discord.js/src/managers/GuildScheduledEventManager.js -> ../util/DataResolver]
[IMPORT: node_modules/discord.js/src/managers/GuildScheduledEventManager.js -> ../util/Transformers]
[IMPORT: node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js -> ./Emoji.js]
[IMPORT: node_modules/discord.js/src/util/ApplicationFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/ApplicationFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/structures/GuildChannel.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/GuildChannel.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/GuildChannel.js -> ./BaseChannel]
[IMPORT: node_modules/discord.js/src/structures/GuildChannel.js -> ../errors]
[IMPORT: node_modules/discord.js/src/structures/GuildChannel.js -> ../managers/PermissionOverwriteManager]
[IMPORT: node_modules/discord.js/src/structures/GuildChannel.js -> ../util/Constants]
[IMPORT: node_modules/discord.js/src/structures/GuildChannel.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/structures/GuildChannel.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> @discordjs/formatters]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> @discordjs/util]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> fast-deep-equal]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/index.js]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> /opt/git/checkrate/node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORT: node_modules/@discordjs/builders/dist/index.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/BaseGuild.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/structures/BaseGuild.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/BaseGuild.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/BaseGuild.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/WelcomeChannel.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/WelcomeChannel.js -> ./Emoji]
[IMPORT: node_modules/discord.js/src/structures/IntegrationApplication.js -> ./interfaces/Application]
[IMPORT: node_modules/discord.js/src/structures/MessageComponentInteraction.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/MessageComponentInteraction.js -> ./BaseInteraction]
[IMPORT: node_modules/discord.js/src/structures/MessageComponentInteraction.js -> ./InteractionWebhook]
[IMPORT: node_modules/discord.js/src/structures/MessageComponentInteraction.js -> /opt/git/checkrate/node_modules/discord.js/src/structures/interfaces/InteractionResponses.js]
[IMPORT: node_modules/discord.js/src/structures/MessageComponentInteraction.js -> ../util/Components]
[IMPORT: node_modules/discord.js/src/structures/MessageComponentInteraction.js -> ./Message]
[IMPORT: node_modules/discord.js/src/structures/Team.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/Team.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/Team.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/Team.js -> ./TeamMember]
[IMPORT: node_modules/discord.js/src/structures/WelcomeScreen.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/WelcomeScreen.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/WelcomeScreen.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/WelcomeScreen.js -> ./WelcomeChannel]
[IMPORT: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js -> ./CommandInteraction]
[IMPORT: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js -> ./CommandInteractionOptionResolver]
[IMPORT: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js -> ./Message]
[IMPORT: node_modules/discord.js/src/structures/OAuth2Guild.js -> ./BaseGuild]
[IMPORT: node_modules/discord.js/src/structures/OAuth2Guild.js -> ../util/PermissionsBitField]
[EXTERNAL: node_modules/discord.js/src/structures/BaseInteraction.js imports util]
[IMPORT: node_modules/discord.js/src/structures/BaseInteraction.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/BaseInteraction.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/BaseInteraction.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/BaseInteraction.js -> ./Base]
[IMPORT: node_modules/discord.js/src/structures/BaseInteraction.js -> ../util/Constants]
[IMPORT: node_modules/discord.js/src/structures/BaseInteraction.js -> ../util/PermissionsBitField]
[IMPORT: node_modules/discord.js/src/managers/DMMessageManager.js -> ./MessageManager]
[EXTERNAL: node_modules/discord.js/src/util/Util.js imports path]
[EXTERNAL: node_modules/discord.js/src/util/Util.js imports process]
[IMPORT: node_modules/discord.js/src/util/Util.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/util/Util.js -> discord-api-types/v10]
[EXTERNAL: node_modules/discord.js/src/util/Util.js imports undici]
[IMPORT: node_modules/discord.js/src/util/Util.js -> ./Colors]
[IMPORT: node_modules/discord.js/src/util/Util.js -> ../errors]
[IMPORT: node_modules/discord.js/src/util/Util.js -> ../structures/Attachment]
[IMPORT: node_modules/discord.js/src/util/Util.js -> ../structures/GuildChannel]
[IMPORT: node_modules/discord.js/src/util/Util.js -> ../structures/SKU.js]
[IMPORT: node_modules/discord.js/src/structures/DirectoryChannel.js -> ./BaseChannel]
[IMPORT: node_modules/discord.js/src/structures/UserSelectMenuInteraction.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/UserSelectMenuInteraction.js -> ./MessageComponentInteraction]
[IMPORT: node_modules/discord.js/src/structures/UserSelectMenuInteraction.js -> ../util/Events]
[EXTERNAL: node_modules/discord.js/src/structures/PollAnswer.js imports process]
[IMPORT: node_modules/discord.js/src/structures/PollAnswer.js -> ./Base.js]
[IMPORT: node_modules/discord.js/src/structures/PollAnswer.js -> ./Emoji.js]
[IMPORT: node_modules/discord.js/src/structures/PollAnswer.js -> ../managers/PollAnswerVoterManager.js]
[IMPORT: node_modules/discord.js/src/structures/MessageCollector.js -> ./interfaces/Collector]
[IMPORT: node_modules/discord.js/src/structures/MessageCollector.js -> ../util/Events]
[IMPORT: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js -> ./CachedManager.js]
[IMPORT: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js -> ../errors/index.js]
[IMPORT: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js -> ../structures/SoundboardSound.js]
[IMPORT: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js -> ../util/DataResolver.js]
[IMPORT: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js -> /opt/git/checkrate/node_modules/magic-bytes.js/dist/index.js]
[IMPORT: node_modules/discord.js/src/structures/Base.js -> ../util/Util]
[IMPORT: node_modules/discord.js/src/util/GuildMemberFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/GuildMemberFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/util/UserFlagsBitField.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/UserFlagsBitField.js -> ./BitField]
[IMPORT: node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js -> ../util/Transformers]
[IMPORT: node_modules/limiter/dist/cjs/index.js -> /opt/git/checkrate/node_modules/limiter/dist/cjs/RateLimiter.js]
[IMPORT: node_modules/limiter/dist/cjs/index.js -> /opt/git/checkrate/node_modules/limiter/dist/cjs/TokenBucket.js]
[IMPORT: node_modules/discord.js/src/errors/index.js -> ./DJSError]
[IMPORT: node_modules/discord.js/src/errors/index.js -> ./ErrorCodes]
[IMPORT: node_modules/discord.js/src/errors/index.js -> /opt/git/checkrate/node_modules/discord.js/src/errors/Messages.js]
[EXTERNAL: node_modules/discord.js/src/util/DataResolver.js imports buffer]
[EXTERNAL: node_modules/discord.js/src/util/DataResolver.js imports fs/promises]
[EXTERNAL: node_modules/discord.js/src/util/DataResolver.js imports path]
[EXTERNAL: node_modules/discord.js/src/util/DataResolver.js imports undici]
[IMPORT: node_modules/discord.js/src/util/DataResolver.js -> ../errors]
[IMPORT: node_modules/discord.js/src/util/DataResolver.js -> ../structures/Invite]
[IMPORT: node_modules/discord.js/src/util/DataResolver.js -> ../structures/GuildTemplate]
[IMPORT: node_modules/discord.js/src/util/Transformers.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/util/Transformers.js -> /opt/git/checkrate/node_modules/lodash.snakecase/index.js]
[IMPORT: node_modules/discord.js/src/util/Transformers.js -> ./Util]
[IMPORT: node_modules/discord.js/src/errors/Messages.js -> ./ErrorCodes]
[IMPORT: node_modules/limiter/dist/cjs/RateLimiter.js -> ./TokenBucket]
[IMPORT: node_modules/limiter/dist/cjs/RateLimiter.js -> ./clock]
[IMPORT: node_modules/limiter/dist/cjs/TokenBucket.js -> /opt/git/checkrate/node_modules/limiter/dist/cjs/clock.js]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> @sapphire/snowflake]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> ../../errors]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> ../../util/Constants]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> ../InteractionCollector]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> ../MessageCollector]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> ../MessagePayload]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> ../User]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> ../GuildMember]
[IMPORT: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js -> ../../managers/GuildMessageManager]
[IMPORT: node_modules/discord.js/src/util/Components.js -> @discordjs/builders]
[IMPORT: node_modules/discord.js/src/util/Components.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/ActionRow]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/ActionRowBuilder]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/ButtonBuilder]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/ButtonComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/ChannelSelectMenuBuilder]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/ChannelSelectMenuComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/Component]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/ContainerComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/FileComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/LabelComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/MediaGalleryComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/MentionableSelectMenuBuilder]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/MentionableSelectMenuComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/RoleSelectMenuBuilder]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/RoleSelectMenuComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/SectionComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/SeparatorComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/StringSelectMenuBuilder]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/StringSelectMenuComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/TextDisplayComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/TextInputBuilder]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/TextInputComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/ThumbnailComponent]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/UserSelectMenuBuilder]
[IMPORT: node_modules/discord.js/src/util/Components.js -> ../structures/UserSelectMenuComponent]
[IMPORT: node_modules/magic-bytes.js/dist/index.js -> /opt/git/checkrate/node_modules/magic-bytes.js/dist/model/pattern-tree.js]
[IMPORT: node_modules/magic-bytes.js/dist/index.js -> /opt/git/checkrate/node_modules/magic-bytes.js/dist/model/toHex.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ChannelCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ChannelDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ChannelUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/EntitlementCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/EntitlementDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/EntitlementUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildBanAdd.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildBanRemove.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildEmojiCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildEmojiDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildMemberRemove.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildMemberUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildRoleCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildRoleDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildRoleUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildStickerCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildStickerDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildStickerUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildStickersUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/GuildUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/InteractionCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/InviteCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/InviteDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageDeleteBulk.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageReactionAdd.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageReactionRemove.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/MessageUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/PresenceUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/StageInstanceCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/StageInstanceDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/StageInstanceUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadCreate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadDelete.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadListSync.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/TypingStart.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/UserUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/VoiceStateUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ActionsManager.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/WebhooksUpdate.js]
[IMPORT: node_modules/discord.js/src/client/actions/ChannelUpdate.js -> /opt/git/checkrate/node_modules/discord.js/src/client/actions/Action.js]
[IMPORT: node_modules/discord.js/src/client/actions/ChannelUpdate.js -> /opt/git/checkrate/node_modules/discord.js/src/util/Channels.js]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildMemberRemove.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildMemberRemove.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildMemberRemove.js -> ../../util/Status]
[IMPORT: node_modules/discord.js/src/client/actions/GuildBanAdd.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildBanAdd.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildRoleCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildRoleCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildRoleDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildRoleDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/EntitlementUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/EntitlementUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildRoleUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildRoleUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js -> ./Action.js]
[IMPORT: node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js -> ../../util/Events.js]
[IMPORT: node_modules/discord.js/src/client/actions/GuildEmojiCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildEmojiCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/InviteCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/InviteCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/StageInstanceDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/StageInstanceDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/MessageReactionAdd.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessageReactionAdd.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/MessageReactionAdd.js -> ../../util/Partials]
[IMPORT: node_modules/discord.js/src/client/actions/GuildStickerCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildStickerCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/PresenceUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/PresenceUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/PresenceUpdate.js -> ../../util/Partials]
[EXTERNAL: node_modules/discord.js/src/client/actions/WebhooksUpdate.js imports process]
[IMPORT: node_modules/discord.js/src/client/actions/WebhooksUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/EntitlementCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/EntitlementCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js -> ../../structures/GuildAuditLogsEntry]
[IMPORT: node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildBanRemove.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildBanRemove.js -> ../../structures/GuildBan]
[IMPORT: node_modules/discord.js/src/client/actions/GuildBanRemove.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildEmojiDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildEmojiDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/StageInstanceCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/StageInstanceCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/VoiceStateUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/VoiceStateUpdate.js -> ../../structures/VoiceState]
[IMPORT: node_modules/discord.js/src/client/actions/VoiceStateUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/MessageDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessageDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildMemberUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildMemberUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildMemberUpdate.js -> ../../util/Status]
[IMPORT: node_modules/discord.js/src/client/actions/MessageCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessageCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/MessageReactionRemove.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessageReactionRemove.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/ChannelDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ChannelDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/InviteDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/InviteDelete.js -> ../../structures/Invite]
[IMPORT: node_modules/discord.js/src/client/actions/InviteDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/MessageUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/StageInstanceUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/StageInstanceUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/ChannelCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ChannelCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildStickersUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessageDeleteBulk.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/client/actions/MessageDeleteBulk.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/MessageDeleteBulk.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadListSync.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadListSync.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadListSync.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js -> ../../structures/AutoModerationActionExecution]
[IMPORT: node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildStickerUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildStickerUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/ThreadCreate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/GuildStickerDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/GuildStickerDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/TypingStart.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/TypingStart.js -> ../../structures/Typing]
[IMPORT: node_modules/discord.js/src/client/actions/TypingStart.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/UserUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/UserUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/EntitlementDelete.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/EntitlementDelete.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js -> ../../util/Events]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ./Action]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/AutocompleteInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/ButtonInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/ChannelSelectMenuInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/ChatInputCommandInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/MentionableSelectMenuInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/MessageContextMenuCommandInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/ModalSubmitInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/PrimaryEntryPointCommandInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/RoleSelectMenuInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/StringSelectMenuInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/UserContextMenuCommandInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../structures/UserSelectMenuInteraction]
[IMPORT: node_modules/discord.js/src/client/actions/InteractionCreate.js -> ../../util/Events]
[IMPORT: node_modules/magic-bytes.js/dist/model/pattern-tree.js -> ./toHex]
[IMPORT: node_modules/magic-bytes.js/dist/model/pattern-tree.js -> /opt/git/checkrate/node_modules/magic-bytes.js/dist/model/tree.js]
[EXTERNAL: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js imports process]
[EXTERNAL: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js imports util]
[IMPORT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js -> @discordjs/rest]
[IMPORT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js -> ../../errors]
[IMPORT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js -> ../../util/MessageFlagsBitField]
[IMPORT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js -> ../InteractionCallbackResponse]
[IMPORT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js -> ../InteractionCollector]
[IMPORT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js -> ../InteractionResponse]
[IMPORT: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js -> ../MessagePayload]
[IMPORT: node_modules/limiter/dist/cjs/clock.js -> /opt/git/checkrate/node_modules/just-performance/dist/cjs/node.js]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> @discordjs/util]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/CategoryChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/DMChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/NewsChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/StageChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/TextChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/ThreadChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/VoiceChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/DirectoryChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/PartialGroupDMChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/ForumChannel]
[IMPORT: node_modules/discord.js/src/util/Channels.js -> ../structures/MediaChannel]
[IMPORT: node_modules/discord.js/src/client/actions/Action.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/client/actions/Action.js -> ../../structures/Poll.js]
[IMPORT: node_modules/discord.js/src/client/actions/Action.js -> ../../structures/PollAnswer.js]
[IMPORT: node_modules/discord.js/src/client/actions/Action.js -> ../../util/Partials.js]
[EXTERNAL: node_modules/just-performance/dist/cjs/node.js imports perf_hooks]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/common.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/application.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/auditLog.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/autoModeration.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/channel.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/gateway.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/guild.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/interactions.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/invite.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/message.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/monetization.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/oauth2.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/permissions.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/poll.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/stageInstance.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/sticker.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/teams.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/user.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/webhook.js]
[IMPORT: node_modules/discord-api-types/rest/v10/index.js -> ../../utils/internals]
[IMPORT: node_modules/discord-api-types/rest/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/rest/common.js]
[IMPORT: node_modules/discord-api-types/rest/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/rest/v10/channel.js]
[IMPORT: node_modules/discord-api-types/rest/v10/index.js -> /opt/git/checkrate/node_modules/discord-api-types/rest/v10/monetization.js]
[IMPORT: node_modules/discord-api-types/utils/v10.js -> ../payloads/v10/index]
[IMPORT: node_modules/discord-api-types/rpc/v10.js -> /opt/git/checkrate/node_modules/discord-api-types/rpc/common.js]
[IMPORT: node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js -> ./MessageManager]
[IMPORT: node_modules/ts-mixer/dist/cjs/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/mixins.js]
[IMPORT: node_modules/ts-mixer/dist/cjs/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/settings.js]
[IMPORT: node_modules/ts-mixer/dist/cjs/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/decorator.js]
[IMPORT: node_modules/ts-mixer/dist/cjs/index.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/mixin-tracking.js]
[IMPORT: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs -> /opt/git/checkrate/node_modules/lodash/get.js]
[IMPORT: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs -> /opt/git/checkrate/node_modules/fast-deep-equal/es6/index.js]
[IMPORT: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs -> /opt/git/checkrate/node_modules/lodash/uniqWith.js]
[IMPORT: node_modules/discord.js/src/managers/CategoryChannelChildManager.js -> ./DataManager]
[IMPORT: node_modules/discord.js/src/managers/CategoryChannelChildManager.js -> ../structures/GuildChannel]
[IMPORT: node_modules/discord-api-types/payloads/v10/interactions.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/interactions.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/responses.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js]
[IMPORT: node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js]
[IMPORT: node_modules/lodash/uniqWith.js -> /opt/git/checkrate/node_modules/lodash/_baseUniq.js]
[IMPORT: node_modules/lodash/get.js -> /opt/git/checkrate/node_modules/lodash/_baseGet.js]
[IMPORT: node_modules/ts-mixer/dist/cjs/mixins.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/proxy.js]
[IMPORT: node_modules/ts-mixer/dist/cjs/mixins.js -> ./settings]
[IMPORT: node_modules/ts-mixer/dist/cjs/mixins.js -> ./util]
[IMPORT: node_modules/ts-mixer/dist/cjs/mixins.js -> ./decorator]
[IMPORT: node_modules/ts-mixer/dist/cjs/mixins.js -> ./mixin-tracking]
[IMPORT: node_modules/ts-mixer/dist/cjs/mixin-tracking.js -> /opt/git/checkrate/node_modules/ts-mixer/dist/cjs/util.js]
[IMPORT: node_modules/ts-mixer/dist/cjs/decorator.js -> ./util]
[IMPORT: node_modules/ts-mixer/dist/cjs/decorator.js -> ./mixin-tracking]
[IMPORT: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js -> /opt/git/checkrate/node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/APPLICATION_COMMAND_PERMISSIONS_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_ACTION_EXECUTION.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_AUDIT_LOG_ENTRY_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_ADD.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_REMOVE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_STICKERS_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/INTERACTION_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_ADD.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_REMOVE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/READY.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/RESUMED.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_CREATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_DELETE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_LIST_SYNC.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBERS_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBER_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/index.js -> /opt/git/checkrate/node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js -> ../../../structures/VoiceChannelEffect]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js -> ../../../util/Events.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js -> ../../../util/Status]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js -> ../../../util/Status]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js -> ../../../util/Events.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js -> ../../../util/Events.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js -> ../../../util/Events]
[EXTERNAL: node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js imports process]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js -> discord-api-types/v10]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/READY.js -> ../../../structures/ClientApplication]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/READY.js -> ../../../structures/ClientUser]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/RESUMED.js -> ../../../util/Events]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js -> @discordjs/collection]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js -> ../../../util/Events.js]
[IMPORT: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js -> ../../../util/Events]
[IMPORT: node_modules/ts-mixer/dist/cjs/proxy.js -> ./util]
[IMPORT: node_modules/lodash/_baseGet.js -> /opt/git/checkrate/node_modules/lodash/_castPath.js]
[IMPORT: node_modules/lodash/_baseGet.js -> /opt/git/checkrate/node_modules/lodash/_toKey.js]
[IMPORT: node_modules/lodash/_baseUniq.js -> /opt/git/checkrate/node_modules/lodash/_SetCache.js]
[IMPORT: node_modules/lodash/_baseUniq.js -> /opt/git/checkrate/node_modules/lodash/_arrayIncludes.js]
[IMPORT: node_modules/lodash/_baseUniq.js -> /opt/git/checkrate/node_modules/lodash/_arrayIncludesWith.js]
[IMPORT: node_modules/lodash/_baseUniq.js -> /opt/git/checkrate/node_modules/lodash/_cacheHas.js]
[IMPORT: node_modules/lodash/_baseUniq.js -> /opt/git/checkrate/node_modules/lodash/_createSet.js]
[IMPORT: node_modules/lodash/_baseUniq.js -> /opt/git/checkrate/node_modules/lodash/_setToArray.js]
[IMPORT: node_modules/lodash/_arrayIncludes.js -> /opt/git/checkrate/node_modules/lodash/_baseIndexOf.js]
[IMPORT: node_modules/lodash/_SetCache.js -> /opt/git/checkrate/node_modules/lodash/_MapCache.js]
[IMPORT: node_modules/lodash/_SetCache.js -> /opt/git/checkrate/node_modules/lodash/_setCacheAdd.js]
[IMPORT: node_modules/lodash/_SetCache.js -> /opt/git/checkrate/node_modules/lodash/_setCacheHas.js]
[IMPORT: node_modules/lodash/_createSet.js -> /opt/git/checkrate/node_modules/lodash/_Set.js]
[IMPORT: node_modules/lodash/_createSet.js -> /opt/git/checkrate/node_modules/lodash/noop.js]
[IMPORT: node_modules/lodash/_createSet.js -> ./_setToArray]
[IMPORT: node_modules/lodash/_castPath.js -> /opt/git/checkrate/node_modules/lodash/isArray.js]
[IMPORT: node_modules/lodash/_castPath.js -> /opt/git/checkrate/node_modules/lodash/_isKey.js]
[IMPORT: node_modules/lodash/_castPath.js -> /opt/git/checkrate/node_modules/lodash/_stringToPath.js]
[IMPORT: node_modules/lodash/_castPath.js -> /opt/git/checkrate/node_modules/lodash/toString.js]
[IMPORT: node_modules/lodash/_toKey.js -> /opt/git/checkrate/node_modules/lodash/isSymbol.js]
[IMPORT: node_modules/lodash/_baseIndexOf.js -> /opt/git/checkrate/node_modules/lodash/_baseFindIndex.js]
[IMPORT: node_modules/lodash/_baseIndexOf.js -> /opt/git/checkrate/node_modules/lodash/_baseIsNaN.js]
[IMPORT: node_modules/lodash/_baseIndexOf.js -> /opt/git/checkrate/node_modules/lodash/_strictIndexOf.js]
[IMPORT: node_modules/lodash/isSymbol.js -> /opt/git/checkrate/node_modules/lodash/_baseGetTag.js]
[IMPORT: node_modules/lodash/isSymbol.js -> /opt/git/checkrate/node_modules/lodash/isObjectLike.js]
[IMPORT: node_modules/lodash/_stringToPath.js -> /opt/git/checkrate/node_modules/lodash/_memoizeCapped.js]
[IMPORT: node_modules/lodash/_isKey.js -> ./isArray]
[IMPORT: node_modules/lodash/_isKey.js -> ./isSymbol]
[IMPORT: node_modules/lodash/toString.js -> /opt/git/checkrate/node_modules/lodash/_baseToString.js]
[IMPORT: node_modules/lodash/_Set.js -> /opt/git/checkrate/node_modules/lodash/_getNative.js]
[IMPORT: node_modules/lodash/_Set.js -> /opt/git/checkrate/node_modules/lodash/_root.js]
[IMPORT: node_modules/lodash/_MapCache.js -> /opt/git/checkrate/node_modules/lodash/_mapCacheClear.js]
[IMPORT: node_modules/lodash/_MapCache.js -> /opt/git/checkrate/node_modules/lodash/_mapCacheDelete.js]
[IMPORT: node_modules/lodash/_MapCache.js -> /opt/git/checkrate/node_modules/lodash/_mapCacheGet.js]
[IMPORT: node_modules/lodash/_MapCache.js -> /opt/git/checkrate/node_modules/lodash/_mapCacheHas.js]
[IMPORT: node_modules/lodash/_MapCache.js -> /opt/git/checkrate/node_modules/lodash/_mapCacheSet.js]
[IMPORT: node_modules/lodash/_baseGetTag.js -> /opt/git/checkrate/node_modules/lodash/_Symbol.js]
[IMPORT: node_modules/lodash/_baseGetTag.js -> /opt/git/checkrate/node_modules/lodash/_getRawTag.js]
[IMPORT: node_modules/lodash/_baseGetTag.js -> /opt/git/checkrate/node_modules/lodash/_objectToString.js]
[IMPORT: node_modules/lodash/_memoizeCapped.js -> /opt/git/checkrate/node_modules/lodash/memoize.js]
[IMPORT: node_modules/lodash/_baseToString.js -> ./_Symbol]
[IMPORT: node_modules/lodash/_baseToString.js -> /opt/git/checkrate/node_modules/lodash/_arrayMap.js]
[IMPORT: node_modules/lodash/_baseToString.js -> ./isArray]
[IMPORT: node_modules/lodash/_baseToString.js -> ./isSymbol]
[IMPORT: node_modules/lodash/_root.js -> /opt/git/checkrate/node_modules/lodash/_freeGlobal.js]
[IMPORT: node_modules/lodash/_getNative.js -> /opt/git/checkrate/node_modules/lodash/_baseIsNative.js]
[IMPORT: node_modules/lodash/_getNative.js -> /opt/git/checkrate/node_modules/lodash/_getValue.js]
[IMPORT: node_modules/lodash/memoize.js -> ./_MapCache]
[IMPORT: node_modules/lodash/_Symbol.js -> ./_root]
[IMPORT: node_modules/lodash/_getRawTag.js -> ./_Symbol]
[IMPORT: node_modules/lodash/_mapCacheClear.js -> /opt/git/checkrate/node_modules/lodash/_Hash.js]
[IMPORT: node_modules/lodash/_mapCacheClear.js -> /opt/git/checkrate/node_modules/lodash/_ListCache.js]
[IMPORT: node_modules/lodash/_mapCacheClear.js -> /opt/git/checkrate/node_modules/lodash/_Map.js]
[IMPORT: node_modules/lodash/_mapCacheGet.js -> /opt/git/checkrate/node_modules/lodash/_getMapData.js]
[IMPORT: node_modules/lodash/_mapCacheHas.js -> ./_getMapData]
[IMPORT: node_modules/lodash/_mapCacheSet.js -> ./_getMapData]
[IMPORT: node_modules/lodash/_mapCacheDelete.js -> ./_getMapData]
[IMPORT: node_modules/lodash/_baseIsNative.js -> /opt/git/checkrate/node_modules/lodash/isFunction.js]
[IMPORT: node_modules/lodash/_baseIsNative.js -> /opt/git/checkrate/node_modules/lodash/_isMasked.js]
[IMPORT: node_modules/lodash/_baseIsNative.js -> /opt/git/checkrate/node_modules/lodash/isObject.js]
[IMPORT: node_modules/lodash/_baseIsNative.js -> /opt/git/checkrate/node_modules/lodash/_toSource.js]
[IMPORT: node_modules/lodash/_getMapData.js -> /opt/git/checkrate/node_modules/lodash/_isKeyable.js]
[IMPORT: node_modules/lodash/_Map.js -> ./_getNative]
[IMPORT: node_modules/lodash/_Map.js -> ./_root]
[IMPORT: node_modules/lodash/_Hash.js -> /opt/git/checkrate/node_modules/lodash/_hashClear.js]
[IMPORT: node_modules/lodash/_Hash.js -> /opt/git/checkrate/node_modules/lodash/_hashDelete.js]
[IMPORT: node_modules/lodash/_Hash.js -> /opt/git/checkrate/node_modules/lodash/_hashGet.js]
[IMPORT: node_modules/lodash/_Hash.js -> /opt/git/checkrate/node_modules/lodash/_hashHas.js]
[IMPORT: node_modules/lodash/_Hash.js -> /opt/git/checkrate/node_modules/lodash/_hashSet.js]
[IMPORT: node_modules/lodash/_ListCache.js -> /opt/git/checkrate/node_modules/lodash/_listCacheClear.js]
[IMPORT: node_modules/lodash/_ListCache.js -> /opt/git/checkrate/node_modules/lodash/_listCacheDelete.js]
[IMPORT: node_modules/lodash/_ListCache.js -> /opt/git/checkrate/node_modules/lodash/_listCacheGet.js]
[IMPORT: node_modules/lodash/_ListCache.js -> /opt/git/checkrate/node_modules/lodash/_listCacheHas.js]
[IMPORT: node_modules/lodash/_ListCache.js -> /opt/git/checkrate/node_modules/lodash/_listCacheSet.js]
[IMPORT: node_modules/lodash/_isMasked.js -> /opt/git/checkrate/node_modules/lodash/_coreJsData.js]
[IMPORT: node_modules/lodash/isFunction.js -> ./_baseGetTag]
[IMPORT: node_modules/lodash/isFunction.js -> ./isObject]
[IMPORT: node_modules/lodash/_coreJsData.js -> ./_root]
[IMPORT: node_modules/lodash/_listCacheDelete.js -> /opt/git/checkrate/node_modules/lodash/_assocIndexOf.js]
[IMPORT: node_modules/lodash/_listCacheGet.js -> ./_assocIndexOf]
[IMPORT: node_modules/lodash/_listCacheHas.js -> ./_assocIndexOf]
[IMPORT: node_modules/lodash/_listCacheSet.js -> ./_assocIndexOf]
[IMPORT: node_modules/lodash/_hashHas.js -> /opt/git/checkrate/node_modules/lodash/_nativeCreate.js]
[IMPORT: node_modules/lodash/_hashSet.js -> ./_nativeCreate]
[IMPORT: node_modules/lodash/_hashGet.js -> ./_nativeCreate]
[IMPORT: node_modules/lodash/_hashClear.js -> ./_nativeCreate]
[IMPORT: node_modules/lodash/_assocIndexOf.js -> /opt/git/checkrate/node_modules/lodash/eq.js]
[IMPORT: node_modules/lodash/_nativeCreate.js -> ./_getNative]
```

### Reverse Dependencies (Imported By)

```
[IMPORTED_BY: node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/toString.js <- node_modules/lodash/_castPath.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/index.js <- node_modules/discord-api-types/v10.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Guild.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/interfaces/Collector.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/InviteCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ApplicationCommand.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBER_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/_Map.js <- node_modules/lodash/_mapCacheClear.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildAuditLogs.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/limiter/dist/cjs/index.js <- node_modules/discord.js-rate-limiter/dist/rate-limiter.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildPreview.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/InteractionCollector.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Symbols.js <- node_modules/discord.js/src/managers/MessageManager.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/autoModeration.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ActionRow.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessageReactionAdd.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/VoiceStateUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_STICKERS_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/WebhooksUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/mixin-tracking.js <- node_modules/ts-mixer/dist/cjs/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/CategoryChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_mapCacheClear.js <- node_modules/lodash/_MapCache.js]
[IMPORTED_BY: node_modules/discord.js/src/client/Client.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_hashClear.js <- node_modules/lodash/_Hash.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/guild.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ButtonInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js <- node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/InviteDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/poll.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Events.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Events.js <- node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Events.js <- node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Events.js <- node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Events.js <- node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Events.js <- node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/_listCacheSet.js <- node_modules/lodash/_ListCache.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/StickerPack.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/stageInstance.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/StageInstanceDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/_hashHas.js <- node_modules/lodash/_Hash.js]
[IMPORTED_BY: node_modules/lodash/_baseFindIndex.js <- node_modules/lodash/_baseIndexOf.js]
[IMPORTED_BY: node_modules/discord-api-types/rest/common.js <- node_modules/discord-api-types/rest/v10/index.js]
[IMPORTED_BY: node_modules/lodash/_hashDelete.js <- node_modules/lodash/_Hash.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ClientPresence.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/BaseInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/READY.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/invite.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MessageReaction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js <- node_modules/discord.js/src/structures/MessageComponentInteraction.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/EntitlementManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/MessageManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/ThreadMemberManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MediaGalleryItem.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/magic-bytes.js/dist/model/tree.js <- node_modules/magic-bytes.js/dist/model/pattern-tree.js]
[IMPORTED_BY: node_modules/lodash/_coreJsData.js <- node_modules/lodash/_isMasked.js]
[IMPORTED_BY: node_modules/lodash/_baseIsNative.js <- node_modules/lodash/_getNative.js]
[IMPORTED_BY: node_modules/lodash/_getNative.js <- node_modules/lodash/_Set.js]
[IMPORTED_BY: node_modules/lodash/_isKeyable.js <- node_modules/lodash/_getMapData.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/isSymbol.js <- node_modules/lodash/_toKey.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/BaseManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/SKUFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/BaseChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildScheduledEvent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildApplicationCommandManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/application.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord-api-types/utils/internals.js <- node_modules/discord-api-types/v10.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ChannelDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SelectMenuInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/limiter/dist/cjs/TokenBucket.js <- node_modules/limiter/dist/cjs/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/gateway.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildInviteManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/AttachmentFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/AttachmentFlagsBitField.js <- node_modules/discord.js/src/structures/Attachment.js]
[IMPORTED_BY: node_modules/discord.js/src/errors/ErrorCodes.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/AutocompleteInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/AutoModerationActionExecution.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/_interactions/responses.js <- node_modules/discord-api-types/payloads/v10/interactions.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ChatInputCommandInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildMemberManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildMemberRoleManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/@discordjs/builders/dist/index.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/ThreadManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/VoiceStateManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/RESUMED.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/isFunction.js <- node_modules/lodash/_baseIsNative.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/TextChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildPreviewEmoji.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/WebSocketManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/VoiceChannelEffect.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash.snakecase/index.js <- node_modules/discord.js/src/util/Transformers.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/ReactionUserManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_cacheHas.js <- node_modules/lodash/_baseUniq.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildOnboarding.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/Action.js <- node_modules/discord.js/src/client/actions/ChannelUpdate.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/memoize.js <- node_modules/lodash/_memoizeCapped.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/UserUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/index.js <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/index.js <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/index.js <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/index.js <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/index.js <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/index.js <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SoundboardSound.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SoundboardSound.js <- node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ThreadOnlyChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/monetization.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/tslib/tslib.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ModalBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ReactionCollector.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ApplicationRoleConnectionMetadata.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Presence.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Presence.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Presence.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/rest/v10/channel.js <- node_modules/discord-api-types/rest/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_AUDIT_LOG_ENTRY_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/voice/ClientVoiceManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/PartialGroupDMChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/limiter/dist/cjs/clock.js <- node_modules/limiter/dist/cjs/TokenBucket.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/IntegrationApplication.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/@discordjs/rest/dist/index.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ActionsManager.js <- node_modules/discord.js/src/client/Client.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/auditLog.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildForumThreadManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/SubscriptionManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/common.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/THREAD_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/ActivityFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ModalSubmitInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Enums.js <- node_modules/discord.js/src/util/Partials.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Subscription.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/WidgetMember.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_listCacheGet.js <- node_modules/lodash/_ListCache.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Webhook.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/eq.js <- node_modules/lodash/_assocIndexOf.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/_baseGet.js <- node_modules/lodash/get.js]
[IMPORTED_BY: node_modules/lodash/_arrayMap.js <- node_modules/lodash/_baseToString.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Typing.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ThreadChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/magic-bytes.js/dist/model/toHex.js <- node_modules/magic-bytes.js/dist/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MessageComponentInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_arrayIncludes.js <- node_modules/lodash/_baseUniq.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildChannelManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/permissions.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/User.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/User.js <- node_modules/discord.js/src/managers/PollAnswerVoterManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/AttachmentBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/WebSocketShardEvents.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_setCacheHas.js <- node_modules/lodash/_SetCache.js]
[IMPORTED_BY: node_modules/lodash/isObjectLike.js <- node_modules/lodash/isSymbol.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/StringSelectMenuInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/DirectoryChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/CachedManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/utils/v10.js <- node_modules/discord-api-types/v10.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildEmojiManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/channel.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/THREAD_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_REMOVE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/_stringToPath.js <- node_modules/lodash/_castPath.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/StageInstanceUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/util/IntentsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/InteractionCallbackResponse.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/BaseGuild.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/interactions.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/user.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/lodash/_isMasked.js <- node_modules/lodash/_baseIsNative.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildScheduledEventManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MediaGalleryComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/isObject.js <- node_modules/lodash/_baseIsNative.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ThreadDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/message.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/_getValue.js <- node_modules/lodash/_getNative.js]
[IMPORTED_BY: node_modules/discord.js/src/util/ApplicationFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/UserSelectMenuComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_baseIndexOf.js <- node_modules/lodash/_arrayIncludes.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Options.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_Symbol.js <- node_modules/lodash/_baseGetTag.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SectionComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/proxy.js <- node_modules/ts-mixer/dist/cjs/mixins.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Team.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_assocIndexOf.js <- node_modules/lodash/_listCacheDelete.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/VoiceState.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/INTERACTION_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/AutoModerationRuleManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/UserManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_listCacheHas.js <- node_modules/lodash/_ListCache.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Base.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/noop.js <- node_modules/lodash/_createSet.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/CategoryChannelChildManager.js <- node_modules/discord.js/src/structures/CategoryChannel.js]
[IMPORTED_BY: node_modules/discord.js/src/util/BitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/just-performance/dist/cjs/node.js <- node_modules/limiter/dist/cjs/clock.js]
[IMPORTED_BY: node_modules/lodash/_castPath.js <- node_modules/lodash/_baseGet.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/InteractionCallback.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Constants.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/VoiceChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js-rate-limiter/dist/rate-limiter.js <- node_modules/discord.js-rate-limiter/dist/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/RoleSelectMenuComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_mapCacheGet.js <- node_modules/lodash/_MapCache.js]
[IMPORTED_BY: node_modules/discord.js-rate-limiter/dist/index.js <- index.ts]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildTemplate.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/UserSelectMenuBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_arrayIncludesWith.js <- node_modules/lodash/_baseUniq.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/sharding/ShardClientUtil.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Channels.js <- node_modules/discord.js/src/client/actions/ChannelUpdate.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ThumbnailComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/OAuth2Guild.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_listCacheDelete.js <- node_modules/lodash/_ListCache.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildStickerManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/EmbedBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/PollAnswerVoterManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/PollAnswerVoterManager.js <- node_modules/discord.js/src/structures/PollAnswer.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Colors.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/settings.js <- node_modules/ts-mixer/dist/cjs/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ApplicationEmoji.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/DMChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Embed.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/WelcomeScreen.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildBanRemove.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/VoiceRegion.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MediaChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_getRawTag.js <- node_modules/lodash/_baseGetTag.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/ShardEvents.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/fast-deep-equal/index.js <- node_modules/discord.js/src/structures/Embed.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildBanManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildMemberRemove.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/_baseToString.js <- node_modules/lodash/toString.js]
[IMPORTED_BY: node_modules/lodash/_hashGet.js <- node_modules/lodash/_Hash.js]
[IMPORTED_BY: node_modules/lodash/_nativeCreate.js <- node_modules/lodash/_hashHas.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SelectMenuComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildEmojiCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBERS_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/UnfurledMediaItem.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Sweepers.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/BaseGuildTextChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/BaseGuildEmoji.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/DMMessageManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_strictIndexOf.js <- node_modules/lodash/_baseIndexOf.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ThreadCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/errors/Messages.js <- node_modules/discord.js/src/errors/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildRoleDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord-api-types/rpc/v10.js <- node_modules/discord-api-types/v10.js]
[IMPORTED_BY: node_modules/@discordjs/ws/dist/index.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/PollAnswer.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/PollAnswer.js <- node_modules/discord.js/src/client/actions/Action.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ActionRowBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/AnonymousGuild.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildRoleCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/_objectToString.js <- node_modules/lodash/_baseGetTag.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildBan.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/BaseClient.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/ReactionManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Formatters.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/WelcomeChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/TextInputBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/@vladfrangu/async_event_emitter/dist/index.cjs <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/@vladfrangu/async_event_emitter/dist/index.cjs <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildRoleUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/StringSelectMenuComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_baseIsNaN.js <- node_modules/lodash/_baseIndexOf.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/NewsChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/StageInstanceCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/_setCacheAdd.js <- node_modules/lodash/_SetCache.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord-api-types/rpc/common.js <- node_modules/discord-api-types/rpc/v10.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MessagePayload.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Component.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_SetCache.js <- node_modules/lodash/_baseUniq.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/TeamMember.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ButtonComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/oauth2.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildEmoji.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/@discordjs/formatters/dist/index.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildStickerUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Sticker.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/_isKey.js <- node_modules/lodash/_castPath.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_ADD.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MessageMentions.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessageUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/_ListCache.js <- node_modules/lodash/_mapCacheClear.js]
[IMPORTED_BY: node_modules/@discordjs/collection/dist/index.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/@discordjs/collection/dist/index.js <- node_modules/@discordjs/rest/dist/index.js]
[IMPORTED_BY: node_modules/@discordjs/collection/dist/index.js <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/@discordjs/collection/dist/index.js <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/@discordjs/collection/dist/index.js <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/@discordjs/collection/dist/index.js <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/@discordjs/collection/dist/index.js <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/@discordjs/collection/dist/index.js <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/@discordjs/collection/dist/index.js <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Role.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/mixins.js <- node_modules/ts-mixer/dist/cjs/index.js]
[IMPORTED_BY: node_modules/@postfmly/logger/index.js <- index.ts]
[IMPORTED_BY: node_modules/ms/index.js <- index.ts]
[IMPORTED_BY: node_modules/discord.js/src/structures/Invite.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/InviteStageInstance.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/ChannelFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/DataManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Attachment.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/InviteFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/InviteFlagsBitField.js <- node_modules/discord.js/src/structures/Invite.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Components.js <- node_modules/discord.js/src/structures/SectionComponent.js]
[IMPORTED_BY: node_modules/discord.js/src/util/GuildMemberFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_mapCacheHas.js <- node_modules/lodash/_MapCache.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/ChannelManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ChannelUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_ACTION_EXECUTION.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_listCacheClear.js <- node_modules/lodash/_ListCache.js]
[IMPORTED_BY: node_modules/@sapphire/async-queue/dist/cjs/index.cjs <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/async-queue/dist/cjs/index.cjs <- node_modules/@discordjs/ws/dist/index.js]
[IMPORTED_BY: node_modules/lodash/get.js <- node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORTED_BY: node_modules/discord.js/src/util/MessageFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ClientApplication.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SeparatorComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Status.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildTextThreadManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildMemberUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/_Hash.js <- node_modules/lodash/_mapCacheClear.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/index.js <- node_modules/discord.js/src/client/websocket/WebSocketManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildStickersUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/MessageCollector.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SelectMenuBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_createSet.js <- node_modules/lodash/_baseUniq.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/UserSelectMenuInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_Set.js <- node_modules/lodash/_createSet.js]
[IMPORTED_BY: node_modules/discord-api-types/rest/v10/monetization.js <- node_modules/discord-api-types/rest/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/DataResolver.js <- node_modules/discord.js/src/managers/ApplicationEmojiManager.js]
[IMPORTED_BY: node_modules/discord.js/src/util/DataResolver.js <- node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js]
[IMPORTED_BY: node_modules/@discordjs/util/dist/index.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/@discordjs/util/dist/index.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/EntitlementDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/EntitlementCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/PresenceManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/isArray.js <- node_modules/lodash/_castPath.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Widget.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Partials.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Partials.js <- node_modules/discord.js/src/client/actions/Action.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ContainerComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Poll.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Poll.js <- node_modules/discord.js/src/client/actions/Action.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ModalSubmitFields.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildEmojiDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/util/PermissionsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildStickerDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildMember.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/globals.js <- node_modules/discord-api-types/v10.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js <- node_modules/discord.js/src/structures/PartialGroupDMChannel.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ForumChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_toSource.js <- node_modules/lodash/_baseIsNative.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js <- node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/AutoModerationRule.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/util.js <- node_modules/ts-mixer/dist/cjs/mixin-tracking.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_REMOVE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/magic-bytes.js/dist/index.js <- node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/EntitlementUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs <- node_modules/@discordjs/builders/dist/index.js]
[IMPORTED_BY: node_modules/lodash/_mapCacheSet.js <- node_modules/lodash/_MapCache.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/interfaces/Application.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_baseUniq.js <- node_modules/lodash/uniqWith.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/InteractionCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessageReactionRemove.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildBanAdd.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessageCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/StageInstance.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js <- node_modules/discord-api-types/payloads/v10/interactions.js]
[IMPORTED_BY: node_modules/lodash/_toKey.js <- node_modules/lodash/_baseGet.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/_MapCache.js <- node_modules/lodash/_SetCache.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/LabelComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_freeGlobal.js <- node_modules/lodash/_root.js]
[IMPORTED_BY: node_modules/discord.js/src/errors/index.js <- node_modules/discord.js/src/managers/ApplicationEmojiManager.js]
[IMPORTED_BY: node_modules/discord.js/src/errors/index.js <- node_modules/discord.js/src/managers/GuildManager.js]
[IMPORTED_BY: node_modules/discord.js/src/errors/index.js <- node_modules/discord.js/src/structures/SoundboardSound.js]
[IMPORTED_BY: node_modules/discord.js/src/errors/index.js <- node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ChannelCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/APPLICATION_COMMAND_PERMISSIONS_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/WebhookClient.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/ApplicationEmojiManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/CommandInteraction.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ThreadMember.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Integration.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/v10.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/LimitedCollection.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/lodash/_setToArray.js <- node_modules/lodash/_baseUniq.js]
[IMPORTED_BY: node_modules/lodash/_hashSet.js <- node_modules/lodash/_Hash.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ReactionEmoji.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/BaseSelectMenuComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/rest/v10/index.js <- node_modules/discord-api-types/v10.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/teams.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/gateway/v10.js <- node_modules/discord-api-types/v10.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/TypingStart.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/index.js <- index.ts]
[IMPORTED_BY: node_modules/discord.js/src/structures/InteractionCallbackResource.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/sticker.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/lodash/_root.js <- node_modules/lodash/_Set.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/util/RoleFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js <- node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Emoji.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/@sapphire/snowflake/dist/cjs/index.cjs <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/@sapphire/snowflake/dist/cjs/index.cjs <- node_modules/@discordjs/rest/dist/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessageDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/limiter/dist/cjs/RateLimiter.js <- node_modules/limiter/dist/cjs/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildDelete.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ClientUser.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/InviteGuild.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/InteractionWebhook.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/InteractionResponse.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/PermissionOverwriteManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/ButtonBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/ts-mixer/dist/cjs/decorator.js <- node_modules/ts-mixer/dist/cjs/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Transformers.js <- node_modules/discord.js/src/util/Options.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Transformers.js <- node_modules/discord.js/src/structures/Message.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Transformers.js <- node_modules/discord.js/src/structures/User.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Transformers.js <- node_modules/discord.js/src/managers/GuildManager.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Transformers.js <- node_modules/discord.js/src/structures/Guild.js]
[IMPORTED_BY: node_modules/discord.js/src/util/SystemChannelFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Message.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_mapCacheDelete.js <- node_modules/lodash/_MapCache.js]
[IMPORTED_BY: node_modules/lodash/_baseGetTag.js <- node_modules/lodash/isSymbol.js]
[IMPORTED_BY: node_modules/discord.js/src/sharding/ShardingManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/webhook.js <- node_modules/discord-api-types/payloads/v10/index.js]
[IMPORTED_BY: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js <- node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js]
[IMPORTED_BY: node_modules/discord.js/src/util/UserFlagsBitField.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/Entitlement.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessageDeleteBulk.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/package.json <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/package.json <- node_modules/discord.js/src/util/Options.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/StageChannel.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/GuildMessageManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/GuildStickerCreate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/lodash/uniqWith.js <- node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORTED_BY: node_modules/discord.js/src/structures/TextInputComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/THREAD_LIST_SYNC.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_ADD.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/ApplicationCommandManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SKU.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SKU.js <- node_modules/discord.js/src/util/Util.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/StageInstanceManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/PresenceUpdate.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/sharding/Shard.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/WebSocketShard.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/PermissionOverwrites.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/fast-deep-equal/es6/index.js <- node_modules/@sapphire/shapeshift/dist/cjs/index.cjs]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_DELETE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/discord.js/src/errors/DJSError.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/errors/DJSError.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/errors/DJSError.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/lodash/_getMapData.js <- node_modules/lodash/_mapCacheGet.js]
[IMPORTED_BY: node_modules/discord.js/src/client/actions/ThreadListSync.js <- node_modules/discord.js/src/client/actions/ActionsManager.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/FileComponent.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js <- node_modules/discord.js/src/client/websocket/handlers/index.js]
[IMPORTED_BY: node_modules/magic-bytes.js/dist/model/pattern-tree.js <- node_modules/magic-bytes.js/dist/index.js]
[IMPORTED_BY: node_modules/lodash/_memoizeCapped.js <- node_modules/lodash/_stringToPath.js]
[IMPORTED_BY: node_modules/discord.js/src/util/Util.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/managers/RoleManager.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/GuildOnboardingPrompt.js <- node_modules/discord.js/src/index.js]
[IMPORTED_BY: node_modules/discord.js/src/structures/TextDisplayComponent.js <- node_modules/discord.js/src/index.js]
```

### Entry Points

```
[ENTRY: index.ts -> ./index.js (825892 bytes)]
```

### node_modules Summary

```
[NODE_MODULES: node_modules/@vladfrangu/async_event_emitter/dist/index.cjs (contributes 82749 bytes)]
[NODE_MODULES: node_modules/@sapphire/shapeshift/dist/cjs/index.cjs (contributes 66544 bytes)]
[NODE_MODULES: node_modules/@discordjs/builders/dist/index.js (contributes 50448 bytes)]
[NODE_MODULES: node_modules/@discordjs/ws/dist/index.js (contributes 26506 bytes)]
[NODE_MODULES: node_modules/@discordjs/rest/dist/index.js (contributes 21198 bytes)]
[NODE_MODULES: node_modules/magic-bytes.js/dist/model/pattern-tree.js (contributes 19022 bytes)]
[NODE_MODULES: node_modules/discord-api-types/rest/common.js (contributes 18650 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Guild.js (contributes 13198 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Message.js (contributes 11357 bytes)]
[NODE_MODULES: node_modules/tslib/tslib.js (contributes 11308 bytes)]
[NODE_MODULES: node_modules/discord-api-types/rest/v10/index.js (contributes 10256 bytes)]
[NODE_MODULES: node_modules/discord.js/src/errors/Messages.js (contributes 9401 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildAuditLogsEntry.js (contributes 7523 bytes)]
[NODE_MODULES: node_modules/@postfmly/logger/index.js (contributes 7450 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/Client.js (contributes 7356 bytes)]
[NODE_MODULES: node_modules/@discordjs/formatters/dist/index.js (contributes 6990 bytes)]
[NODE_MODULES: node_modules/@discordjs/ws/node_modules/@discordjs/collection/dist/index.js (contributes 6907 bytes)]
[NODE_MODULES: node_modules/@discordjs/rest/node_modules/@discordjs/collection/dist/index.js (contributes 6889 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/message.js (contributes 6553 bytes)]
[NODE_MODULES: node_modules/discord.js/src/index.js (contributes 6511 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildMemberManager.js (contributes 6510 bytes)]
[NODE_MODULES: node_modules/@discordjs/collection/dist/index.js (contributes 5971 bytes)]
[NODE_MODULES: node_modules/discord-api-types/gateway/v10.js (contributes 5967 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ApplicationCommand.js (contributes 5941 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/User.js (contributes 5926 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildChannelManager.js (contributes 5760 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/interfaces/InteractionResponses.js (contributes 5692 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Util.js (contributes 5664 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildMember.js (contributes 5652 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Sweepers.js (contributes 5622 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ThreadChannel.js (contributes 5597 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/WebSocketManager.js (contributes 5565 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildChannel.js (contributes 5090 bytes)]
[NODE_MODULES: node_modules/discord.js/src/sharding/Shard.js (contributes 4924 bytes)]
[NODE_MODULES: node_modules/lodash.snakecase/index.js (contributes 4903 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/guild.js (contributes 4793 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/ApplicationCommandPermissionsManager.js (contributes 4388 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MessagePayload.js (contributes 4377 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/RoleManager.js (contributes 4294 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Webhook.js (contributes 4293 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildScheduledEvent.js (contributes 4147 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ClientApplication.js (contributes 4116 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildManager.js (contributes 4011 bytes)]
[NODE_MODULES: node_modules/discord.js/src/sharding/ShardingManager.js (contributes 4011 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionCollector.js (contributes 3752 bytes)]
[NODE_MODULES: node_modules/discord-api-types/rpc/v10.js (contributes 3693 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Role.js (contributes 3580 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/MessageManager.js (contributes 3442 bytes)]
[NODE_MODULES: node_modules/discord.js/src/sharding/ShardClientUtil.js (contributes 3422 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/auditLog.js (contributes 3398 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Events.js (contributes 3345 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Invite.js (contributes 3281 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseInteraction.js (contributes 3180 bytes)]
[NODE_MODULES: node_modules/discord-api-types/rpc/common.js (contributes 3117 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Presence.js (contributes 3097 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildScheduledEventManager.js (contributes 3002 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js (contributes 2885 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ReactionCollector.js (contributes 2874 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ActionsManager.js (contributes 2839 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/ApplicationCommandManager.js (contributes 2837 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageMentions.js (contributes 2798 bytes)]
[NODE_MODULES: node_modules/discord.js/src/errors/ErrorCodes.js (contributes 2790 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/CommandInteractionOptionResolver.js (contributes 2710 bytes)]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/decorator.js (contributes 2660 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/interfaces/Collector.js (contributes 2647 bytes)]
[NODE_MODULES: node_modules/discord.js/package.json (contributes 2644 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/AutoModerationRuleManager.js (contributes 2611 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/VoiceState.js (contributes 2584 bytes)]
[NODE_MODULES: node_modules/@discordjs/util/dist/index.js (contributes 2549 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildBanManager.js (contributes 2511 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildMemberRoleManager.js (contributes 2472 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/user.js (contributes 2398 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ModalSubmitFields.js (contributes 2266 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Formatters.js (contributes 2261 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/Action.js (contributes 2241 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/index.js (contributes 2230 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/AutoModerationRule.js (contributes 2210 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildEmojiManager.js (contributes 2195 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/ThreadMemberManager.js (contributes 2193 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Embed.js (contributes 2175 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/channel.js (contributes 2143 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageReaction.js (contributes 2138 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ModalSubmitInteraction.js (contributes 2043 bytes)]
[NODE_MODULES: node_modules/@discordjs/rest/node_modules/@sapphire/snowflake/dist/cjs/index.cjs (contributes 2036 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildSoundboardSoundManager.js (contributes 2006 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Sticker.js (contributes 1996 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ThreadOnlyChannel.js (contributes 1988 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildTemplate.js (contributes 1954 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/EntitlementManager.js (contributes 1936 bytes)]
[NODE_MODULES: node_modules/@sapphire/snowflake/dist/cjs/index.cjs (contributes 1905 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/WebSocketShard.js (contributes 1865 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/ThreadManager.js (contributes 1846 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseGuildVoiceChannel.js (contributes 1841 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/application.js (contributes 1836 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageCollector.js (contributes 1823 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/SoundboardSound.js (contributes 1798 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Transformers.js (contributes 1797 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildInviteManager.js (contributes 1748 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Constants.js (contributes 1729 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/PermissionOverwriteManager.js (contributes 1702 bytes)]
[NODE_MODULES: node_modules/limiter/dist/cjs/TokenBucket.js (contributes 1695 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/BitField.js (contributes 1684 bytes)]
[NODE_MODULES: node_modules/@sapphire/async-queue/dist/cjs/index.cjs (contributes 1674 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildStickerManager.js (contributes 1624 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Channels.js (contributes 1601 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Integration.js (contributes 1586 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildPreview.js (contributes 1550 bytes)]
[NODE_MODULES: node_modules/limiter/dist/cjs/RateLimiter.js (contributes 1543 bytes)]
[NODE_MODULES: node_modules/discord-api-types/utils/v10.js (contributes 1521 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js (contributes 1517 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/ApplicationEmojiManager.js (contributes 1514 bytes)]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/mixins.js (contributes 1501 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/UserManager.js (contributes 1498 bytes)]
[NODE_MODULES: node_modules/ms/index.js (contributes 1496 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/StageInstanceManager.js (contributes 1470 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/PermissionOverwrites.js (contributes 1458 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Poll.js (contributes 1453 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/ChannelManager.js (contributes 1445 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseGuildTextChannel.js (contributes 1430 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/common.js (contributes 1372 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/InteractionCreate.js (contributes 1356 bytes)]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/proxy.js (contributes 1315 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Entitlement.js (contributes 1294 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Components.js (contributes 1286 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildEmoji.js (contributes 1271 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/DMChannel.js (contributes 1254 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js (contributes 1252 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/CommandInteraction.js (contributes 1225 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ClientPresence.js (contributes 1212 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/oauth2.js (contributes 1190 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/gateway.js (contributes 1188 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/DataResolver.js (contributes 1168 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/StageInstance.js (contributes 1165 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/PartialGroupDMChannel.js (contributes 1164 bytes)]
[NODE_MODULES: node_modules/fast-deep-equal/es6/index.js (contributes 1156 bytes)]
[NODE_MODULES: node_modules/discord-api-types/globals.js (contributes 1148 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/interfaces/Application.js (contributes 1141 bytes)]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/util.js (contributes 1137 bytes)]
[NODE_MODULES: node_modules/discord-api-types/v10.js (contributes 1111 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ClientUser.js (contributes 1103 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildEmojiRoleManager.js (contributes 1100 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/BaseClient.js (contributes 1074 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseChannel.js (contributes 1074 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Options.js (contributes 1046 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildAuditLogs.js (contributes 989 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/monetization.js (contributes 989 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Attachment.js (contributes 986 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/ReactionUserManager.js (contributes 977 bytes)]
[NODE_MODULES: node_modules/magic-bytes.js/dist/index.js (contributes 971 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ThreadMember.js (contributes 950 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/PollAnswer.js (contributes 949 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Emoji.js (contributes 945 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/autoModeration.js (contributes 941 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/responses.js (contributes 879 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/AutocompleteInteraction.js (contributes 871 bytes)]
[NODE_MODULES: node_modules/magic-bytes.js/dist/model/tree.js (contributes 863 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Subscription.js (contributes 855 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ApplicationEmoji.js (contributes 849 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionResponse.js (contributes 826 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseGuild.js (contributes 819 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/SubscriptionManager.js (contributes 798 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildTextThreadManager.js (contributes 796 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/AnonymousGuild.js (contributes 794 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/AutoModerationActionExecution.js (contributes 776 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Team.js (contributes 773 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageReactionAdd.js (contributes 762 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/PresenceUpdate.js (contributes 762 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/LimitedCollection.js (contributes 747 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/index.js (contributes 742 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/webhook.js (contributes 736 bytes)]
[NODE_MODULES: node_modules/fast-deep-equal/index.js (contributes 724 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageComponentInteraction.js (contributes 722 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/BaseGuildEmojiManager.js (contributes 719 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ContextMenuCommandInteraction.js (contributes 713 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MentionableSelectMenuInteraction.js (contributes 687 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/StickerPack.js (contributes 684 bytes)]
[NODE_MODULES: node_modules/discord.js/src/errors/DJSError.js (contributes 679 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadListSync.js (contributes 675 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Widget.js (contributes 659 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/StringSelectMenuBuilder.js (contributes 658 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/IntegrationApplication.js (contributes 658 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildForumThreadManager.js (contributes 644 bytes)]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/mixin-tracking.js (contributes 644 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildOnboardingPromptOption.js (contributes 635 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/AttachmentBuilder.js (contributes 621 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/VoiceChannel.js (contributes 610 bytes)]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/index.js (contributes 605 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/WebhookClient.js (contributes 588 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/InviteStageInstance.js (contributes 585 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/CachedManager.js (contributes 569 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/VoiceStateUpdate.js (contributes 565 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/UserSelectMenuInteraction.js (contributes 564 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/VoiceStateManager.js (contributes 554 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Colors.js (contributes 545 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageCreate.js (contributes 532 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/PermissionsBitField.js (contributes 531 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/interactions.js (contributes 526 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildMemberUpdate.js (contributes 515 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js (contributes 514 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionCallback.js (contributes 513 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/PollAnswerVoterManager.js (contributes 506 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ContainerComponent.js (contributes 506 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/VoiceChannelEffect.js (contributes 504 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ChatInputCommandInteraction.js (contributes 499 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageReactionRemove.js (contributes 498 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadMembersUpdate.js (contributes 498 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/DataManager.js (contributes 495 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ChannelUpdate.js (contributes 481 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildOnboarding.js (contributes 479 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/voice/ClientVoiceManager.js (contributes 474 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js (contributes 471 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessagePollVoteRemove.js (contributes 468 bytes)]
[NODE_MODULES: node_modules/lodash/_baseUniq.js (contributes 465 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildOnboardingPrompt.js (contributes 462 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessagePollVoteAdd.js (contributes 459 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildStickersUpdate.js (contributes 458 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageDeleteBulk.js (contributes 457 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/invite.js (contributes 456 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/WidgetMember.js (contributes 446 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js (contributes 444 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/TeamMember.js (contributes 438 bytes)]
[NODE_MODULES: node_modules/lodash/_baseIsNative.js (contributes 436 bytes)]
[NODE_MODULES: node_modules/discord.js-rate-limiter/dist/rate-limiter.js (contributes 433 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ActionRow.js (contributes 428 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js (contributes 422 bytes)]
[NODE_MODULES: node_modules/limiter/dist/cjs/index.js (contributes 421 bytes)]
[NODE_MODULES: node_modules/limiter/dist/cjs/clock.js (contributes 417 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Typing.js (contributes 415 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/PresenceManager.js (contributes 409 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/WelcomeScreen.js (contributes 405 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/StringSelectMenuOptionBuilder.js (contributes 404 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildMemberRemove.js (contributes 404 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/WelcomeChannel.js (contributes 399 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js (contributes 397 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js (contributes 396 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ButtonBuilder.js (contributes 394 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/TypingStart.js (contributes 393 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageUpdate.js (contributes 391 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseGuildEmoji.js (contributes 387 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionCallbackResource.js (contributes 377 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/ReactionManager.js (contributes 375 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildDelete.js (contributes 375 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js (contributes 371 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/RATE_LIMITED.js (contributes 371 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionWebhook.js (contributes 365 bytes)]
[NODE_MODULES: node_modules/lodash/memoize.js (contributes 364 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/MessageDelete.js (contributes 359 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/StageInstanceUpdate.js (contributes 356 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/StageChannel.js (contributes 354 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/teams.js (contributes 354 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildBan.js (contributes 347 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/WebhooksUpdate.js (contributes 346 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/NewsChannel.js (contributes 345 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/sticker.js (contributes 341 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventUpdate.js (contributes 340 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/READY.js (contributes 337 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/EmbedBuilder.js (contributes 336 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/InviteDelete.js (contributes 335 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/CategoryChannelChildManager.js (contributes 330 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/StageInstanceDelete.js (contributes 322 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ButtonComponent.js (contributes 318 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/SectionComponent.js (contributes 318 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Base.js (contributes 318 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/LabelComponent.js (contributes 313 bytes)]
[NODE_MODULES: node_modules/lodash/_stringToPath.js (contributes 312 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ActionRowBuilder.js (contributes 311 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/BaseSelectMenuComponent.js (contributes 311 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildSoundboardSoundDelete.js (contributes 311 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ModalBuilder.js (contributes 310 bytes)]
[NODE_MODULES: node_modules/lodash/_isKey.js (contributes 304 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ChannelSelectMenuInteraction.js (contributes 302 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventDelete.js (contributes 302 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/InviteCreate.js (contributes 300 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildRoleUpdate.js (contributes 299 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventUserRemove.js (contributes 299 bytes)]
[NODE_MODULES: node_modules/lodash/_MapCache.js (contributes 298 bytes)]
[NODE_MODULES: node_modules/lodash/_Hash.js (contributes 298 bytes)]
[NODE_MODULES: node_modules/lodash/_ListCache.js (contributes 298 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventUserAdd.js (contributes 296 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ThumbnailComponent.js (contributes 291 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/AutoModerationRuleUpdate.js (contributes 289 bytes)]
[NODE_MODULES: node_modules/lodash/_baseToString.js (contributes 287 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/AutoModerationRuleDelete.js (contributes 285 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadMemberUpdate.js (contributes 284 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/RoleSelectMenuInteraction.js (contributes 279 bytes)]
[NODE_MODULES: node_modules/lodash/_getRawTag.js (contributes 279 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ApplicationRoleConnectionMetadata.js (contributes 277 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/StageInstanceCreate.js (contributes 275 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MediaGalleryItem.js (contributes 273 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/UserUpdate.js (contributes 270 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/SelectMenuOptionBuilder.js (contributes 269 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js (contributes 268 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildBanRemove.js (contributes 266 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/SelectMenuInteraction.js (contributes 265 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUNDS_UPDATE.js (contributes 264 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/SelectMenuComponent.js (contributes 261 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildRoleDelete.js (contributes 261 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildScheduledEventCreate.js (contributes 258 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/SelectMenuBuilder.js (contributes 257 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/Component.js (contributes 257 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildRoleCreate.js (contributes 257 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/SOUNDBOARD_SOUNDS.js (contributes 253 bytes)]
[NODE_MODULES: node_modules/lodash/isFunction.js (contributes 253 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/SKU.js (contributes 250 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/EntitlementUpdate.js (contributes 249 bytes)]
[NODE_MODULES: node_modules/magic-bytes.js/dist/model/toHex.js (contributes 248 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/TextChannel.js (contributes 243 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_UPDATE.js (contributes 243 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildUpdate.js (contributes 242 bytes)]
[NODE_MODULES: node_modules/lodash/_hashGet.js (contributes 238 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js (contributes 237 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildAuditLogEntryCreate.js (contributes 236 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MentionableSelectMenuBuilder.js (contributes 235 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/EntitlementDelete.js (contributes 235 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/FileComponent.js (contributes 234 bytes)]
[NODE_MODULES: node_modules/lodash/_baseGetTag.js (contributes 234 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ApplicationCommandPermissionsUpdate.js (contributes 233 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ChannelSelectMenuBuilder.js (contributes 231 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js (contributes 231 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/AutoModerationRuleCreate.js (contributes 231 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadCreate.js (contributes 230 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/UserSelectMenuBuilder.js (contributes 228 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/RoleSelectMenuBuilder.js (contributes 228 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/InteractionCallbackResponse.js (contributes 226 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ReactionEmoji.js (contributes 223 bytes)]
[NODE_MODULES: node_modules/lodash/_listCacheDelete.js (contributes 223 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ForumChannel.js (contributes 221 bytes)]
[NODE_MODULES: node_modules/lodash/_SetCache.js (contributes 221 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/TextInputBuilder.js (contributes 220 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/stageInstance.js (contributes 220 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js (contributes 220 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MediaGalleryComponent.js (contributes 219 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/AutoModerationActionExecution.js (contributes 219 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/VoiceRegion.js (contributes 212 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildStickerCreate.js (contributes 212 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ChannelCreate.js (contributes 212 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ThreadDelete.js (contributes 210 bytes)]
[NODE_MODULES: node_modules/just-performance/dist/cjs/node.js (contributes 209 bytes)]
[NODE_MODULES: node_modules/discord-api-types/rest/v10/channel.js (contributes 207 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js (contributes 206 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildEmojiCreate.js (contributes 204 bytes)]
[NODE_MODULES: node_modules/discord.js-rate-limiter/dist/index.js (contributes 198 bytes)]
[NODE_MODULES: node_modules/discord-api-types/rest/v10/monetization.js (contributes 198 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_UPDATE.js (contributes 197 bytes)]
[NODE_MODULES: node_modules/discord-api-types/utils/internals.js (contributes 196 bytes)]
[NODE_MODULES: node_modules/ts-mixer/dist/cjs/settings.js (contributes 195 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/SeparatorComponent.js (contributes 194 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/ChannelDelete.js (contributes 194 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Partials.js (contributes 192 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/DirectoryChannel.js (contributes 188 bytes)]
[NODE_MODULES: node_modules/lodash/_isMasked.js (contributes 188 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildStickerDelete.js (contributes 187 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/EntitlementCreate.js (contributes 186 bytes)]
[NODE_MODULES: node_modules/lodash/_hashSet.js (contributes 186 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/InviteGuild.js (contributes 185 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/OAuth2Guild.js (contributes 184 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildBanAdd.js (contributes 184 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js (contributes 183 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_DELETE.js (contributes 183 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_CREATE.js (contributes 182 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/UserContextMenuCommandInteraction.js (contributes 181 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildEmojiDelete.js (contributes 181 bytes)]
[NODE_MODULES: node_modules/lodash/_toSource.js (contributes 178 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/ShardEvents.js (contributes 177 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Status.js (contributes 176 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildStickerUpdate.js (contributes 174 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/poll.js (contributes 171 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js (contributes 170 bytes)]
[NODE_MODULES: node_modules/lodash/_hashHas.js (contributes 169 bytes)]
[NODE_MODULES: node_modules/lodash/_baseGet.js (contributes 167 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/VOICE_CHANNEL_EFFECT_SEND.js (contributes 165 bytes)]
[NODE_MODULES: node_modules/discord-api-types/payloads/v10/permissions.js (contributes 163 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildApplicationCommandManager.js (contributes 159 bytes)]
[NODE_MODULES: node_modules/lodash/_listCacheSet.js (contributes 159 bytes)]
[NODE_MODULES: node_modules/lodash/_toKey.js (contributes 156 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/WebSocketShardEvents.js (contributes 155 bytes)]
[NODE_MODULES: node_modules/lodash/_memoizeCapped.js (contributes 154 bytes)]
[NODE_MODULES: node_modules/lodash/_mapCacheClear.js (contributes 154 bytes)]
[NODE_MODULES: node_modules/lodash/_isKeyable.js (contributes 152 bytes)]
[NODE_MODULES: node_modules/lodash/_root.js (contributes 150 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js (contributes 149 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js (contributes 149 bytes)]
[NODE_MODULES: node_modules/lodash/_createSet.js (contributes 149 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/TextInputComponent.js (contributes 148 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_UPDATE.js (contributes 148 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Enums.js (contributes 147 bytes)]
[NODE_MODULES: node_modules/lodash/_castPath.js (contributes 146 bytes)]
[NODE_MODULES: node_modules/lodash/isSymbol.js (contributes 144 bytes)]
[NODE_MODULES: node_modules/lodash/_mapCacheSet.js (contributes 143 bytes)]
[NODE_MODULES: node_modules/lodash/_getMapData.js (contributes 143 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js (contributes 139 bytes)]
[NODE_MODULES: node_modules/lodash/uniqWith.js (contributes 138 bytes)]
[NODE_MODULES: node_modules/lodash/_baseFindIndex.js (contributes 138 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/UnfurledMediaItem.js (contributes 134 bytes)]
[NODE_MODULES: node_modules/lodash/_arrayMap.js (contributes 134 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MessageContextMenuCommandInteraction.js (contributes 133 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/SUBSCRIPTION_CREATE.js (contributes 133 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/RESUMED.js (contributes 132 bytes)]
[NODE_MODULES: node_modules/lodash/_arrayIncludesWith.js (contributes 130 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/StringSelectMenuInteraction.js (contributes 129 bytes)]
[NODE_MODULES: node_modules/lodash/_assocIndexOf.js (contributes 129 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/GuildMemberFlagsBitField.js (contributes 128 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ChannelSelectMenuComponent.js (contributes 127 bytes)]
[NODE_MODULES: node_modules/lodash/_setCacheAdd.js (contributes 126 bytes)]
[NODE_MODULES: node_modules/lodash/_baseIndexOf.js (contributes 125 bytes)]
[NODE_MODULES: node_modules/lodash/_listCacheGet.js (contributes 123 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/GuildPreviewEmoji.js (contributes 122 bytes)]
[NODE_MODULES: node_modules/lodash/get.js (contributes 122 bytes)]
[NODE_MODULES: node_modules/lodash/_hashDelete.js (contributes 122 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/SystemChannelFlagsBitField.js (contributes 120 bytes)]
[NODE_MODULES: node_modules/lodash/_setToArray.js (contributes 120 bytes)]
[NODE_MODULES: node_modules/lodash/_strictIndexOf.js (contributes 120 bytes)]
[NODE_MODULES: node_modules/lodash/_mapCacheDelete.js (contributes 120 bytes)]
[NODE_MODULES: node_modules/lodash/_arrayIncludes.js (contributes 118 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/CategoryChannel.js (contributes 116 bytes)]
[NODE_MODULES: node_modules/lodash/_getNative.js (contributes 115 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/ThreadMemberFlagsBitField.js (contributes 114 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/IntentsBitField.js (contributes 114 bytes)]
[NODE_MODULES: node_modules/lodash/_objectToString.js (contributes 114 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/ApplicationFlagsBitField.js (contributes 113 bytes)]
[NODE_MODULES: node_modules/lodash/isObject.js (contributes 113 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/InviteFlagsBitField.js (contributes 112 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/TextDisplayComponent.js (contributes 110 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/StringSelectMenuComponent.js (contributes 110 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/ActivityFlagsBitField.js (contributes 110 bytes)]
[NODE_MODULES: node_modules/lodash/_freeGlobal.js (contributes 109 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/AttachmentFlagsBitField.js (contributes 108 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/BaseManager.js (contributes 108 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/SKUFlagsBitField.js (contributes 106 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/UserFlagsBitField.js (contributes 106 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/MessageFlagsBitField.js (contributes 105 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/ChannelFlagsBitField.js (contributes 105 bytes)]
[NODE_MODULES: node_modules/lodash/_hashClear.js (contributes 105 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/RoleFlagsBitField.js (contributes 102 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/APPLICATION_COMMAND_PERMISSIONS_UPDATE.js (contributes 100 bytes)]
[NODE_MODULES: node_modules/lodash/_listCacheHas.js (contributes 97 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_REMOVE.js (contributes 94 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_ACTION_EXECUTION.js (contributes 94 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SOUNDBOARD_SOUND_DELETE.js (contributes 93 bytes)]
[NODE_MODULES: node_modules/lodash/_mapCacheGet.js (contributes 92 bytes)]
[NODE_MODULES: node_modules/lodash/_mapCacheHas.js (contributes 92 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_USER_ADD.js (contributes 91 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js (contributes 91 bytes)]
[NODE_MODULES: node_modules/lodash/toString.js (contributes 91 bytes)]
[NODE_MODULES: node_modules/discord.js/src/errors/index.js (contributes 90 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_CREATE.js (contributes 90 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_UPDATE.js (contributes 90 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_SCHEDULED_EVENT_DELETE.js (contributes 90 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_CREATE.js (contributes 89 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_UPDATE.js (contributes 89 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js (contributes 89 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_AUDIT_LOG_ENTRY_CREATE.js (contributes 89 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/AUTO_MODERATION_RULE_DELETE.js (contributes 89 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js (contributes 88 bytes)]
[NODE_MODULES: node_modules/lodash/isObjectLike.js (contributes 88 bytes)]
[NODE_MODULES: node_modules/discord.js/src/util/Symbols.js (contributes 86 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_REMOVE.js (contributes 86 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js (contributes 86 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js (contributes 86 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js (contributes 86 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBERS_UPDATE.js (contributes 84 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_UPDATE.js (contributes 84 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_STICKERS_UPDATE.js (contributes 84 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_CREATE.js (contributes 84 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/STAGE_INSTANCE_DELETE.js (contributes 84 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_MEMBER_UPDATE.js (contributes 83 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_POLL_VOTE_ADD.js (contributes 83 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js (contributes 83 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_DELETE.js (contributes 82 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js (contributes 82 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/INTERACTION_CREATE.js (contributes 82 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_UPDATE.js (contributes 82 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/ENTITLEMENT_CREATE.js (contributes 82 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js (contributes 82 bytes)]
[NODE_MODULES: node_modules/lodash/_getValue.js (contributes 82 bytes)]
[NODE_MODULES: node_modules/lodash/eq.js (contributes 82 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js (contributes 81 bytes)]
[NODE_MODULES: node_modules/lodash/_setCacheHas.js (contributes 81 bytes)]
[NODE_MODULES: node_modules/lodash/_listCacheClear.js (contributes 81 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js (contributes 80 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js (contributes 80 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js (contributes 80 bytes)]
[NODE_MODULES: node_modules/lodash/_coreJsData.js (contributes 80 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_LIST_SYNC.js (contributes 79 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js (contributes 79 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js (contributes 79 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js (contributes 79 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js (contributes 78 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js (contributes 78 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js (contributes 78 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js (contributes 78 bytes)]
[NODE_MODULES: node_modules/lodash/_Set.js (contributes 78 bytes)]
[NODE_MODULES: node_modules/lodash/_Map.js (contributes 78 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js (contributes 77 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_CREATE.js (contributes 77 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js (contributes 77 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/THREAD_DELETE.js (contributes 77 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js (contributes 76 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js (contributes 76 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js (contributes 76 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js (contributes 76 bytes)]
[NODE_MODULES: node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js (contributes 75 bytes)]
[NODE_MODULES: node_modules/lodash/_nativeCreate.js (contributes 75 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/GuildMessageManager.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/RoleSelectMenuComponent.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/PrimaryEntryPointCommandInteraction.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MentionableSelectMenuComponent.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/ButtonInteraction.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/MediaChannel.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/discord.js/src/structures/UserSelectMenuComponent.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/DMMessageManager.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/discord.js/src/managers/PartialGroupDMMessageManager.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/lodash/_cacheHas.js (contributes 71 bytes)]
[NODE_MODULES: node_modules/lodash/_baseIsNaN.js (contributes 66 bytes)]
[NODE_MODULES: node_modules/lodash/_Symbol.js (contributes 65 bytes)]
[NODE_MODULES: node_modules/lodash/isArray.js (contributes 59 bytes)]
[NODE_MODULES: node_modules/lodash/noop.js (contributes 53 bytes)]
```
