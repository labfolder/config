/* eslint-disable no-console */
import { execa } from 'execa';
import fse from 'fs-extra';
import path from 'path';

const packagesDir = path.resolve('./packages');

const publishSafe = async (packageDir) => {
  const { name, version } = await fse.readJson(
    path.join(packageDir, 'package.json'),
  );

  console.log(name, version);

  const { stdout } = await execa('npm', ['view', name, 'version'], {
    reject: false,
  });

  if (stdout !== version) {
    const publish = execa('npm', ['publish'], { cwd: packageDir });

    publish.stdout.pipe(process.stdout);
    publish.stderr.pipe(process.stderr);

    await publish;
  } else {
    console.log('Skipping');
  }
};

(async () => {
  const packages = (await fse.readdir(packagesDir)).map((dir) =>
    path.join(packagesDir, dir),
  );

  await packages.reduce(
    (lastPackage, packageDir) =>
      lastPackage.then(() => publishSafe(packageDir)),
    Promise.resolve(),
  );
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
