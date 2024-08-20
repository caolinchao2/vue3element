// docs/.vitepress/config.ts
import { defineConfig } from "file:///D:/%E6%88%91%E7%9A%84%E6%96%87%E4%BB%B6/my_vite_note/cao_note/node_modules/.store/vitepress@1.0.0-rc.20/node_modules/vitepress/dist/node/index.js";
import MarkdownPreview from "file:///D:/%E6%88%91%E7%9A%84%E6%96%87%E4%BB%B6/my_vite_note/cao_note/node_modules/.store/vite-plugin-markdown-preview@1.1.1/node_modules/vite-plugin-markdown-preview/dist/index.js";

// docs/.vitepress/configs/algolia.ts
var algolia = {
  appId: "ZY19PJ7SI4",
  apiKey: "2edabd92a531a4daaa0c65bc81ad4ef2",
  indexName: "cao-linchao-gitee",
  placeholder: "\u641C\u7D22",
  translations: {
    button: {
      buttonText: "\u641C\u7D22",
      buttonAriaLabel: "\u641C\u7D22"
    },
    modal: {
      searchBox: {
        resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
        resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
        cancelButtonText: "\u53D6\u6D88",
        cancelButtonAriaLabel: "\u53D6\u6D88"
      },
      startScreen: {
        recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
        noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
        saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
        removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
        favoriteSearchesTitle: "\u6536\u85CF",
        removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
      },
      errorScreen: {
        titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
        helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
      },
      footer: {
        selectText: "\u9009\u62E9",
        navigateText: "\u5207\u6362",
        closeText: "\u5173\u95ED",
        searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
      },
      noResultsScreen: {
        noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
        suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
        reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
        reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
      }
    }
  }
};

// docs/.vitepress/configs/head.ts
var APP_BASE_PATH_favicon = "/favicon.ico";
if (process.env.NODE_ENV !== "development") {
  APP_BASE_PATH_favicon = "/x_c_note/favicon.ico";
}
var head = [
  ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["link", { rel: "apple-touch-icon", href: APP_BASE_PATH_favicon }],
  ["link", { rel: "icon", href: APP_BASE_PATH_favicon }],
  ["link", { rel: "mask-icon", href: APP_BASE_PATH_favicon, color: "#3eaf7c" }],
  ["meta", { name: "msapplication-TileImage", content: APP_BASE_PATH_favicon }],
  ["meta", { name: "msapplication-TileColor", content: "#000000" }]
];

// docs/.vitepress/utils/createSideBar.ts
import { join as join2, sep } from "path";
import { readdirSync, statSync } from "fs";

// docs/scripts/globalConfig.ts
import { resolve, join } from "path";
var __vite_injected_original_dirname = "D:\\\u6211\u7684\u6587\u4EF6\\my_vite_note\\cao_note\\docs\\scripts";
var rootDir = resolve(__vite_injected_original_dirname, "../");
var rootDirFn = (dirName = "src") => {
  return resolve(__vite_injected_original_dirname, `../${dirName}`);
};
var docsDirFullPath = join(__vite_injected_original_dirname, "../");
var docsDirFullPathLen = docsDirFullPath.length;

// docs/.vitepress/utils/createSideBar.ts
function isMarkdownFile(fileName) {
  return !!fileName.match(/.+\.md$/);
}
function getDocsDirNameAfterStr(dirOrFileFullName) {
  return `${sep}${dirOrFileFullName.substring(docsDirFullPathLen)}`;
}
function getSidebarData(sidebarGenerateConfig = {}) {
  const {
    ignoreFileName = "index.md",
    ignoreDirNames = ["images", "asserts"]
  } = sidebarGenerateConfig;
  const dirFullPath = !(sidebarGenerateConfig == null ? void 0 : sidebarGenerateConfig.dirName) ? rootDir : rootDirFn(sidebarGenerateConfig.dirName);
  const allDirAndFileNameArr = readdirSync(dirFullPath);
  const obj = {};
  allDirAndFileNameArr.map((dirName) => {
    if (isMarkdownFile(dirName)) {
      return;
    }
    let subDirFullName = join2(dirFullPath, dirName);
    const property = getDocsDirNameAfterStr(subDirFullName).replace(/\\/g, "/") + "/";
    const arr = getSideBarItemTreeData(subDirFullName, 1, 3, ignoreFileName, ignoreDirNames, obj);
    obj[property] = arr;
  });
  return obj;
}
function getSideBarItemTreeData(dirFullPath, level, maxLevel, ignoreFileName, ignoreDirNames, objData = {}) {
  const allDirAndFileNameArr = readdirSync(dirFullPath);
  const result = [];
  allDirAndFileNameArr.map((fileOrDirName, idx) => {
    const fileOrDirFullPath = join2(dirFullPath, fileOrDirName);
    const stats = statSync(fileOrDirFullPath);
    if (stats.isDirectory()) {
      if (!ignoreDirNames.includes(fileOrDirName)) {
        const text = fileOrDirName.match(/^[0-9]{2}-.+/) ? fileOrDirName.substring(3) : fileOrDirName;
        const dirData = {
          text,
          collapsed: false
        };
        if (level !== maxLevel) {
          dirData.items = getSideBarItemTreeData(fileOrDirFullPath, level + 1, maxLevel, ignoreFileName, ignoreDirNames);
        }
        if (dirData.items) {
          dirData.collapsible = true;
        }
        result.push(dirData);
        objData[`${getDocsDirNameAfterStr(dirFullPath).replace(/\\/g, "/") + "/"}${fileOrDirName}`] = {
          text: fileOrDirName,
          // collapsed: false,
          items: dirData.items
        };
      }
    } else if (isMarkdownFile(fileOrDirName) && ignoreFileName !== fileOrDirName) {
      const matchResult = fileOrDirName.match(/(.+)\.md/);
      let text = matchResult ? matchResult[1] : fileOrDirName;
      text = text.match(/^[0-9]{2}-.+/) ? text.substring(3) : text;
      const fileData = {
        text,
        link: getDocsDirNameAfterStr(fileOrDirFullPath).replace(".md", "").replace(/\\/g, "/")
      };
      result.push(fileData);
    }
  });
  return result;
}
function getNavData(navGenerateConfig = {}) {
  const { maxLevel = 2 } = navGenerateConfig;
  const dirFullPath = rootDir;
  const result = getNavDataArr(dirFullPath, 1, maxLevel);
  return result;
}
function getNavDataArr(dirFullPath, level, maxLevel) {
  const allDirAndFileNameArr = readdirSync(dirFullPath);
  const result = [];
  allDirAndFileNameArr.map((fileOrDirName, idx) => {
    const fileOrDirFullPath = join2(dirFullPath, fileOrDirName);
    const stats = statSync(fileOrDirFullPath);
    const link = getDocsDirNameAfterStr(fileOrDirFullPath).replace(".md", "").replace(/\\/g, "/");
    const text = fileOrDirName.match(/^[0-9]{2}-.+/) ? fileOrDirName.substring(3).replace(/\.md$/, "") : fileOrDirName.replace(/\.md$/, "");
    if (stats.isDirectory()) {
      const dirData = {
        text,
        link: `${link}/`
      };
      if (level !== maxLevel) {
        const arr = getNavDataArr(fileOrDirFullPath, level + 1, maxLevel).filter((v) => v.text !== "index.md");
        if (arr.length > 0) {
          dirData.items = arr;
          delete dirData.link;
        }
      }
      dirData.activeMatch = link + "/";
      result.push(dirData);
    } else if (isMarkdownFile(fileOrDirName)) {
      const fileData = {
        text,
        link
      };
      fileData.activeMatch = link + "/";
      result.push(fileData);
    }
  });
  result.forEach((item, index) => {
    if (item.text === "\u7F51\u9875\u5BFC\u822A") {
      result.splice(index, 1);
    }
  });
  return result;
}

