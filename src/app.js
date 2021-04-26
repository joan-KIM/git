import Controller from './controller/index.js';
import Model from './model/index.js';
import Prompt from './prompt/index.js';
import View from './view/index.js';

const controller = new Controller(new Model, new Prompt, new View);

controller.init();
