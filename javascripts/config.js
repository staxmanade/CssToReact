/*global System */
'use strict';

/* if you need any specific jspm config place it here */

System.config({
  transpiler: 'babel',
  packages: {
    './': {
      defaultExtension: false
    }
  },
  map: {
    'react': 'npm:react@15',
    'css': 'npm:css',
    'amdefine': 'npm:amdefine',
    'source-map-url': 'npm:source-map-url',
    'resolve-url': 'npm:resolve-url'
  }
});
