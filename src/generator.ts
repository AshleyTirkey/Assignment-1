import * as Blockly from 'blockly';

import { javascriptGenerator} from 'blockly/javascript';
export const generator = javascriptGenerator;

generator.INDENT = '  ';

// TODO add your code generation logic here.
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

generator.forBlock['rbac_policy'] = function (block : Blockly.Block) : string {
  // TODO
  return 'Deny'; // placeholder
};

// TODO and also implement the other ones...