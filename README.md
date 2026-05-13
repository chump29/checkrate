# @postfmly/checkrate

> - Discord rate limiter

---

![Biome](https://img.shields.io/badge/Biome-^2.4.15-informational?style=plastic&logo=biome) &nbsp;
![Bun](https://img.shields.io/badge/Bun-~1.3.14-informational?style=plastic&logo=bun)

![CodeQL](https://github.com/chump29/checkrate/workflows/CodeQL/badge.svg) &nbsp;
![Coverage](https://img.shields.io/badge/Coverage-100%25-success?style=plastic&logo=jest)

![License](https://img.shields.io/github/license/chump29/checkrate?style=plastic&color=blueviolet&label=License&logo=gplv3)

---

### Installation <!-- markdownlint-disable MD001 -->

```bash
bun add @postfmly/checkrate
```

#### Peer Dependencies:

- @postfmly/logger
- discord.js

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

### Testing

```bash
./test.sh
```

---

### Building

```bash
./build.sh
```

---

### Publishing

#### Publish:

```bash
./publish.sh
```

- *NOTE: Increments `patch` version*

#### Unpublish:

```bash
# current version
npm unpublish --force

# specific version
npm unpublish @postfmly/checkrate@[version] --force
```
