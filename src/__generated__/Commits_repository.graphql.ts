/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Commits_repository = {
    readonly defaultBranchRef: {
        readonly target: {
            readonly history?: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly url: unknown;
                    } | null;
                } | null> | null;
            };
        };
    } | null;
    readonly " $refType": "Commits_repository";
};
export type Commits_repository$data = Commits_repository;
export type Commits_repository$key = {
    readonly " $data"?: Commits_repository$data;
    readonly " $fragmentRefs": FragmentRefs<"Commits_repository">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Commits_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Ref",
      "kind": "LinkedField",
      "name": "defaultBranchRef",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "target",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "first",
                      "value": 5
                    }
                  ],
                  "concreteType": "CommitHistoryConnection",
                  "kind": "LinkedField",
                  "name": "history",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "CommitEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "Commit",
                          "kind": "LinkedField",
                          "name": "node",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "url",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": "history(first:5)"
                }
              ],
              "type": "Commit",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
(node as any).hash = '389565d0adb3371ab79a127cf8927d70';
export default node;
