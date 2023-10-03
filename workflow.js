require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");

async function main() {
    const readmeTemplate = (
        await fs.readFile(path.join(process.cwd(), "./.github/workflows/dynamic-injection-workflow.yml"))
    ).toString("utf-8");

    const index = readmeTemplate
        .indexOf("0 18 */3 * 1-5");

    if (index !== -1) {
        await fs.writeFile("./.github/workflows/dynamic-injection-workflow.yml", readmeTemplate.replace("0 18 */3 * 1-5", "0 18 */4 * 1-5"));
    } else {
        await fs.writeFile("./.github/workflows/dynamic-injection-workflow.yml", readmeTemplate.replace("0 18 */4 * 1-5", "0 18 */3 * 1-5"));
    }

}
main();
