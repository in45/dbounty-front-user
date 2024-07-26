<template>
    <b-modal id="edit-profil" centered size="lg" :title="'Profil // '+user.username" ref="modal"  title-class="font-20"
             hide-footer hide-header-close @shown="me" @hide="typesubmit=false">
        <div class="row p-4">
            <h6 class="w-100 text-warning text-center my-3 mx-auto">{{user.public_address}}</h6>
            <div class="col-xl-5">

                <div class="row mb-3">
                    <div class="col-xl-4 pt-2">First Name</div>
                    <div class="col-xl-8">
                        <b-form-input type="text" v-model="user.first_name" placeholder="change your First Name"></b-form-input>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-xl-4 pt-2">Last Name</div>
                    <div class="col-xl-8">
                        <b-form-input type="text" v-model="user.last_name" placeholder="change your Last Name"></b-form-input>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-xl-4 pt-2">Email</div>
                    <div class="col-xl-8">
                        <b-form-input type="email" v-model="user.email" placeholder="change your email"
                                      :class="{ 'is-invalid': typesubmit && $v.user.email.$error }"></b-form-input>
                        <div v-if="typesubmit && $v.user.email.$error" class="invalid-feedback ">
                            <span v-if="!$v.user.email.email" class="text-danger">Email Invalid !</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-7">
                <div class="row mb-3">
                    <div class="col-xl-5 pt-2">Country</div>
                    <div class="col-xl-7">
                        <b-form-input type="text" v-model="user.country" placeholder="change your First Name"></b-form-input>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-xl-5 pt-2">Phone</div>
                    <div class="col-xl-7">
                        <b-form-input type="text" v-model="user.phone" placeholder="change your Last Name"></b-form-input>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-xl-5 pt-2">Github Username</div>
                    <div class="col-xl-7">
                        <b-form-input type="text" v-model="user.username_github" placeholder=" Github Username"></b-form-input>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-xl-5 pt-2">Linkedin Username</div>
                    <div class="col-xl-7">
                        <b-form-input type="text" v-model="user.username_linkedin" placeholder=" Linkedin Username"></b-form-input>
                    </div>
                </div>

            </div>

        </div>
        <b-button class="m-0 text-center btn-info w-100" style="border-radius:0 0 20px 20px;" @click="edit">
            Edit Profil
        </b-button>
    </b-modal>
</template>

<script>

    import {email} from "vuelidate/lib/validators";
    export default {
        name: "EditProfil",
        props:['user_p'],
        data(){
            return{
                typesubmit: false,
                 user: {}
            }
        },
        validations: {
            user:{
                email: {email},
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
                this.edit();

            },
            me(){
               this.user = { ...this.user_p}
            },

            edit() {
                this.$http
                    .post('edit', this.user)
                    .then(response => {
                        this.user = response.data;
                        this.$store.commit('me',response.data)
                        this.$emit('refresh',response.data)
                        this.$alertify.success("L'opération a réussi :)")
                    })
                    .catch(error => {
                            console.log(error)
                        }
                    )
            },

        }


    }
</script>

<style scoped  src="@/assets/styles/popup.css"></style>