// docs/.vitepress/configs/nav.ts
function getNavDataItem(name) {
  var _a;
  let arr = getNavData().find((item) => item.text === name);
  (_a = arr == null ? void 0 : arr.items) == null ? void 0 : _a.forEach((item, index) => {
    var _a2;
    if (item.text === "index") {
      (_a2 = arr == null ? void 0 : arr.items) == null ? void 0 : _a2.splice(index, 1);
    }
  });
  return arr;
}
var nav = [
  // {
  //   text: '前端物语',
  //   items: [
  //     { text: 'JavaScript 基础知识', link: '/fe/javascript/types' },
  //     { text: 'ES6 常用知识', link: '/fe/es6/' },
  //     { text: 'TypeScript 基础知识', link: '/fe/typescript/base' },
  //     { text: '浏览器相关知识', link: '/fe/browser/' }
  //   ],
  //   activeMatch: '^/fe'
  // },
  { text: "\u4E3B\u9875", link: "/" },
  { text: "\u5BFC\u822A", link: "/nav/", activeMatch: "^/nav" },
  // {
  //   text: '前端',
  //   items: [
  //     { text: 'Html5-Css3', link: '/前端/Html5-Css3/标签，表格，表单' },
  //     { text: 'ES6 常用知识', link: '/前端/es6/es6-01 let、解构、模板、箭头' },
  //   ],
  //   activeMatch: '^/前端'
  // },
  getNavDataItem("\u524D\u7AEF"),
  {
    text: "TechToolkit",
    items: [
      { text: "Css", link: "/TechToolkit/Css/Css\u5E38\u7528\u6280\u5DE7/" },
      { text: "\u5E38\u7528\u6B63\u5219", link: "/TechToolkit/\u5E38\u7528\u6B63\u5219/" }
    ],
    activeMatch: "^/TechToolkit"
  },
  getNavDataItem("\u9762\u8BD5\u76F8\u5173")
];

// docs/.vitepress/configs/sidebar.ts
function getSidebarDataItem(name) {
  let arr = getSidebarData()[name];
  arr.forEach((item, index) => {
    item.items.forEach((item2, index2) => {
      if (item2.text === "code") {
        item.items.splice(index2, 1);
      }
    });
  });
  return arr;
}
var sidebar = {
  "/\u524D\u7AEF/": getSidebarDataItem("/\u524D\u7AEF/"),
  "/\u9762\u8BD5\u76F8\u5173/": getSidebarDataItem("/\u9762\u8BD5\u76F8\u5173/"),
  "/TechToolkit/": [
    {
      text: "CSS \u76F8\u5173",
      collapsed: false,
      items: [
        { text: "CSS \u8BED\u6CD5", link: "/TechToolkit/Css/Css\u5E38\u7528\u6280\u5DE7/" },
        { text: "Sass \u5E38\u7528\u6280\u5DE7", link: "/TechToolkit/Css/Sass\u5E38\u7528\u6280\u5DE7/" }
      ]
    },
    {
      text: "\u5E38\u7528\u6B63\u5219",
      link: "/TechToolkit/\u5E38\u7528\u6B63\u5219/"
    }
  ]
};

