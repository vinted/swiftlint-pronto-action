const core = require('@actions/core');
const execSync = require('child_process').execSync;
const fs = require('fs')
const ev = JSON.parse(
  fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')
)
const prNum = ev.pull_request.number
const baseRef = process.env.GITHUB_BASE_REF

function execAndLogStdOut(cmd) {
  console.log(execSync(cmd, { encoding: 'utf-8' }));
}

execAndLogStdOut('git fetch --no-tags --prune origin +refs/heads/*:refs/remotes/origin/*')
execAndLogStdOut('brew install swiftlint pkg-config')
execAndLogStdOut('gem install pronto pronto-swiftlint')
core.exportVariable('PRONTO_PULL_REQUEST_ID', prNum)
core.exportVariable('PRONTO_GITHUB_ACCESS_TOKEN', core.getInput('github_token'))
execAndLogStdOut(`pronto run -c origin/${baseRef} -r swiftlint -f github_status github_pr`)

