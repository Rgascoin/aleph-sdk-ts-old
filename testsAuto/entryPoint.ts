import { testsSuits, testsFunc } from "./index";

async function launchTestsAuto(): Promise<void> {
    let passed = true;
    const testBatch: testsFunc[] = [testsSuits.substrateTests.default];

    for (let i = 0; i < testBatch.length; i++) {
        console.log(`---Starting: ${testBatch[i].name}`);
        passed = (await testBatch[i]()) ? passed : false;
    }
    if (!passed) process.exit(1);
    else process.exit(0);
}

launchTestsAuto();