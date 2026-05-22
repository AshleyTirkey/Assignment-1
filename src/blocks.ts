import * as Blockly from 'blockly';

export function defineBlocks() {
  Blockly.common.defineBlocksWithJsonArray([

    
    // POLICY BLOCK
    {
      type: 'rbac_policy',

      message0: 'policy %1',

      args0: [
        {
          type: 'field_input',
          name: 'NAME',
          text: 'PublicTransitAuthority',
        },
      ],

      message1: 'roles %1',

      args1: [
        {
          type: 'input_statement',
          name: 'ROLES',
          check: 'rbac_role',
        },
      ],

      message2: 'rules %1',

      args2: [
        {
          type: 'input_statement',
          name: 'RULES',
          check: 'rbac_rule',
        },
      ],

      colour: 230,
    },

    
    // ROLE BLOCK
   
    {
      type: 'rbac_role',

      message0: 'role %1',

      args0: [
        {
          type: 'field_dropdown',
          name: 'ROLE',

          options: [
            ['TransitDirector', 'TRANSITDIRECTOR'],
            ['TrainOperator', 'TRAINOPERATOR'],
            ['Commuter', 'COMMUTER'],
          ],
        },
      ],

      previousStatement: 'rbac_role',
      nextStatement: 'rbac_role',

      colour: 120,
    },

    
    // RULE BLOCK
    
    {
      type: 'rbac_rule',

      message0: '%1 %2',

      args0: [
        {
          type: 'field_dropdown',
          name: 'EFFECT',

          options: [
            ['Allow', 'ALLOW'],
            ['Deny', 'DENY'],
          ],
        },

        {
          type: 'field_dropdown',
          name: 'ACTION',

          options: [
            ['Reroute', 'REROUTE'],
            ['Drive', 'DRIVE'],
            ['Board', 'BOARD'],
          ],
        },
      ],

      message1: 'resources %1',

      args1: [
        {
          type: 'input_statement',
          name: 'RESOURCES',
          check: 'rbac_resource',
        },
      ],

      previousStatement: 'rbac_rule',
      nextStatement: 'rbac_rule',

      colour: 20,
    },

 
    // RESOURCE BLOCK
   
    {
      type: 'rbac_resource',

      message0: 'resource %1',

      args0: [
        {
          type: 'field_dropdown',
          name: 'RES',

          options: [
            ['ControlCenter', 'CONTROLCENTER'],
            ['SubwayTrains', 'SUBWAYTRAINS'],
            ['TransitPasses', 'TRANSITPASSES'],
          ],
        },
      ],

      previousStatement: 'rbac_resource',
      nextStatement: 'rbac_resource',

      colour: 60,
    },
  ]);
}
