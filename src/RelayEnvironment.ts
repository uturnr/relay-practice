// your-app-name/src/RelayEnvironment.js
import type {
  FetchFunction,
} from 'relay-runtime';
import {
  Environment, Network, RecordSource, Store,
} from 'relay-runtime';

import fetchGraphQl from './fetchGraphQl';

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.

const fetchRelay: FetchFunction = async (parameters, variables) => {
  return fetchGraphQl(parameters.text, variables);
};

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
