import { javascriptGenerator } from 'blockly/javascript';

export const generator = javascriptGenerator;

generator.forBlock["rbac_role"] = function(block) {
  const role = block.getFieldValue("ROLE");

  return `"${role}"\n`;
};

generator.forBlock["rbac_resource"] = function(block) {
  const resource = block.getFieldValue("RES");

  return `"${resource}"\n`;
};

generator.forBlock["rbac_rule"] = function(block, generator) {
  const effect = block.getFieldValue("EFFECT");
  const action = block.getFieldValue("ACTION");

  const resourcesCode = generator.statementToCode(block, "RESOURCES");

  const resources = resourcesCode
    .split("\n")
    .map(line => line.trim())
    .filter(line => line !== "");

  const result = effect === "ALLOW"
    ? "Allow"
    : "Deny";

  return `
if (
  action === "${action}" &&
  [${resources.join(", ")}].includes(resource)
) {
  return "${result}";
}
`;
};

generator.forBlock["rbac_policy"] = function(block, generator) {
  const name = block.getFieldValue("NAME");

  const rolesCode = generator.statementToCode(block, "ROLES");

  const roles = rolesCode
    .split("\n")
    .map(line => line.trim())
    .filter(line => line !== "");

  const rulesCode = generator.statementToCode(block, "RULES");

  return `
function ${name}(role, action, resource) {

  if (![${roles.join(", ")}].includes(role)) {
    return "Deny";
  }

  ${rulesCode}

  return "Deny";
}
`;
};
