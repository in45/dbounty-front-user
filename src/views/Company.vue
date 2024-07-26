<template>
    <div class="row mr-0" style="margin-top: 12vh;">
        <div class="col-xl-5 m-auto ">
            <div class="card">
                <div class="card-header text-center">
                    <img src="@/assets/images/logo.svg"  width="100">

                </div>
                <div class="card-body">
                    <form>
                        <div class="row">

                            <div class="col-xl-9 m-auto font-size-14">
                                <form id="form" method="POST" @submit.prevent="handleSubmit">
                                    <div class="form-group mt-3 mb-0">
                                        <label class="pb-2">Company Name :</label>
                                        <b-form-input type="text" v-model="company.name" placeholder="Enter your Company Name"
                                                      :class="{ 'is-invalid': typesubmit && $v.company.name.$error }"></b-form-input>
                                        <div v-if="typesubmit && $v.company.name.$error" class="invalid-feedback ">
                                            <span v-if="!$v.company.name.required" class="text-danger">The Value is required !</span>
                                        </div>

                                    </div>
                                    <div class="form-group mt-3 mb-0">
                                        <label class="pb-2">Email :</label>
                                        <b-form-input type="text" v-model="company.email" placeholder="Enter your Email"
                                                      :class="{ 'is-invalid': typesubmit && $v.company.email.$error }"></b-form-input>
                                        <div v-if="typesubmit && $v.company.email.$error" class="invalid-feedback ">
                                            <span v-if="!$v.company.email.required" class="text-danger">The Value is required !</span>
                                            <span v-if="!$v.company.email.email"
                                                  class="text-danger">Invalid Email !</span>
                                        </div>

                                    </div>
                                    <div class="form-group my-3 mb-0">
                                        <label class="pb-2">Phone Number:</label>
                                        <b-form-input type="text" v-model="company.phone" placeholder="Enter your Company Phone"></b-form-input>
                                    </div>

                                    <div class="my-3">
                                        <input type="submit" class="btn btn-block"  value="Submit"/>
                                    </div>

                                </form>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {email, required} from "vuelidate/lib/validators";

    export default {
        name: "Company",
        data() {
            return {
                typesubmit: false,
                company: {
                    name: '',
                    phone: '',
                    email: '',
                },

            }
        },
        validations: {
            company: {
                email: {required, email},
                name: {required},
            },

        },
        methods: {

            handleSubmit() {
                this.typesubmit = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                this.login();

            },


            login() {
                this.$http
                    .post('request_company', this.company)
                    .then(() => {
                        this.$alertify.success("Success :)")
                        this.$router.push({'name': 'LandingPage'})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>


    .card {
        background-color: #10233B;
        border-radius: 20px !important;
    }

    .card-header h1 {
        margin: auto;
        font-size: 30px;
        font-weight: bold;

    }

    label {
        color: white;
    }
.btn{
    background-color: #0EC9AC;
    color: white
}

    input[type="text"], input[type="password"] {
        border: 0;
        background-color: white;
        color: #222831;
        border-bottom: solid 1px #0072bc;
        padding: 10px 10px;
    }

    i {
        cursor: pointer;
        float: right;
        position: relative;
        top: 32px;
        color: black;
        margin-left: 4px;
    }


</style>