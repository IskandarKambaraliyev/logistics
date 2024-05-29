<script setup>
  import { DatePicker } from "v-calendar";
  import { format } from "date-fns";
  import "v-calendar/dist/style.css";

  const step = ref(1);

  const form = reactive({
    pickup: "",
    delivery: "",
    year: "",
    make: "",
    model: "",
    type: 1,
    vehicle: 1,
    ship_date: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeType = (num) => {
    if (num === 1 || num === 2) {
      form.type = num;
    } else {
      console.log(
        'Unaccessible value -> form.type. Check the radio button "type" click event'
      );
    }
  };

  const handleChangeVehicle = (num) => {
    if (num === 1 || num === 2) {
      form.vehicle = num;
    } else {
      console.log(
        'Unaccessible value -> form.vehicle. Check the radio button "type" click event'
      );
    }
  };

  const today = new Date();

  const openDate = ref(false);
  const datePickRef = ref(null);
  const datePickInput = ref(null);

  onClickOutside(datePickRef, () => {
    openDate.value = false;
  });

  const handlePhone = () => {
    let inputVal = form.phone.replace(/\D/g, "");

    if (inputVal.length > 12) {
      inputVal = inputVal.substring(0, 10);
    }

    if (inputVal.length <= 3) {
      form.phone = `(${inputVal}`;
    } else if (inputVal.length <= 6) {
      form.phone = `(${inputVal.substring(0, 3)}) ${inputVal.substring(3)}`;
    } else {
      form.phone = `(${inputVal.substring(0, 3)}) ${inputVal.substring(
        3,
        6
      )}-${inputVal.substring(6)}`;
    }
  };

  const handleStep1 = () => {
    if (form.pickup && form.delivery) {
      step.value = 2;
    }
  };

  const handleStep2 = () => {
    step.value = 3;
  };

  const handleStep3 = () => {
    step.value = 4;
  };

  const hasError = ref(false);
  const phoneError = computed(() => {
    return form.phone.length === 14;
  });

  const checkFields = () => {
    if (form.phone.length < 14) {
      hasError.value = true;
      return true;
    } else {
      hasError.value = false;
      return false;
    }
  };

  const handleStep4 = async () => {
    if (!form.pickup || !form.delivery) {
      step.value = 1;
    } else if (!form.year || !form.make || !form.model) {
      step.value = 2;
    } else if (!form.type || !form.vehicle) {
      step.value = 3;
    } else if (!form.ship_date) {
      datePickInput.value.focus();
      openDate.value = true;
    } else if (!checkFields()) {
      const body = {
        pick_up_location: form.pickup,
        delivery_location: form.delivery,
        year: form.year,
        make: form.make,
        model: form.model,
        vehicle_type: form.type === 1 ? "Open/Standard" : "Enclosed",
        operational_status: form.vehicle === 1 ? "Operable" : "Inoperable",
        ship_date: format(form.ship_date, "yyyy-MM-dd"),
        name: form.name,
        email: form.email,
        phone: form.phone.replace(" ", ""),
      };

      const { data, error } = await useMyFetch(`/leads/create/`, {
        method: "POST",
        body: body,
      });

      if (error.value) {
        console.log(error.value);

        // throw createError({
        //   statusCode: error.value.statusCode,
        //   message: error.value.message,
        // });
      } else {
        form.delivery = "";
        form.pickup = "";
        form.year = "";
        form.make = "";
        form.model = "";
        form.type = 1;
        form.vehicle = 1;
        form.ship_date = "";
        form.name = "";
        form.email = "";
        form.phone = "";

        step.value = 1;
      }
    }
  };
</script>

<template>
  <div
    class="bg-white rounded-[1.5rem] p-6 md:p-7 max-w-[45rem] w-full border border-dark-blue-000 relative main_hero_quote max-lg:mx-auto"
  >
    <Transition name="fade-300" mode="out-in">
      <div v-if="step === 1" class="flex flex-col gap-6 md:gap-8">
        <div
          class="flex items-start gap-4 text-base md:text-[1.75rem] md:leading-[2.25rem] font-semibold"
        >
          <span class="flex-1">Get an instant quote or call now</span>
          <NuxtLink
            to="tel:555-555-5555"
            class="text-blue-main hover:text-blue-700 select-text"
          >
            555-555-5555
          </NuxtLink>
        </div>

        <form class="flex flex-col gap-6" @submit.prevent="handleStep1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UiFormGroup label="Transport car FROM" :required="false">
              <UiFormSelectZipcode
                placeholder="City, State, Zipcode"
                v-model="form.pickup"
              />
            </UiFormGroup>
            <UiFormGroup label="Transport car TO" :required="false">
              <UiFormSelectZipcode
                placeholder="City, State, Zipcode"
                v-model="form.delivery"
              />
            </UiFormGroup>
          </div>

          <UiButton type="submit">Next step</UiButton>
        </form>
      </div>

      <div v-else-if="step === 2" class="flex flex-col gap-6 md:gap-8">
        <UiButtonCircle color="dark" @click="step = 1">
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_219_2663)">
              <path
                d="M6.82676 8.35346L11.8932 13.4199L11.4203 13.8928L5.52724 7.99972L11.4148 2.10619L11.8922 2.5809L6.82676 7.64635L6.47321 7.9999L6.82676 8.35346Z"
                fill="#323232"
                stroke="white"
                class="stroke-dark-blue-main group-hover:stroke-white transition"
              />
            </g>
          </svg>
        </UiButtonCircle>

        <form class="flex flex-col gap-6" @submit.prevent="handleStep2">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <UiFormGroup label="Year" :required="false" for="main-hero-year">
              <input
                type="tel"
                v-model="form.year"
                :placeholder="new Date().getFullYear()"
                :maxLength="4"
                @input="form.year = $event.target.value.replace(/\D/g, '')"
                class="input"
              />
            </UiFormGroup>
            <UiFormGroup label="Make" :required="false" for="main-hero-make">
              <UiFormInput
                v-model="form.make"
                id="main-hero-make"
                placeholder="Make"
              />
            </UiFormGroup>
            <UiFormGroup label="Model" :required="false" for="main-hero-model">
              <UiFormInput
                v-model="form.model"
                id="main-hero-model"
                placeholder="Model"
              />
            </UiFormGroup>
          </div>
          <UiButton type="submit">Next step</UiButton>
        </form>
      </div>
      <div v-else-if="step === 3" class="flex flex-col gap-6 md:gap-8">
        <UiButtonCircle color="dark" @click="step = 2">
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_219_2663)">
              <path
                d="M6.82676 8.35346L11.8932 13.4199L11.4203 13.8928L5.52724 7.99972L11.4148 2.10619L11.8922 2.5809L6.82676 7.64635L6.47321 7.9999L6.82676 8.35346Z"
                fill="#323232"
                stroke="white"
                class="stroke-dark-blue-main group-hover:stroke-white transition"
              />
            </g>
          </svg>
        </UiButtonCircle>

        <form class="flex flex-col gap-6" @submit.prevent="handleStep3">
          <UiFormGroup label="Trailer type" :required="false">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UiFormRadio
                :active="form.type === 1"
                @click="handleChangeType(1)"
              >
                Open/Standart
              </UiFormRadio>
              <UiFormRadio
                :active="form.type === 2"
                @click="handleChangeType(2)"
              >
                Enclosed
              </UiFormRadio>
            </div>
          </UiFormGroup>

          <UiFormGroup label="Is vehicle operable?" :required="false">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UiFormRadio
                @click="handleChangeVehicle(1)"
                :active="form.vehicle === 1"
              >
                Vehicle drivers
              </UiFormRadio>
              <UiFormRadio
                @click="handleChangeVehicle(2)"
                :active="form.vehicle === 2"
              >
                Inoperable
              </UiFormRadio>
            </div>
          </UiFormGroup>

          <UiButton type="submit">Next step</UiButton>
        </form>
      </div>

      <div v-else-if="step === 4" class="flex flex-col gap-6 md:gap-8">
        <UiButtonCircle color="dark" @click="step = 3">
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_219_2663)">
              <path
                d="M6.82676 8.35346L11.8932 13.4199L11.4203 13.8928L5.52724 7.99972L11.4148 2.10619L11.8922 2.5809L6.82676 7.64635L6.47321 7.9999L6.82676 8.35346Z"
                fill="#323232"
                stroke="white"
                class="stroke-dark-blue-main group-hover:stroke-white transition"
              />
            </g>
          </svg>
        </UiButtonCircle>

        <form class="flex flex-col gap-6" @submit.prevent="handleStep4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UiFormGroup label="Ship date" for="main-hero-ship-date">
              <div class="relative" ref="datePickRef">
                <input
                  type="text"
                  @click="openDate = !openDate"
                  :value="
                    form.ship_date ? format(form.ship_date, 'd MMM, yyy') : ''
                  "
                  :readonly="true"
                  class="cursor-pointer w-full input"
                  :placeholder="format(today, 'd MMM, yyy')"
                  id="main-hero-ship-date"
                  ref="datePickInput"
                  required
                />

                <Transition name="fade-150">
                  <div v-if="openDate" class="absolute top-full left-0">
                    <DatePicker
                      locale="en"
                      v-model="form.ship_date"
                      is-required=""
                      @dayclick="openDate = false"
                      :min-date="today"
                      :max-date="
                        new Date(today.getFullYear(), today.getMonth() + 6, 0)
                      "
                    />
                  </div>
                </Transition>
              </div>
            </UiFormGroup>
            <UiFormGroup label="Name" for="main-hero-name">
              <UiFormInput
                v-model="form.name"
                placeholder="John Doe"
                id="main-hero-name"
              />
            </UiFormGroup>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UiFormGroup label="Email" for="main-hero-email">
              <UiFormInput
                type="email"
                v-model="form.email"
                placeholder="example@gmail.com"
                id="main-hero-email"
              />
            </UiFormGroup>
            <UiFormGroup label="Phone" for="main-hero-phone">
              <input
                type="tel"
                v-model="form.phone"
                placeholder="(000) 000-0000"
                id="main-hero-phone"
                @input="handlePhone"
                maxlength="14"
                class="input"
                :class="{ '!ring-red-500': !phoneError && hasError }"
              />
            </UiFormGroup>
          </div>

          <UiButton type="submit">Submit instant quote</UiButton>
        </form>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  .main_hero_quote {
    .input {
      @apply rounded-full ring-1 ring-dark-blue-000 px-5 py-3 md:py-4 outline-none focus:ring-blue-500 text-[0.875rem] md:text-[1rem] leading-6 placeholder:text-dark-blue-300;
    }
  }
</style>
