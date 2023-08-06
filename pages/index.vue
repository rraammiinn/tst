<template>
    <h1 style="color: royalblue;">
        home...{{ runtimeConfig.public.secret }}
    </h1>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

</script>