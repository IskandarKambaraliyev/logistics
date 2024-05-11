<script setup>
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    ComboboxButton,
  } from "@headlessui/vue";

  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const handleUpdate = (value) => {
    emit("update:modelValue", value);
  };

  const data = [
    {
      id: 1,
      name: "Customer support",
    },
    {
      id: 2,
      name: "Billing",
    },
    {
      id: 3,
      name: "Accounting",
    },
    {
      id: 4,
      name: "Enterprise Sales",
    },
    {
      id: 5,
      name: "Demo sales",
    },
  ];

  const selected = ref(data[0]);
  const query = ref("");

  const filteredData = computed(() =>
    query.value === ""
      ? data
      : data.filter((sub) =>
          sub.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.value.toLowerCase().replace(/\s+/g, ""))
        )
  );
</script>

<template>
  <div class="relative">
    <Combobox v-model="selected">
      <div class="relative">
        <ComboboxInput
          id="contact-subject"
          class="py-4 px-5 pr-14 bg-white/10 rounded-full outline-none w-full text-base text-white placeholder:text-[#8CBBE1] ring-1 ring-transparent hover:ring-white/50 focus:ring-white transition-all"
          :displayValue="
            (subject) => {
              handleUpdate(subject.name);
              return subject.name;
            }
          "
          @change="query = $event.target.value"
          required
        />
        <ComboboxButton
          class="absolute inset-y-0 right-2 flex items-center pr-2"
        >
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_320_11655)">
              <path
                d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_320_11655">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </ComboboxButton>
      </div>

      <ComboboxOptions
        class="absolute z-[1] w-full bg-[#1A78C2] rounded-[1.5rem] shadow-2xl overflow-hidden"
        :style="{
          top: 'calc(100% + 0.5rem)',
        }"
      >
        <div
          v-if="filteredData.length === 0 && query !== ''"
          class="relative cursor-default select-none px-4 py-2 text-gray-700"
        >
          Nothing found.
        </div>

        <ComboboxOption
          v-for="subject in filteredData"
          as="template"
          :key="subject.id"
          :value="subject"
          v-slot="{ selected, active }"
        >
          <li
            class="relative cursor-default select-none py-4 px-5"
            :class="{
              'bg-white/10': active,
            }"
          >
            <span
              class="block truncate"
              :class="{
                'text-white': selected,
                'text-[#8CBBE1]': !selected,
                '!text-white': active,
              }"
            >
              {{ subject.name }}
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </Combobox>
  </div>
</template>

<style lang="scss" scoped></style>