// docs/.vitepress/config.ts
var APP_BASE_PATH = "x_c_note";
var config_default = defineConfig({
  outDir: "../dist",
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : "/",
  lang: "zh-CN",
  title: "Cao Note",
  description: "\u524D\u7AEF\u5E38\u7528\u77E5\u8BC6\u3001\u6E90\u7801\u9605\u8BFB\u7B14\u8BB0\u3001\u5404\u79CD\u5947\u6DEB\u6280\u5DE7\u3001\u65E5\u5E38\u63D0\u6548\u5DE5\u5177\u7B49",
  head,
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },
  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    logo: "/logo.png",
    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: "deep",
      label: "\u672C\u9875\u76EE\u5F55"
    },
    socialLinks: [{ icon: "github", link: "https://gitee.com/cao-linchao/x_c_note" }],
    editLink: {
      pattern: "https://gitee.com/cao-linchao/cao_note/edit/master/docs/:path",
      text: "\u5728Gitee\u4E0A\u7F16\u8F91\u6B64\u9875 "
    },
    footer: {
      // message: '如有转载或 CV 的请标注本站原文地址',
      copyright: "Copyright \xA9 2024-present xiaocao"
    },
    darkModeSwitchLabel: "\u5916\u89C2",
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0",
    /* Algolia DocSearch 配置 */
    algolia,
    docFooter: {
      prev: "\u4E0A\u4E00\u7BC7",
      next: "\u4E0B\u4E00\u7BC7"
    }
  },
  vite: {
    plugins: [MarkdownPreview()]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlncy9hbGdvbGlhLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9jb25maWdzL2hlYWQudHMiLCAiZG9jcy8udml0ZXByZXNzL3V0aWxzL2NyZWF0ZVNpZGVCYXIudHMiLCAiZG9jcy9zY3JpcHRzL2dsb2JhbENvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlncy9uYXYudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZ3Mvc2lkZWJhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFx1NjIxMVx1NzY4NFx1NjU4N1x1NEVGNlxcXFxteV92aXRlX25vdGVcXFxcY2FvX25vdGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTYyMTFcdTc2ODRcdTY1ODdcdTRFRjZcXFxcbXlfdml0ZV9ub3RlXFxcXGNhb19ub3RlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNiU4OCU5MSVFNyU5QSU4NCVFNiU5NiU4NyVFNCVCQiVCNi9teV92aXRlX25vdGUvY2FvX25vdGUvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGJhc2VuYW1lIH0gZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcbmltcG9ydCBNYXJrZG93blByZXZpZXcgZnJvbSAndml0ZS1wbHVnaW4tbWFya2Rvd24tcHJldmlldydcclxuXHJcbmltcG9ydCB7IGhlYWQsIG5hdiwgc2lkZWJhcixhbGdvbGlhIH0gZnJvbSAnLi9jb25maWdzJ1xyXG5cclxuY29uc3QgQVBQX0JBU0VfUEFUSCA9ICd4X2Nfbm90ZSdcclxuLy8gY29uc3QgQVBQX0JBU0VfUEFUSCA9IGJhc2VuYW1lKHByb2Nlc3MuZW52LkdJVEhVQl9SRVBPU0lUT1JZIHx8ICcnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICBiYXNlOiBBUFBfQkFTRV9QQVRIID8gYC8ke0FQUF9CQVNFX1BBVEh9L2AgOiAnLycsXHJcblxyXG4gIGxhbmc6ICd6aC1DTicsXHJcbiAgdGl0bGU6ICdDYW8gTm90ZScsXHJcbiAgZGVzY3JpcHRpb246ICdcdTUyNERcdTdBRUZcdTVFMzhcdTc1MjhcdTc3RTVcdThCQzZcdTMwMDFcdTZFOTBcdTc4MDFcdTk2MDVcdThCRkJcdTdCMTRcdThCQjBcdTMwMDFcdTU0MDRcdTc5Q0RcdTU5NDdcdTZERUJcdTYyODBcdTVERTdcdTMwMDFcdTY1RTVcdTVFMzhcdTYzRDBcdTY1NDhcdTVERTVcdTUxNzdcdTdCNDknLFxyXG4gIGhlYWQsXHJcblxyXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gIGNsZWFuVXJsczogdHJ1ZSxcclxuICBpZ25vcmVEZWFkTGlua3M6IHRydWUsXHJcbiAgLyogbWFya2Rvd24gXHU5MTREXHU3RjZFICovXHJcbiAgbWFya2Rvd246IHtcclxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gIH0sXHJcblxyXG4gIC8qIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RSAqL1xyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBpMThuUm91dGluZzogZmFsc2UsXHJcblxyXG4gICAgbG9nbzogJy9sb2dvLnBuZycsXHJcblxyXG4gICAgbmF2LFxyXG4gICAgc2lkZWJhcixcclxuICAgIC8qIFx1NTNGM1x1NEZBN1x1NTkyN1x1N0VCMlx1OTE0RFx1N0Y2RSAqL1xyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBsZXZlbDogJ2RlZXAnLFxyXG4gICAgICBsYWJlbDogJ1x1NjcyQ1x1OTg3NVx1NzZFRVx1NUY1NScsXHJcbiAgICB9LFxyXG5cclxuICAgIHNvY2lhbExpbmtzOiBbeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0ZWUuY29tL2Nhby1saW5jaGFvL3hfY19ub3RlJyB9XSxcclxuICAgIGVkaXRMaW5rOiB7XHJcbiAgICAgIHBhdHRlcm46ICdodHRwczovL2dpdGVlLmNvbS9jYW8tbGluY2hhby9jYW9fbm90ZS9lZGl0L21hc3Rlci9kb2NzLzpwYXRoJyxcclxuICAgICAgdGV4dDogJ1x1NTcyOEdpdGVlXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1ICdcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgLy8gbWVzc2FnZTogJ1x1NTk4Mlx1NjcwOVx1OEY2Q1x1OEY3RFx1NjIxNiBDViBcdTc2ODRcdThCRjdcdTY4MDdcdTZDRThcdTY3MkNcdTdBRDlcdTUzOUZcdTY1ODdcdTU3MzBcdTU3NDAnLFxyXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjQtcHJlc2VudCB4aWFvY2FvJyxcclxuICAgIH0sXHJcblxyXG4gICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NTkxNlx1ODlDMicsXHJcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4JyxcclxuICAgIGxhc3RVcGRhdGVkVGV4dDogJ1x1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMCcsXHJcbiAgICAvKiBBbGdvbGlhIERvY1NlYXJjaCBcdTkxNERcdTdGNkUgKi9cclxuICAgIGFsZ29saWEsXHJcbiAgICBkb2NGb290ZXI6IHtcclxuICAgICAgcHJldjogJ1x1NEUwQVx1NEUwMFx1N0JDNycsXHJcbiAgICAgIG5leHQ6ICdcdTRFMEJcdTRFMDBcdTdCQzcnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICB2aXRlOiB7XHJcbiAgICBwbHVnaW5zOiBbTWFya2Rvd25QcmV2aWV3KCldLFxyXG4gIH0sXHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcXHU2MjExXHU3Njg0XHU2NTg3XHU0RUY2XFxcXG15X3ZpdGVfbm90ZVxcXFxjYW9fbm90ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU2MjExXHU3Njg0XHU2NTg3XHU0RUY2XFxcXG15X3ZpdGVfbm90ZVxcXFxjYW9fbm90ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnc1xcXFxhbGdvbGlhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTYlODglOTElRTclOUElODQlRTYlOTYlODclRTQlQkIlQjYvbXlfdml0ZV9ub3RlL2Nhb19ub3RlL2RvY3MvLnZpdGVwcmVzcy9jb25maWdzL2FsZ29saWEudHNcIjtpbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmV4cG9ydCBjb25zdCBhbGdvbGlhOiBEZWZhdWx0VGhlbWUuQWxnb2xpYVNlYXJjaE9wdGlvbnMgPSB7XHJcbiAgYXBwSWQ6ICdaWTE5UEo3U0k0JyxcclxuICBhcGlLZXk6ICcyZWRhYmQ5MmE1MzFhNGRhYWEwYzY1YmM4MWFkNGVmMicsXHJcbiAgaW5kZXhOYW1lOiAnY2FvLWxpbmNoYW8tZ2l0ZWUnLFxyXG4gIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyJyxcclxuICB0cmFuc2xhdGlvbnM6IHtcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyJyxcclxuICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyJ1xyXG4gICAgfSxcclxuICAgIG1vZGFsOiB7XHJcbiAgICAgIHNlYXJjaEJveDoge1xyXG4gICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6ICdcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYnLFxyXG4gICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnXHU1M0Q2XHU2RDg4JyxcclxuICAgICAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICdcdTUzRDZcdTZEODgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXJ0U2NyZWVuOiB7XHJcbiAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogJ1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXHJcbiAgICAgICAgbm9SZWNlbnRTZWFyY2hlc1RleHQ6ICdcdTZDQTFcdTY3MDlcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxyXG4gICAgICAgIHNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXHJcbiAgICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRFQ0VcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcdTRFMkRcdTc5RkJcdTk2NjQnLFxyXG4gICAgICAgIGZhdm9yaXRlU2VhcmNoZXNUaXRsZTogJ1x1NjUzNlx1ODVDRicsXHJcbiAgICAgICAgcmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEVDRVx1NjUzNlx1ODVDRlx1NEUyRFx1NzlGQlx1OTY2NCdcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JTY3JlZW46IHtcclxuICAgICAgICB0aXRsZVRleHQ6ICdcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUMnLFxyXG4gICAgICAgIGhlbHBUZXh0OiAnXHU0RjYwXHU1M0VGXHU4MEZEXHU5NzAwXHU4OTgxXHU2OEMwXHU2N0U1XHU0RjYwXHU3Njg0XHU3RjUxXHU3RURDXHU4RkRFXHU2M0E1J1xyXG4gICAgICB9LFxyXG4gICAgICBmb290ZXI6IHtcclxuICAgICAgICBzZWxlY3RUZXh0OiAnXHU5MDA5XHU2MkU5JyxcclxuICAgICAgICBuYXZpZ2F0ZVRleHQ6ICdcdTUyMDdcdTYzNjInLFxyXG4gICAgICAgIGNsb3NlVGV4dDogJ1x1NTE3M1x1OTVFRCcsXHJcbiAgICAgICAgc2VhcmNoQnlUZXh0OiAnXHU2NDFDXHU3RDIyXHU2M0QwXHU0RjlCXHU4MDA1J1xyXG4gICAgICB9LFxyXG4gICAgICBub1Jlc3VsdHNTY3JlZW46IHtcclxuICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcclxuICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6ICdcdTRGNjBcdTUzRUZcdTRFRTVcdTVDMURcdThCRDVcdTY3RTVcdThCRTInLFxyXG4gICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzVGV4dDogJ1x1NEY2MFx1OEJBNFx1NEUzQVx1OEJFNVx1NjdFNVx1OEJFMlx1NUU5NFx1OEJFNVx1NjcwOVx1N0VEM1x1Njc5Q1x1RkYxRicsXHJcbiAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogJ1x1NzBCOVx1NTFGQlx1NTNDRFx1OTk4OCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFx1NjIxMVx1NzY4NFx1NjU4N1x1NEVGNlxcXFxteV92aXRlX25vdGVcXFxcY2FvX25vdGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NjIxMVx1NzY4NFx1NjU4N1x1NEVGNlxcXFxteV92aXRlX25vdGVcXFxcY2FvX25vdGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ3NcXFxcaGVhZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JTg4JTkxJUU3JTlBJTg0JUU2JTk2JTg3JUU0JUJCJUI2L215X3ZpdGVfbm90ZS9jYW9fbm90ZS9kb2NzLy52aXRlcHJlc3MvY29uZmlncy9oZWFkLnRzXCI7aW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5sZXQgQVBQX0JBU0VfUEFUSF9mYXZpY29uID0gJy9mYXZpY29uLmljbydcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpe1xyXG4gIEFQUF9CQVNFX1BBVEhfZmF2aWNvbiA9ICcveF9jX25vdGUvZmF2aWNvbi5pY28nXHJcbn1cclxuZXhwb3J0IGNvbnN0IGhlYWQ6IEhlYWRDb25maWdbXSA9IFtcclxuICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjM2VhZjdjJyB9XSxcclxuICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJywgY29udGVudDogJ3llcycgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZScsIGNvbnRlbnQ6ICdibGFjaycgfV0sXHJcbiAgWydsaW5rJywgeyByZWw6ICdhcHBsZS10b3VjaC1pY29uJywgaHJlZjogQVBQX0JBU0VfUEFUSF9mYXZpY29uIH1dLFxyXG4gIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6IEFQUF9CQVNFX1BBVEhfZmF2aWNvbiB9XSxcclxuICBbJ2xpbmsnLCB7IHJlbDogJ21hc2staWNvbicsIGhyZWY6IEFQUF9CQVNFX1BBVEhfZmF2aWNvbiwgY29sb3I6ICcjM2VhZjdjJyB9XSxcclxuICBbJ21ldGEnLCB7IG5hbWU6ICdtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZScsIGNvbnRlbnQ6IEFQUF9CQVNFX1BBVEhfZmF2aWNvbiB9XSxcclxuICBbJ21ldGEnLCB7IG5hbWU6ICdtc2FwcGxpY2F0aW9uLVRpbGVDb2xvcicsIGNvbnRlbnQ6ICcjMDAwMDAwJyB9XSxcclxuXVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFx1NjIxMVx1NzY4NFx1NjU4N1x1NEVGNlxcXFxteV92aXRlX25vdGVcXFxcY2FvX25vdGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHV0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTYyMTFcdTc2ODRcdTY1ODdcdTRFRjZcXFxcbXlfdml0ZV9ub3RlXFxcXGNhb19ub3RlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx1dGlsc1xcXFxjcmVhdGVTaWRlQmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTYlODglOTElRTclOUElODQlRTYlOTYlODclRTQlQkIlQjYvbXlfdml0ZV9ub3RlL2Nhb19ub3RlL2RvY3MvLnZpdGVwcmVzcy91dGlscy9jcmVhdGVTaWRlQmFyLnRzXCI7aW1wb3J0IHsgam9pbiwgc2VwIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHN0YXRTeW5jIH0gZnJvbSAnZnMnXHJcbmltcG9ydCB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IHsgcm9vdERpciwgcm9vdERpckZuLCBkb2NzRGlyRnVsbFBhdGhMZW4gfSBmcm9tICcuLi8uLi9zY3JpcHRzL2dsb2JhbENvbmZpZydcclxuXHJcblxyXG5pbnRlcmZhY2UgU2lkZWJhckdlbmVyYXRlQ29uZmlnIHtcclxuICAvKipcclxuICAgKiBcdTk3MDBcdTg5ODFcdTkwNERcdTUzODZcdTc2ODRcdTc2RUVcdTVGNTUuIFx1OUVEOFx1OEJBNDphcnRpY2xlc1xyXG4gICAqL1xyXG4gIGRpck5hbWU/OiBzdHJpbmdcclxuICAvKipcclxuICAgKiBcdTVGRkRcdTc1NjVcdTc2ODRcdTY1ODdcdTRFRjZcdTU0MEQuIFx1OUVEOFx1OEJBNDogaW5kZXgubWRcclxuICAgKi9cclxuICBpZ25vcmVGaWxlTmFtZT86IHN0cmluZ1xyXG4gIC8qKlxyXG4gICAqIFx1NUZGRFx1NzU2NVx1NzY4NFx1NjU4N1x1NEVGNlx1NTkzOVx1NTQwRFx1NzlGMC4gXHU5RUQ4XHU4QkE0OiBbJ2RlbW8nLCdhc3NlcnRzJ11cclxuICAgKi9cclxuICBpZ25vcmVEaXJOYW1lcz86IHN0cmluZ1tdXHJcbn1cclxuXHJcbmludGVyZmFjZSBTaWRlQmFySXRlbSB7XHJcbiAgdGV4dDogc3RyaW5nXHJcbiAgY29sbGFwc2libGU/OiBib29sZWFuXHJcbiAgY29sbGFwc2VkPzogYm9vbGVhblxyXG4gIGl0ZW1zPzogU2lkZUJhckl0ZW1bXVxyXG4gIGxpbms/OiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIE5hdkdlbmVyYXRlQ29uZmlnIHtcclxuICAvKipcclxuICAgKiBcdTk3MDBcdTg5ODFcdTkwNERcdTUzODZcdTc2ODRcdTc2RUVcdTVGNTUuIFx1OUVEOFx1OEJBNDphcnRpY2xlc1xyXG4gICAqL1xyXG4gIGRpck5hbWU/OiBzdHJpbmdcclxuICAvKipcclxuICAgKiBcdTY3MDBcdTU5MjdcdTkwNERcdTUzODZcdTVDNDJcdTdFQTcuIFx1OUVEOFx1OEJBNDoxXHJcbiAgICovXHJcbiAgbWF4TGV2ZWw/OiBudW1iZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTIyNFx1NjVBRFx1NjYyRlx1NTQyNlx1NEUzQW1hcmtkb3duXHU2NTg3XHU0RUY2XHJcbiAqIEBwYXJhbSBmaWxlTmFtZSBcdTY1ODdcdTRFRjZcdTU0MERcclxuICogQHJldHVybnMgXHU2NzA5XHU4RkQ0XHU1NkRFXHU1MDNDXHU1MjE5XHU4ODY4XHU3OTNBXHU2NjJGbWFya2Rvd25cdTY1ODdcdTRFRjYsXHU1NDI2XHU1MjE5XHU0RTBEXHU2NjJGXHJcbiAqL1xyXG5mdW5jdGlvbiBpc01hcmtkb3duRmlsZShmaWxlTmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuICEhZmlsZU5hbWUubWF0Y2goLy4rXFwubWQkLylcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogXHU4M0I3XHU1M0Q2ZGlyT3JGaWxlRnVsbE5hbWVcdTRFMkRcdTdCMkNcdTRFMDBcdTRFMkEvZG9jcy9cdTU0MEVcdTc2ODRcdTYyNDBcdTY3MDlcdTUxODVcdTVCQjlcclxuICogIFx1NTk4MjpcclxuICogL2Etcm9vdC9kb2NzL3Rlc3QgXHU1MjE5IFx1ODNCN1x1NTNENlx1NTIzMCAvdGVzdFxyXG4gKiAvYS1yb290LWRvY3MvZG9jcy90ZXN0IFx1NTIxOSBcdTgzQjdcdTUzRDZcdTUyMzAgL3Rlc3RcclxuICogL2Etcm9vdC1kb2NzL2RvY3MvZG9jcy90ZXN0IFx1NTIxOSBcdTgzQjdcdTUzRDZcdTUyMzAgL2RvY3MvdGVzdFxyXG4gKiBAcGFyYW0gZGlyT3JGaWxlRnVsbE5hbWUgXHU2NTg3XHU0RUY2XHU2MjE2XHU4MDA1XHU3NkVFXHU1RjU1XHU1NDBEXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXREb2NzRGlyTmFtZUFmdGVyU3RyKGRpck9yRmlsZUZ1bGxOYW1lOiBzdHJpbmcpIHtcclxuICAvLyBcdTRGN0ZcdTc1Mjhkb2NzRGlyRnVsbFBhdGhMZW5cdTkxQzdcdTc1MjhcdTVCNTdcdTdCMjZcdTRFMzJcdTYyMkFcdTUzRDZcdTc2ODRcdTY1QjlcdTVGMEZcdUZGMENcdTkwN0ZcdTUxNERcdTU5MUFcdTVDNDJcdTc2RUVcdTVGNTVcdTkwRkRcdTUzRUJkb2NzXHU3Njg0XHU5NUVFXHU5ODk4XHJcbiAgcmV0dXJuIGAke3NlcH0ke2Rpck9yRmlsZUZ1bGxOYW1lLnN1YnN0cmluZyhkb2NzRGlyRnVsbFBhdGhMZW4pfWBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpZGViYXJEYXRhKHNpZGViYXJHZW5lcmF0ZUNvbmZpZzogU2lkZWJhckdlbmVyYXRlQ29uZmlnID0ge30pIHtcclxuICBjb25zdCB7XHJcbiAgICBpZ25vcmVGaWxlTmFtZSA9ICdpbmRleC5tZCcsXHJcbiAgICBpZ25vcmVEaXJOYW1lcyA9IFsnaW1hZ2VzJywgJ2Fzc2VydHMnXSxcclxuICB9ID0gc2lkZWJhckdlbmVyYXRlQ29uZmlnXHJcbiAgLy8gXHU4M0I3XHU1M0Q2XHU3NkVFXHU1RjU1XHU3Njg0XHU3RUREXHU1QkY5XHU4REVGXHU1Rjg0XHJcbiAgY29uc3QgZGlyRnVsbFBhdGggPSAhc2lkZWJhckdlbmVyYXRlQ29uZmlnPy5kaXJOYW1lID8gcm9vdERpciA6IHJvb3REaXJGbihzaWRlYmFyR2VuZXJhdGVDb25maWcuZGlyTmFtZSlcclxuICBjb25zdCBhbGxEaXJBbmRGaWxlTmFtZUFyciA9IHJlYWRkaXJTeW5jKGRpckZ1bGxQYXRoKVxyXG5cclxuICBjb25zdCBvYmogPSB7fVxyXG4gIGFsbERpckFuZEZpbGVOYW1lQXJyLm1hcChkaXJOYW1lID0+IHtcclxuICAgIGlmIChpc01hcmtkb3duRmlsZShkaXJOYW1lKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBzdWJEaXJGdWxsTmFtZSA9IGpvaW4oZGlyRnVsbFBhdGgsIGRpck5hbWUpXHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGdldERvY3NEaXJOYW1lQWZ0ZXJTdHIoc3ViRGlyRnVsbE5hbWUpLnJlcGxhY2UoL1xcXFwvZywgJy8nKSArICcvJ1xyXG4gICAgY29uc3QgYXJyID0gZ2V0U2lkZUJhckl0ZW1UcmVlRGF0YShzdWJEaXJGdWxsTmFtZSwgMSwgMywgaWdub3JlRmlsZU5hbWUsIGlnbm9yZURpck5hbWVzLCBvYmopXHJcbiAgICBvYmpbcHJvcGVydHldID0gYXJyXHJcbiAgfSlcclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNpZGVCYXJJdGVtVHJlZURhdGEoXHJcbiAgZGlyRnVsbFBhdGg6IHN0cmluZyxcclxuICBsZXZlbDogbnVtYmVyLFxyXG4gIG1heExldmVsOiBudW1iZXIsXHJcbiAgaWdub3JlRmlsZU5hbWU6IHN0cmluZyxcclxuICBpZ25vcmVEaXJOYW1lczogc3RyaW5nW10sXHJcbiAgb2JqRGF0YToge1twOiBzdHJpbmddOiBhbnl9ID0ge31cclxuKTogU2lkZUJhckl0ZW1bXSB7XHJcbiAgLy8gXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU2NTg3XHU0RUY2XHU1NDBEXHU1NDhDXHU3NkVFXHU1RjU1XHU1NDBEXHJcbiAgY29uc3QgYWxsRGlyQW5kRmlsZU5hbWVBcnIgPSByZWFkZGlyU3luYyhkaXJGdWxsUGF0aClcclxuICBjb25zdCByZXN1bHQ6IFNpZGVCYXJJdGVtW10gPSBbXVxyXG4gIGFsbERpckFuZEZpbGVOYW1lQXJyLm1hcCgoZmlsZU9yRGlyTmFtZTogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZmlsZU9yRGlyRnVsbFBhdGggPSBqb2luKGRpckZ1bGxQYXRoLCBmaWxlT3JEaXJOYW1lKVxyXG4gICAgY29uc3Qgc3RhdHMgPSBzdGF0U3luYyhmaWxlT3JEaXJGdWxsUGF0aClcclxuICAgIGlmIChzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgIGlmICghaWdub3JlRGlyTmFtZXMuaW5jbHVkZXMoZmlsZU9yRGlyTmFtZSkpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gZmlsZU9yRGlyTmFtZS5tYXRjaCgvXlswLTldezJ9LS4rLykgPyBmaWxlT3JEaXJOYW1lLnN1YnN0cmluZygzKSA6IGZpbGVPckRpck5hbWVcclxuICAgICAgICAvLyBcdTVGNTNcdTUyNERcdTRFM0FcdTY1ODdcdTRFRjZcdTU5MzlcclxuICAgICAgICBjb25zdCBkaXJEYXRhOiBTaWRlQmFySXRlbSA9IHtcclxuICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV2ZWwgIT09IG1heExldmVsKSB7XHJcbiAgICAgICAgICBkaXJEYXRhLml0ZW1zID0gZ2V0U2lkZUJhckl0ZW1UcmVlRGF0YShmaWxlT3JEaXJGdWxsUGF0aCwgbGV2ZWwgKyAxLCBtYXhMZXZlbCwgaWdub3JlRmlsZU5hbWUsIGlnbm9yZURpck5hbWVzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyRGF0YS5pdGVtcykge1xyXG4gICAgICAgICAgZGlyRGF0YS5jb2xsYXBzaWJsZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnB1c2goZGlyRGF0YSlcclxuICAgICAgICBvYmpEYXRhW2Ake2dldERvY3NEaXJOYW1lQWZ0ZXJTdHIoZGlyRnVsbFBhdGgpLnJlcGxhY2UoL1xcXFwvZywgJy8nKSArICcvJ30ke2ZpbGVPckRpck5hbWV9YF0gPSB7XHJcbiAgICAgICAgICB0ZXh0OiBmaWxlT3JEaXJOYW1lLFxyXG4gICAgICAgICAgLy8gY29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgICAgIGl0ZW1zOiBkaXJEYXRhLml0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlzTWFya2Rvd25GaWxlKGZpbGVPckRpck5hbWUpICYmIGlnbm9yZUZpbGVOYW1lICE9PSBmaWxlT3JEaXJOYW1lKSB7XHJcbiAgICAgIC8vIFx1NUY1M1x1NTI0RFx1NEUzQVx1NjU4N1x1NEVGNlxyXG4gICAgICBjb25zdCBtYXRjaFJlc3VsdCA9IGZpbGVPckRpck5hbWUubWF0Y2goLyguKylcXC5tZC8pXHJcbiAgICAgIGxldCB0ZXh0ID0gbWF0Y2hSZXN1bHQgPyBtYXRjaFJlc3VsdFsxXSA6IGZpbGVPckRpck5hbWVcclxuICAgICAgdGV4dCA9IHRleHQubWF0Y2goL15bMC05XXsyfS0uKy8pID8gdGV4dC5zdWJzdHJpbmcoMykgOiB0ZXh0XHJcbiAgICAgIGNvbnN0IGZpbGVEYXRhOiBTaWRlQmFySXRlbSA9IHtcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGxpbms6IGdldERvY3NEaXJOYW1lQWZ0ZXJTdHIoZmlsZU9yRGlyRnVsbFBhdGgpLnJlcGxhY2UoJy5tZCcsICcnKS5yZXBsYWNlKC9cXFxcL2csICcvJyksXHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0LnB1c2goZmlsZURhdGEpXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROYXZEYXRhKG5hdkdlbmVyYXRlQ29uZmlnOiBOYXZHZW5lcmF0ZUNvbmZpZyA9IHt9KSB7XHJcbiAgY29uc3QgeyBtYXhMZXZlbCA9IDIgfSA9IG5hdkdlbmVyYXRlQ29uZmlnXHJcbiAgY29uc3QgZGlyRnVsbFBhdGggPSByb290RGlyXHJcbiAgY29uc3QgcmVzdWx0ID0gZ2V0TmF2RGF0YUFycihkaXJGdWxsUGF0aCwgMSwgbWF4TGV2ZWwpXHJcblxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODNCN1x1NTNENlx1OTg3Nlx1OTBFOFx1NUJGQ1x1ODIyQVx1NjU3MFx1NjM2RVxyXG4gKlxyXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgZGlyRnVsbFBhdGggIFx1NUY1M1x1NTI0RFx1OTcwMFx1ODk4MVx1OTA0RFx1NTM4Nlx1NzY4NFx1NzZFRVx1NUY1NVx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFxyXG4gKiBAcGFyYW0gICB7bnVtYmVyfSAgICAgbGV2ZWwgICAgICAgIFx1NUY1M1x1NTI0RFx1NUM0Mlx1N0VBN1xyXG4gKiBAcGFyYW0gICB7bnVtYmVyW119ICAgbWF4TGV2ZWwgICAgIFx1NTE0MVx1OEJCOFx1OTA0RFx1NTM4Nlx1NzY4NFx1NjcwMFx1NTkyN1x1NUM0Mlx1N0VBN1xyXG4gKiBAcmV0dXJuICB7TmF2SXRlbVtdfSAgICAgICAgICAgICAgIFx1NUJGQ1x1ODIyQVx1NjU3MFx1NjM2RVx1NjU3MFx1N0VDNFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TmF2RGF0YUFycihkaXJGdWxsUGF0aDogc3RyaW5nLCBsZXZlbDogbnVtYmVyLCBtYXhMZXZlbDogbnVtYmVyKTogRGVmYXVsdFRoZW1lLk5hdkl0ZW1bXSB7XHJcbiAgLy8gXHU4M0I3XHU1M0Q2XHU2MjQwXHU2NzA5XHU2NTg3XHU0RUY2XHU1NDBEXHU1NDhDXHU3NkVFXHU1RjU1XHU1NDBEXHJcbiAgY29uc3QgYWxsRGlyQW5kRmlsZU5hbWVBcnIgPSByZWFkZGlyU3luYyhkaXJGdWxsUGF0aClcclxuICAvLyBjb25zb2xlLmxvZyhhbGxEaXJBbmRGaWxlTmFtZUFyciwnNjc4OTAnKVxyXG4gIGNvbnN0IHJlc3VsdDogRGVmYXVsdFRoZW1lLk5hdkl0ZW1bXSA9IFtdXHJcblxyXG4gIFxyXG4gIFxyXG4gIGFsbERpckFuZEZpbGVOYW1lQXJyLm1hcCgoZmlsZU9yRGlyTmFtZTogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZmlsZU9yRGlyRnVsbFBhdGggPSBqb2luKGRpckZ1bGxQYXRoLCBmaWxlT3JEaXJOYW1lKVxyXG4gICAgY29uc3Qgc3RhdHMgPSBzdGF0U3luYyhmaWxlT3JEaXJGdWxsUGF0aClcclxuICAgIGNvbnN0IGxpbmsgPSBnZXREb2NzRGlyTmFtZUFmdGVyU3RyKGZpbGVPckRpckZ1bGxQYXRoKS5yZXBsYWNlKCcubWQnLCAnJykucmVwbGFjZSgvXFxcXC9nLCAnLycpXHJcbiAgICBcclxuICAgIGNvbnN0IHRleHQgPSBmaWxlT3JEaXJOYW1lLm1hdGNoKC9eWzAtOV17Mn0tLisvKSA/IGZpbGVPckRpck5hbWUuc3Vic3RyaW5nKDMpLnJlcGxhY2UoL1xcLm1kJC8sICcnKSA6IGZpbGVPckRpck5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpXHJcbiAgICBpZiAoc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAvLyBcdTVGNTNcdTUyNERcdTRFM0FcdTY1ODdcdTRFRjZcdTU5MzlcclxuICAgICAgY29uc3QgZGlyRGF0YTogYW55ID0ge1xyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgbGluazogYCR7bGlua30vYCxcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxldmVsICE9PSBtYXhMZXZlbCkge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IGdldE5hdkRhdGFBcnIoZmlsZU9yRGlyRnVsbFBhdGgsIGxldmVsICsgMSwgbWF4TGV2ZWwpLmZpbHRlcih2ID0+IHYudGV4dCAhPT0gJ2luZGV4Lm1kJylcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgIGRpckRhdGEuaXRlbXMgPSBhcnJcclxuICAgICAgICAgIGRlbGV0ZSBkaXJEYXRhLmxpbmtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpckRhdGEuYWN0aXZlTWF0Y2ggPSBsaW5rICsgJy8nXHJcbiAgICAgIHJlc3VsdC5wdXNoKGRpckRhdGEpXHJcbiAgICB9IGVsc2UgaWYgKGlzTWFya2Rvd25GaWxlKGZpbGVPckRpck5hbWUpKSB7XHJcbiAgICAgIC8vIFx1NUY1M1x1NTI0RFx1NEUzQVx1NjU4N1x1NEVGNlxyXG4gICAgICBjb25zdCBmaWxlRGF0YTogRGVmYXVsdFRoZW1lLk5hdkl0ZW0gPSB7XHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICBsaW5rLFxyXG4gICAgICB9XHJcbiAgICAgIGZpbGVEYXRhLmFjdGl2ZU1hdGNoID0gbGluayArICcvJ1xyXG4gICAgICByZXN1bHQucHVzaChmaWxlRGF0YSlcclxuICAgIH1cclxuICB9KVxyXG4gIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwncmVzdWx0Li4uLicpXHJcbiAgcmVzdWx0LmZvckVhY2goKGl0ZW0saW5kZXgpPT57XHJcbiAgICBpZihpdGVtLnRleHQgPT09ICdcdTdGNTFcdTk4NzVcdTVCRkNcdTgyMkEnKXtcclxuICAgICAgcmVzdWx0LnNwbGljZShpbmRleCwxKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTYyMTFcdTc2ODRcdTY1ODdcdTRFRjZcXFxcbXlfdml0ZV9ub3RlXFxcXGNhb19ub3RlXFxcXGRvY3NcXFxcc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU2MjExXHU3Njg0XHU2NTg3XHU0RUY2XFxcXG15X3ZpdGVfbm90ZVxcXFxjYW9fbm90ZVxcXFxkb2NzXFxcXHNjcmlwdHNcXFxcZ2xvYmFsQ29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTYlODglOTElRTclOUElODQlRTYlOTYlODclRTQlQkIlQjYvbXlfdml0ZV9ub3RlL2Nhb19ub3RlL2RvY3Mvc2NyaXB0cy9nbG9iYWxDb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlLCBqb2luIH0gZnJvbSAncGF0aCdcclxuXHJcbmV4cG9ydCBjb25zdCByb290RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8nKVxyXG5leHBvcnQgY29uc3Qgcm9vdERpckZuID0gKGRpck5hbWU6IHN0cmluZyA9ICdzcmMnKSA9PiB7XHJcbiAgcmV0dXJuIHJlc29sdmUoX19kaXJuYW1lLCBgLi4vJHtkaXJOYW1lfWApXHJcbn1cclxuXHJcblxyXG4vLyBcdTgzQjdcdTUzRDZkb2NzXHU3NkVFXHU1RjU1XHU3Njg0XHU1QjhDXHU2NTc0XHU1NDBEXHU3OUYwKFx1NEVDRVx1NjgzOVx1NzZFRVx1NUY1NVx1NEUwMFx1NzZGNFx1NTIzMGRvY3NcdTc2RUVcdTVGNTUpXHJcbmV4cG9ydCBjb25zdCBkb2NzRGlyRnVsbFBhdGggPSBqb2luKF9fZGlybmFtZSwgJy4uLycpXHJcblxyXG4vLyBcdTgzQjdcdTUzRDZkb2NzXHU3NkVFXHU1RjU1XHU3Njg0XHU1QjhDXHU2NTc0XHU5NTdGXHU1RUE2XHJcbmV4cG9ydCBjb25zdCBkb2NzRGlyRnVsbFBhdGhMZW4gPSBkb2NzRGlyRnVsbFBhdGgubGVuZ3RoXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcXHU2MjExXHU3Njg0XHU2NTg3XHU0RUY2XFxcXG15X3ZpdGVfbm90ZVxcXFxjYW9fbm90ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU2MjExXHU3Njg0XHU2NTg3XHU0RUY2XFxcXG15X3ZpdGVfbm90ZVxcXFxjYW9fbm90ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnc1xcXFxuYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNiU4OCU5MSVFNyU5QSU4NCVFNiU5NiU4NyVFNCVCQiVCNi9teV92aXRlX25vdGUvY2FvX25vdGUvZG9jcy8udml0ZXByZXNzL2NvbmZpZ3MvbmF2LnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnXHJcbmltcG9ydCB7IGdldFNpZGViYXJEYXRhLCBnZXROYXZEYXRhIH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVNpZGVCYXJcIlxyXG4vLyBjb25zb2xlLmxvZyhnZXROYXZEYXRhKCksJ2dldE5hdkRhdGFnZXROYXZEYXRhZ2V0TmF2RGF0YScpXHJcbmZ1bmN0aW9uIGdldE5hdkRhdGFJdGVtKG5hbWU6IHN0cmluZykge1xyXG4gIGxldCBhcnIgPSBnZXROYXZEYXRhKCkuZmluZCgoaXRlbSkgPT4gaXRlbS50ZXh0ID09PSBuYW1lKVxyXG4gIGFycj8uaXRlbXM/LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoaXRlbS50ZXh0ID09PSAnaW5kZXgnKSB7XHJcbiAgICAgIGFycj8uaXRlbXM/LnNwbGljZShpbmRleCwgMSlcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBhcnJcclxufVxyXG4vLyBjb25zb2xlLmxvZyhnZXROYXZEYXRhSXRlbSgnXHU1MjREXHU3QUVGJyksJ2dldE5hdkRhdGFnZXROYXZEYXRhZ2V0TmF2RGF0YScpXHJcblxyXG5leHBvcnQgY29uc3QgbmF2OiBEZWZhdWx0VGhlbWUuQ29uZmlnWyduYXYnXSA9IFtcclxuICAvLyB7XHJcbiAgLy8gICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU3MjY5XHU4QkVEJyxcclxuICAvLyAgIGl0ZW1zOiBbXHJcbiAgLy8gICAgIHsgdGV4dDogJ0phdmFTY3JpcHQgXHU1N0ZBXHU3ODQwXHU3N0U1XHU4QkM2JywgbGluazogJy9mZS9qYXZhc2NyaXB0L3R5cGVzJyB9LFxyXG4gIC8vICAgICB7IHRleHQ6ICdFUzYgXHU1RTM4XHU3NTI4XHU3N0U1XHU4QkM2JywgbGluazogJy9mZS9lczYvJyB9LFxyXG4gIC8vICAgICB7IHRleHQ6ICdUeXBlU2NyaXB0IFx1NTdGQVx1Nzg0MFx1NzdFNVx1OEJDNicsIGxpbms6ICcvZmUvdHlwZXNjcmlwdC9iYXNlJyB9LFxyXG4gIC8vICAgICB7IHRleHQ6ICdcdTZENEZcdTg5QzhcdTU2NjhcdTc2RjhcdTUxNzNcdTc3RTVcdThCQzYnLCBsaW5rOiAnL2ZlL2Jyb3dzZXIvJyB9XHJcbiAgLy8gICBdLFxyXG4gIC8vICAgYWN0aXZlTWF0Y2g6ICdeL2ZlJ1xyXG4gIC8vIH0sXHJcbiAgeyB0ZXh0OiAnXHU0RTNCXHU5ODc1JywgbGluazogJy8nIH0sXHJcbiAgeyB0ZXh0OiAnXHU1QkZDXHU4MjJBJywgbGluazogJy9uYXYvJywgYWN0aXZlTWF0Y2g6ICdeL25hdicgfSxcclxuICAvLyB7XHJcbiAgLy8gICB0ZXh0OiAnXHU1MjREXHU3QUVGJyxcclxuICAvLyAgIGl0ZW1zOiBbXHJcbiAgLy8gICAgIHsgdGV4dDogJ0h0bWw1LUNzczMnLCBsaW5rOiAnL1x1NTI0RFx1N0FFRi9IdG1sNS1Dc3MzL1x1NjgwN1x1N0I3RVx1RkYwQ1x1ODg2OFx1NjgzQ1x1RkYwQ1x1ODg2OFx1NTM1NScgfSxcclxuICAvLyAgICAgeyB0ZXh0OiAnRVM2IFx1NUUzOFx1NzUyOFx1NzdFNVx1OEJDNicsIGxpbms6ICcvXHU1MjREXHU3QUVGL2VzNi9lczYtMDEgbGV0XHUzMDAxXHU4OUUzXHU2Nzg0XHUzMDAxXHU2QTIxXHU2NzdGXHUzMDAxXHU3QkFEXHU1OTM0JyB9LFxyXG4gIC8vICAgXSxcclxuICAvLyAgIGFjdGl2ZU1hdGNoOiAnXi9cdTUyNERcdTdBRUYnXHJcbiAgLy8gfSxcclxuICBnZXROYXZEYXRhSXRlbSgnXHU1MjREXHU3QUVGJyksXHJcbiAge1xyXG4gICAgdGV4dDogJ1RlY2hUb29sa2l0JyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogJ0NzcycsIGxpbms6ICcvVGVjaFRvb2xraXQvQ3NzL0Nzc1x1NUUzOFx1NzUyOFx1NjI4MFx1NURFNy8nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NUUzOFx1NzUyOFx1NkI2M1x1NTIxOScsIGxpbms6ICcvVGVjaFRvb2xraXQvXHU1RTM4XHU3NTI4XHU2QjYzXHU1MjE5LycgfSxcclxuICAgIF0sXHJcbiAgICBhY3RpdmVNYXRjaDogJ14vVGVjaFRvb2xraXQnXHJcbiAgfSxcclxuICBnZXROYXZEYXRhSXRlbSgnXHU5NzYyXHU4QkQ1XHU3NkY4XHU1MTczJylcclxuXVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFx1NjIxMVx1NzY4NFx1NjU4N1x1NEVGNlxcXFxteV92aXRlX25vdGVcXFxcY2FvX25vdGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NjIxMVx1NzY4NFx1NjU4N1x1NEVGNlxcXFxteV92aXRlX25vdGVcXFxcY2FvX25vdGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU2JTg4JTkxJUU3JTlBJTg0JUU2JTk2JTg3JUU0JUJCJUI2L215X3ZpdGVfbm90ZS9jYW9fbm90ZS9kb2NzLy52aXRlcHJlc3MvY29uZmlncy9zaWRlYmFyLnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnXHJcbmltcG9ydCB7IGdldFNpZGViYXJEYXRhLCBnZXROYXZEYXRhIH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVNpZGVCYXJcIlxyXG5cclxuZnVuY3Rpb24gZ2V0U2lkZWJhckRhdGFJdGVtKG5hbWU6IHN0cmluZykge1xyXG4gIGxldCBhcnIgPSBnZXRTaWRlYmFyRGF0YSgpW25hbWVdXHJcbiAgYXJyLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblxyXG4gICAgaXRlbS5pdGVtcy5mb3JFYWNoKChpdGVtMiwgaW5kZXgyKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtMi50ZXh0ID09PSAnY29kZScpIHtcclxuICAgICAgICBpdGVtLml0ZW1zLnNwbGljZShpbmRleDIsIDEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxuICByZXR1cm4gYXJyXHJcbn1cclxuLy8gY29uc29sZS5sb2coZ2V0TmF2RGF0YUl0ZW0oJ1x1NTI0RFx1N0FFRicpLCdnZXROYXZEYXRhZ2V0TmF2RGF0YWdldE5hdkRhdGEnKVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZGViYXI6IERlZmF1bHRUaGVtZS5Db25maWdbJ3NpZGViYXInXSA9IHtcclxuICAnL1x1NTI0RFx1N0FFRi8nOiBnZXRTaWRlYmFyRGF0YUl0ZW0oJy9cdTUyNERcdTdBRUYvJyksXHJcbiAgJy9cdTk3NjJcdThCRDVcdTc2RjhcdTUxNzMvJzogZ2V0U2lkZWJhckRhdGFJdGVtKCcvXHU5NzYyXHU4QkQ1XHU3NkY4XHU1MTczLycpLFxyXG4gICcvVGVjaFRvb2xraXQvJzogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnQ1NTIFx1NzZGOFx1NTE3MycsXHJcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnQ1NTIFx1OEJFRFx1NkNENScsIGxpbms6ICcvVGVjaFRvb2xraXQvQ3NzL0Nzc1x1NUUzOFx1NzUyOFx1NjI4MFx1NURFNy8nIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnU2FzcyBcdTVFMzhcdTc1MjhcdTYyODBcdTVERTcnLCBsaW5rOiAnL1RlY2hUb29sa2l0L0Nzcy9TYXNzXHU1RTM4XHU3NTI4XHU2MjgwXHU1REU3LycgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU1RTM4XHU3NTI4XHU2QjYzXHU1MjE5JyxcclxuICAgICAgbGluazogJy9UZWNoVG9vbGtpdC9cdTVFMzhcdTc1MjhcdTZCNjNcdTUyMTkvJ1xyXG4gICAgfVxyXG4gIF0sXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8scUJBQXFCOzs7QUNBckIsSUFBTSxVQUE2QztBQUFBLEVBQ3hELE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxJQUNaLFFBQVE7QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLElBQ25CO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxXQUFXO0FBQUEsUUFDVCxrQkFBa0I7QUFBQSxRQUNsQixzQkFBc0I7QUFBQSxRQUN0QixrQkFBa0I7QUFBQSxRQUNsQix1QkFBdUI7QUFBQSxNQUN6QjtBQUFBLE1BQ0EsYUFBYTtBQUFBLFFBQ1gscUJBQXFCO0FBQUEsUUFDckIsc0JBQXNCO0FBQUEsUUFDdEIsNkJBQTZCO0FBQUEsUUFDN0IsK0JBQStCO0FBQUEsUUFDL0IsdUJBQXVCO0FBQUEsUUFDdkIsaUNBQWlDO0FB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VUFBSSxNQUFNLFNBQVMsUUFBUTtBQUN6QixhQUFLLE1BQU0sT0FBTyxRQUFRLENBQUM7QUFBQSxNQUM3QjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUNELFNBQU87QUFDVDtBQUdPLElBQU0sVUFBMEM7QUFBQSxFQUNyRCxrQkFBUSxtQkFBbUIsZ0JBQU07QUFBQSxFQUNqQyw4QkFBVSxtQkFBbUIsNEJBQVE7QUFBQSxFQUNyQyxpQkFBaUI7QUFBQSxJQUNmO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sb0JBQVUsTUFBTSxnREFBNEI7QUFBQSxRQUNwRCxFQUFFLE1BQU0saUNBQWEsTUFBTSxpREFBNkI7QUFBQSxNQUMxRDtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRjs7O0FONUJBLElBQU0sZ0JBQWdCO0FBR3RCLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxFQUNSLE1BQU0sZ0JBQWdCLElBQUksYUFBYSxNQUFNO0FBQUEsRUFFN0MsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2I7QUFBQSxFQUVBLGFBQWE7QUFBQSxFQUNiLFdBQVc7QUFBQSxFQUNYLGlCQUFpQjtBQUFBO0FBQUEsRUFFakIsVUFBVTtBQUFBLElBQ1IsYUFBYTtBQUFBLEVBQ2Y7QUFBQTtBQUFBLEVBR0EsYUFBYTtBQUFBLElBQ1gsYUFBYTtBQUFBLElBRWIsTUFBTTtBQUFBLElBRU47QUFBQSxJQUNBO0FBQUE7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFFQSxhQUFhLENBQUMsRUFBRSxNQUFNLFVBQVUsTUFBTSx5Q0FBeUMsQ0FBQztBQUFBLElBQ2hGLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFBQSxNQUVOLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFFQSxxQkFBcUI7QUFBQSxJQUNyQixrQkFBa0I7QUFBQSxJQUNsQixpQkFBaUI7QUFBQTtBQUFBLElBRWpCO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNKLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFBLEVBQzdCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiam9pbiIsICJqb2luIiwgIl9hIl0KfQo=
