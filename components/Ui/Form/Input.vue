<script setup>
  const props = defineProps([
    "type",
    "modelValue",
    "maxlength",
    "required",
    "placeholder",
    "value",
    "readonly",
  ]);

  const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    @input="$emit('update:modelValue', $event.target.value)"
    :type="props.type ? props.type : 'text'"
    :maxlength="props.maxlength ? props.maxlength : 75"
    :required="props.required ? props.required : true"
    :placeholder="props.placeholder ? props.placeholder : ''"
    :value="props.value ? props.value : props.modelValue"
    :readonly="props.readonly ? props.readonly : false"
    class="rounded-full ring-1 ring-dark-blue-000 px-5 py-3 md:py-4 outline-none focus:ring-blue-500 text-[0.875rem] md:text-[1rem] leading-6 placeholder:text-dark-blue-300"
  />
</template>

<style lang="scss" scoped></style>
