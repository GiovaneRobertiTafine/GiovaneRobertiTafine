require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");

async function main() {
    const readmeTemplate = (
        await fs.readFile(path.join(process.cwd(), "./.github/workflows/dynamic-injection-workflow.yml"))
    ).toString("utf-8");

    const index = readmeTemplate
        .indexOf("0 0 */3 * 1-5");

    if (index !== -1) {
        readmeTemplate.replace("0 0 */3 * 1-5", "0 0 */4 * 1-5");
    } else {
        readmeTemplate.replace("0 0 */4 * 1-5", "0 0 */3 * 1-5");
    }
    console.log(index);
    const readme = readmeTemplate;

    await fs.writeFile("./.github/workflows/dynamic-injection-workflow.yml", readme);
}
main();