<template>
    <div class="header-container">
        <RouterLink  to="/tutorials" class="header-btn active">Tutorials</RouterLink>
        <RouterLink  to="/requests" class="header-btn active">Requests</RouterLink>
    </div>
</template>

<script>

</script>

<style scoped>
    .header-container{
        position: absolute;
        display: flex;
        padding: 30px;
        gap:50px;
        background-color: #a4abab52;
        justify-content: center;
        width:95%;
        top: 0px;
        margin: 0px;
    }
    .header-btn{
    padding: 20px;
    width: 139px;
    letter-spacing: 2px;
    border-radius: 30px;
    font-weight: bold;
    text-decoration: none;
    background-color: rgb(52 61 110);
    color: white;
    }
</style>