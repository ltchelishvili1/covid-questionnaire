<template>
  <form @submit.prevent="submitForm">
    <div>
      <div class="mb-[14px]">
        <p class="font-semibold text-2xl">უკვე აცრილი ხარ?*</p>
      </div>
      <base-radio
        rules="required"
        name="had_vaccine"
        value="yes"
        placeholder="კი"
        page="vaccinated"
      ></base-radio>
      <base-radio
        rules="required"
        name="had_vaccine"
        value="no"
        placeholder="არა"
        page="vaccinated"
        :lastInput="true"
      ></base-radio>
    </div>
    <div v-if="hadVaccine === 'yes'">
      <div class="mb-[14px] mt-[48px]">
        <p class="font-semibold text-2xl">აირჩიე რა ეტაპზე ხარ*</p>
      </div>
      <base-radio
        rules="required"
        name="vaccination_stage"
        value="first_dosage_and_registered_on_the_second"
        page="vaccinated"
        placeholder="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
      ></base-radio>
      <base-radio
        rules="required"
        name="vaccination_stage"
        value="fully_vaccinated"
        page="vaccinated"
        placeholder="სრულად აცრილი ვარ"
      ></base-radio>
      <base-radio
        rules="required"
        name="vaccination_stage"
        value="first_dosage_and_not_registered_yet"
        page="vaccinated"
        placeholder="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
        :lastInput="true"
      ></base-radio>

      <p
        v-if="vaccinationStage === 'first_dosage_and_not_registered_yet'"
        class="ml-[40px] mt-[39px]"
      >
        რომ არ გადადო, <br />
        ბარემ ახლავე დარეგისტრირდი <br />
        <a href="https://booking.moh.gov.ge/" class="text-[#1289AE]"
          >https://booking.moh.gov.ge/</a
        >
      </p>
    </div>
    <div v-if="hadVaccine === 'no'">
      <div class="mb-[14px] mt-[48px]">
        <p class="font-semibold text-2xl">რას ელოდები?*</p>
      </div>
      <base-radio
        rules="required"
        name="i_am_waiting"
        value="registered_and_waiting"
        page="vaccinated"
        placeholder="დარეგისტრირებული ვარ და ველოდები რიცხვს"
      ></base-radio>
      <base-radio
        rules="required"
        name="i_am_waiting"
        value="not_planning"
        page="vaccinated"
        placeholder="არ ვგეგმავ"
      ></base-radio>
      <base-radio
        rules="required"
        name="i_am_waiting"
        value="had_covid_and_planning_to_be_vaccinated"
        placeholder="გადატანილი მაქვს და ვგეგმავ აცრას"
        page="vaccinated"
        :lastInput="true"
      ></base-radio>

      <p
        v-if="iAmWaiting === 'had_covid_and_planning_to_be_vaccinated'"
        class="ml-[40px] mt-[39px]"
      >
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
        თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <br />
        👉 რეგისტრაციის ბმული <br />
        <a href="https://booking.moh.gov.ge/" class="text-[#1289AE]"
          >https://booking.moh.gov.ge/</a
        >
      </p>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/UI/inputs/BaseInput.vue";
import BaseRadio from "@/components/UI/inputs/BaseRadio.vue";
import { inject } from "vue";

export default {
  props: {
    iAmWaiting: {
      type: [Boolean, String],
      required: true,
      default: "",
    },
    hadVaccine: {
      type: [Boolean, String],
      required: true,
      default: "",
    },
    vaccinationStage: {
      type: [Boolean, String],
      required: true,
      default: "",
    },
  },

  components: {
    BaseInput,
    BaseRadio,
  },
  setup() {
    return {
      submitForm: inject("submitForm"),
    };
  },
};
</script>
