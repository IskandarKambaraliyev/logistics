<script setup>
  import { watchThrottled } from "@vueuse/core";
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from "@headlessui/vue";

  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  });

  const current = ref(null);
  const currentThrottled = ref(null);

  const emit = defineEmits(["update:modelValue"]);

  const handleUpdate = (val) => {
    emit("update:modelValue", val);
  };

  watchThrottled(
    current,
    () => {
      currentThrottled.value = current.value;
    },
    { throttle: 500 }
  );

  const { data, error } = await useFetch(
    () => `/api/zipcode?search=${currentThrottled.value}`
  );

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      message: error.value.message,
    });
  }

  // watch(data, (val) => {
  //   console.log(val);
  // });
</script>

<template>
  <div class="relative">
    <Combobox>
      <ComboboxInput
        @change="current = $event.target.value"
        class="py-4 px-5 rounded-full outline-none ring-1 ring-dark-blue-000 focus:ring-blue-500 w-full text-[0.875rem] md:text-[1rem] leading-6 placeholder:text-dark-blue-300"
        :placeholder="placeholder"
        :displayValue="
          (item) => {
            // handleUpdate(`${item.city}, ${item.state}, ${item.zip_code}`);
            //  current = `${item.city}, ${item.state}, ${item.zip_code}`;
            handleUpdate(`${item.city}, ${item.state}, ${item.zip_code}`);
            return `${item.city}, ${item.state}, ${item.zip_code}`;
          }
        "
        required
      />
      <Transition name="fade-300">
        <ComboboxOptions
          v-if="data"
          class="bg-white absolute top-full left-0 w-full rounded-[1rem] shadow-2xl overflow-hidden"
        >
          <div class=" max-h-[50vh] py-2 overflow-y-auto custom-scrollbar">
            <div
              v-if="data.results?.length === 0"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Nothing found.
            </div>
            <ComboboxOption
              v-for="item in data.results"
              :key="item.id"
              :value="item"
              v-slot="{ selected, active }"
              class=""
            >
              <div
                class="w-full px-4 py-2 cursor-pointer"
                :class="`${active ? 'bg-blue-100' : ''} ${
                  selected ? '!bg-blue-main !text-white' : ''
                }`"
              >
                {{ `${item.city}, ${item.state}, ${item.zip_code}` }}
              </div>
            </ComboboxOption>
          </div>
        </ComboboxOptions>
      </Transition>
    </Combobox>
  </div>
</template>

<style lang="scss" scoped></style>
