/** @type { import('@storybook/react').Preview } */
import { withRouter } from 'storybook-addon-remix-react-router';
import '../src/scss/global.scss';

const preview = {
  decorators: [withRouter],
  parameters: {},
};

export default preview;
