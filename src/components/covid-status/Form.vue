<template>
  <form>
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
        <base-input
          name="test_date"
          type="date"
          page="covidStatus"
        ></base-input>
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
        <base-input
          name="covid_sickness_date"
          type="date"
          rules="required"
          page="covidStatus"
        ></base-input>
      </div>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/UI/inputs/BaseInput.vue";
import BaseRadio from "@/components/UI/inputs/BaseRadio.vue";
import { computed } from "vue";

export default {
  components: {
    BaseInput,
    BaseRadio,
  },
  props: {
    hadCovid: {
      type: Boolean || Null,
      required: true,
    },
    checkHadAntibody: {
      type: String || Null,
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
    };
  },
};
</script>
