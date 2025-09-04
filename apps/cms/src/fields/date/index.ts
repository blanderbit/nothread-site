import type { Field, FieldHook } from 'payload';

const dateBeforeChangeHook: FieldHook = ({ value }) => {
  if (!value) {
    return new Date();
  }
  return value;
};

export const dateField = (): Field => ({
  name: 'publishedOn',
  type: 'date',
  label: 'Дата публікації',
  admin: {
    position: 'sidebar',
    description: 'Генерується автоматично або відредагуйте вручну',
    date: {
      displayFormat: 'dd/MM/yyyy p',
      pickerAppearance: 'dayAndTime',
      timeFormat: 'p',
    },
  },
  hooks: {
    beforeChange: [dateBeforeChangeHook],
  },
});
