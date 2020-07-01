let hd = new Map([["houdunren", "后盾人"], ["hdcms", "开源系统"]]);

let newArr = [...hd].filter(function(item) {
  return item[1].includes("后盾人");
});

hd = new Map(newArr);
console.log(...hd.keys());