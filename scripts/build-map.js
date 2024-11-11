import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { WorldMapSimplestTopoJSON } from '@unovis/ts/maps.js'

// remove ", Province of China"
WorldMapSimplestTopoJSON.objects.countries.geometries.forEach((country) => {
  country.properties.name = country.properties.name.replace(', Province of China', '')
})

writeFileSync(join(import.meta.dirname, '../public/world.json'), JSON.stringify(WorldMapSimplestTopoJSON), 'utf8')
