<template>
    <div class="row mr-0" style="margin-top: 10%;margin-bottom: 8%">
        <div class="col-xl-4 m-auto ">
            <div class="card">
                <div class="card-header">
                    <h1 class="text-center text-white">DBounty</h1>

                </div>
                <div class="card-body">
                    <form>
                        <div class="row">

                            <div class="col-xl-9 m-auto font-size-14">
                                <form id="form" method="POST" @submit.prevent="handleSubmit">
                                    <div class="form-group mt-3 mb-0">
                                        <label class="pb-2">Email :</label>
                                        <b-form-input type="text" v-model="manager.email" placeholder="Enter your Email"
                                                      :class="{ 'is-invalid': typesubmit && $v.manager.email.$error }"></b-form-input>
                                        <div v-if="typesubmit && $v.manager.email.$error" class="invalid-feedback ">
                                            <span v-if="!$v.manager.email.required" class="text-danger">The Value is required !</span>
                                            <span v-if="!$v.manager.email.email"
                                                  class="text-danger">Invalid Email !</span>
                                        </div>

                                    </div>
                                    <div class="form-group mt-3 mb-0">
                                        <label class="pb-2">Password :</label>
                                        <!--                            <vue-fontawesome :icon="icon" size="2" color="dark" id="togglePassword" @click="visibility"></vue-fontawesome>-->
                                        <b-form-input type="password" v-model="manager.password" id="password"
                                                      placeholder="Enter your password"
                                                      :class="{ 'is-invalid': typesubmit && $v.manager.password.$error }"></b-form-input>
                                        <div v-if="typesubmit && $v.manager.password.$error" class="invalid-feedback ">
                                            <span v-if="!$v.manager.password.required" class="text-danger"> The Value is required !</span>
                                        </div>
                                    </div>

                                    <div class="mt-3">
                                        <input type="submit" class="btn btn-primary btn-block" value="Login"/>
                                    </div>
                                    <div class="mt-3 text-center border-top border-bottom">
                                        <h6 class="text-white">
                                            Or Signin With
                                            <img width="150" alt="metamask" role="button" @click="signin"
                                                 src="@/assets/images/metamask-logo.png"/>
                                        </h6>

                                    </div>
                                    <div class="mt-3 text-center">
                                        <p class="text-muted">
                                            Don't have an account
                                            <router-link :to="{'name':'Register'}"
                                                         class="font-weight-medium text-primary">Register
                                            </router-link>
                                        </p>

                                    </div>
                                </form>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {email, required} from "vuelidate/lib/validators";
    import Vue from "vue";
    import Web3 from "web3";

    export default {
        name: "Test",
        data() {
            return {
                typesubmit: false,
                manager: {
                    email: '',
                    password: '',
                },
                user:{
                    public_address:'',
                    signature:''
                },
                web3: new Web3(),
                sigContractInstance: null,
                sigContractAddress: "",
                strAbi: '[{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"verify","outputs":[{"name":"returnAddress","type":"address"}],"payable":false,"type":"function"}]',
                defaultAcPWD: '',
                defaultAc: '',
                ethUrl: 'http://localhost:8545',
                signatureContractCodeReadable: "\n\tcontract SignatureVerifier {\n\t\tfunction verify( bytes32 hash, uint8 v, bytes32 r, bytes32 s) \n\t\tconstant returns(address returnAddress) {\n \t\t\treturnAddress = ecrecover(hash, v, r, s);\n\t\t}\n\t}\n\n"

            }
        },
        validations: {
            manager: {
                email: {required, email},
                password: {required},
            },

        },
        created() {
            this.typesubmit = false;
            this.manager = {}
            this.initializeEthereumConnection()
            //this.web3.setProvider(new this.web3.providers.HttpProvider('http://localhost:8545'));
        },


        methods: {
            initializeEthereumConnection() {
                if (this.web3 != null && this.web3.isConnected() == true) {
                    return true;
                }

                this.web3.setProvider(new this.web3.providers.HttpProvider('http://localhost:8545'));

                var coinbase = this.web3.eth.coinbase;
                console.log(coinbase);

                var balance = this.web3.eth.getBalance(coinbase);
                console.log(balance.toString(10));

                if (this.web3.isConnected() == true) {
                    if (this.defaultAc == '') {
                        this.defaultAc = this.web3.eth.accounts[0];
                        this.web3.eth.defaultAccount = this.web3.eth.coinbase
                    }
                    return true;
                }

                return false;
            },
            unlockAccount(acAddress) {
                if (acAddress != undefined && acAddress != null) {
                    return this.web3.personal.unlockAccount(this.defaultAc, this.defaultAcPWD, 100);

                }

                return false;
            },
            initializeContract() {
                this.initializeEthereumConnection();
                if (this.web3.isConnected() == false) {
                    return;
                }
                var source = "" +
                    "pragma solidity ^0.4.6;" +
                    "contract test {\n" +
                    "   function multiply(uint a) constant returns(uint d) {\n" +
                    "       return a * 7;\n" +
                    "   }\n" +
                    "}\n";

                var compiled = this.web3.eth.compile.solidity(source);
                var code = compiled.code;
                console.log(code)
                // contract json abi, this is autogenerated using solc CLI
                this.strAbi =  compiled.info.abiDefinition;
                let contract = this.web3.eth.contract(JSON.parse(this.strAbi));

                this.sigContractInstance = contract.at(this.sigContractAddress)
                console.log("transaction sent, waiting for confirmation");
                this.web3.eth.contract(this.strAbi).new({data: code}, function (err, contract) {
                    if(err) {
                        console.error(err);
                        return;

                        // callback fires twice, we only want the second call when the contract is deployed
                    } else if(contract.address){

                        console.log('address: ' + contract.address);
                        console.log('status Mined!');
                        console.log('call visible');
                    }
                });
                //call contract
                var res = contract.multiply(34);
                console.log("res = ",res.toString(10));

            },
            handleSubmit() {
                this.typesubmit = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                this.login();

            },
            async signin() {

                // let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
                // let account = accounts[0];
                //  let a = await this.signMessage('To avoid digital cat burglars, sign below to authenticate with Dbounty.')
                // let s = this.splitSig(a)
                //  console.log(a)
//                 const msgParams = [
//                     {
//                         type: 'string',      // Any valid solidity type
//                         name: 'Message',     // Any string label you want
//                         value: 'Hi, Alice!'  // The value to sign
//                     },
//                     {
//                         type: 'uint32',
//                         name: 'A number',
//                         value: '1337'
//                     }
//                ]
                //        await  this.web3.personal.sign( this.web3.sha3('message'), this.web3.eth.coinbase);
//                 var account = this.web3.eth.accounts[0]
// let sig = ''
//                 this.web3.personal.sign( this.web3.fromUtf8("Hello from Toptal!"), account, function(error, signature) {
//                     console.log(signature, error)
//                      sig = signature
//                 })
//                 this.web3.personal.ecRecover( this.web3.fromUtf8("Hello from Toptal!"), sig, function(error, signing_address) {
//                     console.log(signing_address, error);
//                 })

                // await window.ethereum.request({
                //     method: 'eth_signTypedData',//personal_sign
                //     params: [msgParams,this.web3.eth.coinbase]
                // }, (err, result) => {
                //     if (err) return console.error(err)
                //     if (result.error) {
                //         // User denied signature
                //     }
                //     console.log('PERSONAL SIGNED:' + JSON.stringify(result.result))
                // })

                let a  =    await window.ethereum.request({
                    method: 'personal_sign',//personal_sign
                    params: [ this.web3.fromUtf8("Hello from Toptal!"),this.web3.eth.coinbase],
                    from:this.web3.eth.coinbase
                })
                console.log(a)

                // this.web3.currentProvider.sendAsync(
                //     {
                //         method: 'eth_signTypedData',
                //         params: [msgParams,this.web3.eth.coinbase],
                //         from:this.web3.eth.coinbase,
                //     },
                //     function (err, result) {
                //         if (err) return console.dir(err);
                //         if (result.error) {
                //             alert(result.error.message);
                //         }
                //         if (result.error) return console.error('ERROR', result);
                //         console.log('TYPED SIGNED:' + JSON.stringify(result.result));
                //
                //     }
                // );





                // let a  =   this.web3.eth.sign(this.web3.eth.coinbase,this.web3.fromUtf8("Hello from Toptal!") );
                //  console.log(a)



            },

            splitSig(sig) {
                return {
                    v: this.web3.toDecimal('0x' + sig.slice(130, 132)),
                    r: sig.slice(0, 66),
                    s: sig.slice(66, 130)
                }

            },
            verifySignedByAc(message, sig) {
                this.initializeContract()

                let res = this.splitSig(sig);

                // Unfortunately Geth client adds this line to the message as a prefix while signing
                // So while finding who signed it we need to prefix this part
                let prefix = new Buffer("\x19Ethereum Signed Message:\n");
                let msg = new Buffer(message);
                let prefixedMsg = this.web3.sha3(
                    Buffer.concat([prefix, new Buffer(String(msg.length)), msg]).toString('utf8')
                );

                let strPrefixedMsg = prefixedMsg;

                let finalAddress = this.sigContractInstance.verify.call(strPrefixedMsg, res.v, res.r, '0x' + res.s);

                return finalAddress;
            },

            login() {
                this.$http
                    .post('login', this.manager)
                    .then(response => {
                        console.log(response.data.token.access_token)
                        this.$store.commit('me', response.data.user)
                        this.$alertify.success("Success :)")
                        const token = response.data.token.access_token;
                        localStorage.setItem('token', token)
                        Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
                        this.$router.push({'name': 'Dashboard'})
                    })
                    .catch(error => {
                        console.log(error)
                        this.$alertify.error("Le mot de passe / l'email est incorrect");
                    })
            }
        }
    }
</script>

<style scoped>


    .card {
        background-color: #10233B;
        border-radius: 20px !important;
    }

    .card-header h1 {
        margin: auto;
        font-size: 30px;
        font-weight: bold;

    }

    label {
        color: white;
    }


    input[type="text"], input[type="password"] {
        border: 0;
        background-color: white;
        color: #222831;
        border-bottom: solid 1px #0072bc;
        padding: 10px 10px;
    }

    i {
        cursor: pointer;
        float: right;
        position: relative;
        top: 32px;
        color: black;
        margin-left: 4px;
    }


</style>