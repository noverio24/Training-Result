// @flow
import React, { memo, createContext, useContext, Node } from 'react';
import { Record } from 'immutable';

// Context
const RuleContext: Context<Record> = createContext(Record({})());
RuleContext.displayName = 'Rule';

const RuleStore = RuleContext.Provider;
RuleStore.displayName = 'RuleStore';

const createStore = (data) => {
    return Record(data)(); // we used default values instead;
}

// Consumer
type Props = {
	name: string,
	fallback?: Node,
};
const RuleConsumer = ({ name, fallback, children, ...props }: Props) => {
	const rules = useContext(RuleContext);

    if (rules.get(name) === true) {
		return children;
	}
	return fallback;
};
RuleConsumer.defaultProps = {
    fallback: null
}
const Rulable = memo(RuleConsumer);
Rulable.displayName = 'Rulable';

// HOC
const withRule = (name: string, fallback? : Node) => BaseComponent => {
    return props => (
        <Rulable name={name} fallback={fallback}>
            <BaseComponent />
        </Rulable>
    )
};

export default Rulable;
export {
    RuleContext,
    RuleStore,
    createStore,
    Rulable,
    withRule
};
