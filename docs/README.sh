#!/usr/bin/env -S bash -e

echo -e "📌 Packages:\n"

_bun=$(bun --version)
bun pm pkg set packageManager="bun@$_bun" engines.bun="~$_bun" > /dev/null 2>&1
_bun=~$_bun
export _bun
echo -e " • Bun: $_bun"

_discord=$(jq -r '.peerDependencies."discord.js" // "❓"' ../package.json)
export _discord
echo -e " • discord.js: $_discord"

_coverage=-1
if [ -f "../coverage/lcov.info" ]; then
  _coverage=$(bun run lcov-total ../coverage/lcov.info)
fi
export _coverage
echo -e "\n☂️  Coverage: $_coverage%"

echo -e "\n🛠️  Creating README.md..."

envsubst < README.template.md > ../README.md

echo -e "\n✔️  Done!\n"
