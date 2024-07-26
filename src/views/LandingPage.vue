<template>
    <main>
        <header class="header sticky-top">
            <b-navbar toggleable="lg" class="nav p-4">
                <b-navbar-brand @click="$router.push({name:'LandingPage'})" class="ml-5 mr-5" style="cursor: pointer">
                    <img src="@/assets/images/logo.svg" class="mr-3" width="70">
                    <span class="my-auto" style="color: #c2e6ea">DBounty</span>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>


                <b-collapse id="nav-collapse" is-nav>

                    <b-navbar-nav class=" w-80 m-auto" >

                        <b-nav-item href="#about">About Us</b-nav-item>
                        <b-nav-item href="#services">Services</b-nav-item>
                        <b-nav-item href="#company">Company</b-nav-item>
                        <b-nav-item href="#hunter">Researchers</b-nav-item>
                        <b-nav-item href="#contact">Contact</b-nav-item>

                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item :to="{name:'Login'}"  right>Login</b-nav-item>
                    </b-navbar-nav>


                </b-collapse>


            </b-navbar>
        </header>

        <section class="section1 row m-0" v-b-scrollspy>
            <div class="col-xl-10 m-auto py-5">

                <div class="row align-items-center content">

                    <div class="col-xl-7">
                        <span class=" hero-title ">
                            <typical
                                class="typicalWrapper mb2 hero-title"
                                :steps="['Platform Bug Bounty', 1000, 'CrowdSourced', 500,'Bug Bounty', 1000]"
                                :loop="Infinity"
                                :wrapper="'h1'"
                        ></typical>
                            With Reliable Service
                        </span>


                        <p class="font-size-24  my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod enim tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip
                        </p>

                    </div>
                    <div class="col-xl-5 ">
                        <img src="../assets/images/security.png" width="100%"/>
                    </div>


                </div>
            </div>

        </section>
        <section class="section row m-0">
            <div class="col-xl-6 m-auto sec  py-4">
                <div class="row m-0">
                    <div class="col-xl-5 card" id="Company">
                        <div class="card-body text-center">
                            <h4 class="mt-2 mb-4">
                                For Company
                            </h4>
                            <button class="btn" @click="$router.push({name:'Company'})">Start</button>
                        </div>
                    </div>
                    <div class="col-xl-5 card ml-auto" id="hunter">
                        <div class="card-body text-center">
                            <h4 class="mt-2 mb-4">
                                For Researcher
                            </h4>
                            <button class="btn" @click="$router.push({name:'Register'})">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Demo content-->
        <section class="py-5 row m-0 section" id="services">
            <div class="col-xl-9 m-auto">
                <h2 class="text-center mb-4">Services</h2>
                <div class="row justify-content-center">
                    <div class="col-xl-5 m-2 card">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <img src="../assets/images/icon-certified-industry.png" class="mr-3" width="50"/>
                                <h5 class="title my-auto">Penetration Testing </h5>
                            </div>
                            <p class="mt-2">Crowdsource human intelligence at scale to discover high-risk vulnerabilities faster.</p>
                        </div>
                    </div>
                    <div class="col-xl-5 m-2 card">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">

                                <img src="../assets/images/icon-locker.png" class="mr-3" width="50"/>

                                <h5 class="my-auto title">Bug Bounty</h5>
                            </div>
                            <p class="mt-2">Take a proactive, pay-for-results approach by actively engaging with the Crowd.</p>

                        </div>
                    </div>
                    <div class="col-xl-5 m-2 card">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">

                                <img src="../assets/images/icon-cloud.png" class="mr-3" width="50"/>
                                <h5 class="my-auto title">Vulnerability Disclosure</h5>
                            </div>
                            <p class="mt-2">Meet compliance and reduce risk with a framework to receive vulnerabilities</p>


                        </div>
                    </div>
                    <div class="col-xl-5 m-2 card">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">

                                <img src="../assets/images/icon-asser2x.png" class="mr-3" width="50"/>

                                <h5 class="my-auto title">Attack Surface Management</h5>
                            </div>
                            <p class="mt-2">Find, prioritize, and manage more of your unknown attack surface</p>


                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 section" id="about">
            <div class="container py-5 text-center">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2>Why DBounty ?</h2>
                        <p class="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 section" id="contact">
            <div class="container py-5 text-center">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2 class=" mb-4">Frequently Asked Questions</h2>
                        <div class="tabs">
                            <div class="tab">
                                <input type="checkbox" id="chck1">
                                <label class="tab-label" for="chck1">WHAT IS BLOCKCHAIN?</label>
                                <div class="tab-content">
                                    A blockchain is the technology on which cryptocurrency is based. A blockchain is
                                    basically a continuously growing list of records called blocks that are linked and
                                    secured using cryptography.
                                </div>
                            </div>
                            <div class="tab">
                                <input type="checkbox" id="chck2">
                                <label class="tab-label" for="chck2">WHAT IS CRYPTOCURRENCY?</label>
                                <div class="tab-content">
                                    A cryptocurrency is a digital asset designed to work as a medium of exchange that
                                    uses cryptography to secure its transactions, to control the creation of additional
                                    units, and to verify the transfer of assets.
                                </div>
                            </div>
                            <div class="tab">
                                <input type="checkbox" id="chck3">
                                <label class="tab-label" for="chck3">WHAT EXACTLY IS YOUR TOKEN?</label>
                                <div class="tab-content">
                                    Token is a community of people who want to mine cryptocurrency profitably by
                                    combining resources to achieve savings on equipment and ultra-low-cost electricity.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </main>
