const core = require("@actions/core")
const tc = require("@actions/tool-cache")
const path = require("path")

async function setup() {
    try {
        const url = "https://github.com/intel/cve-bin-tool/releases/download/v3.2/cve-bin-tool-3.2.tar.gz"
        const pathToDownloaded = await tc.downloadTool(url)

        const extract = tc.extractTar
        const pathToCLI = await extract(pathToDownloaded)
        const filename = "cve-bin-tool-3.2"
        core.setOutput("pos", pathToCLI)
        core.addPath(path.join(pathToCLI, path.join(filename, 'bin')))
    } catch (e) {
        core.setFailed(e)
    }
}

module.exports = setup

if (require.main === module) {
    setup()
}