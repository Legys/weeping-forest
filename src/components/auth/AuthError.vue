<template>
    <div class="error-frame">
        <span class="error__text">   
                                       {{ error }}        </span>
    </div>
</template>

<script>
    export default {
    props: ['error'],
    data() {
        return {
           
        }
    }
}

</script>

<style scoped>
.error-frame {
    background: rgb(239, 136, 155);
    width: 100%;
    min-height: 56px;
}

.error__text {
    padding: 15px;
    display: block;
    font-size: 18px;
    text-align: center
}
</style>