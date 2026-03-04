# effect-starter-template

This repository is a starter template for an Effect-TS-based project.

> Note: Check other branches in this repository for different template variations.

It intentionally provides only a small set of opinionated defaults:

- Linting and formatting is configured with ESLint based on Effect-recommended guidance.
- Recommended extensions and extension configurations for VS Code are included in `.vscode/extensions.json` and `.vscode/settings.json` respectively.

## VS Code

### Note on formatting with Eslint

The `dbaeumer.vscode-eslint` extension does not provide a vscode formatter for the "Format Document" or "Format Selection" features.
Instead it relies on the `editor.codeActionsOnSave` setting to trigger formatting on save via the `@effect/eslint-plugin`.

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
