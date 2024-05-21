<script setup>
  import { DatePicker } from "v-calendar";
  import { format } from "date-fns";
  import "v-calendar/dist/style.css";

  const instant = useInstant();
  const menu = useMenu();

  const today = new Date();

  watch(instant, (val) => {
    if (val) {
      document.body.style.overflow = "hidden";
      window.history.pushState(null, "", "");
    } else {
      if (menu.value) {
        document.body.style.overflow = "hidden";
      } else document.body.style.overflow = "";
    }
  });

  const handlePopstate = () => {
    instant.value = false;
  };

  onMounted(() => {
    window.addEventListener("popstate", handlePopstate);
  });

  onUnmounted(() => {
    window.removeEventListener("popstate", handlePopstate);
  });

  const wrapper = ref(null);

  onClickOutside(wrapper, () => {
    instant.value = false;
    window.history.back();
  });

  const handleClose = () => {
    instant.value = false;
    window.history.back();
  };

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

  const handleSubmit = async (e) => {
    if (form.ship_date) {
      if (!checkFields()) {
        const body = {
          pick_up_location: form.pickup,
          delivery_location: form.delivery,
          year: form.year,
          make: form.make,
          model: form.model,
          vehicle_type: form.type === 1 ? "Open/Standard" : "Enclosed",
          operational_status:
            form.vehicle === 1 ? "Vehicle drivers" : "Inoperable",
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
        } else {
          return;
        }
      }
    } else {
      datePickInput.value.focus();
      openDate.value = true;
    }
  };
</script>

