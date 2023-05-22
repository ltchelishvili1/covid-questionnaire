import { defineRule } from "vee-validate";

import { required, email, min, alpha_num, max } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

// defineRule("required", (value) => {
//   if (!value || !value.length) {
//     return "ველი სავალდებულოა";
//   }

//   return true;
// });

// defineRule("minLength", (value, [minLength, name]) => {
//   if (!value || value.length < minLength) {
//     return name + `ს ველი უნდა შედგებოდეს მინიმუმ ${minLength} სიმბოლოსგან`;
//   }

//   return true;
// });

defineRule("emailRedberry", (value) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const redberryDomain = "@redberry.ge";

  if (!value || !regex.test(value)) {
    return "შეიყვანეთ ელ-ფოსტა";
  }

  if (!value.endsWith(redberryDomain)) {
    return `მეილის დომენი უნდა იყოს ${redberryDomain}`;
  }

  return true;
});
