<template>
    <main class="row m-0 pt-4">
<div class="col-xl-10 m-auto ">
        <div class="content border-bottom mt-4 p-2">
            <div class="row p-2">
                <div class="col-xl-2 mb-2">
                    <b-avatar :src="program.logo" square size="9em" style="width: 100%;"></b-avatar>
                </div>
                <div class="col-xl-7">

                    <span class="status p-2 float-right">{{program.status}}</span>
                    <h5 class="card-title " ><span class="link" @click="$router.push({name:'ProfilProgram',params:{id:1}})">{{program.name}}</span></h5>
                    <p class="card-text">{{program.company.name}} / <a href="#">{{program.company.website}}</a></p>
                    <ul class="row  list-inline m-0 p-0">
                        <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                            <p class="mb-0">Reports</p>
                            <h6>{{program.reports_count}}</h6>
                        </li>
                        <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                            <p class="mb-0">Users</p>
                            <h6>{{program.users_count}}</h6>
                        </li>
                        <li class="col-xl-4 col-md-6 col-sm-6 w-50 text-center">
                            <p class="mb-0">Bounty Range</p>
                            <h6>{{program.min_bounty+' - '+program.max_bounty}}</h6>
                        </li>

                    </ul>
                </div>
                <div class="col-xl-3 p-0 border-left">
                    <p class="m-2">Begin At : {{new Date(program.begin_at).toLocaleString()}}</p>
                    <p class="m-2">Finish At : {{new Date(program.finish_at).toLocaleString()}}</p>
                    <b-badge pill class="m-2" variant="info" v-if="program.managed_by_dbounty">Managed By DBounty</b-badge><br/>
                    <b-badge pill class="m-2" variant="info">{{program.type}}</b-badge>
                </div>
            </div>
        </div>
        <div class="row content mx-0 mb-4 p-2" style="border-radius: 0 0 12px 12px;">
            <div class="col-xl-9">
                <b-tabs pills justified content-class="pt-3">
                    <b-tab  class="border-0">
                        <template v-slot:title>
                            <span class=" d-sm-inline-block ">Program Details</span>
                        </template>
                        <div role="tablist">
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" role="tab" v-b-toggle.info style="cursor: pointer">
                                    <h6 >
                                        <i class="fa fa-chevron-circle-right text-white  mr-3"></i>
                                        <strong>Program Info</strong></h6>
                                </b-card-header>
                                <b-collapse id="info" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body v-if="program.description">
                                        <b-card-text v-html="JSON.parse(program.description).info">
                                            {{JSON.parse(program.description).info}}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" role="tab" v-b-toggle.rules style="cursor: pointer">
                                    <h6>   <i class="fa fa-chevron-circle-right text-white  mr-3"></i><strong>Program Rules</strong></h6>
                                </b-card-header>
                                <b-collapse id="rules" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text v-html="program.rules">
                                            {{program.rules}}

                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" role="tab" v-b-toggle.scopes style="cursor: pointer">
                                    <h6>   <i class="fa fa-chevron-circle-right text-white  mr-3"></i> <strong>Program Scopes</strong></h6>
                                </b-card-header>
                                <b-collapse id="scopes" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text v-html="program.scopes">
                                            {{program.scopes}}
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>

                    </b-tab>
                    <b-tab  class="border-0">
                        <template v-slot:title>
                            <span class=" d-sm-inline-block ">Terms & Conditions</span>
                        </template>
                        <div v-html="program.conditions">
                            {{program.conditions}}
                        </div>
                    </b-tab>
                    <b-tab  class="border-0">
                        <template v-slot:title>
                            <span class=" d-sm-inline-block ">Hall Of Fame</span>
                        </template>
                        <div>
                            <table class="table table-centered table-nowrap text-center text-white">
                                <thead>
                                <tr>
                                    <th scope="col" >#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Thanks</th>
                                    <th scope="col" >Country</th>
                                    <th scope="col" >Reputation</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="data in users" v-bind:key="data.user_address">

                                    <td data-label="#">
                                        <b-avatar :src="data.user.avatar" ></b-avatar>
                                    </td>
                                    <td data-label="Username ">
                                        <span> @{{data.user.username}}</span><br/>
                                        <span class="px-1" style="border-radius: 4px;border: 1px solid #32394e;">{{data.user.public_address}}</span>
                                    </td>
                                    <td data-label="Thanks "> {{data.thanks}}</td>
                                    <td data-label="country" > {{data.user.country}}</td>
                                    <td data-label="Reputation" > {{data.user.reputation}}</td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-tab>

                        </b-tabs>
            </div>
            <div class="col-xl-3 reward">

                <div class="row my-3 mx-0" >
                    <h4 class="col-3  text-center">Rewards</h4>
                    <button class="col-6  status ml-auto" v-if="program.is_joined" @click="$router.push({name:'NewReport',params:{id:program.id}})">Submit Report</button>
                </div>

                <div class="card-body" v-if="program.description">
                    <div class="row m-0">
                        <span class="col-4">P1</span>
                        <p class="col-7 p-0 text-center prio" >{{JSON.parse(program.description).rewards.p1}}</p>
                    </div>
                    <div class="row m-0">
                        <span class="col-4">P2</span>
                        <p class="col-7 p-0 text-center prio" >{{JSON.parse(program.description).rewards.p2}}</p>
                    </div>
                    <div class="row m-0">
                        <span class="col-4">P3</span>
                        <p class="col-7 p-0 text-center prio" >{{JSON.parse(program.description).rewards.p3}}</p>
                    </div>
                    <div class="row m-0">
                        <span class="col-4">P4</span>
                        <p class="col-7 p-0 text-center prio" >{{JSON.parse(program.description).rewards.p4}}</p>
                    </div>
                    <div class="row m-0">
                        <span class="col-4">P5</span>
                        <p class="col-7 p-0 text-center prio" >{{JSON.parse(program.description).rewards.p5}}</p>
                    </div>
                    <p class="m-2">Range Response : {{program.range_response}}</p>
                </div>
            </div>
        </div>
</div>
    </main>
</template>

<script>

    export default {
        name: "ProfilProgram",
        data() {
            return {
                program:{
                    name:'',
                    company:{}
                },
                users:[],
            }
        },
        created(){
            this.loadProgram()
            this.getUsers()

        },
        methods:{

            loadProgram(){
                this.$http
                    .get('programs/'+this.$route.params.id)
                    .then(response => {

                        this.program = response.data;
                        this.disable =this.program.is_reported
                        if(this.program.is_reported) this.getMyReport()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            getUsers(){
                this.$http
                    .get('programs/'+this.$route.params.id+'/users')
                    .then(response => {

                        this.users = response.data;

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

        }
    }
</script>
<style scoped  src="@/assets/styles/table.css"></style>
<style scoped>
    .content{
        background-color: #00142C;
        border-radius: 12px 12px 0 0;
        min-height: 200px;
        color: white;
    }
    .reward{
        border: solid 0.5px #bbb;
        height: fit-content;
    }
    .prio{
        border: solid 0.5px #bbb;
    }
    .status{
        color: white;
        background-color: #0EC9AC;
        border-radius: 4px;
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
    }

    table td{
        padding: 8px;
        color: #ddd;
    }
    .reward{
        border: solid 0.5px #bbb;
        height: fit-content;
    }
    .card{
        background-color: inherit;
    }
    .card-header{
        border: #ffffff;
    }
    /deep/.ql-toolbar.ql-snow{
        background-color: #fff;
    }
    /deep/ .ql-formats{
        margin: 0!important;
    }
</style>