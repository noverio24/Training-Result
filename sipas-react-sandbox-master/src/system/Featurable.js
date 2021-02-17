import React, { memo, createContext, useContext, Node, Context } from 'react';
import { Record } from 'immutable';

// context
const FeatureContext: Context<Record> = createContext(Record({})());
FeatureContext.displayName = 'Feature';

const FeatureStore = FeatureContext.Provider;
FeatureStore.displayName = 'FeatureStore';

const createStore = data => {
	return Record(data)(); // we used default values instead;
};

// Consumer
type Props = {
	name: string,
	fallback?: Node,
};
const FeatureConsumer = ({ name, fallback, children, ...props }: Props) => {
	const feature = useContext(FeatureContext);

	if (feature.get(name) === true) {
		return children;
	}
	return fallback;
};
FeatureConsumer.defaultProps = {
	fallback: null,
};
const Featurable = memo(FeatureConsumer);
Featurable.displayName = 'Featureable';

// HOC
const withFeature = (name: string, fallback?: Node) => BaseComponent => {
	return props => (
		<Featurable name={name} fallback={fallback}>
			<BaseComponent />
		</Featurable>
	);
};

export default Featurable;
export { FeatureContext, FeatureStore, createStore, Featurable, withFeature };
