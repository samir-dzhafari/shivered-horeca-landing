import baseConfig from '@ssheverev/eslint-config';
import reactConfig from '@ssheverev/eslint-react-config';
import tsConfig from '@ssheverev/eslint-ts-config';

export default [...baseConfig, ...tsConfig, ...reactConfig];