</template>

<script>
    import typical from 'vue-typical'

    export default {
        name: "LandingPage",
        components: {typical}
    }
</script>

<style scoped>


    main {
        background-image: url('../assets/images/landingbackground.jpg') !important;
        background-color: rgba(0, 20, 44, 0.8);
        background-position: 0px 79%;
        background-repeat: no-repeat;
        background-size: cover;
        color: #eeeeee;
    }

    .navbar-light .navbar-brand, .navbar-light .navbar-nav .nav-link {
        color: #eeeeee !important;
        font-size: 16px;
        margin-right: 20px;
        text-align: center;
    }

    .navbar-brand {
        font-size: 24px !important;
    }

    /deep/.nav-link:hover, .typicalWrapper, .title {
        color: #0EC9AC!important;
    }

    .show > .btn-secondary.dropdown-toggle {
        background-color: inherit !important;
        border-color: inherit !important;
    }

    .hero-title {
        font-size: 40px;
        font-weight: 500;
        line-height: 1.2em;
    }

    .header, .section1 {
        background-color: rgba(0, 20, 44, 0.8);
    }

    .section {
        background-color: rgb(0, 20, 44);
    }

    input {
        position: absolute;
        opacity: 0;
        z-index: -1;
    }

    /* Accordion styles */
    .tabs {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
    }

    .tab {
        width: 100%;
        color: white;
        overflow: hidden;
    }

    .tab-label {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background: #10233B;
        font-weight: bold;
        cursor: pointer;
        /* Icon */
    }

    .tab-label:hover {
        background: #011936;
    }

    .tab-label::after {
        content: "\276F";
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all 0.35s;
    }

    .tab-content {
        max-height: 0;
        padding: 0 1em;
        color: #828FA0;
        border:solid 1px  #2c3e50;
        background-color: inherit;
        transition: all 0.35s;
    }

    .tab-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        background: #2c3e50;
        cursor: pointer;
    }

    .tab-close:hover {
        background: #1a252f;
    }

    input:checked + .tab-label {
        background: #011936;
    }

    input:checked + .tab-label::after {
        transform: rotate(90deg);
    }

    input:checked ~ .tab-content {
        max-height: 100vh;
        margin-bottom: 12px;
        padding: 1em;
    }

    .sec {

        position: relative;
        bottom: 100px;
        z-index: 1;
    }

    .card {
        background-color: #011936;
        border-radius: 12px;
        min-height: 90%;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .btn {
        color: #F9FEFF;
        background-color: #0EC9AC;
        border-radius: 5px 5px 5px 5px;
        padding: 15px 30px 15px 30px;
    }

    p {
        color: #828FA0;
    }

</style>