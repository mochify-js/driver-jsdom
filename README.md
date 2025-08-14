# Mochify driver for jsdom

Run tests in [jsdom][web].

Use this driver with the [Mochify CLI][cli] to run Mocha tests in jsdom, a headless web browser emulator for testing. See [Mochify][mochify-docs] if you are looking for Mochify drivers for other browser testing environments.

[web]: https://github.com/jsdom/jsdom
[mochify-docs]: https://github.com/mochify-js
[cli]: https://github.com/mochify-js/cli

## Usage

Install the package from npm:

```
npm i @mochify/driver-jsdom -D
```

and pass it to the [Mochify CLI][cli]:

```
mochify --driver jsdom ...
```

Example with options passed to the driver:

```
mochify --driver jsdom \
  --driver-option.url https://example.test \
  --driver-option.pretendToBeVisual false
```

## Driver options

The driver allows the following options to be set:

- **`stderr`**: Defines the stream the test output will be written to. Default: `process.stderr`.

- **`strictSSL`**: Set to `false` to disable the requirement that SSL certificates be valid. Default: `false`.

- **`pretendToBeVisual`**: When `true`, jsdom will pretend that it is rendering and displaying content. Default: `true`.

- **`url`**: Run tests in the context of the given URL. Default: `http://localhost`.

## Passing through other options to jsdom

In addition to the driver options documented above, `driver-jsdom` allows you to pass through all of jsdom's other constructor options, using the defaults as [described here][ctr-options].
Note that it is not possible to use a custom `virtualConsole` or to set the `runScripts` option, because the driver needs to set these itself to function correctly.

[ctr-options]: https://github.com/jsdom/jsdom#customizing-jsdom
