<template>
    <div>
        <h1>Log out Successfully</h1>
    </div>
</template>
<script>
export default {
    created(){
        localStorage.removeItem('AToken')
    }
}
</script>