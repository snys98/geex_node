import { withNx } from '@nrwl/esbuild';

export default withNx((options) => {
  // Update the esbuild options as needed here.
  // e.g. `options.minify = true`
  return {
    ...options,
    entryPoints: ['server/gateway/src/main.ts'],
    bundle: true,
    platform: 'node',
    target: 'node14',
    outfile: 'dist/server/gateway/main.js',
  };
});
