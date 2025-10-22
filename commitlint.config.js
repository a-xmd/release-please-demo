export default {
  ignores: [(message) => message.startsWith("wip")],
  extends: ["@commitlint/config-conventional"],
};
