## v0.2.0
- Shortcuts added:

  | Keys                  | Calculator Buttons |
  | --------------------- | ------------------ |
  | `0-9`                 | Numbers            |
  | `+`                   | Add                |
  | `-`                   | Subtract           |
  | `*`, `x`              | Multiply           |
  | `/`, `:`              | Divide             |
  | `=`, `Enter`          | Equal              |
  | `BackSpace`, `Delete` | Clear              |
  | `,`, `.`              | Comma              |

### v0.1.1
- Zoom disabled. In `render` process:

  ```js
    require('electron').webFrame.setZoomLevelLimits(1, 1)
  ```
## v0.1.0
- Appearance (colors, frameless, layout)
- Calculation 