<template>
  <Transition name="fade-300">
    <div
      v-if="instant"
      class="fixed top-0 left-0 w-full h-[100lvh] z-modal+1 backdrop-blur-lg"
    >
      <div
        class="h-full overflow-y-auto px-4 md:px-8 pt-16 py-24 lg:py-32 relative"
      >
        <div
          class="relative bg-white max-w-[50rem] w-full mx-auto rounded-[2rem] p-6 md:p-8 text-dark-blue-main flex flex-col gap-6 md:gap-12"
          ref="wrapper"
          :style="{ boxShadow: '0px 4px 64px 0px rgba(0, 0, 0, 0.25)' }"
        >
          <div class="flex items-start justify-between gap-4">
            <h4
              class="flex-1 font-semibold text-base md:text-[1.75rem] md:leading-[2.25rem]"
            >
              Get an instant
            </h4>

            <UiButtonCircle color="dark" @click="handleClose">
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4268 3.5L4.42676 12.5"
                  stroke="#263138"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover:stroke-white transition"
                />
                <path
                  d="M13.4268 12.5L4.42676 3.5"
                  stroke="#263138"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover:stroke-white transition"
                />
              </svg>
            </UiButtonCircle>
          </div>

          <form
            @submit.prevent="handleSubmit"
            class="flex flex-col gap-8 lg:gap-12"
          >
            <div class="form_group">
              <h6 class="form_group-title">Orign & Destination</h6>

              <div class="flex flex-col gap-6">
                <div class="form_group-inputs">
                  <div>
                    <span>*Pick-up location</span>
                    <UiFormSelectZipcode
                      v-model="form.pickup"
                      placeholder="City, State, Zipcode"
                    />
                  </div>
                  <div>
                    <span>*Delivery location</span>
                    <UiFormSelectZipcode
                      v-model="form.delivery"
                      placeholder="City, State, Zipcode"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="form_group">
              <h6 class="form_group-title">Vehicle Detailes</h6>

              <div class="flex flex-col gap-6">
                <div class="form_group-inputs c3">
                  <UiFormGroup label="Year" for="instant-year">
                    <input
                      type="text"
                      v-model="form.year"
                      :placeholder="new Date().getFullYear()"
                      :maxLength="4"
                      @input="
                        form.year = $event.target.value.replace(/\D/g, '')
                      "
                      id="instant-year"
                    />
                  </UiFormGroup>
                  <UiFormGroup label="Make" for="instant-make">
                    <UiFormInput
                      v-model="form.make"
                      placeholder="Make"
                      id="instant-make"
                    />
                  </UiFormGroup>
                  <UiFormGroup label="Model" for="instant-model">
                    <UiFormInput
                      v-model="form.model"
                      placeholder="Model"
                      id="instant-model"
                      autocomplete="off"
                    />
                  </UiFormGroup>
                </div>

                <div class="form_group-inputs">
                  <UiFormRadio
                    @click="handleChangeType(1)"
                    :active="form.type === 1"
                  >
                    Open/Standart
                  </UiFormRadio>

                  <UiFormRadio
                    @click="handleChangeType(2)"
                    :active="form.type === 2"
                  >
                    Enclosed
                  </UiFormRadio>
                </div>

                <div class="form_group-inputs">
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
              </div>
            </div>

            <div class="form_group">
              <h6 class="form_group-title">Shipment detailes</h6>

              <div class="flex flex-col gap-6">
                <div class="form_group-inputs">
                  <UiFormGroup label="Ship date" for="instant-ship-date">
                    <div class="relative" ref="datePickRef">
                      <input
                        type="text"
                        @click="openDate = !openDate"
                        :value="
                          form.ship_date
                            ? format(form.ship_date, 'd MMM, yyy')
                            : ''
                        "
                        :readonly="true"
                        class="cursor-pointer w-full"
                        :placeholder="format(today, 'd MMM, yyy')"
                        id="instant-ship-date"
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
                              new Date(
                                today.getFullYear(),
                                today.getMonth() + 6,
                                0
                              )
                            "
                          />
                        </div>
                      </Transition>
                    </div>
                  </UiFormGroup>
                  <UiFormGroup label="Name" for="instant-name">
                    <UiFormInput
                      v-model="form.name"
                      placeholder="John Doe"
                      id="instant-name"
                    />
                  </UiFormGroup>
                </div>

                <div class="form_group-inputs">
                  <UiFormGroup label="Email" for="instant-email">
                    <UiFormInput
                      type="email"
                      v-model="form.email"
                      placeholder="example@gmail.com"
                      id="instant-email"
                    />
                  </UiFormGroup>
                  <UiFormGroup label="Phone" for="instant-phone">
                    <input
                      type="text"
                      v-model="form.phone"
                      placeholder="(000) 000-0000"
                      id="instant-phone"
                      @input="handlePhone"
                      maxlength="14"
                      required
                      :class="{ '!ring-red-500': !phoneError && hasError }"
                    />
                  </UiFormGroup>
                </div>
              </div>
            </div>

            <UiButton variant="primary" color="dark">
              Submit instant quote
            </UiButton>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  .form_group {
    @apply gap-2 md:gap-4;
    display: flex;
    flex-direction: column;

    &-title {
      @apply text-[0.875rem] md:text-[1.25rem] pb-2 md:pb-4 border-b border-dark-blue-700/10;
      line-height: 1.5rem;
      font-weight: 500;
    }

    &-inputs {
      @apply grid grid-cols-1 md:grid-cols-2 gap-2;

      &.c3 {
        @apply md:grid-cols-3;
      }

      input,
      .input {
        @apply rounded-full ring-1 ring-dark-blue-000 px-5 py-3 md:py-4 outline-none focus:ring-blue-500 text-[0.875rem] md:text-[1rem] leading-6 placeholder:text-dark-blue-300;
      }

      .radio_btn {
        @apply rounded-full flex items-center gap-2.5 ring-1 ring-dark-blue-000 px-5 py-3 md:py-4 outline-none transition-all;

        span {
          @apply text-[0.875rem] md:text-[1rem] leading-6;
          flex: 1;
        }
      }

      & > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span {
          @apply text-base font-medium;
        }
      }
    }
  }
</style>
