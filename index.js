const core = require('@actions/core');
//const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    const env = core.getInput('environment');
    console.log(`Deploying to ${env}`)
    core.setOutput('status', 'Success');
  } 
  catch (error) {
    core.setOutput('status', 'Failed');
  }
}

run()
