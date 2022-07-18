<template>
  <v-row>
    <v-spacer />
    <v-col cols="5">
      <canvas id="statChart" />
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
import Chart from "chart.js/auto";

let chartData = {
  labels: [
    "Max HP",
    "Attack",
    "Armor",
    "Brawn",
    "Speed",
    "Heart",
    "Thought",
    "Instinct",
    "Guile",
  ],
  datasets: [
    {
      label: "Swordsman",
      data: [10, 8, 4, 12, 9, 11, 8, 3, 10],
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, .3)",
      pointRadius: 10,
      tension: 0.1,
    },
    // {
    //   label: "Mage",
    //   data: [8, 10, 0, 8, 10, 9, 12, 11, 10],
    //   fill: true,
    //   borderColor: "rgb(66, 135, 245)",
    //   backgroundColor: "rgba(66, 135, 245, .3)",
    //   pointRadius: 4,
    // },
    // {
    //   label: "Varlet",
    //   data: [10, 8, 1, 9, 10, 10, 8, 12, 11],
    //   fill: true,
    //   borderColor: "rgb(66, 245, 108)",
    //   backgroundColor: "rgba(66, 245, 108, .3)",
    //   pointRadius: 4,
    // },
  ],
};

export default {
  name: "RadarChart",
  props: {
    suggestedMax: {
      type: Number,
      default: 20,
    },
    chartLabel: {
      type: String,
      default: "A Dataset",
    },
  },
  data() {
    return {
      chartContainer: null,
      config: {
        type: "radar",
        data: chartData,
        options: {
          elements: {
            line: { borderWidth: 1 },
          },
          scales: {
            ticks: {
              display: false,
              beginAtZero: true,
              suggestedMin: 0,
              font: {
                size: 100,
              },
            },
            r: {
              //   ticks: {
              //     stepSize: 4,
              //   },
              suggestedMin: 0,
              suggestedMax: this.suggestedMax,
              grid: {
                circular: true,
              },
              pointLabels: {
                font: {
                  size: 13,
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      },
    };
  },
  mounted() {
    this.chartContainer = new Chart(
      document.getElementById("statChart"),
      this.config
    );
  },
};
</script>
