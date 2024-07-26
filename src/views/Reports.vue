<template>
    <main class="row m-0 pt-4">
        <div class="col-xl-10 m-auto ">
            <div class="card my-5">
                <div class="row m-0">
                    <div class="col-xl-4 col-md-4 border-right border-bottom">
                        <div class="row m-0 pt-2 pb-3">
                            <div class="col-5  ml-auto">
                                <b-form-select v-model="filtre_status" size="sm">
                                    <b-form-select-option value="" disabled selected>Status</b-form-select-option>
                                    <b-form-select-option v-for="s in status" :value="s" :key="s">{{s}}</b-form-select-option>
                                    <b-form-select-option value="">all</b-form-select-option>
                                </b-form-select>
                            </div>
                        </div>
                        <simplebar style="max-height: 600px;min-height: 600px;padding-right: 12px;padding-left: 12px;" data-simplebar-auto-hide="false">
                            <div  v-if="reports.length && is_load">
                                <div class="card report  mb-3"  :class=" {'selected': selected_report.id == data.id}" v-for="data in reports" v-bind:key="data.id" @click="selected_report = data">
                                    <div class="card-body ">
                                        <h6 class="link  font-size-13 link">{{data.title}}</h6>
                                        <h6 class="link text-truncate font-size-13 link">@{{data.user.username}}</h6>
                                        <p class="text-muted mb-0" v-if="data.vuln_id">{{data.vuln.name}}</p>
                                        <p class="text-muted mb-0" v-else>{{data.vuln_name}}</p>
                                        <b-badge class="float-right" variant="info">{{data.status}}</b-badge>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                        <div class="text-center m2-4">
                            <pagination :current_page=current_page :last_page_url=last_page_url
                                        v-on:change-page="getReports" v-if="last_page_url>1"/>
                        </div>
                        <p class="text-center text-muted my-2 w-100"  v-if="reports.length == 0 && is_load">No data found</p>
                    </div>
                    <div class="col-xl-8 col-md-8 py-2">
                        <div class="card " style="height: 100%">
                            <div class="card-header" v-if="selected_report.user.username">
                                <div class="row m-0">
                                    <div class="col-xl-4  border-right m-auto">
                                        <b-avatar class="mr-2" :src="selected_report.user.avatar"></b-avatar>
                                        <span class="address">@{{selected_report.user.username}}</span>
                                    </div>
                                    <div class="col-xl-8 col-md-12 m-auto">
                                        <ul class="row  list-inline m-0 p-0">
                                            <li class="col-xl-3 col-md-3 col-sm-6 w-50 text-center">
                                                <p class="mb-0">Reports</p>
                                                <h6>{{selected_report.user.count_reports}}</h6>
                                            </li>
                                            <li class="col-xl-3 col-md-3 col-sm-6 w-50 text-center">
                                                <p class="mb-0">Reputation</p>
                                                <h6>{{selected_report.user.reputation}}</h6>
                                            </li>
                                            <li class="col-xl-3 col-md-3 col-sm-6 w-50 text-center">
                                                <p class="mb-0">Programs</p>
                                                <h6>{{selected_report.user.count_programs}}</h6>
                                            </li>
                                            <li class="col-xl-3 col-md-3 col-sm-6 w-50 text-center">
                                                <p class="mb-0">Thanks</p>
                                                <h6>{{selected_report.user.thanks}}</h6>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card-title border-bottom py-3  mb-0 px-2" v-if="selected_report.title">
                                <p class="text-muted float-right" style="font-size: 11px">{{selected_report.time_diff}}</p>
                                <h5>{{selected_report.title}}</h5>
                            </div>

                            <div class="card-body" v-if="selected_report.title">

                                <div class="row mx-0 ">
                                    <b-badge style="font-size: 13px" class="p-3 mr-3 mb-2 view_side"  role="button" @click="$router.push({name:'EditReport',params:{id:selected_report.id}})" variant="dark">Edit Report</b-badge>
                                    <b-badge style="font-size: 13px" class="p-3 mb-2 view_side" role="button" v-b-toggle.messages variant="dark">View Messages</b-badge>
                                    <report-messages :id="selected_report.id"/>
                                    <b-form-select class=" ml-auto mb-2" style="width: 160px" v-model="selected_report.status" :options="status" v-on:change="update('status')"></b-form-select>
                                </div>

                                <div role="tablist">
                                    <b-card no-body class="mb-1">
                                        <b-card-header header-tag="header" role="tab" v-b-toggle.info
                                                       style="cursor: pointer">
                                            <h6>
                                                <i class="fa fa-chevron-circle-right  mr-3"></i>
                                                <strong>Target & vulnerability</strong></h6>
                                        </b-card-header>
                                        <b-collapse id="info" accordion="my-accordion" visible role="tabpanel">
                                            <b-card-body>
                                                <b-card-text>
                                                    <div class="row mx-0 my-1">
                                                        <b-form-select class="ml-auto" style="width: 100px"  v-model="selected_report.severity" :options="['none','low','medium','high','critical']" v-on:change="update('severity')"></b-form-select>

                                                    </div>

                                                    <ul>
                                                        <li>Target : {{selected_report.target}}</li>
                                                        <li v-if="selected_report.vuln_id">Vulnerability :
                                                            {{selected_report.vuln.name}}
                                                        </li>
                                                        <li v-if="selected_report.vuln_id">Category :
                                                            {{selected_report.vuln.category}}
                                                        </li>
                                                        <li v-else>Vulnerability : {{selected_report.vuln_name}}
                                                        </li>
                                                    </ul>

                                                </b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                    <b-card no-body class="mb-1">
                                        <b-card-header header-tag="header" role="tab" v-b-toggle.details
                                                       style="cursor: pointer">
                                            <h6><i class="fa fa-chevron-circle-right  mr-3"></i><strong>Program
                                                vulnerability Details</strong></h6>
                                        </b-card-header>
                                        <b-collapse id="details" accordion="my-accordion" role="tabpanel">
                                            <b-card-body>
                                                <b-card-text v-html="selected_report.vuln_details">
                                                    {{selected_report.vuln_details}}

                                                </b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                    <b-card no-body class="mb-1">
                                        <b-card-header header-tag="header" role="tab" v-b-toggle.steps
                                                       style="cursor: pointer">
                                            <h6><i class="fa fa-chevron-circle-right  mr-3"></i> <strong>Program
                                                Validation Steps</strong></h6>
                                        </b-card-header>
                                        <b-collapse id="steps" accordion="my-accordion" role="tabpanel">
                                            <b-card-body>
                                                <b-card-text v-html="selected_report.validation_steps">
                                                    {{selected_report.validation_steps}}
                                                </b-card-text>
                                                <button class="float-right btn btn-info"
                                                        v-if="selected_report.file_upload">Download Attachment
                                                </button>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
    import simplebar from 'simplebar-vue';
    import 'simplebar/dist/simplebar.min.css';
    import ReportMessages from "@/components/ReportMessages";
    import Pagination from "@/components/structure/Pagination";
    export default {
        name: "Reports",
        components: {
            Pagination,
            ReportMessages,
            simplebar
        },
        data() {
            return {
                reports: [],
                filtre_status:'',
                is_load:false,
                status: ['saved','new', 'needs more info', 'triaged', 'accepted', 'resolved', 'duplicate', 'informative', 'not applicable'],
                current_page: 1,
                last_page_url: 6,
                selected_report: {
                    user: {},
                    program: {},
                    vuln: {}
                },
            }
        },
        watch: {
            filtre_status: function () {
                this.getReports(1)
            },
        },
        created() {
            this.getReports(1)
        },
        methods: {
            update(type){
                let val = {}
                if(type == 'severity') val.severity=this.selected_report.severity
                if(type == 'status') val.status=this.selected_report.status
                this.$http
                    .post('reports/'+this.selected_report.id,val)
                    .then(response => {
                        console.log(response.data)
                        this.$alertify.success(" success")
                        this.selected_report = response.data;

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            getReports(page) {

                this.$http
                    .post('me/reports?page=' + page,{'status':this.filtre_status})
                    .then(response => {
                        console.log(response.data)
                        this.reports = response.data.data;
                        this.is_load = true
                        if(this.reports.length)this.selected_report = this.reports[0];
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
    .card-header {
        background-color: inherit;
    }

    .card{
        background-color: #00142C;
        border-radius: 8px;

        color: white;
    }
    .report,.card-header{
        border: 1px solid #aaa;
        border-radius: 8px;
    }


    .report:hover{
        background-color: #0EC9AC;
        color: white;
        cursor: pointer;

    }

    .selected{
        background-color: #0EC9AC;
        color: white;
    }
    .view_side{
        background-color: #80b1ff;
    }
</style>