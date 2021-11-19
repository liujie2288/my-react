import React from "react";

/*#__PURE__*/

  function Demo(props) {
    return /*#__PURE__*/ React.createElement("div", null, props.name);
  }
  
  class Test extends React.Component {
    render() {
      return /*#__PURE__*/ React.createElement("div", null, "test");
    }
  }
  
  /*#__PURE__*/
console.log(
  React.createElement(
    "div",
    {
      className: "container"
    },
    /*#__PURE__*/ React.createElement(Demo, null),
    /*#__PURE__*/ React.createElement(Test, null),
    /*#__PURE__*/ React.createElement("h1", null, "\u4F60\u597D Tiny React"),
    /*#__PURE__*/ React.createElement(
      "h2",
      null,
      "(\u7F16\u7801\u5FC5\u6740\u6280)"
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      null,
      "\u5D4C\u59571 ",
      /*#__PURE__*/ React.createElement("div", null, "\u5D4C\u5957 1.1")
    ),
    /*#__PURE__*/ React.createElement(
      "h3",
      null,
      "(\u89C2\u5BDF: \u8FD9\u4E2A\u5C06\u4F1A\u88AB\u6539\u53D8)"
    ),
    2 == 1 &&
      /*#__PURE__*/ React.createElement(
        "div",
        null,
        "\u5982\u679C2\u548C1\u76F8\u7B49\u6E32\u67D3\u5F53\u524D\u5185\u5BB9"
      ),
    2 == 2 && /*#__PURE__*/ React.createElement("div", null, "2"),
    /*#__PURE__*/ React.createElement(
      "span",
      null,
      "\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9"
    ),
    /*#__PURE__*/ React.createElement(
      "button",
      {
        onClick: () => alert("你好")
      },
      "\u70B9\u51FB\u6211"
    ),
    /*#__PURE__*/ React.createElement(
      "h3",
      null,
      "\u8FD9\u4E2A\u5C06\u4F1A\u88AB\u5220\u9664"
    ),
    "2, 3"
  )
  
);
