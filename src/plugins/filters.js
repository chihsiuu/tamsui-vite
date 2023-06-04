export function stripHTML(input) {
  let output = "";
  if (typeof input == "string") {
    output = input.replace(/(<([^>]+)>)/gi, "");
  }
  return output;
}
