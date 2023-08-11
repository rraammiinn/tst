<template>
    <h1 style="color: royalblue;">
        home... ===> {{ runtimeConfig.public.secret }}
    </h1>

    <NSwitch/>
</template>

<script setup>
import {NSwitch} from 'naive-ui'
const runtimeConfig = useRuntimeConfig()

</script>