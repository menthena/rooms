'use strict';

System.config({
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true }
});

System.import('./scripts/app.ts');
