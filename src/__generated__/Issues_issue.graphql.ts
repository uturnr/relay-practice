/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IssueState = "CLOSED" | "OPEN" | "%future added value";
export type Issues_issue = ReadonlyArray<{
    readonly id: string;
    readonly title: string;
    readonly author: {
        readonly avatarUrl: unknown;
        readonly url: unknown;
    } | null;
    readonly url: unknown;
    readonly state: IssueState;
    readonly " $refType": "Issues_issue";
}>;
export type Issues_issue$data = Issues_issue;
export type Issues_issue$key = ReadonlyArray<{
    readonly " $data"?: Issues_issue$data;
    readonly " $fragmentRefs": FragmentRefs<"Issues_issue">;
}>;



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Issues_issue",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
          "args": [
            {
              "kind": "Literal",
              "name": "size",
              "value": 80
            }
          ],
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": "avatarUrl(size:80)"
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "state",
      "storageKey": null
    }
  ],
  "type": "Issue",
  "abstractKey": null
};
})();
(node as any).hash = 'ec32c8432ba939292b2e16ac5b4d5367';
export default node;
