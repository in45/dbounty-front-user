<template>
    <main>
        <div class="row mt-5 m-0">
            <div class="col-xl-9 m-auto">
                <div class="row  m-0">
                    <div class="col-xl-3 content border" style="border-radius: 12px 0 0  12px ;height: fit-content">
                        <div class="row m-0 py-3">
                            <i class="fa fa-edit fa-2x ml-auto" title="Edit Infos" role="button" v-b-modal.edit-profil></i>
                            <edit-profil :user_p="user" v-on:refresh="refreshUser"/>
                        </div>

                        <div class="text-center py-2">
                            <b-avatar class="outer"  :src="user.avatar" size="6rem" ></b-avatar>
                            <upload-avatar class="inner"  :url="'me/avatar'" v-on:refresh-avatar="refresh"/>
                        </div>
                        <h4 class="mb-2 text-center">{{user.first_name +' '+user.last_name }}</h4>
                        <h6 class="mb-4 text-center">@{{user.username}}</h6>
                        <div style="margin-left: 7%">
                            <p class="mb-2">{{user.email}}</p>
                            <p class="mb-2">{{user.phone}}</p>
                            <p class="mb-2">{{user.country}}</p>
                        </div>
                        <div class="d-flex my-3 justify-content-center">
                            <i class="fab fa-linkedin fa-2x m-2 "></i>
                            <i class="fas fa-globe fa-2x m-2 "></i>
                            <i class="fab fa-twitter fa-2x m-2 "></i>
                            <i class="fab fa-github fa-2x m-2 "></i>
                        </div>

                    </div>
                    <div class="col-xl-9 content border  mx-0 mb-4 p-2" style="border-radius: 0 12px 12px 0;">

                          <div class="row my-3 p-0 " v-if="user.username">
                              <div class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                  <b-avatar class="mb-2" variant="primary" :text="user.count_programs.toString()"></b-avatar>
                                  <h6>Programs</h6>
                              </div>
                              <div class="col-xl-3  col-md-6 col-sm-6 w-50 text-center">
                                  <b-avatar class="mb-2" variant="primary" :text="user.count_reports.toString()"></b-avatar>
                                  <h6>Reports</h6>
                              </div>
                              <div class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                  <b-avatar class="mb-2" variant="primary" :text="user.thanks.toString()"></b-avatar>
                                  <h6>Thanks</h6>
                              </div>
                              <div class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                  <b-avatar class="mb-2" variant="primary" :text="user.reputation.toString()"></b-avatar>
                                  <h6>Reputation</h6>
                              </div>


                          </div>
                            <b-tabs pills justified content-class="pt-3">
                                <b-tab  class="border-0" :active="$route.query && $route.query.n == '1'">
                                    <template v-slot:title>
                                        <span class=" d-sm-inline-block ">My Programs</span>
                                    </template>
                                    <div class="row mx-1 my-4 p-3">
                                        <div class="col-xl-4"  v-for="data of programs" :key="data.id">
                                            <div class="prog border mx-1 my-4 p-3" @click="$router.push({name:'ProfilProgram',params:{id:data.prog_id}})">
                                                <b-badge  class="p-1 float-right" variant="info">{{data.program.status}}</b-badge>
                                                <h6 class="aspect-name">{{data.program.name}}</h6>

                                            </div>
                                        </div>

                                    </div>
                                    <div class="text-center my-4">
                                        <pagination :current_page=current_page :last_page_url=last_page_url
                                                    v-on:change-page="getPrograms"/>
                                    </div>
                                </b-tab>
                                <b-tab  class="border-0">
                                    <template v-slot:title>
                                        <span class=" d-sm-inline-block ">Account</span>
                                    </template>
                                    <div>
                                    </div>
                                </b-tab>

                            </b-tabs>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
    import UploadAvatar from "../components/avatar/uploadAvatar";
    import EditProfil from "@/components/EditProfil";
    import Pagination from "@/components/structure/Pagination";

    export default {
        name: "Profile",
        components: {Pagination, EditProfil, UploadAvatar},
        data(){
            return{
                user:{
                    avatar:''
                },
                reports:[],
                programs:[],
                current_page:1,
                last_page_url:3
            }
        },
        created(){
            this.me()

            this.getPrograms()
        },
        methods:{
            refresh(img){
                this.user.avatar = img
            },

            refreshUser(u){
                this.user = u
            },
            me(){
                this.$http
                    .get('me')
                    .then(response => {
                        this.user = response.data;

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getPrograms(){
                this.$http
                    .get('me/programs')
                    .then(response => {

                        this.programs = response.data.data;
                        this.last_page_url = response.data.last_page;
                        this.current_page = response.data.current_page

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>

<style scoped>
    .content{
        background-color: #00142C;
        color: white;
    }
    /deep/ .nav-pills .nav-link{
        color: white;
        border-radius: 0;
    }
    /deep/ .nav-pills .nav-link.active{
        background-color:  #80b1ff;
    }
    /deep/ .nav-justified .nav-item{
        border: solid 0.5px #bbb;
        margin-right: 2px;
        margin-left: 2px;
    }
    /deep/ .tab-content {
        color: #ddd;
        padding: 12px;
    }
    .outer {
        margin: auto;
        position: relative;
    }

    .inner {
        position: relative;
        left: 38px;
        top: -30px;
        cursor:pointer;

    }
    i{
        cursor: pointer;
        color: white;
    }
    i:hover{
        color: #80b1ff;
    }
    .prio{
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .2);
        border-radius: 12px;
        border: 1px solid #242a32;
        background-color: #10233B;
    }
    .prio:hover{
        transform: scale(1.05);
    }
    .prog:hover{
        transform: scale(1.05);
        background-color: #0EC9AC;
        color: #00142C;
        cursor: pointer;
    }
</style>