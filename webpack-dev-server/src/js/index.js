import "../styles/index.css";

import text from "./text";

text();

if (module.hot) {
  module.hot.accept("./text", function() {
    text();
  });
}
