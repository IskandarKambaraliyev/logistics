<script setup>
  const form = reactive({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const checked = ref(false);

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

  const handleSubmit = async () => {
    if (!checkFields()) {
      const body = {
        name: form.name,
        email: form.email,
        phone_number: form.phone.replace(" ", ""),
        subject: form.subject,
        message: form.message,
      };

      const { data, error } = await useMyFetch(`/feedback/create/`, {
        method: "POST",
        body: body,
      });

      if (error.value) {
        console.log(error.value);
      } else {
        form.name = "";
        form.email = "";
        form.phone = "";
        form.subject = "";
        form.message = "";

        console.log(data.value);
      }
    } else {
      console.log("Error");
    }
  };
</script>

<template>
  <div class="contact_form">
    <form
      class="lg:max-w-[80%] w-full flex flex-col gap-6"
      @submit.prevent="handleSubmit"
    >
      <UiFormGroup label="Name" for="contact-name">
        <input
          v-model="form.name"
          type="text"
          class="input"
          id="contact-name"
          placeholder="John Doe"
          required
        />
      </UiFormGroup>

      <UiFormGroup label="Email" for="contact-email">
        <input
          v-model="form.email"
          type="email"
          class="input"
          id="contact-email"
          placeholder="example@gmail.com"
          required
        />
      </UiFormGroup>

      <UiFormGroup label="Phone number" for="contact-phone">
        <input
          class="input"
          :class="{ '!ring-red-500': !phoneError && hasError }"
          type="text"
          v-model="form.phone"
          placeholder="(000) 000-0000"
          id="contact-phone"
          @input="handlePhone"
          maxlength="14"
          required
        />
      </UiFormGroup>

      <UiFormGroup label="Subject" for="contact-subject">
        <UiFormSubject v-model="form.subject" />
      </UiFormGroup>

      <UiFormGroup label="Message" for="contact-message">
        <textarea
          class="input resize-none h-80 !rounded-[1.5rem]"
          type="text"
          v-model="form.message"
          placeholder="Hello, I would like to know more about your services."
          id="contact-message"
          required
        />
      </UiFormGroup>

      <div class="flex items-center gap-4">
        <input
          type="checkbox"
          id="contact-checkbox"
          v-model="checked"
          class="hidden"
        />
        <label
          for="contact-checkbox"
          class="size-4 rounded-[0.25rem] shrink-0 flex-center"
          :class="`${!checked ? 'bg-white' : 'bg-dark-blue-main'}`"
        >
          <UIcon
            v-if="checked"
            name="i-heroicons-check-16-solid"
            dynamic
            class="text-white"
          />
        </label>
        <label for="contact-checkbox">
          By checking this box you agree to receive text messages from Express
          Auto Carriers LLC, you can reply stop to opt-out at any time, this is
          our
          <NuxtLink to="/pages/privacy-policy" class="hover:underline">
            <b>privacy policy</b>
          </NuxtLink>
        </label>
      </div>

      <UiButton
        type="submit"
        variant="primary"
        color="white"
        :disabled="!checked"
      >
        Send message
      </UiButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .contact_form {
    .input {
      @apply py-4 px-5 bg-white/10 rounded-full outline-none w-full text-base text-white placeholder:text-[#8CBBE1] ring-1 ring-transparent hover:ring-white/50 focus:ring-white transition-all;
    }
  }
</style>
