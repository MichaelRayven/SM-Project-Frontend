import { AnyAbility } from "@casl/ability/dist/types"
import { createContextualCan } from "@casl/react"
import { createContext } from "react"

export const AbilityContext = createContext<AnyAbility>({} as AnyAbility)
export const Can = createContextualCan(AbilityContext.Consumer)