# Changes

## 2.0.0

- [`6fa2093`](https://github.com/mochify-js/driver-jsdom/commit/6fa20930af8b5def509f9300fdf923b2b2beb64a)
  chore: update dependencies (Yashar Fakhari)
    >
    > @mochify/mochify (peer): 1.0.1 -> 2.0.0
    >
    > mocha (dev): 11.8.0 -> 12.0.0-rc.6
    > @types/node (dev): 26.1.2 -> 26.3.0
    >
- [`817e429`](https://github.com/mochify-js/driver-jsdom/commit/817e429da4261fa694b421613ca62e59d55119cf)
  fix: upgrade and support jsdom 30 (Yashar Fakhari)
    >
    > BREAKING CHANGE: jsdomError.type "unhandled exception" has changed to "unhandled-exception" starting jsdom 27
    >
- [`b192e4d`](https://github.com/mochify-js/driver-jsdom/commit/b192e4d04e6a1f4030b02804b30139bf5e573755)
  test: address lint issue in test file (Yashar Fakhari)
- [`f7e8e34`](https://github.com/mochify-js/driver-jsdom/commit/f7e8e34ea4dcb8f8f03548740cde74bc2af1ded1)
  chore(deps-dev): upgrade typescript to 7.0.2, drop @studio/tsconfig @studio/tsconfig capped typescript at ^5, blocking the upgrade. Its settings are now inlined in tsconfig.json (Node 22+, nodenext), with tsconfig.pack.json and test/tsconfig.types-check.json extending it locally. (Yashar Fakhari)
    >
    > BREAKING CHANGE: require Node.js >=22
    >
- [`286f6c6`](https://github.com/mochify-js/driver-jsdom/commit/286f6c6832866b3c856b435f1b3af297d84e5001)
  chore: update eslint and @studio/eslint-config (Yashar Fakhari)
- [`fa3c36c`](https://github.com/mochify-js/driver-jsdom/commit/fa3c36c11e05f34e650908a2256ccb5d618219c3)
  chore(deps-dev): bump mocha from 11.7.6 to 11.8.0 (#77) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`50895d8`](https://github.com/mochify-js/driver-jsdom/commit/50895d80eea95aff66272c88c1b0456171db9ba4)
  chore(deps-dev): bump lint-staged from 17.2.0 to 17.3.0 (#73) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`88076f2`](https://github.com/mochify-js/driver-jsdom/commit/88076f2552866e3b26bb878311b2c79279b7f996)
  ci: use NodeJs 22+; fix dependabot run issues (Yashar Fakhari)
- [`f7acf57`](https://github.com/mochify-js/driver-jsdom/commit/f7acf575329bda8c897fa396e8564cbcc8da7f8d)
  chore(deps-dev): bump prettier from 3.9.4 to 3.9.6 (#72) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`10a24b4`](https://github.com/mochify-js/driver-jsdom/commit/10a24b40c5e81d42c44550e86baddc048fb22564)
  chore(deps-dev): bump lint-staged from 17.0.8 to 17.2.0 (#71) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`3884492`](https://github.com/mochify-js/driver-jsdom/commit/3884492a24eee9188f3c0c492939bca7eefa2f9d)
  chore(deps-dev): bump @types/node from 25.6.0 to 26.1.2 (#69) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`adec901`](https://github.com/mochify-js/driver-jsdom/commit/adec901bd669a81629a0c2715abb3f07fd323c91)
  chore(deps-dev): bump c8 from 11.0.0 to 12.0.0 (#66) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`476aa96`](https://github.com/mochify-js/driver-jsdom/commit/476aa96571500eb100d218e5b0d86c2b90fba0b7)
  chore(deps): bump actions/checkout from 6 to 7 (#65) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`79acedd`](https://github.com/mochify-js/driver-jsdom/commit/79acedd44295b18a1bd50ab933855699cdf3f5b9)
  chore(deps-dev): bump prettier from 3.8.3 to 3.9.4 (#63) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`6513d6e`](https://github.com/mochify-js/driver-jsdom/commit/6513d6eee160fbc291320a526a6941fb64375414)
  chore(deps-dev): bump lint-staged from 17.0.7 to 17.0.8 (#61) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`884523a`](https://github.com/mochify-js/driver-jsdom/commit/884523a1f20f1e5b51085f797033958a1f6ba2a9)
  chore(deps-dev): bump lint-staged from 16.4.0 to 17.0.7 (#58) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`06a6e8d`](https://github.com/mochify-js/driver-jsdom/commit/06a6e8dc8a3f94afe5df7bb0bb7a48f61d127da5)
  chore(deps-dev): bump mocha from 11.7.5 to 11.7.6 (#57) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`13df240`](https://github.com/mochify-js/driver-jsdom/commit/13df240d817867ea9f29a51d1a42aa4d55189158)
  chore(deps-dev): bump prettier from 3.8.1 to 3.8.3 (#55) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`4fb1ff7`](https://github.com/mochify-js/driver-jsdom/commit/4fb1ff7df6ed535040a53041d001d6d2b0ab418e)
  chore(deps-dev): bump @types/node from 25.5.0 to 25.6.0 (#53) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`659718b`](https://github.com/mochify-js/driver-jsdom/commit/659718b67709970a9ab6c569c67d66318bcd8dc0)
  chore(deps-dev): bump lint-staged from 16.3.0 to 16.4.0 (#50) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`c7cd35a`](https://github.com/mochify-js/driver-jsdom/commit/c7cd35a673f0680f7caa333a2670c73c6351c875)
  chore(deps-dev): bump @types/node from 25.3.3 to 25.5.0 (#47) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`61e9491`](https://github.com/mochify-js/driver-jsdom/commit/61e94910800a495fe27bff2604f9f34b9177c88b)
  chore(deps-dev): bump @sinonjs/referee-sinon from 12.0.0 to 12.0.1 (#45) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`aec0cd4`](https://github.com/mochify-js/driver-jsdom/commit/aec0cd42d8bc8c7501e9d4b19f1bf9fc745397cd)
  chore(deps-dev): bump prettier from 3.7.4 to 3.8.1 (#38) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`f712f4c`](https://github.com/mochify-js/driver-jsdom/commit/f712f4c2c3c47fa53a89efe7026a6094d7c11b6b)
  chore(deps-dev): bump c8 from 10.1.3 to 11.0.0 (#43) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`0cb9a21`](https://github.com/mochify-js/driver-jsdom/commit/0cb9a21a333e6d4a19e10370ae6d42e752af867a)
  chore(deps-dev): bump rimraf from 6.1.2 to 6.1.3 (#44) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`617c27a`](https://github.com/mochify-js/driver-jsdom/commit/617c27af682c0f17dc194dbb5095f9a8f97b0578)
  chore(deps-dev): bump @types/node from 25.1.0 to 25.3.3 (#41) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`cdba80e`](https://github.com/mochify-js/driver-jsdom/commit/cdba80e69968eaad12f5cf5ac7a40d7fc8dc4828)
  chore(deps-dev): bump lint-staged from 16.2.7 to 16.3.0 (#39) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`fb20167`](https://github.com/mochify-js/driver-jsdom/commit/fb201675336aa88d4d258e4795c61f42229a6148)
  chore(deps-dev): bump @types/node from 25.0.3 to 25.1.0 (#37) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`ea3c68f`](https://github.com/mochify-js/driver-jsdom/commit/ea3c68f84237a2e49914bcfbe1fbdc436a32c660)
  chore(deps): bump actions/checkout from 5 to 6 (#36) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`901b95a`](https://github.com/mochify-js/driver-jsdom/commit/901b95a24c6d5c54420947838c99a2f3d506761b)
  chore(deps): bump actions/setup-node from 5 to 6 (#35) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`800f4ee`](https://github.com/mochify-js/driver-jsdom/commit/800f4eed4e64554f3f5540a30b2339d24ed5dac9)
  chore(deps-dev): bump eslint from 9.39.1 to 9.39.2 (#33) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`87d2d3e`](https://github.com/mochify-js/driver-jsdom/commit/87d2d3e4729eb30d223e38b5fabe970ab2d82cd6)
  chore(deps-dev): bump @types/node from 24.10.1 to 25.0.3 (#34) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`2aed796`](https://github.com/mochify-js/driver-jsdom/commit/2aed79628d7f583b9459ea387a12780cdb244f4e)
  chore(deps-dev): bump prettier from 3.7.3 to 3.7.4 (#32) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`83ab91c`](https://github.com/mochify-js/driver-jsdom/commit/83ab91c8607559edeffb03b64815ddbf271ae980)
  chore(deps-dev): bump prettier from 3.6.2 to 3.7.3 (#27) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`8a37fda`](https://github.com/mochify-js/driver-jsdom/commit/8a37fdaef67df1169fd12fd12bf258db9ae7a264)
  chore(deps-dev): bump lint-staged from 16.2.6 to 16.2.7 (#26) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`b14fc55`](https://github.com/mochify-js/driver-jsdom/commit/b14fc5595b7db1c8fefbf383e5a2f76a0380fdf3)
  chore(deps-dev): bump eslint from 9.39.0 to 9.39.1 (#30) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`fa158af`](https://github.com/mochify-js/driver-jsdom/commit/fa158afbe2350b42144dd82ab4efe333c91a9e5c)
  chore(deps-dev): bump rimraf from 6.1.0 to 6.1.2 (#25) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`8a3bd64`](https://github.com/mochify-js/driver-jsdom/commit/8a3bd64edf273f8a401d1d8c3385fd2de572879a)
  chore(deps-dev): bump @types/node from 24.9.2 to 24.10.1 (#28) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`cc6dcc1`](https://github.com/mochify-js/driver-jsdom/commit/cc6dcc17c9684935a71586c369a536a0baf583ba)
  chore(deps-dev): bump mocha from 11.7.4 to 11.7.5 (#24) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`2c26389`](https://github.com/mochify-js/driver-jsdom/commit/2c26389b769b1a7eabac2510641ca7b6d02e0ae3)
  chore(deps-dev): bump lint-staged from 16.2.3 to 16.2.6 (#20) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`e25b414`](https://github.com/mochify-js/driver-jsdom/commit/e25b4145ad23206c2a664463c8799ca1ada72d89)
  chore(deps-dev): bump rimraf from 6.0.1 to 6.1.0 (#23) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`d49efb2`](https://github.com/mochify-js/driver-jsdom/commit/d49efb20385fb458de779d1f836c91c687a1c69e)
  chore(deps-dev): bump @types/node from 24.6.1 to 24.9.2 (#21) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`7416943`](https://github.com/mochify-js/driver-jsdom/commit/7416943f3363e7c153ad6bdb71104a29401cfa87)
  chore(deps-dev): bump eslint from 9.36.0 to 9.39.0 (#19) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`637d0dd`](https://github.com/mochify-js/driver-jsdom/commit/637d0dd4b242c9baaaee5b69ddc8bef024550024)
  chore(deps-dev): bump mocha from 11.7.3 to 11.7.4 (#18) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`bf90182`](https://github.com/mochify-js/driver-jsdom/commit/bf901829ad5f127ec4cffab0f29381d72f202838)
  chore(deps): bump actions/setup-node from 4 to 5 (#17) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`84ee38d`](https://github.com/mochify-js/driver-jsdom/commit/84ee38dda1b90fa5b870e50d0ab838a05a6ef045)
  chore(deps-dev): bump @types/node from 24.3.0 to 24.6.1 (#14) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`0586dc3`](https://github.com/mochify-js/driver-jsdom/commit/0586dc35d68e422c214e44a4d9bfcd5fd7a900e3)
  chore(deps-dev): bump mocha from 11.7.1 to 11.7.3 (#16) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`3836e64`](https://github.com/mochify-js/driver-jsdom/commit/3836e64a4f1388d9d812fdc62d2e0b842f8c450f)
  chore(deps-dev): bump lint-staged from 16.1.5 to 16.2.3 (#15) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`29be36b`](https://github.com/mochify-js/driver-jsdom/commit/29be36bd0951c55d98254518f639de5281ef4cf4)
  chore(deps-dev): bump typescript from 5.9.2 to 5.9.3 (#11) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`788cd99`](https://github.com/mochify-js/driver-jsdom/commit/788cd991f9151f1f8739425bbd50228a13a683a2)
  chore(deps-dev): bump eslint from 9.34.0 to 9.36.0 (#12) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>
- [`5d6bd0a`](https://github.com/mochify-js/driver-jsdom/commit/5d6bd0a1c4b509862bc3c2685041f31f2fff4784)
  chore(deps-dev): bump eslint from 9.33.0 to 9.34.0 (#10) (dependabot[bot])
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

_Released by Yashar Fakhari on 2026-08-25._

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
