<template>
    <main>

        <div class="row mt-5 m-0">
            <div class="col-xl-8 m-auto">
                <h2 class="mb-4 text-white">Hacktivity</h2>
               <div class=" row my-2 mx-0 my-4 p-2 prio" v-for="data of hacktivities" :key="data.id">



            <div class="col-xl-5  border-right m-auto">
                <b-avatar  size="lg" class="mr-2" :src="data.user.avatar" :title="data.user.username"></b-avatar>
                <router-link class="address" :to="{name:'ProfilUser',params:{id:data.user_id}}">@{{data.user.username}}</router-link>
            </div>
            <div class="col-xl-7 m-auto">
                <div class="float-right">
                    <b-badge class="p-1" pill variant="info">{{data.status}}</b-badge>
                </div>
                <h6 class="mt-1">{{data.title}}</h6>
                <h6 v-if="data.vuln_id">{{data.vuln.name}}</h6>
                <h6  v-else>{{data.vuln_name}}</h6>
                <p>{{new Date(data.created_at).toLocaleString()}}</p>
            </div>
        </div>
                <div class="row  my-4">
                    <div class="col">
                        <div class="text-center">
                            <pagination :current_page=current_page :last_page_url=last_page_url
                                        v-on:change-page="getHacktivities"/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </main>
</template>

<script>

    import Pagination from "@/components/structure/Pagination";
    export default {
        name: "Hacktivity",
        components: {Pagination},
        created() {
            this.getHacktivities(1)
        },
        data(){
            return{
                hacktivities:[],
                current_page: 1,
                last_page_url: 6,
            }
        },
        methods: {
            getHacktivities(page) {
                this.$http
                    .get('reports?page=' + page)
                    .then(response => {
                        console.log(response.data)
                        this.hacktivities = response.data.data;
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

<style scoped>
    .prio{
        border-radius: 4px;
        border:1px solid #ffffff;
        background-color: #00142C;
        color: white;
    }
    a:hover{
        text-decoration: none;
    }
    .link:hover{
        color: #0EC9AC;
        cursor: pointer;
    }
</style>