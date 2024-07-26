<template>
  <div>
        <NavBar></NavBar>
        <router-view style="min-height: 75vh"></router-view>
      <footer class="footer">
          <div class="row p-2 m-0">
              <div class="col-6">{{ new Date().getFullYear() }} © ShellBoxes.</div>
              <div class="col-6 text-right">All Right Reserved</div>
          </div>
      </footer>

    </div>
</template>


<script>


    import NavBar from "./Navbar";
    import {helper} from "@/assets/helpers/getWeb3";
 export default {
        name: "Layout",
         components: {NavBar},

     mounted()
     {

         helper.initializeEthereumConnection()
     },
 }
</script>


<style scoped>
    .footer{

        color: white;
    }

</style>