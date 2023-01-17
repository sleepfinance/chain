const { Chain, ChainId } = require('./dist')
const fetch = require('node-fetch') 
const { writeFileSync } = require('fs') 

async function generate() {
  const allChains = await fetch('https://chainid.network/chains.json').then((data) => data.json())
  const filteredChains = allChains.filter(({ chainId }) => Object.values(ChainId).includes(chainId))
  writeFileSync('./chains.ts', `export default ${JSON.stringify(filteredChains)} as const`)
  process.exit(0)
}

generate()
