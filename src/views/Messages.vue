<template>
    <main class="row m-0 pt-4">
        <div class="col-xl-8 m-auto ">
            <div class=" my-5">
                <div class="row m-0">
                    <div class="col-xl-3 col-md-3 px-0 py-4">
                        <b-form-select v-model="filtre_report"   class="my-2  w-100" size="sm">
                            <b-form-select-option v-for="(s,index) in reports" :value="reports_ids[index]" :key="s">{{s}}</b-form-select-option>
                        </b-form-select>
                        <button class="btn my-2 text-white  w-100" :class=" {'selected': type == 'manager'}" @click="type = 'manager'">
                            Manager
                        </button>
                        <button class="btn my-2 text-white  w-100" :class=" {'selected': type == 'admin'}" @click="type = 'admin'">
                            Admin
                        </button>
                    </div>
                    <div class="content col-xl-9 col-md-9 py-4">
                        <simplebar style="max-height: 60vh;padding-right: 12px;padding-left: 12px;">
                            <div class="chat-message mt-2">
                                <ul class="chat" v-for="data in messages_selected" :key="data.id">
                                    <li class="left row mx-0 mb-4 " v-if="data.type_user == 'to'">
                                        <div class="col-2 p-0">
                                            <b-avatar class="m-auto"   size="4rem" v-if="data.type == 'au'" src="http://via.placeholder.com/640x480.png/008811?text=admin"></b-avatar>
                                            <b-avatar class="m-auto"  size="4rem" v-else src="http://via.placeholder.com/640x480.png/14c9ac?text=program"></b-avatar>

                                        </div>

                                        <div class="chat-body col-10 ">
                                            <div class="header p-2">
                                                <strong class="primary-font" v-if="data.type == 'mu'">Company Manager</strong>
                                                <strong class="primary-font" v-if="data.type == 'au'">DBounty Admin</strong>
                                                <small class="float-right text-muted">{{data.time_diff}}</small>
                                            </div>
                                            <p class="p-2">
                                               {{data.message}}
                                            </p>
                                        </div>
                                    </li>
                                    <li class="right mb-4" v-else>
                                        <div class="chat-body w-100">
                                            <div class="header p-2">
                                                <strong class="primary-font">me</strong>
                                                <small class="float-right text-muted">{{data.time_diff}}</small>
                                            </div>
                                            <p class="p-2">
                                                {{data.message}}
                                            </p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </simplebar>
                        <div class="col-xl-12  border-top pt-3">
                            <span  id="my_cmt" class="t form-control pr-5" role="textbox" style="border-radius: 30px" contenteditable></span>
                            <div class="chat-input-links ">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <a v-b-tooltip.hover placement="top"
                                           title="Send"  @click="myMessage">
                                            <i class="fa fa-paper-plane"></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import io from "socket.io-client";
    import simplebar from 'simplebar-vue';
    import 'simplebar/dist/simplebar.min.css';
    export default {
        name: "Messages",
        components:{simplebar},
        data() {
            return {
                main_socket: io.connect(this.$url_websocket_main, {query: {token: localStorage.getItem('token')}}),
                messages: [ ],
                reports:[],
                reports_ids:[],
                messages_selected:[],
                type:'',
                filtre_report:'',

            }
        },
        watch:{
            type: function () {
              if(this.type == 'manager')  this.messages_selected = this.messages_m
              else  this.messages_selected = this.messages_a
            },
            filtre_report: function () {
                if(this.type == 'manager')  this.messages_selected = this.messages_m
                else  this.messages_selected = this.messages_a
            },
            messages: function () {
                if(this.type == 'manager')  this.messages_selected = this.messages_m
                else  this.messages_selected = this.messages_a
            },
        },

        mounted() {
            this.main_socket.on('report_message', (data) => {
                console.log(data.report_message);
                this.messages.unshift(data.report_message)

            })
        },
        created() {
            this.getMessages()
        },
        computed: {
            messages_m: function () {
                let a = this.messages.filter(m => {
                    return (m.type == 'mu' || m.type == 'um') && m.report_id == this.filtre_report
                });
                return a.reverse()
            },
            messages_a: function () {
                let a = this.messages.filter(m => {
                    return (m.type == 'au' || m.type == 'ua') && m.report_id == this.filtre_report
                });
                return a.reverse()
            },
        },
        methods: {
            getMessages() {
                this.$http
                    .get('me/messages')
                    .then(response => {
                        this.messages = response.data;
                        this.reports = [...new Set(this.messages.map(x=>x.report.title))]
                        this.reports_ids = [...new Set(this.messages.map(x=>x.report_id))]
                        this.type = 'manager'
                        this.filtre_report = this.reports_ids[0]

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            myMessage(){
                let report_message = {
                    report_id:this.filtre_report,
                    type:'',
                    message:document.getElementById("my_cmt").innerText
                }
               if(this.type == 'manager') report_message.type = 'um'
               if(this.type == 'admin') report_message.type = 'ua'

                this.$http
                    .post('reports/' +this.filtre_report+'/messages',report_message)
                    .then(response => {
                        document.getElementById("my_cmt").innerText = ""
                        this.messages.unshift(response.data);
                        this.$alertify.success(" success")
                      //  this.messages_selected.push(response.data);


                    })
                    .catch(error => {
                        console.log(error)
                    })
            }

            }

    }
</script>
<style scoped src="@/assets/styles/messages.css"></style>
<style scoped>
    .content {
        background-color: #00142C;
        min-height: 60vh!important;
    }

    .card {
        background-color: inherit;
    }
.btn{
    background-color: #00142C;
}
    .selected {
        background-color: #0EC9AC;
        color: white;

    }
    .chat-message{
        min-height: 60vh !important;
        font-size: 12px;
    }
    @media screen and (max-width: 900px) {
        .content,.chat-message{
            min-height: fit-content!important;
        }
    }
</style>