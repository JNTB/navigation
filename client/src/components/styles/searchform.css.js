const form = {
  display: "block",
  marginTop: "0"
}

const divOuter = {
  display: "block",
  direction: "ltr",
  boxSizing: "border-box",
  lineHeight: "1.43"
}

const divInner = {
  width: "100%",
  height: "100%",
  paddingLeft: "12px",
  paddingRight: "4px",
  boxSizing: "border-box",
  display: "block"
}

const label = {
  display: "table",
  margin: "0px",
  padding: "0px",
  tableLayout: "fixed",
  whiteSpace: "nowrap",
  width: "100%",
  boxSiing: "border-box"
}

const icon = {
  padding: "3px 10px 0px 5px",
  width: "39px",
  display: "table-cell",
  height: "100%",
  verticalAlign: "middle",
  boxSizing: "border-box",
}

const svg = {
  height: "18px",
  width: "18px",
  display: "block",
  fill: "#484848",
  lineHeight: "normal"
}

const divInputWrapper = {
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "block"
}

const divInput = {
  display: "table-cell",
  height: "100%",
  verticalAlign: "middle",
  width: "100%",
  boxSizing: "border-box"
}

const input = {
  backgroundColor: "transparent",
  width: "100%",
  textOverflow: "ellipsis",
  fontWeight: "500",
  fontSize: "17px",
  borderWidth: "0px",
  margin: "0",
  padding: "0"
}

export default { form, divOuter, divInner, label, icon, svg, divInputWrapper, divInput, input }