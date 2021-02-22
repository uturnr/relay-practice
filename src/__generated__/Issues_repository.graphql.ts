/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
export type Issues_repository = {
    readonly issues: {
        readonly nodes: ReadonlyArray<{
            readonly title: string;
            readonly author: {
                readonly login: string;
            } | null;
            readonly url: unknown;
            readonly state: IssueState;
        } | null> | null;
    };
    readonly " $refType": "Issues_repository";
};
export type Issues_repository$data = Issues_repository;
export type Issues_repository$key = {
    readonly " $data"?: Issues_repository$data;
    readonly " $fragmentRefs": FragmentRefs<"Issues_repository">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Issues_repository",
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
                  "name": "login",
                  "storageKey": null
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "issues(last:5)"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
(node as any).hash = 'b88c560c3734c4a0f174b644599b7611';
export default node;
