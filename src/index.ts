import 'dotenv/config';
import 'reflect-metadata';

import application from './app';

((): void => {
  const server = application.listen(4000, (): boolean =>
    process.stdout.write(`Server running at port http://localhost:4000\n`)
  );
})();