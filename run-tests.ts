import { runAllRuleTests } from './src/engine/ruleTests';

const results = runAllRuleTests();
const failed = results.filter((r) => !r.passed);

console.log(`Total tests: ${results.length}`);
console.log(`Passed: ${results.length - failed.length}`);
console.log(`Failed: ${failed.length}`);

if (failed.length > 0) {
  console.error('\nFAILED TESTS:');
  failed.forEach((f) => {
    console.error(`- [${f.testId}] ${f.name}`);
    console.error(`  Reason: ${f.message}`);
  });
  process.exit(1);
}

console.log('\nAll tests passed successfully!');
process.exit(0);
