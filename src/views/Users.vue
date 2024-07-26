<template>
    <main>
        <div class="row mt-5 m-0">
            <div class="col-xl-9 m-auto">
                <div class="searchBox float-right">
                    <input class="searchInput" type="search" v-model="filtre_username"  placeholder="Search : Username">
                    <button class="searchButton">
                        <i class="fa fa-search">
                        </i>
                    </button>
                </div>
                <h2 class="mb-5 text-white">Researchers</h2>
                <div class="my-3">

                    <table class=" tab table b-table text-center" role="table">
                        <thead>
                        <tr>

                            <th scope="col" @click="sort('username')" role="columnheader"
                                :aria-sort="(currentSort == 'username')?currentSortDir:none">Username
                            </th>
                            <th scope="col" @click="sort('reputation')" role="columnheader"
                                :aria-sort="(currentSort == 'reputation')?currentSortDir:none">Reputation
                            </th>
                            <th scope="col" @click="sort('country')" role="columnheader"
                                :aria-sort="(currentSort == 'country')?currentSortDir:none">Country
                            </th>
                            <th scope="col" @click="sort('thanks')" role="columnheader"
                                :aria-sort="(currentSort == 'thanks')?currentSortDir:none">Thanks
                            </th>

                            <th scope="col" @click="sort('count_reports')" role="columnheader"
                                :aria-sort="(currentSort == 'count_reports')?currentSortDir:none">Reports
                            </th>
                            <th scope="col" @click="sort('count_programs')" role="columnheader"
                                :aria-sort="(currentSort == 'count_programs')?currentSortDir:none">Programs
                            </th>


                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="data of users_sorted" :key="data.id">

                            <td data-label="Username" class="text-left">
                                <b-avatar :src="data.avatar" class="mx-2"/>
                                <router-link :to="{name:'ProfilUser',params:{id:data.id}}"> {{data.username}}</router-link>
                            </td>
                            <td data-label="Reputation"> {{data.reputation}}</td>
                            <td data-label="Country"> {{data.country}}</td>
                            <td data-label="Thanks">{{data.thanks}}</td>
                            <td data-label="Reports">{{data.count_reports}}</td>
                            <td data-label="Programs">{{data.count_programs}}</td>

                        </tr>


                        </tbody>
                    </table>
                    <div class="row  my-4">
                        <div class="col">
                            <div class="text-center">
                                <pagination :current_page=current_page :last_page_url=last_page_url
                                            v-on:change-page="changePage"/>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Pagination from "../components/structure/Pagination";

    export default {
        name: "Users",
        components: {Pagination},
        data() {
            return {
                none: 'none',
                filtre_username:'',
                current_page: 1,
                last_page_url: 6,
                currentSort: 'score',
                selectedType: '',
                selectedId: '',
                isLoadedComp: false,
                currentSortDir: 'descending',
                users: [ ],


            };
        },

        created() {

            this.loadUsers(1)
        },
        watch: {
            filtre_username: function () {
                this.filterSearch(1)
            },
        },
        methods: {

            loadUsers(page){
                this.$http
                    .get('users?page='+page)
                    .then(response => {
                        console.log(response.data)
                        this.users = response.data.data;
                        this.last_page_url = response.data.last_page;
                        this.current_page = response.data.current_page

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            sort: function (s) {
                //if s == current sort, reverse
                if (s === this.currentSort) {
                    this.currentSortDir = this.currentSortDir === 'ascending' ? 'descending' : 'ascending';
                }
                this.currentSort = s;
            },
            filterSearch(page) {
                this.$http
                    .post('users/search?page=' + page,
                        {
                            username: this.filtre_username
                        })
                    .then(response => {
                        this.users = response.data.data;
                        this.last_page_url = response.data.last_page;
                        this.current_page = response.data.current_page

                    })
                    .catch(error => {
                        console.log(error)

                    })
            },
            changePage(page) {
                this.loadUsers(page)
            },
        },
        computed: {
            users_sorted: function () {
                let users = this.users;
                return users.sort((a, b) => {
                    let modifier = 1;
                    if (this.currentSortDir === 'descending') modifier = -1;
                    if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                    if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                    return 0;
                });
            }
        },
    }
</script>
<style scoped src="@/assets/styles/table.css"></style>
<style scoped src="@/assets/styles/search.css"></style>
<style scoped>
    a:hover {
        color: #0EC9AC;
       text-decoration: none;
    }
</style>

