[![NPM](https://img.shields.io/npm/v/jb-weather-widget.svg)](https://www.npmjs.com/package/jb-weather-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# jb-weather-widget

Weather widget for javascript applications

<a href="https://jb-weather-widget.surge.sh">Demo</a>

#### Installation

```bash
npm i jb-weather-widget

or

yarn add jb-weather-widget
```

#### Usage

```html
<!-- Import the module inside the document's body -->

<body>
  <div id="app"></div>

  <script type="module">
    import { WeatherWidget } from "jb-weather-widget";

    new WeatherWidget({
      parentContainer: "app",
      units: {
        temperature: "celsius",
        speed: "kmh",
      },
      remember: false,
      refresh: 45,
    });
  </script>
</body>
```

#### Options

<ul>
    <li><span style="font-weight: bold;">parentContaier (required)</span><br/><span>Id of the parent container existing inside your DOM structure</span></li>
     <li><span style="font-weight: bold;">units</span><br/><span>mesurement units, temperature (celsius - default, fahrenheit), speed (kmh - default, mph, kn, ms)</span></li>
       <li><span style="font-weight: bold;">remember</span><br/><span>stores current choice inside local storage, default is false</span></li>
        <li><span style="font-weight: bold;">refresh</span><br/><span>weather data refetch time in minutes, default is 60</span></li>
         <li><span style="font-weight: bold;">defaultLocation</span><br/><span>location data to load initially, defaults to a radom location from a fixed set of locations</span></li>
          <li><span style="font-weight: bold;">theme</span><br/><span>custom theme to override the default one</span></li>

</ul>

#### Styling

```javascript
const theme = {
  color: {
    font: {
      main: "#fff",
      timer: "#fff",
      bottom: "#fff",
      right: "#fff",
      list: {
        main: "#000",
        hover: "#fff",
      },
    },
    icon: {
      main: "#e040fb",
      right: "#e040fb",
      bottom: "#e040fb",
    },
  },
  bg: {
    main: "#512da8",
    right: "rgba(0,0,0,0.1)",
    bottom: "rgba(0,0,0,0.1)",
    list: {
      main: "#FFF",
      hover: "transparent",
      border: "#ccc",
    },
  },
  spacing: {
    inner: "16px", // The width, height of gaps between inner elements
    outer: "16px", // padding of the container's element
  },
  borderRadius: {
    container: "8px", // you want 0 radius you have to put it explicitly, same below
    element: "8px",
  },
};
```
