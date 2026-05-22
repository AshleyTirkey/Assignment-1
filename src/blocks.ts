import * as Blockly from 'blockly';

// Export a function to define our blocks
export function defineBlocks() {
  Blockly.defineBlocksWithJsonArray([
    // TODO add your block definitions here.
    // https://developers.google.com/blockly/guides/create-custom-blocks/define/block-definitions
    {
      "type": "rbac_policy",
      // TODO
    },
    {
      "type": "rbac_role",
      // TODO      
    },
    {
      "type": "rbac_rule",
      // TODO      
    },
    {
      "type": "rbac_resource",
      // TODO
    }
  ]);
}