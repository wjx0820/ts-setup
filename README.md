# ts project setup

## Special

modern ways to build and run typescript projects

- [tsup](https://github.com/egoist/tsup)
- [esno](https://github.com/antfu/esno)

## Develop

```bash
cd mylib

pnpm install
pnpm run build
```

## Consume

js

```bash
cd js-consumer

pnpm link ../mylib
node index.js
```

ts

```bash
cd ts-comsumer

pnpm link ../mylib
esno index.ts
```
