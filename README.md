https://github.com/nuxt/test-utils/pull/1054

#### Steps to reproduce

1. Clone repo and install dependencies using PNPM
2. Run `pnpm test`

#### Expected result

Test should pass

#### Actual result

Tests fail while setting up e2e testing environment, [as documented here](https://nuxt.com/docs/getting-started/testing#conflict-with-end-to-end-testing). The following error is produced.

```
> nuxt-app@ test /Users/scottbedard/code/nuxt-test-utils-repro
> vitest


 DEV  v2.1.8 /Users/scottbedard/code/nuxt-test-utils-repro

 ❯ tests/repro.test.ts (0)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/repro.test.ts [ tests/repro.test.ts ]
TypeError: The URL must be of scheme file
 ❯ node_modules/.pnpm/@nuxt+test-utils@3.15.1_@types+node@22.10.5_@vue+test-utils@2.4.6_happy-dom@16.5.3_magicast@0_bowdgsgpp7iuxou7xxi7ilwr4i/node_modules/@nuxt/test-utils/dirs.js:4:17

 ❯ node_modules/.pnpm/@nuxt+test-utils@3.15.1_@types+node@22.10.5_@vue+test-utils@2.4.6_happy-dom@16.5.3_magicast@0_bowdgsgpp7iuxou7xxi7ilwr4i/node_modules/@nuxt/test-utils/dist/e2e.mjs:4:31

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  no tests
   Start at  12:27:54
   Duration  644ms (transform 100ms, setup 149ms, collect 0ms, tests 0ms, environment 87ms, prepare 105ms)

 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```
