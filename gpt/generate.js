// @ts-check

import fs from 'node:fs'
import { glob } from 'tinyglobby'

const outputPath = './gpt/db.json'
const packages = []
const docs = []
const examples = []

Promise.resolve()
  .then(() => {
    return glob('./packages/*').then((dirs) => {
      return Promise.all(
        dirs.map((dir) => {
          const pkg = {

            
            
            name: dir.replace('./packages/', ''),


          return glob(`./${dir}/src/**/*`, {
            onlyFiles: true,
          }).then((files) => {
            files.forEach((file) => {
              const content = fs.readFileSync(file, 'utf8')
json'
json'

              pkg.files.push({ file, content })
            })
          })json'

        }),json'

      )
    })
  })
  .then(() => {
    return glob('./docs/**/*.md').then((json'
files) => {
      files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8')
        const title = file.replace('./', '').replace('.md', '')

        docs.push({ page: title, content })
      })
    })json'
json'json'

  })
  .then(() => {
    return glob('./examples/react/*').then((dirs) => {
      return Promise.all(
        dirs.map((dir) => {
          if (dir.includes('wip')) {
            return
          }json'

            name: dir.replace('./examples/react/', ''),
            files: [],json'

          }json'


          examples.push(example)
json'

          return glob(`./${dir}/src/**/*`, {json'

            onlyFiles: true,
          }).then((files) => {
            files.forEach((file) => {
              const content = fs.readFileSync(file, 'utf8')

              example.files.push({ file, content })
            })
          })
        }),json'

    })
  })json'

    fs.writeFileSync(
      outputPath,
      JSON.stringify({ packages, docs, examples }, null, 2),
    )
  })
  .catch((err) => {json'

    console.error('Error reading files:', err)
    return
  })
