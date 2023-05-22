import { configure } from "vee-validate";

configure({
  generateMessage: (ctx) => {
    const messages = {
      required: (field, [name]) =>
        name
          ? `${name}ს ველის შევსება აუცილებელია `
          : ` ველის შევსება აუცილებელია `,
      email: "თქვენ მიერ შეყვანილი მეილი არასწორია",
      min: (field, [min, name]) =>
        `${name} უნდა შეიცავდეს მინიმუმ ${min} სიმბოლოს`,
    };

    const message = messages[ctx.rule.name] || `The ${field} field is invalid.`;
    return typeof message === "function"
      ? message(ctx.field, ctx.rule.params)
      : message;
  },
});

// localize({
//   en: {
//     messages: {
//       required: "სახელის ველის შევსება აუცილებელია",
//     },
//     fields: {
//       first_name: {
//         min: "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს",
//       },
//       last_name: {
//         required: "გვარის ველის შევსება აუცილებელია",
//         min: "გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს",
//       },
//       email: {
//         required: "მეილის ველის შევსება აუცილებელია",
//         email: "თქვენ მიერ შეყვანილი მეილი არასწორია",
//       },
//     },
//   },
// });
