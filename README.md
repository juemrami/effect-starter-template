# effect-starter-template

This repository is a starter template for an Effect-TS-based project.

> Note: Check other branches in this repository for different template variations.

It intentionally provides only a small set of opinionated defaults:

- Linting and formatting are configured with `oxlint` + `dprint`.
- Recommended extensions and extension configurations for VS Code are included in `.vscode/extensions.json` and `.vscode/settings.json` respectively.

## VS Code

### Note on formatting with `dprint`

This template's `dprint.path` setting is configured to point to the binary in `./node_modules/.bin`; however, you may need to adjust the setting string's path separators depending on your OS.

Alternatively, you can install `dprint` globally and remove the `dprint.path` setting all together. The `dprint.dprint` extension will use whatever binary your PATH resolves to.

### Note on the oxlint-effect plugin

This plugin is maintained as [`@effect/oxc` inside the Effect v4 development
monorepo](https://github.com/Effect-TS/effect-smol/tree/main/packages/tools/oxc), __but__ it is currently marked [private](https://github.com/Effect-TS/effect-smol/blob/main/packages/tools/oxc/package.json#L5) and therefore __not published to npm__.

It is included locally at `./oxlint/effect` until there is an official release.

I recommend moving to the `@effect` vendored version whenever it becomes available.

### Note on TypeScript SDK + Effect LSP

Ensure your editor uses the workspace TypeScript version.

This step is critical for the language service to function properly. The plugin must run on the TypeScript version installed in your project, not the one bundled with your editor.

You can do this in either of two ways:

1. Modify your workspace's `.vscode/settings.json` to point to the TypeScript SDK in your `node_modules`:

```json
{
  "typescript.tsdk": "./node_modules/typescript/lib"
}
```

2. Use the Command Palette:
   1. Open a TypeScript file.
   2. Open the Command Palette.
   3. Run `TypeScript: Select TypeScript Version`.
   4. Choose `Use Workspace Version`.

> Note: This template's `typescript.tsdk` setting already points to your project workspace's `node_modules`; however, you may need to adjust path separators depending on your OS.
