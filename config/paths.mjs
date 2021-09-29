import path from 'path';

const root = path.resolve(process.cwd());
const paths = {
  root: root,
  assets: `${root}/assets`,
  db: `${root}/db`,
  client: `${root}/client`,
  config: `${root}/config`,
  log: `${root}/log`,
  node_modules: `${root}/node_modules`,
  public: `${root}/public`,
  server: `${root}/server`
};

export default paths;
