import { extendTheme } from '@chakra-ui/react';

import components from './components';
import styles from './styles';
import colors from './colors';

const overrides = {
  components,
  styles,
  colors,
};

export default extendTheme(overrides);
