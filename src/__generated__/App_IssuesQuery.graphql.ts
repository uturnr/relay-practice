/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type App_IssuesQueryVariables = {
    name: string;
    owner: string;
};
export type App_IssuesQueryResponse = {
    readonly repository: {
        readonly " $fragmentRefs": FragmentRefs<"Issues_repository">;
    } | null;
};
export type App_IssuesQuery = {
    readonly response: App_IssuesQueryResponse;
    readonly variables: App_IssuesQueryVariables;
};



/*
query App_IssuesQuery(
  $name: String!
  $owner: String!
) {
  repository(owner: $owner, name: $name) {
    ...Issues_repository
    id
  }
}

fragment Issues_repository on Repository {
  issues(last: 5) {
    nodes {
      title
      author {
        __typename
        login
        ... on Node {
          __isNode: __typename
          id
        }
      }
      url
      state
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "App_IssuesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Issues_repository"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "App_IssuesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 5
              }
            ],
            "concreteType": "IssueConnection",
            "kind": "LinkedField",
            "name": "issues",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Issue",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "login",
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "state",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "issues(last:5)"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "69f7ddeea23260bd049381083db0595a",
    "id": null,
    "metadata": {},
    "name": "App_IssuesQuery",
    "operationKind": "query",
    "text": "query App_IssuesQuery(\n  $name: String!\n  $owner: String!\n) {\n  repository(owner: $owner, name: $name) {\n    ...Issues_repository\n    id\n  }\n}\n\nfragment Issues_repository on Repository {\n  issues(last: 5) {\n    nodes {\n      title\n      author {\n        __typename\n        login\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      url\n      state\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a195320ab95db0f05dc92281487ceaf7';
export default node;
