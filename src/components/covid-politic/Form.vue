<template>
  <Form
    @submit="submitForm"
    class="h-[600px] sm: overflow-y-scroll overflow-y-hidden hover:overflow-y-scroll scrollbar scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thin"
  >
    <p class="w-[440px] text-xl">
      რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც
      ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში
      მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
    </p>
    <p class="w-[440px] pt-4 text-xl">
      პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური
      კომუნიკაციაც გაიშვიათდა.
    </p>

    <div class="pt-[44px]">
      <div class="mb-[14px]">
        <p class="font-semibold text-xl">
          რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
          სადაც ყველა სურვილისამებრ ჩაერთვება?*
        </p>
      </div>
      <base-radio
        rules="required"
        name="non_formal_meetings"
        value="twice_a_week"
        placeholder="კვირაში ორჯერ"
        page="covidPolitic"
      ></base-radio>
      <base-radio
        rules="required"
        name="non_formal_meetings"
        value="once_a_week"
        placeholder="კვირაში ერთხელ"
        page="covidPolitic"
      ></base-radio>
      <base-radio
        rules="required"
        name="non_formal_meetings"
        value="once_in_a_two_weeks"
        placeholder="ორ კვირაში ერთხელ"
        page="covidPolitic"
      ></base-radio>
      <base-radio
        rules="required"
        name="non_formal_meetings"
        value="once_in_a_month"
        placeholder="თვეში ერთხელ"
        page="covidPolitic"
        :lastInput="true"
      ></base-radio>
    </div>
    <div>
      <div class="mb-[14px] mt-[48px]">
        <p class="font-semibold text-xl">
          კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
        </p>
      </div>
      <base-radio
        rules="required"
        name="number_of_days_from_office"
        value="0"
        placeholder="0"
        page="covidPolitic"
      ></base-radio>
      <base-radio
        rules="required"
        name="number_of_days_from_office"
        value="1"
        placeholder="1"
        page="covidPolitic"
      ></base-radio>
      <base-radio
        rules="required"
        name="number_of_days_from_office"
        value="2"
        placeholder="2"
        page="covidPolitic"
      ></base-radio>
      <base-radio
        rules="required"
        name="number_of_days_from_office"
        value="3"
        placeholder="3"
        page="covidPolitic"
      ></base-radio>
      <base-radio
        rules="required"
        name="number_of_days_from_office"
        value="4"
        placeholder="4"
        page="covidPolitic"
      ></base-radio>
      <base-radio
        rules="required"
        name="number_of_days_from_office"
        value="5"
        placeholder="5"
        page="covidPolitic"
        :lastInput="true"
      ></base-radio>
    </div>

    <div class="flex flex-col justify-between items-end mt-[50px]">
      <div>
        <base-text-area
          title="რას ფიქრობ ფიზიკურ შეკრებებზე?"
          name="what_about_meetings_in_live"
          type="textarea"
          page="covidPolitic"
        ></base-text-area>
        <base-text-area
          title="რას ფიქრობ არსებულ გარემოზე: 
  რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
          name="tell_us_your_opinion_about_us"
          type="textarea"
          page="covidPolitic"
          :lastInput="true"
        ></base-text-area>
      </div>
      <div>
        <button
          type="submit"
          class="bg-[#208298] text-[#FFFFFF] rounded-[48px] p-[20px] text-lg font-bold"
        >
          დასრულება
        </button>
      </div>
    </div>

  </Form>
</template>

<script>
import { inject } from "vue";
import { Form } from "vee-validate";
import BaseInput from "@/components/UI/inputs/BaseInput.vue";
import BaseRadio from "@/components/UI/inputs/BaseRadio.vue";
import BaseTextArea from "@/components//UI/inputs/BaseTextArea.vue";
import IconForward from "@/components/icons/IconForward.vue";

export default {
  components: {
    BaseInput,
    BaseRadio,
    BaseTextArea,
    IconForward,
    Form,
  },
  setup() {
    return {
      submitForm: inject("submitForm"),
    };
  },
};
</script>
