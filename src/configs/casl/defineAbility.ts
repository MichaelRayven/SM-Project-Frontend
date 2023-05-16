import { AbilityClass, PureAbility, defineAbility } from "@casl/ability"

type Actions = "manage" | "create" | "read" | "update" | "delete"
type Subjects = "all"

export type AppAbility = PureAbility<[Actions, Subjects]>;
export const AppAbility = PureAbility as AbilityClass<AppAbility>

export default (user: any) => defineAbility((can, cannot) => {
	// ** Example code from CASL documentation
	// can('read', 'Article');
	// ** Apply rule to specific fields
	// can('update', 'Article', ['title', 'description']);
	// ** Set a condition to a rule
	// can('update', 'Article', { authorId: user.id });
})