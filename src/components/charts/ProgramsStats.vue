<template>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>

</template>

<script>
    export default {
        name: "ProgramsStats",
        data(){
            return{
                series: [{
                    name: '',
                    data: []
                }, {
                    name: '',
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
                        text: 'Programs Stats',
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
                            horizontal: false,
                            columnWidth: '55%',
                            endingShape: 'rounded'
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ['transparent']
                    },
                    yaxis: {
                        labels: {
                            formatter: function (val) {
                                return val.toFixed(0)
                            }
                        },
                    },
                    fill: {
                        opacity: 1
                    },

                },
            }
        },
        created(){
            this.loadProgramsStats()
        },
        methods:{
            loadProgramsStats() {
                this.$http
                    .get('programs_stats')
                    .then(response => {
                        let labels = []
                        let users_count = []
                        let reports_count = []

                        response.data.forEach(function(element) {

                            labels.push(element.name)
                            users_count.push(element.users_count)
                            reports_count.push(element.reports_count)
                        })

                        this.$set(this.series, 0, {name: "users count", data: users_count})
                        this.$set(this.series, 1, {name: "reports count", data: reports_count})
                        this.chartOptions = {...this.chartOptions, ...{
                                labels: labels
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