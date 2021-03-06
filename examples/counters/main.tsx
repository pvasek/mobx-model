import * as React from 'react';
import { render } from 'react-dom';
import { observable, autorun, toJSON, map, asFlat, observe, expr } from 'mobx';
import { observer } from 'mobx-react';
import { defaultStreamProviders, keyDriver } from '../../src';

import { View, createModel } from './Counter';

defaultStreamProviders['key$'] = keyDriver(document);

const model = createModel();
const appElement = document.getElementById('app');
render(<View model={model} />, appElement);
