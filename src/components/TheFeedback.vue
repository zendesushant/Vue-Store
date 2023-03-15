<template>
    <div class="feedback-container">
        <table :style="{height:'100%',width:'100%'}">
            <tr class="table-head">
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Description</th>
            </tr>
            <tr class="table-head" v-for="feedback of $store.getters.updateFeedbackData" :key="feedback">
                <td>{{ feedback.name }}</td>
                <td>{{ feedback.email }}</td>
                <td>{{ feedback.mobile }}</td>
                <td>{{ feedback.description }}</td>
            </tr>
            <tr v-if="$store.getters.updateFeedbackData.length<1">
                <td>No Feedbacks Available</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
  padding: 20px;
  width: 100%;
}
.table-head{
    display: flex;
}
.feedback-container{
    top: 100px;
    position: absolute;
    padding: 20px;
    width: 100%;
}
</style>