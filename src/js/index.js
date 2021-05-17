import { hello } from './modules/test';

hello();

const init = (settings) => {
  const defaultOptions = {
    options1: false,
    options2: false,
    options3: false,
  };

  // 変更のあったものだけ検知してoptionsを変更する
  const options = Object.assign(defaultOptions, settings);
  console.log(options);
};

console.log(init());
