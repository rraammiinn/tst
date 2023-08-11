<template>
    <h1 class="" style="color: royalblue;">
        home... ===> {{ runtimeConfig.public.secret }}
    </h1>

    <NSwitch class="mx-a"/>
</template>

<script setup>
import {NSwitch} from 'naive-ui'
const runtimeConfig = useRuntimeConfig()

</script>