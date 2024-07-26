<template>
    <main>

        <div class="row m-5">
            <h2 class="text-white col-xl-11 ">New Report</h2>
            <button @click="addReport('New')" id="deploy" class=" col-xl-1" >Submit Report</button>
        </div>
        <div class="row m-0">
            <div class="col-xl-6 mx-0 ">
                <div class="card m-2">
                    <div class="form-group mt-3 mb-0" >
                        <label class="pb-2"> Vulnerability Title :</label>
                        <b-form-input type="text" placeholder="Add your vulnerability" v-model="my_report.vuln_name"></b-form-input>
                    </div>
                    <div class="form-group mt-3 mb-0" >
                        <label class="pb-2"> Target :</label>
                        <b-form-input placeholder="Add your Target" v-model="my_report.target" ></b-form-input>
                    </div>
                    <div class="form-group mt-3 mb-0" >
                        <label class="pb-2" > Vulnerability Category </label>
                        <b-form-input list="browsers"  name="browser" v-model="my_report.vuln.name"  id="browser"></b-form-input>
                        <datalist id="browsers">
                            <option v-for="c in categories" :key="c.id" :value="c.title">{{c.title}}</option>
                        </datalist>
                    </div>
                    <div class="form-group my-3 ">
                        <label class="pb-2"> Severity Level :</label>
                        <calcul-c-v-s-s3 v-on:severity="changeSeverity"/>
                    </div>
                </div>



            </div>

            <div class="col-xl-6 mx-0 ">
                <div class="card m-2">
                    <div class="form-group my-3 ">
                        <label class="pb-2"> Vulnerability Details :</label>
                        <vue-editor v-model="my_report.vuln_details" ></vue-editor>
                    </div>
                    <div class="form-group my-3 ">
                        <label class="pb-2"> Validations Steps :</label>
                        <vue-editor v-model="my_report.validation_steps"></vue-editor>
                    </div>
                    <div class="form-group my-3 ">
                        <label class="pb-2">File Upload :</label>
                        <b-form-file :multiple="true" ref="file" :placeholder="my_report.file_upload"></b-form-file>
                    </div>
                    <p class="mt-3 text-muted" >By clicking 'Submit Report' or 'Publish', you indicate that you have read the Program info, agree to the Terms & Conditions and acknowledge that you have read Privacy Policy</p>
                    <button  class="btn btn-secondary w-25"  @click="addReport('saved')">Save</button>

                </div>



            </div>


        </div>


    </main>
</template>

<script>

    import {VueEditor} from "vue2-editor";
    import {vuln_Category} from "@/assets/helpers/vuln_category";
    import CalculCVSS3 from "@/components/calculCVSS3";

    export default {
        name: "NewReport",
        components: {
            CalculCVSS3,
            VueEditor
        },
        data() {
            return {
                submitted : false,
                my_report:{
                    vuln:{},
                },
                categories:vuln_Category,
            }
        },

        methods: {
            changeSeverity(s){
                this.my_report.severity = s.toLowerCase()
            },
            addReport(status) {
                let formData = new FormData();
                formData.append('vuln_name', this.my_report.vuln_name);
                formData.append('status', status);
                formData.append('target', this.my_report.target);
                formData.append('severity', this.my_report.severity);
                formData.append('vuln_details', this.my_report.vuln_details);
                formData.append('validation_steps', this.my_report.validation_steps);
                if(this.$refs.file.files.length)formData.append('file_upload', this.$refs.file.files[0]);
                this.$http
                    .post('programs/'+this.$route.params.id+'/submit',formData)
                    .then(response => {
                        console.log(response)
                        this.$alertify.success(" success")
                        this.$router.push({name:'Reports'})
                    })
                    .catch(error => {
                        this.showError(Object.values(error.response.data.errors))
                    })
            },
            showError(e) {
                for (var i = 0; i < e.length; i++) {
                    this.$alertify.error(e[i][0]);
                }

            }
        },

    };
</script>

<style scoped>
    .card {
        color: white;
        margin-bottom: 30px;
        border-radius: 12px;
        padding :30px;
        height: fit-content;
        background-color:#00142C;
        font-family: Montserrat;
        font-style: normal;
        font-size: 14px;
        line-height: 30px;

    }
    #deploy{
        background-color: #ECBD34;
        color: #2A2E51;
        font-size: 12px;
        border-radius: 5px;
        line-height: 23px;
        font-weight: bold;
    }
    /deep/ .quillWrapper{
        background-color: white;
        color: black;
    }
    /deep/.ql-formats{
        margin:0!important;
    }
</style>