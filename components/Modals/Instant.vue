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

  const handleSubmit = (e) => {
    if (form.ship_date) {
      const body = {
        pickup: form.pickup,
        delivery: form.delivery,
        year: form.year,
        make: form.make,
        model: form.model,
        type: form.type,
        vehicle: form.vehicle,
        ship_date: format(form.ship_date, "d MMM, yyy"),
        name: form.name,
        email: form.email,
        phone: form.phone,
      };

      console.log(body);
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
      <div class="h-full overflow-y-auto px-4 md:px-8 py-16 lg:py-32 relative">
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
                    <UiFormInput
                      v-model="form.year"
                      :placeholder="new Date().getFullYear()"
                      :maxLength="4"
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
                    />
                  </UiFormGroup>
                </div>

                <div class="form_group-inputs">
                  <button
                    type="button"
                    class="radio_btn"
                    @click="handleChangeType(1)"
                  >
                    <div class="icon">
                      <svg
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.83301 7.99992C1.83301 4.59606 4.59582 1.83325 7.99967 1.83325C11.4035 1.83325 14.1663 4.59606 14.1663 7.99992C14.1663 11.4038 11.4035 14.1666 7.99967 14.1666C4.59582 14.1666 1.83301 11.4038 1.83301 7.99992ZM2.16634 7.99992C2.16634 11.2227 4.77687 13.8333 7.99967 13.8333C11.2225 13.8333 13.833 11.2227 13.833 7.99992C13.833 4.77711 11.2225 2.16659 7.99967 2.16659C4.77687 2.16659 2.16634 4.77711 2.16634 7.99992Z"
                          :class="
                            form.type === 1
                              ? 'stroke-blue-500'
                              : 'stroke-dark-blue-main'
                          "
                        />
                        <path
                          d="M8.00033 11.3334C9.84127 11.3334 11.3337 9.84103 11.3337 8.00008C11.3337 6.15913 9.84127 4.66675 8.00033 4.66675C6.15938 4.66675 4.66699 6.15913 4.66699 8.00008C4.66699 9.84103 6.15938 11.3334 8.00033 11.3334Z"
                          fill="#008FFF"
                          :class="
                            form.type === 1
                              ? 'fill-blue-500'
                              : 'fill-dark-blue-main hidden'
                          "
                        />
                      </svg>
                    </div>
                    <span>Open/Standart</span>
                  </button>
                  <button
                    type="button"
                    class="radio_btn"
                    @click="handleChangeType(2)"
                  >
                    <div class="icon">
                      <svg
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.83301 7.99992C1.83301 4.59606 4.59582 1.83325 7.99967 1.83325C11.4035 1.83325 14.1663 4.59606 14.1663 7.99992C14.1663 11.4038 11.4035 14.1666 7.99967 14.1666C4.59582 14.1666 1.83301 11.4038 1.83301 7.99992ZM2.16634 7.99992C2.16634 11.2227 4.77687 13.8333 7.99967 13.8333C11.2225 13.8333 13.833 11.2227 13.833 7.99992C13.833 4.77711 11.2225 2.16659 7.99967 2.16659C4.77687 2.16659 2.16634 4.77711 2.16634 7.99992Z"
                          :class="
                            form.type === 2
                              ? 'stroke-blue-500'
                              : 'stroke-dark-blue-main'
                          "
                        />
                        <path
                          d="M8.00033 11.3334C9.84127 11.3334 11.3337 9.84103 11.3337 8.00008C11.3337 6.15913 9.84127 4.66675 8.00033 4.66675C6.15938 4.66675 4.66699 6.15913 4.66699 8.00008C4.66699 9.84103 6.15938 11.3334 8.00033 11.3334Z"
                          fill="#008FFF"
                          :class="
                            form.type === 2
                              ? 'fill-blue-500'
                              : 'fill-dark-blue-main hidden'
                          "
                        />
                      </svg>
                    </div>
                    <span>Open/Standart</span>
                  </button>
                </div>

                <div class="form_group-inputs">
                  <button
                    type="button"
                    class="radio_btn"
                    @click="handleChangeVehicle(1)"
                  >
                    <div class="icon">
                      <svg
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.83301 7.99992C1.83301 4.59606 4.59582 1.83325 7.99967 1.83325C11.4035 1.83325 14.1663 4.59606 14.1663 7.99992C14.1663 11.4038 11.4035 14.1666 7.99967 14.1666C4.59582 14.1666 1.83301 11.4038 1.83301 7.99992ZM2.16634 7.99992C2.16634 11.2227 4.77687 13.8333 7.99967 13.8333C11.2225 13.8333 13.833 11.2227 13.833 7.99992C13.833 4.77711 11.2225 2.16659 7.99967 2.16659C4.77687 2.16659 2.16634 4.77711 2.16634 7.99992Z"
                          :class="
                            form.vehicle === 1
                              ? 'stroke-blue-500'
                              : 'stroke-dark-blue-main'
                          "
                        />
                        <path
                          d="M8.00033 11.3334C9.84127 11.3334 11.3337 9.84103 11.3337 8.00008C11.3337 6.15913 9.84127 4.66675 8.00033 4.66675C6.15938 4.66675 4.66699 6.15913 4.66699 8.00008C4.66699 9.84103 6.15938 11.3334 8.00033 11.3334Z"
                          fill="#008FFF"
                          :class="
                            form.vehicle === 1
                              ? 'fill-blue-500'
                              : 'fill-dark-blue-main hidden'
                          "
                        />
                      </svg>
                    </div>
                    <span>Vehicle drivers</span>
                  </button>
                  <button
                    type="button"
                    class="radio_btn"
                    @click="handleChangeVehicle(2)"
                  >
                    <div class="icon">
                      <svg
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.83301 7.99992C1.83301 4.59606 4.59582 1.83325 7.99967 1.83325C11.4035 1.83325 14.1663 4.59606 14.1663 7.99992C14.1663 11.4038 11.4035 14.1666 7.99967 14.1666C4.59582 14.1666 1.83301 11.4038 1.83301 7.99992ZM2.16634 7.99992C2.16634 11.2227 4.77687 13.8333 7.99967 13.8333C11.2225 13.8333 13.833 11.2227 13.833 7.99992C13.833 4.77711 11.2225 2.16659 7.99967 2.16659C4.77687 2.16659 2.16634 4.77711 2.16634 7.99992Z"
                          :class="
                            form.vehicle === 2
                              ? 'stroke-blue-500'
                              : 'stroke-dark-blue-main'
                          "
                        />
                        <path
                          d="M8.00033 11.3334C9.84127 11.3334 11.3337 9.84103 11.3337 8.00008C11.3337 6.15913 9.84127 4.66675 8.00033 4.66675C6.15938 4.66675 4.66699 6.15913 4.66699 8.00008C4.66699 9.84103 6.15938 11.3334 8.00033 11.3334Z"
                          fill="#008FFF"
                          :class="
                            form.vehicle === 2
                              ? 'fill-blue-500'
                              : 'fill-dark-blue-main hidden'
                          "
                        />
                      </svg>
                    </div>
                    <span>Inoperable</span>
                  </button>
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
                    <UiFormInput
                      v-model="form.phone"
                      placeholder="(000) 000-0000"
                      id="instant-phone"
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
