const divOuter = {
  display: "table-cell",
  width: "100%",
  verticalAlign: "middle",
  boxSizing: "border-box",
  borderSpacing: "0px"
}

const divInner = {
  display: "block",
  borderSpacing: "border-box"
}

const divOuterSearch = {
  position: "absolute",
  left: "80px",
  top: "16px",
  width: "460px",
  display: "block",
  boxSizing: "border-box",
  borderSpacing: "0px"
}

const divInnerSearch = {
  display: "table",
  width: "100%",
  borderSpacing: "border-box"
}

const divSearchBar = {
  display: "table-cell",
  width: "100%",
  verticalAlign: "middle",
  backgroundColor: "#ffffff",
  border: "1px solid #EBEBEB",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  height: "48px",
  boxSizing: "border-box"
}

export default { divOuter, divInner, divOuterSearch, divInnerSearch, divSearchBar }