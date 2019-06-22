# Demo repo for [Storybook-addon-root-attribute](https://github.com/le0pard/storybook-addon-root-attribute)

## Deploy

Run:

```bash
$ yarn
$ yarn run deploy-storybook
```

## How demo works

All "magic" inside css file:

```css
:root {
  --baseColor: #657b83;
  --bgColor: #fdf6e3;
  --headsColor: #eee8d5;
  --commentColor: #93a1a1;
  --linkColor: #b58900;
  --linkHoverColor: #cb4b16;
}

:root.dark {
  --baseColor: #839496;
  --bgColor: #002b36;
  --headsColor: #073642;
  --commentColor: #586e75;
  --linkColor: #b58900;
  --linkHoverColor: #cb4b16;
}

:root.blue {
  --baseColor: #fff;
  --bgColor: #f5f5f5;
  --headsColor: #2196f3;
  --commentColor: #fff;
  --linkColor: #ccc;
  --linkHoverColor: #aaa;
}

html {
  background-color: var(--headsColor);
  color: var(--baseColor);
  font-size: 2rem;
}

a {
  margin: 0 50px;
  color: var(--linkColor);
}

a:hover {
  color: var(--linkHoverColor);
  text-decoration: none;
}
```

If you change "class" for html tag, this will "override" css custom variables.
