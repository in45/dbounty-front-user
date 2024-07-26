<template>
    <b-navbar toggleable="lg" class="nav">
        <b-navbar-brand @click="$router.push({name:'LandingPage'})" class="ml-5 mr-5" style="cursor: pointer">
            <img src="@/assets/images/logo.svg" class="mr-3" width="70">
            <span class="my-auto" style="color: #c2e6ea">DBounty</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class=" w-80 ">
                <b-nav-item  :to="{name: 'Dashboard'}" >Dashboard</b-nav-item>
                <b-nav-item  :to="{name: 'Programs'}"  >Programs</b-nav-item>
                <b-nav-item  :to="{name: 'Users'}">Researchers</b-nav-item>
                <b-nav-item  :to="{name: 'Hacktivity'}">Hacktivity</b-nav-item>
                <b-nav-item  :to="{name: 'Messages'}">Messages</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <b-avatar></b-avatar>
                    </template>
                    <b-dropdown-item :to="{name: 'Profile' }">Profile</b-dropdown-item>
                    <b-dropdown-item :to="{name: 'Profile', query: { n: '1' } }">My Programs</b-dropdown-item>
                    <b-dropdown-item :to="{name: 'Reports'}">My Reports</b-dropdown-item>
                    <b-dropdown-item href="#" @click="logout">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>



</template>

<script>

    import Vue from 'vue'
    export default {
        name: "NavBar",
        data(){
            return{
                windowWidth: window.innerWidth,
                isOpen:false,
            }

        },
        methods:{
            logout(){
                this.$http
                    .post('logout')
                    .then(() => {
                        localStorage.removeItem("token")
                        delete Vue.prototype.$http.defaults.headers.common['Authorization']
                        this.is_login=false
                        this.$router.push({name:'Login'})

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            }
        }

</script>
<style scoped>

    .navbar-light .navbar-brand ,.navbar-light .navbar-nav .nav-link{
        color: #eeeeee!important;

        font-family: "Heebo";
       font-weight: 600;
       line-height: 1.5em;
        text-align: center;
    }
    .nav-link.router-link-exact-active.router-link-active{
        color:  #0EC9AC!important;
        border-bottom: 2px solid  #0EC9AC;
    }

    /deep/ .nav-item.nav-item.nav-item a:hover {
        color: #0EC9AC!important;
    }
    /deep/ .nav-link.active {
        color:  #0EC9AC!important;
    }
    /deep/.navbar,.nav{
        background: #011936!important;

    }
    /deep/ .dropdown-toggle::after{
        display: none!important;
    }


</style>