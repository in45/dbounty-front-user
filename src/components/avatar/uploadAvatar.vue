<template>
    <div>
        <i class="fas fa-camera text-white font-size-16" @click="show = !show"></i>
        <upload field="img"
                @crop-success="cropSuccess"
                @crop-upload-success="cropUploadSuccess"
                @crop-upload-fail="cropUploadFail"
                v-if="show"
                v-on:close="show = !show"
                :width="300"
                :height="300"
                :url="link"
                :params="params"
                :headers="headers"
        ></upload>
        <!--        <img :src="imgDataUrl">-->
    </div>

</template>
<script>

    import Upload from "./upload-3";
    export default {
        name: "uploadAvatar",
        props:['url'],
        data(){
            return{
                show: false,
                params: {},
                link:this.$url_api+this.url,
                headers: {
                    "Authorization": "Bearer "+localStorage.getItem('token')
                },
                imgDataUrl: ''
            }
        },
        components: {
            Upload,
        },
        methods: {

            /**
             * crop success
             *
             * [param] imgDataUrl
             * [param] field
             */
            cropSuccess(imgDataUrl, field){
                console.log(field)
                console.log('-------- crop success --------');
                this.imgDataUrl = imgDataUrl
            },
            /**
             * upload success
             *
             * [param] jsonData  server api return data, already json encode
             * [param] field
             */
            cropUploadSuccess(jsonData, field){
                console.log('-------- upload success --------');
                console.log(jsonData);
                console.log('field: ' + field);
                this.$emit('refresh-avatar',this.imgDataUrl)
                this.show = false
            },
            /**
             * upload fail
             *
             * [param] status    server api return error status, like 500
             * [param] field
             */
            cropUploadFail(status, field){
                console.log('-------- upload fail --------');
                console.log(status);
                console.log('field: ' + field);
            }
        }
    }
</script>

<style scoped >
    /deep/ .vue-image-crop-upload .vicp-wrap{
        background-color: #2a3042!important;
    }

</style>