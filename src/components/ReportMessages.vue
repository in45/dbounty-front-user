<template>
    <b-sidebar id="messages"  width="400px" title="Messages" @shown="getMessages"
               text-variant="light" right shadow backdrop backdrop-variant="transparent">
        <div class="px-3 py-2">
            <b-tabs pills justified content-class="pt-3">
                <b-tab  class="border-0" :active="type == 'manager'"  @click="type = 'manager'">
                    <template v-slot:title >
                        <span class=" d-sm-inline-block " >Manager</span>
                    </template>
                    <div style="max-height: 70vh;overflow-y:scroll;padding-right: 4px;padding-left: 4px;">
                        <div class="chat-message mt-2">
                            <ul class="chat" v-for="data in messages_m" :key="data.id">
                                <li class="left row mx-0 mb-4 " v-if="data.type_user == 'to'">
                                    <div class="col-3 p-0">
                                          <b-avatar class="m-auto"   src="http://via.placeholder.com/640x480.png/14c9ac?text=company"></b-avatar>

                                    </div>

                                    <div class="chat-body col-9 ">
                                        <div class="header p-2">
                                            <strong class="primary-font" >Company Manager</strong>
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
                    </div>
                </b-tab>
                <b-tab  class="border-0" :active="type == 'admin'"  @click="type = 'admin'">
                    <template v-slot:title >
                        <span class=" d-sm-inline-block ">Admin</span>
                    </template>
                    <div style="max-height: 70vh;padding-right: 12px;padding-left: 12px;">
                        <div class="chat-message mt-2">
                            <ul class="chat" v-for="data in messages_a" :key="data.id">
                                <li class="left row mx-0 mb-4 " v-if="data.type_user == 'to'">
                                    <div class="col-3 p-0">
                                        <b-avatar class="m-auto"    src="http://via.placeholder.com/640x480.png/008811?text=admin"></b-avatar>
                                    </div>

                                    <div class="chat-body col-9 ">
                                        <div class="header p-2">
                                            <strong class="primary-font" >DBounty Admin</strong>
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
                                            <strong class="primary-font" >me</strong>
                                            <small class="float-right text-muted">{{data.time_diff}}</small>
                                        </div>
                                        <p class="p-2">
                                            {{data.message}}
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </b-tab>
            </b-tabs>
            <div class="col-xl-12 cmt border-top pt-3">
                <span  id="my_cmt" class="t form-control pr-5" role="textbox" style="border-radius: 30px" contenteditable></span>
                <div class="chat-input-links">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <a v-b-tooltip.hover placement="top"
                               title="Send" @click="myMessage">
                                <i class="fa fa-paper-plane"></i>
                            </a>
                        </li>

                    </ul>
                </div>


            </div>

        </div>
    </b-sidebar>
</template>

<script>
    import io from "socket.io-client";
    export default {
        name: "ReportMessages",
        props:['id'],
        data() {
            return {
                main_socket: io.connect(this.$url_websocket_main, {query: {token: localStorage.getItem('token')}}),
                messages: [ ],
                type:'manager'

            }
        },

        mounted() {
            this.main_socket.on('report_message', (data) => {
                console.log(data.report_message);
                this.messages.unshift(data.report_message)

            })
        },

        computed: {
            messages_m: function () {
                let a = this.messages.filter(m => {
                    return m.type == 'mu' || m.type == 'um'
                });
                return a.reverse()
            },
            messages_a: function () {
                let a = this.messages.filter(m => {
                    return m.type == 'au' || m.type == 'ua'
                });
                return a.reverse()
            },
        },
        methods: {
            getMessages() {
                this.$http
                    .get('reports/'+this.id+'/messages')
                    .then(response => {
                        this.messages = response.data;

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            myMessage(){
                let report_message = {
                    report_id:this.id,
                    type:'',
                    message:document.getElementById("my_cmt").innerText
                }
                if(this.type == 'manager') report_message.type = 'um'
                if(this.type == 'admin') report_message.type = 'ua'

                this.$http
                    .post('reports/' +this.id+'/messages',report_message)
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

    /deep/ .nav-pills .nav-link{
        color: white;
        border-radius: 0;
    }
    /deep/ .nav-pills .nav-link.active{
        background-color:  #80b1ff;
    }
    /deep/ .nav-justified .nav-item{
        border: solid 0.5px #bbb;
    }
    /deep/ .b-sidebar{
        background-color: #00142C!important;
    }
    div {
        --scrollbarBG: #CFD8DC;
        --thumbBG: #90A4AE;

    }
    div::-webkit-scrollbar {
        width: 8px;

    }
    div::-webkit-scrollbar-track {
        background: none;
    }
    div::-webkit-scrollbar-thumb {
        background-color: var(--thumbBG) ;
        border-radius: 6px;
    }
    div {
        scrollbar-width: thin;
        scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    }
</style>