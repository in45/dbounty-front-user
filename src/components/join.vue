<template>
    <b-modal id="join" ref="modal" centered  hide-header @ok="handleOk">
        <div class="row m-4">

            <h4 class="m-auto">Join Program</h4>
            <p class="my-4">Are you Sue that you want to join this program ?</p>
        </div>
    </b-modal>
</template>

<script>

    export default {
        name: "Join",
        props:['id'],
        methods:{
            handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                this.$http
                    .post('programs/'+this.id+'/join')
                    .then(response => {
                        this.$refs['modal'].hide()
                        this.$alertify.success("Success :)")
                        this.$router.push({name:'ProfilProgram',params:{id:this.id}})
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                        this.$alertify.error("Error !!");
                    })

            },


        }
    }
</script>
<style scoped  src="@/assets/styles/popup.css"></style>
