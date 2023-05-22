<template>
  <Form @submit="submitForm">
    <div>
      <div class="mb-[14px]">
        <p class="font-semibold text-2xl">გაქვს გადატანილი Covid-19?*</p>
      </div>
      <base-radio
        rules="required"
        name="had_covid"
        value="yes"
        placeholder="კი"
        type="radio"
        page="covidStatus"
      ></base-radio>
      <base-radio
        rules="required"
        name="had_covid"
        value="no"
        placeholder="არა"
        type="radio"
        page="covidStatus"
      ></base-radio>
      <base-radio
        rules="required"
        name="had_covid"
        value="have_right_now"
        placeholder="ახლა მაქვს"
        type="radio"
        page="covidStatus"
        :lastInput="true"
      ></base-radio>
    </div>
    <div v-if="hadCovid">
      <div class="mb-[14px] mt-[48px]">
        <p class="font-semibold text-2xl">
          ანტისხეულების ტესტი გაქვს გაკეთებული?*
        </p>
      </div>
      <base-radio
        rules="required"
        name="had_antibody_test"
        value="yes"
        placeholder="კი"
        page="covidStatus"
        type="radio"
      ></base-radio>
      <base-radio
        rules="required"
        name="had_antibody_test"
        value="no"
        placeholder="არა"
        page="covidStatus"
        type="radio"
        :lastInput="true"
      ></base-radio>
    </div>

    <div v-if="hadCovidAndAntibodyTest">
      <div class="mb-[14px] mt-[48px]">
        <p class="font-semibold text-2xl">
          თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
          რაოდენობა*
        </p>
      </div>

      <div class="mt-[29px]">
        <base-date
          name="test_date"
          type="date"
          placeholder="რიცხვი"
          page="covidStatus"
        ></base-date>
        <base-input
          type="number"
          class="transform -translate-y-8"
          placeholder="ანტისხეულების რაოდენობა"
          name="number"
          page="covidStatus"
        ></base-input>
      </div>
    </div>

    <div v-if="hadCovidAndNotAntibodyTest">
      <div class="mb-[14px] mt-[48px]">
        <p class="font-semibold text-2xl">
          მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
        </p>
      </div>

      <div class="mt-[29px]">
        <base-date
          name="covid_sickness_date"
          type="date"
          rules="required"
          page="covidStatus"
          placeholder="დდ/თთ/წწ"
        ></base-date>
      </div>
    </div>

    <button type="submit" class="absolute right-[50%] bottom-[9%] translate-x-[140px] z-50">
      <icon-forward></icon-forward>
    </button>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import BaseInput from "@/components/UI/inputs/BaseInput.vue";
import BaseRadio from "@/components/UI/inputs/BaseRadio.vue";
import BaseDate from "@/components/UI/inputs/BaseDate.vue";
import IconForward from "@/components/icons/IconForward.vue";
import { computed, inject } from "vue";

export default {
  components: {
    BaseInput,
    BaseRadio,
    BaseDate,
    IconForward,
    Form,
  },
  props: {
    hadCovid: {
      type: [Boolean, String],
      required: true,
    },
    checkHadAntibody: {
      type: [Boolean, String],
      required: true,
      default: "",
    },
  },
  setup(props) {
    const hadCovidAndAntibodyTest = computed(() => {
      return props.hadCovid && props.checkHadAntibody === "yes";
    });
    const hadCovidAndNotAntibodyTest = computed(() => {
      return props.hadCovid && props.checkHadAntibody === "no";
    });
    return {
      hadCovidAndAntibodyTest,
      hadCovidAndNotAntibodyTest,
      submitForm: inject("submitForm"),
    };
  },
};
</script>
