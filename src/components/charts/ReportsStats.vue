<template>
    <div class="row mx-0">
        <div class="col-xl-6">
            <apexchart type="pie" width="420" :options="chartOptions" :series="series" v-if="load"></apexchart>
        </div>
        <div class="col-xl-6">
            <apexchart type="donut" width="380" :options="chartOptions2" :series="series2" v-if="load"></apexchart>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ReportsStats",
        data(){
            return{
                load:false,
                series: [0,0,0,0,0,0,0,0],
                chartOptions: {
                    chart: {
                        type: 'pie',
                    },
                    title: {
                        text: 'Reports Status',
                        align: 'left',
                        margin: 10,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                            color:  '#fff'
                        },
                    },
                    labels:['new','needs more info','triaged','resolved','accepted','duplicate','informative','not applicable'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
                series2: [0,0,0,0,0],
                chartOptions2: {
                    chart: {
                        type: 'donut',
                    },
                    title: {
                        text: 'Reports Severity',
                        align: 'left',
                        margin: 10,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                            color:  '#fff'
                        },
                    },
                    labels:['none','low','medium','high','critical'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            }
        },
        created(){
            this.loadReportsStats()
        },
        methods:{
            loadReportsStats() {
                this.$http
                    .get('reports_stats')
                    .then(response => {
                       let data  = response.data;
                       this.load=true
                       let status = []
                       let severity = []
                        let series = []
                        let series2 = []
                        data.status.forEach(function(element) {
                            series.push(parseInt(element.status_count))
                            status.push(element.status)
                        })
                        data.severity.forEach(function(element) {
                            series2.push(parseInt(element.severity_count))
                            severity.push(element.severity)
                        })

                       if(series.length){
                           this.series=series
                           this.chartOptions = {...this.chartOptions, ...{
                                   labels: status
                               }}
                       }
                       if(series2.length){
                           this.series2=series2

                           this.chartOptions2 = {...this.chartOptions2, ...{
                                   labels: severity
                               }}
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