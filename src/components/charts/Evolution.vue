<template>
    <apexchart height="300" :series="series" :options="chartOptions"></apexchart>
</template>

<script>
    export default {
        name: "Evolution",
        data(){
            return{
                    series: [{
                        name: 'Tokens',
                        data: []
                    }],
                    chartOptions: {
                        chart: {
                            height: 320,
                            type: 'line',
                            toolbar: 'false',
                            dropShadow: {
                                enabled: true,
                                color: '#000',
                                top: 18,
                                left: 7,
                                blur: 8,
                                opacity: 0.2
                            },
                        },
                        noData: {
                            text: 'Loading',
                        },
                        title: {
                            text: 'Evolution',
                            align: 'left',
                            margin: 10,
                            offsetX: 0,
                            offsetY: 0,
                            floating: false,
                            style: {
                                color:  '#fff'
                            },
                        },

                        dataLabels: {
                            enabled: false
                        },
                        yaxis: {
                            tickAmount: 1,
                            labels: {
                                formatter: function(val) {
                                    return val.toFixed(0)
                                }
                            },
                            title: {
                                text: 'Tokens'
                            },
                        },

                        colors: ['#FFFF99'],
                        stroke: {
                            curve: 'smooth',
                            width: 3,
                        },
                    },
                months : [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ],

            }
        },
        created(){
            this.loadEvolution()
        },
        methods:{
            loadEvolution() {
                this.$http
                    .get('evolution')
                    .then(response => {
                        let evolution  = response;
                        let result = {}
                        let labels = []
                        for (var i = 0; i < evolution.data.length; i++) {
                            labels.push(Object.keys(evolution.data[i]));
                            result[Object.keys(evolution.data[i])] =  Object.values(evolution.data[i])[0];
                        }
                        this.$set(this.series, 0, {name: 'Tokens', data: Object.values(result)})
                        this.chartOptions = {
                            ...this.chartOptions, ...{
                                labels: labels
                            }
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
</script>

<style scoped>

</style>