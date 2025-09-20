// @ts-check
import * as effect from "@effect/eslint-plugin"
import js from "@eslint/js"
import * as tsResolver from "eslint-import-resolver-typescript"
import { importX as importPlugin } from "eslint-plugin-import-x"
import { defineConfig } from "eslint/config"
import * as tslint from "typescript-eslint"

export default defineConfig(
	js.configs.recommended,
	tslint.configs.strict,
	effect.configs.dprint,
	// @ts-expect-error
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	{
		files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
		// ignores: ["**/dist", "**/.jj"],
		extends: [],
		languageOptions: {
			parser: tslint.parser,
			ecmaVersion: "latest",
			sourceType: "module"
		},
		settings: {
			"import-x/resolver": {
				name: "tsResolver",
				resolver: tsResolver,
				options: {
					alwaysTryTypes: true
				}
			}
		},
		rules: {
			"no-fallthrough": "off",
			"no-irregular-whitespace": "off",
			"object-shorthand": "error",
			"prefer-destructuring": "off",
			"sort-imports": "off",
			"no-restricted-syntax": ["error", {
				selector: "CallExpression[callee.property.name='push'] > SpreadElement.arguments",
				message: "Do not use spread arguments in Array.push"
			}],
			"no-unused-vars": "off",
			"prefer-rest-params": "off",
			"prefer-spread": "off",

			"import-x/export": "off",
			"import-x/first": "error",
			"import-x/newline-after-import": "error",
			"import-x/no-duplicates": "error",
			"import-x/no-named-as-default-member": "off",
			"import-x/no-unresolved": "off",
			"import-x/order": "off",

			"@typescript-eslint/member-delimiter-style": 0,
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-empty-interface": "off",
			"@typescript-eslint/consistent-type-imports": "warn",

			"@typescript-eslint/no-unused-vars": ["error", {
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_"
			}],

			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/camelcase": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/interface-name-prefix": "off",
			"@typescript-eslint/no-array-constructor": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/no-namespace": "off",

			"@effect/dprint": ["error", {
				config: {
					useTabs: true,
					indentWidth: 2,
					newLineKind: "lf",
					lineWidth: 120,
					semiColons: "asi",
					quoteStyle: "alwaysDouble",
					trailingCommas: "never",
					operatorPosition: "maintain",
					"arrowFunction.useParentheses": "force"
				}
			}]
		}
	}
)
