<template>
    <main>
        <div class="row  m-0">
            <div class="col-xl-10 m-auto">
        <h2 class="my-5 text-white">  <b-avatar :src="user.avatar" class="mr-2" size="lg" :alt="user.username"></b-avatar> {{user.public_address}}</h2>
        <div class="row m-0">
            <div class="col-xl-5">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-4">
                            <h4 class="col-9">Infos // @{{user.username}}</h4>
                        </div>
                        <h6 class="my-3">{{user.first_name + ' ' + user.last_name}}</h6>
                        <h6 class="my-3"><i class="fa fa-at mr-3"></i>{{user.email}}</h6>
                        <h6 class="my-3"><i class="fa fa-phone mr-3"></i>{{user.phone}}</h6>
                        <h6 class="my-3"><i class="flaticon-ethereum-1 mr-3"></i>{{user.reputation}}</h6>
                        <p>{{user.country}}</p>
                    </div>
                </div>
                <div class="card mt-4">
                    <div class="card-body">
                        <h4 class="mb-2">Programs</h4>
                        <table class="table table-centered table-nowrap text-center text-white" v-if="programs.length">
                            <thead>
                            <tr >
                                <td></td>
                                <td>name</td>
                                <td>Join At</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="data of programs" :key="data.id">
                                <td data-label="#">
                                    <b-avatar :src="data.program.logo"></b-avatar>
                                </td>
                                <td data-label="Name ">{{data.program.name}}</td>
                                <td data-label="Join At " >{{new Date(data.created_at).toLocaleString()}}</td>
                            </tr>
                            </tbody>
                        </table>
                        <p class="my-2 text-muted text-center m-auto" v-else-if="loadPrograms"> No Data Found</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-7">
                <div class="card">
                    <div class="card-body">
                        <h4 class="mb-4">Reports</h4>
                        <div class="row mx-1 my-4 p-3 prio " v-if="reports.length">
                        <div  v-for="data of reports" :key="data.id" class="col-xl-12 ">

                                <p class="text-muted float-right" style="font-size: 11px">{{data.time_diff}}</p>
                                <h6 class="aspect-name ">{{data.title}}</h6>
                                <h6 class="text-muted " v-if="data.vuln_id">{{data.vuln.name}}</h6>
                                <h6 class="text-muted " v-else>{{data.vuln_name}}</h6>
                                <b-badge  class="p-1 float-right" variant="info">{{data.status}}</b-badge>

                        </div>
                        </div>
                        <p class="my-2 text-muted text-center m-auto" v-else-if="loadReports"> No Data Found</p>
                    </div>

                </div>
            </div>
        </div>
            </div>
        </div>
    </main>
</template>

<script>

    export default {
        name: "ProfilUser",
        data(){
            return{
                user:{},
                reports:[],
                programs:[],
                loadReports:false,
                loadPrograms:false
            }
        },
        created(){
            this.loadData()
            this.getPrograms()
            this.getReports()

        },
        methods:{
            loadData(){
                this.$http
                    .get('users/'+this.$route.params.id)
                    .then(response => {
                        console.log(response.data)
                        this.user = response.data;

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getReports(){
                this.$http
                    .get('users/'+this.$route.params.id+'/reports')
                    .then(response => {
                        console.log(response.data)
                        this.reports = response.data;
                        this.loadReports = true

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getPrograms(){
                this.$http
                    .get('users/'+this.$route.params.id+'/programs')
                    .then(response => {
                        console.log(response.data)
                        this.programs = response.data;
                        this.loadPrograms = true


                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>

<style scoped>
    .prio{
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .2);
        border-radius: 12px;
        border: 1px solid #242a32;
        background-color: #011936;
    }
    .card-body {
        font-size: 14px;
    }
    .card{
        background-color: #00142C;
        color: white;
        border: 1px solid #aaa;
        border-radius: 8px;
    }
</style>