<template>
    <main>
        <div class="row mt-5 m-0">
            <div class="col-xl-9 m-auto">
                <div class="searchBox float-right">
                    <input class="searchInput" type="search" v-model="filtre_name"  placeholder="Search : Programe Name">
                    <button class="searchButton">
                        <i class="fa fa-search">
                        </i>
                    </button>
                </div>
                <h2 class="mb-5 text-white">Programs</h2>
                <div class=" card my-4 p-2" v-for="data in programs" :key="data.id">
                    <div class="card-body row">
                        <div class="col-xl-3">
                            <span class="status" >{{data.status}}</span>
                            <b-avatar square size="9em" style="width: 100%;" :src="data.logo"></b-avatar>
                        </div>
                        <div class="col-xl-6 pt-4">
                            <h5 class="card-title ">
                                <span class="link"  @click="$router.push({name:'ProfilProgram',params:{id:data.id}})">{{data.name}}</span>
                            </h5>
                            <p class="card-text">{{data.company.name}} / <a href="#">{{data.company.website}}</a></p>
                            <ul class="row  list-inline m-0 p-0">
                                <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                    <p class="mb-0">Reports</p>
                                    <h6>{{data.reports_count}}</h6>
                                </li>
                                <li class="col-xl-4 col-md-6 col-sm-6 w-50 text-center">
                                    <p class="mb-0">Bounty Range</p>
                                    <h6>{{data.min_bounty+' - '+data.max_bounty}}</h6>
                                </li>
                                <li class="col-xl-3 col-md-6 col-sm-6 w-50 text-center">
                                    <p class="mb-0">Users</p>
                                    <h6>{{data.users_count}}</h6>
                                </li>

                            </ul>
                        </div>
                        <div class="col-xl-3 pt-4">
                            <div class="row mb-5">
                                <div class="text-center ml-auto">
                                    <h6>Begin At : {{data.begin_at}}</h6>
                                </div>
                                <div class="text-center ml-auto">
                                    <h6>Finish At : {{data.finish_at}}</h6>
                                </div>
                            </div>
                            <div class="row" v-if="!data.is_joined">
                                <button class="btn ml-auto" @click="join(data.id)">Get Started</button>
                            </div>
                            <div class="row" v-if="data.is_joined">
                                <button class="btn ml-auto" @click="$router.push({name:'NewReport',params:{id:data.id}})">Submit Report</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="text-center my-4">
                    <pagination :current_page=current_page :last_page_url=last_page_url
                              v-on:change-page="changePage"/>
                </div>
            </div>
        </div>
        <join :id="selected_id"/>
    </main>
</template>

<script>
    import Pagination from "@/components/structure/Pagination";
    import Join from "@/components/join";
    export default {
        name: "Programs",
        components: {Join, Pagination},
        data() {
            return {
                current_page: 1,
                programs: [],
                selected_id:'',
                last_page_url: 6,
                filtre_name:''

            }
        },
        created() {
            this.loadPrograms(1);
        },
        watch: {
            filtre_name: function () {
                this.filterSearch(1)
            },
        },


        methods: {
            changePage(page) {
                this.current_page = page;
                this.loadPrograms(page);
            },
            join(id){
                this.selected_id = id
                this.$root.$emit('bv::show::modal', 'join')
            },
            filterSearch(page) {
                this.$http
                    .post('programs/search?page=' + page,
                        {
                            name: this.filtre_name
                        })
                    .then(response => {
                        this.programs = response.data.data;
                        this.last_page_url = response.data.last_page;
                        this.current_page = response.data.current_page

                    })
                    .catch(error => {
                        console.log(error)

                    })
            },

            loadPrograms(page) {
                this.$http
                    .get('programs?page=' + page)
                    .then(response => {
                        console.log(response.data)
                        this.programs = response.data.data;
                        this.last_page_url = response.data.last_page;
                        this.current_page = response.data.current_page

                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>
<style scoped src="@/assets/styles/search.css"></style>
<style scoped>

    .card {
        background-color: #00142C;
        border-radius: 12px;
        min-height: 200px;
        color: white;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .status {
        position: relative;
        top: 35px;
        font-family: "Heebo";
        font-size: 16px;
        background-color: #2A2E51;
        color: white;
        padding: 4px;
        z-index: 1;
        border-radius: 0 12px 12px 0;

    }

    .btn {
        color: white;
        background-color: #0EC9AC;
    }

    .link {
        cursor: pointer;
    }

    .link:hover {
        color: #0EC9AC;
    }


</style>