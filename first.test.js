'use strict';

const {
  go,
  resize,
  click,
  type,
  selectOption,
  waitForText,
  test,
  l,
  Locator,
} = require('testim');

Locator.set(require('./locators/locators.js'));

test('test1', async () => {
  await go('http://qatools.ro');
  await resize({ width: 1920, height: 1080 });

  await click(l('tNwo9ZBuLWdfeD70'));
  // Converting a 'wait-for-code-step' step has to be done manually at this time
  await click(l('Dg8O62ZCPlGuCwnK'));
  await type(l('Dg8O62ZCPlGuCwnK'), '1');
  await click(l('qxvTppTAFh8eVERm'));
  await type(l('qxvTppTAFh8eVERm'), '2');
  await click(l('4wMKzAz8hvAJ6asq'));
  await click(l('4wMKzAz8hvAJ6asq'), { button: undefined });
  await selectOption(l('Ank0Og7Ncd5lROge'));
  await click(l('HmBrAQxPXEc6EQq1'));
  // Converting a 'network-validation-step' step has to be done manually at this time
  await waitForText(l('0.5'), '3');
  await click(l('4wMKzAz8hvAJ6asq'));
  await click(l('4wMKzAz8hvAJ6asq'), { button: undefined });
  await selectOption(l('gCy0lImz1iItcqSZ'));
  await click(l('HmBrAQxPXEc6EQq1'));
  // Converting a 'network-validation-step' step has to be done manually at this time
  await waitForText(l('0.5'), '0.5');
}); // end of test
