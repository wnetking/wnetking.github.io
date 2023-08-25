---
title: How to increase your coding speed.
description: This is a post about how to increase coding speed and more ditails about increase coding speed methods.
date: 2023-08-09
draft: false
tags:
---

Every programers want to be prodactive and write code faster. But speed not always meen prodactive. You can write code slow and be more productive that others. But still, there is always something to work on. In this post I will tell how optimaze routine in your coding.

By routine I mean create folders, files and basic file content. For example, basic code react component, reducers, controllers, other entitis. It's the easiest part to optimize coding speed 🙂.

Let's go through step by step:

## 1. Creating folder structure routine

Every time that we create module it have some basic folder structure. It's very good, if your and your team have convention about folder structure, its ease to create a template and use it in every new component or module. If your don't have convention - create it.

Lets consider an example on the following structure:

```
├── /Module/
│   ├── /ui/                # React components.
│   ├── /redux/
│   ├───── /reducer/        # Redux reducer. File or folder.
│   ├───── /saga/           # Redux saga. File or folder.
|   ├── /hoc/               # HOC for module
|   ├── /hooks/             # hook for module
|   ├── /contexts/          # context for module
│   ├── /utils/             # 
│   ├── /types/             #
│   ├── /services/          # Aditional services. IndexDB, some api.
│   ├── /tests/             # 
│   ├── /assets/            # Images folder, other assets (not styles)
│   ├── Module.style.scss   # Style file for module.
│   ├── Module.tsx          # Main module file, exported by default
│   ├── index.ts            # Entry point
│   ├── lazy.ts             # lazy load entry point
│   └── Readme.md           # 
```

You can create the following structure in you code base and reuse it in every new component. I recommend some script for this or existed package. If you use vs code, check out extention [Folder Templates](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure), it's the best way to optimaze file structure routine.

## 2. Basic code for component

For reduce time of writing base component code you can use snippets. Every IDE have this feature so just use it. It is have some basics for programing lang, you can use some ready snippents (plugins) and of course, you can write it by you self.

For codding, I use VS Code and the best snippets plugin for React is [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets). Just check out [all list of the snippets](https://github.com/ults-io/vscode-react-javascript-snippets/blob/master/docs/Snippets.md) that they have. This plugin is really good, but it will not be enough for my case.  In my project, we have some name conventions that do not match the code that ready solutions give, and we have some custom entities, so I decided to write custom snippets for me and my team.

### Custom snippets for VS Code

You need to create json file in `.vscode` with `.code-snippets` extention.

Example: `my-snippets.code-snippets`

```json
{
  "Base React Component": {
    "scope": "typescript,typescriptreact",
    "prefix": "brc",
    "body": [
      "import { useTranslation } from 'react-i18next';",
      "import './${TM_FILENAME_BASE}.style.scss';",
      "",
      "type ${TM_FILENAME_BASE}Props = {}",
      "",
      "export const ${1:${TM_FILENAME_BASE}}: React.FC<${TM_FILENAME_BASE}Props> = ({}) => {",
      "  const { t } = useTranslation('Global');",
      "",
      "  return (",
      "    <div>${1:first}</div>",
      "  );",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}"
    ]
  }
}
```

After this, you can enter in `typescript` file `brc` and push `Tab`.
You can create any template that you need. For more information, check out the [official documents on snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets).

## 3. Use AI helper

In our day, we have many AI helpers, so just use the ones you like and optimize your time.

Some of my favorite:

1. [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
2. [Tabnine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
3. [Continue - Use Code Llama](https://marketplace.visualstudio.com/items?itemName=Continue.continue)
4. [Azure Machine Learning](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-ai)
