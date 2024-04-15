# How to reproduce

Install deps

```bash
pnpm install
```

Run the dev server

```bash
pnpm dev
```

Open the browser and go to http://localhost:6173/be/marktplaats

Check the console logs and `pnpm dev` logs in your terminal.

dev log:

```
http://localhost:6173
/be/marktplaats (current URL from express)
[Vue Router warn]: No match found for location with path "/be/marktplaats"
{
  fullPath: '/be/marktplaats',
  path: '/be/marktplaats',
  query: {},
  hash: '',
  name: undefined,
  params: {},
  matched: [],
  meta: {},
  redirectedFrom: undefined,
  href: '/be/be/marktplaats'
```

console log:

```
{
    "fullPath": "/marktplaats",
    "path": "/marktplaats",
    "query": {},
    "hash": "",
    "name": "marketplace___nl",
    "params": {},
    "matched": [
        {
            "path": "/marktplaats",
            "name": "marketplace___nl",
            "meta": {},
            "props": {
                "default": false
            },
            "children": [],
            "instances": {
                "default": {}
            },
            "leaveGuards": {},
            "updateGuards": {},
            "enterCallbacks": {},
            "components": {
                "default": {
                    "__hmrId": "892f664d",
                    "__file": "/Users/youri/dev/vue-router-problem/src/views/Marketplace.vue"
                }
            }
        }
    ],
    "meta": {},
    "href": "/be/marktplaats"
}
```
