import { Console, Effect } from "effect"

await Effect.runPromise(
	Console.log(
		"Hello, World!"
	)
)
