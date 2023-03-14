<template>

        <form autocomplete="off" @submit.prevent="onFormSubmit">
            <fieldset autocomplete="off" class="fieldset" >
                    <div autocomplete="off" class="row form-container">
                        <div class="col-12">
                           <input v-model="name" type="text" class="form-control" placeholder="Your Name" >
                        </div>
                        <div class="col-12">
                           <input v-model="email" type="text" class="form-control" placeholder="Your Email" >
                        </div>
                        <div class="col-12">
                           <input v-model="mobile" type="text" class="form-control" placeholder="Mobile Number" >
                        </div>
                        <div class="col-6">
                            <input v-model="course" class="form-control" list="courses" placeholder="Select Your Core Language">  
                            <datalist id="courses">
                                <option value="Az-900"/>
                                <option value="Java"/>
                                <option value="Angular"/>
                                <option value="React"/>
                                <option value="Mogodb"/>
                            </datalist>

                        </div>
                        <div class="checkboxes">Area of Interests :
                            <div>
                                <label for="frontend">Frontend</label>
                                <input true-value="frontend" v-model="frontend" type="checkbox" name="frontend" value="frontend" >
                            </div>
                            <div>
                                <label for="backend">Backend</label>
                                <input true-value="backend" v-model="backend" type="checkbox" name="backend" value="backend">
                            </div>
                            <div>
                                <label for="cloud">Cloud</label>
                                <input true-value="cloud" v-model="cloud" type="checkbox" name="cloud" value="cloud">
                            </div>
                        </div>
                        
                        <div class="col-12">
                            <input v-model="description" :style="{height:'100px',width:'400px'}" type="text-area" class="form-control" placeholder="Description" >
                        </div>
                    </div>
                    <button class="submit-btn" type="submit">Submit</button>
        </fieldset>
        
        </form>
</template>

<script>
    export default{
        data(){
            return{
                isActive:true
            }
        },
        methods:{
            onFormSubmit(){
                let formValues = {}
                formValues.name = this.name
                formValues.email = this.email
                formValues.mobile = this.mobile
                formValues.course = this.course
                formValues.description = this.description
                formValues.checkboxValues = [this.frontend,this.backend,this.cloud]

                this.$store.dispatch({
                    type:'updateFeedbackData',
                    value:formValues
                })
            }
        }
    }
</script>

<style scoped>
.form-container{
    position: relative;
    top: -180px;
    display: flex;
    left: 50%;
    transform: translate(-50%,50%);
    gap: 2px;
    padding: 20px;
    background-image: linear-gradient(45deg, black, transparent);
    border-radius: 4px;
    min-height: 600px;
    max-width: 600px;
    flex-direction: row;
}
.checkboxes{
    display: flex;
    gap: 40px;
}
.submit-btn{
    position: absolute;
    top: 116%;
    transform: translate(-50%, 50%);
    padding: 10px;
    width: 150px;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    background-image: linear-gradient(45deg, #594166, #4c07ff99);
    border-radius: 17px;
    border: 0px;
}
.submit-btn:hover{
    background-image: linear-gradient(45deg, #0758cf, #1b15cdbd);
}
</style>