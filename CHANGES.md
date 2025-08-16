# Changes

## 1.0.0

- [`211380b`](https://github.com/mochify-js/driver-jsdom/commit/211380b791d10e18e2a3bad094a4a1e662301eac)
  build: clean before build when running prepack (Yashar Fakhari)
- [`dfff304`](https://github.com/mochify-js/driver-jsdom/commit/dfff3041baf000312700f2e89d63fa0c48c58902)
  chore: upgrade @mochify/mochify to 1.0.1 (#8) (Yashar Fakhari)
- [`244dc17`](https://github.com/mochify-js/driver-jsdom/commit/244dc17fc6f446ec20faf445235667684d315c78)
  ci: set Dependabot to update package.json versions (Yashar Fakhari)
- [`30f1a33`](https://github.com/mochify-js/driver-jsdom/commit/30f1a33bb69732eb981e7061c52e94d01e421288)
  chore(deps-dev): bump @types/node from 24.2.1 to 24.3.0 (#6) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`02f9f0a`](https://github.com/mochify-js/driver-jsdom/commit/02f9f0afc1a9ef079571b5cc82d3643762810a02)
  ci: fix Dependabot PR auto merge checkout and permissions (Yashar Fakhari)
- [`933b0fc`](https://github.com/mochify-js/driver-jsdom/commit/933b0fc3e5ae224a35aaa211bd287d2cdce74b89)
  chore: Add Dependabot config and automerge (#4) (Yashar Fakhari)
- [`119e609`](https://github.com/mochify-js/driver-jsdom/commit/119e6093efdfbff38a192e98c59a00b45045b533)
  test: improve test suite and add coverage reporting (Yashar Fakhari)
    >
    > - Enhance jsdom option regression tests with assertions
    > - Add validation for url, pretendToBeVisual, and strictSSL options to capture potential jsdom breaking API changes
    > - Add c8 for test coverage reporting and verify 100% code coverage
    > - Update CI workflow to run coverage checks on Node 22.x and skip duplicate test runs
- [`d8f7eef`](https://github.com/mochify-js/driver-jsdom/commit/d8f7eefc21141a912b682a993310a8f51d4ec586)
  chore(doc): Update documentation (Yashar Fakhari)
- [`e909fcd`](https://github.com/mochify-js/driver-jsdom/commit/e909fcdbfcd3ea5d2e329763ea844b321821d8ed)
  chore: Update dependencies (Yashar Fakhari)
    >
    > - Upgraded ESLint from v8 to v9; using @studio/eslint-config v8.0.1 with new flat config file: eslint.config.js
    > - Upgraded all other dependencies
    > - Updated minimum Node.js requirement to v20 (Node.js 18 reaches EOL in April 2025)
    > - Updated GitHub workflow: added read-only permissions, updated to Node.js 20/22 matrix, and included build step in CI checks

_Released by Yashar Fakhari on 2025-08-16._

## 0.3.1

- [`4844344`](https://github.com/mochify-js/driver-jsdom/commit/484434457010327d41b5f516695c3eefe7258836)
  Add mochify v0.5.0 as peer
- [`ab66d8c`](https://github.com/mochify-js/driver-jsdom/commit/ab66d8ce0130580f193c9c43a46cfc382d8ef206)
  Remove --workspace flag from changes

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2023-12-27._

## 0.3.0

- Initial release

_Released by [Maximilian Antoni](https://github.com/mantoni) on 2023-12-24._
