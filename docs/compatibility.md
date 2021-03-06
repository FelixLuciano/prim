# COMPATIBILITY

Prim is a library focused on what's newest in CSS but this may be incompatible with some browsers, so a `legacy` version is available which is a CSS file with more prefixes and approximately the same file size as the library but this may still not be the solution.


## CSS FEATURES

Here a table with the resources used in the library that can bring incompatibility problems:


| Feature              | Chrome | Edge   | Firefox   | IE      | Opera | Safari   |
|:---------------------|:------:|:------:|:---------:|:-------:|:-----:|:--------:|
| Pseudo elements      | Yes    | Yes    | 1.0 (1.5) | 9.0     | 7.0   | 1.0 (85) |
| Variables            | 49     | 15     | 31        | No      | 36    | Yes      |
| Flexbox              | 29     | 12     | 20        | 11      | 12.1  | 9        |
| overflow             | 68     | No     | 61        | No      | 55    | No       |
| Selectors            | 1      | 12     | 1         | 7       | 9     | 3        |
| Transitions          | 26     | 12     | 16        | 10      | 12.1  | 6.1      |
| User selection       | 54     | 12     | 1         | 10      | 15    | 3.1      |
| calc()               | 26     | 12     | 16        | 9       | 16    | 7        |

Reference: [MDN web docks](https://developer.mozilla.org/pt-BR/docs/Web/CSS)


## INSTALATION

You can inport `prim.legacy.css` or `prim.legacy.min.css` for a compressed version.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prim-css/dist/prim.legacy.min.css" type="text/css">
```

For production, we recommend linking to a specific version number and build to avoid unexpected breakage from newer versions:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prim-css@1.3.0/dist/prim.legacy.min.css" type="text/css">
```
