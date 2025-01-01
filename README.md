
<div align="center">
  <h1>🔥 Display an On-Hover Graphic Following Your Cursor 🔥</h1>
  <img src="https://raw.githubusercontent.com/mattrltrent/random_assets/refs/heads/main/react-hover-graphic-ezgif.com-video-to-gif-converter.gif" alt="demo">
  <br/>
  <a href="https://matthewtrent.me">Live Demo Source</a>
</div>

## One Simple Way to Use 📚

```typescript
import HoverGraphic from "react-hover-graphic";

<HoverGraphic
  src="https://matthewtrent.me/cat_shock.gif" // graphic source (local or remote)
  height="100px" // graphic height; default: "auto"
  width="200px" // graphic width; default: "auto"
  objectFit="contain" // graphic object-fit ("cover" | "contain" | "fill" | "none" | "scale-down"); default: "cover"
  offsetTop={0} // graphic offset top; default: 0
  offsetLeft={0} // graphic offset left; default: 0
  offsetRight={0} // graphic offset right; default: 0
  offsetBottom={60} // graphic offset bottom; default: 0
  zIndex={9999} // graphic z-index; default: 9999
  disabled={false} // disable effect; default: false
  disabledOnMobile={false} // disable effect on mobile; default: true
>
  <a href="https://matthewtrent.me">Anything can go here</a>
</HoverGraphic>;
```

## Installing 🧑‍🏫

Available on [npmjs](https://www.npmjs.com/package/react-hover-graphic). Installable via:

```sh
npm install react-hover-graphic
```

or

```sh
yarn add react-hover-graphic
```

## Additional Info 📣

- The package is always open to [improvements](https://github.com/mattrltrent/react-hover-graphic/issues), [suggestions](mailto:me@matthewtrent.me), and [additions](https://github.com/mattrltrent/react-hover-graphic/pulls)!

- I'll look through PRs and issues as soon as I can!

- [Learn about me](https://matthewtrent.me).

- This package was mainly created just to test out publishing a package to npmjs. Also, because I like using this effect on websites I make and wanted an easier way to implement it.

