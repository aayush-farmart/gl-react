//@flow
import invariant from "invariant";

// check that base does not exist in node dependents graph
export default function invariantNoDependentsLoop(base, node) {
  invariant(
    base !== node,
    "gl-react: Found a loop in the rendering graph.\n" +
      "If you want to get back previous state, please use `backbuffering` instead"
  );
  if (node) {
    for (let i = 0; i < node.dependents.length; i++) {
      invariantNoDependentsLoop(base, node.dependents[i]);
    }
  }
}
