<template>
    <apexchart type="bar" width="420" :options="chartOptions" :series="series"></apexchart>

</template>

<script>
    export default {
        name: "ProgramsStatus",
        data(){
            return{
                series: [{
                    data: []
                }],
                chartOptions: {
                    chart: {
                        type: 'bar',
                        height: 350
                    },
                    noData: {
                        text: 'Loading',
                    },
                    title: {
                        text: 'Programs Status',
                        align: 'left',
                        margin: 10,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                            color:  '#fff'
                        },
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            horizontal: true,
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    xaxis: {
                        labels: {
                            formatter: function (val) {
                                return val.toFixed(0)
                            }
                        },
                    }

                },
            }
        },
        created(){
            this.loadProgramsStatus()
        },
        methods:{
            loadProgramsStatus() {
                this.$http
                    .get('programs_status')
                    .then(response => {

                        let status = []
                        let series = []
                        response.data.forEach(function(element) {
                            series.push(parseInt(element.count))
                            status.push(element.status)
                        })
                        this.$set(this.series, 0, {name: 'Number', data: series})

                        this.chartOptions = {...this.chartOptions, ...{
                                labels: status
                            }}
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