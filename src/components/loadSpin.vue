<template>
    <div class="spin">

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.spin {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: red;
    margin: 30px auto;
    animation: spin 1s infinite;
}

@keyframes spin {
    to {
        rotate: 360deg;
    }
}
</style>