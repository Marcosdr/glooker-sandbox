# SANDBOX

Sandbox to play with Google Looker (Data Studio)


## Import JSON into Google Sheets

Read through how to [Add Script to Import Json in Google Sheets](https://www.chicagocomputerclasses.com/google-sheets-import-json-importjson-function/)

Then add the script at `src/importJSON.js`

See more explanations on this [Video](https://www.youtube.com/watch?v=rrr99mLHRfA)


## Develop a new visualization for Google Looker Studio

### Prerequisites

* npm > 5.2.0 - [Install npm (Mac)](https://treehouse.github.io/installation-guides/mac/node-mac.html)
* gsutil - [Installation guide](https://cloud.google.com/storage/docs/gsutil_install)

Once you download the sdk, run these commands to login to the CTL gcloud instance.

```
./google-cloud-sdk/install.sh
./google-cloud-sdk/bin/gcloud init
```

Test the connection to the CTL bucket. You should see a json output.

```
gsutil acl get gs://heroes-viz
```

### Commands Cheat Sheet

Description                   | Command                                   |
----------------------------- | ----------------------------------------- |
Develop - Watch for changes   | `npm run start`                           |
Update configuration          | `npm run update_message`                  |
Build and deploy [`Dev`]      | `npm run build:dev && npm run push:dev`   |
Build and deploy [`Prod`]     | `npm run build:prod && npm run push:prod` |


### Create a new visualization

1. Create a vis folder, and inside add `dev` and `prod` directories on your google bucket. for example: 
   * gs://my-custom-viz/dev/
   * gs://my-custom-viz/prod/

- Add Local tegion rather than Multi-region
- Clase predeterminada escoge `standard`
- Accesso a objetos elige `preciso`. Sino el cli no funcionara bien despues. Uncheck prevencion de acceso publico.
- Herramientas de proteccion `ninguno`

2. Run the visualization generation command and follow the instructions.

```sh
npx @google/dscc-gen viz
```

3. Copy the node_modules/@google/dscc-scripts/build/viz/util.js file from the chart project into the node_modules folder for any other viz and replace the bucket paths to use the appropriate paths.

4. Run `npm run start`

### Visualization Development Workflow

1. Update the configuration. 
   
   - Make changes to `index.json`.
   - Then run: `npm run update_message`
   - The visualization gets deployed to the storage bucket (dev or prod)
   - Add this visualization to Looker Studio.

2. Update local message.

    Copy the message that displays on the dashboard with the local message content into `localMessage.js`. 
    This will be injected into the `data` variable in index.js. To view it, type `console.log(data)` in `index.js`.
   
3. Develop locally
4. Deploy visualization

    Run: `npm run build:dev && npm run push:dev`

    For prod run: `npm run build:prod && npm run push:prod`
    This will add caching and minified js features to the chart.

## Bugs and other reports

### dscc-gen
The latest dscc-gen tool is broken, see link to how to resolve the issue [here](https://github.com/googledatastudio/tooling/issues/190#issuecomment-784799968).

Copy the file: 
`node_modules/@google/dscc-scripts/build/viz/util.js`
From the chart project into the node_modules folder for any other viz and replace the bucket paths to use the appropriate paths.

Replace the build.js and message.js file also:
`node_modules/@google/dscc-scripts/build/viz/build.js`
`node_modules/@google/dscc-scripts/build/viz/message.js` 


```
const devBucket = "gs://herores-viz/dev/chart" // process.env.npm_package_dsccViz_gcsDevBucket;
    if (devBucket === undefined) {
        throw util_1.invalidVizConfig('gcsDevBucket');
    }
    const prodBucket = "gs://herores-viz/prod/chart" // process.env.npm_package_dsccViz_gcsProdBucket;
    if (prodBucket === undefined) {
        throw util_1.invalidVizConfig('gcsProdBucket');
    }
```