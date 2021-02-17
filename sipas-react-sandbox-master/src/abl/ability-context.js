import { createContext } from 'react'
import { createContextualCan } from '@casl/react'

const AbilityContext = createContext();
AbilityContext.displayName = 'Ability';

const Can = createContextualCan(AbilityContext.Consumer);

export {
    AbilityContext,
    Can
}