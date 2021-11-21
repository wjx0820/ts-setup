var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  borgName: () => borgName,
  introduceMyself: () => introduceMyself
});
var introduceMyself = (first, last) => `Hello ${first} ${last}`;
var borgName = () => {
  const members = Math.round(5 + Math.random() * 5) + 1;
  const member = Math.floor(Math.random() * members) + 1;
  return `Your Borg name is ${member} of ${members}!!!`;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  borgName,
  introduceMyself
});
//# sourceMappingURL=index.js.map
