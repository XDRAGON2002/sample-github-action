const core = require("@actions/core")
const tc = require("@actions/tool-cache")

async function setup() {
    try {
        const url = "https://github.com/intel/cve-bin-tool/releases/download/v3.2/cve-bin-tool-3.2.tar.gz"
        const pathToDownloaded = await tc.downloadTool(url)

        const extract = tc.extractTar
        const pathToCLI = await extract(pathToDownloaded)
        core.setOutput("pos", "abc")
        core.addPath(pathToCLI)
    } catch (e) {
        core.setFailed(e)
    }
}

module.exports = setup

if (require.main === module) {
    setup()
}