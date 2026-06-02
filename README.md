# @postfmly/checkrate

### Discord rate limiter <!-- markdownlint-disable MD001 -->

---

![Bun](https://img.shields.io/badge/Bun-~1.3.14-informational?style=plastic&logo=bun "Bun") &nbsp;
![discord.js](https://img.shields.io/badge/discord.js-^14.26.4-informational?style=plastic&logo=discorddotjs "discord.js")

![CodeQL](https://github.com/chump29/checkrate/workflows/CodeQL/badge.svg "CodeQL") &nbsp;
![Coverage](https://img.shields.io/badge/Coverage-100%25-success?style=plastic&logo=jest "Coverage")

![License](https://img.shields.io/github/license/chump29/checkrate?style=plastic&color=blueviolet&label=License&logo=gplv3 "GPLv3")

---

### Installation

```bash
bun add @postfmly/checkrate
```

#### Peer Dependencies:

- @postfmly/logger
- discord.js

---

### Use

```ts
import { checkRate } from "@postfmly/checkrate"

if (await checkRate(interaction)) {
  return // rate limit exceeded
}
```

### Environment Variables

| Description |   Key    |     Value      |
|:-----------:|:--------:|:--------------:|
|    Debug    | IS_DEBUG | true/**false** |
| Rate Limit  |   RATE   |       1s       |

---

### Linting

```bash
bun run lint
```

---

### Testing

```bash
bun run test
```

---

### Building

#### README:

```bash
./docs.sh
```

#### Package:

```bash
./build.sh
```

###### *NOTE: Includes linting, testing, and building README*

---

### Publishing

#### Publish:

```bash
./publish.sh
```

###### *NOTES:*

- ###### *Includes building package*

- ###### *Increments `patch` version in `package.json`*

#### Unpublish:

```bash
# current version
npm unpublish --force

# specific version
npm unpublish @postfmly/checkrate@[version] --force
```
