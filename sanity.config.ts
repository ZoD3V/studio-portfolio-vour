import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {presentationTool} from 'sanity/presentation'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'vour',

  projectId: 'w3v332qs',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool({
      structure,
      title: 'Content',
    }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
  ],
})
