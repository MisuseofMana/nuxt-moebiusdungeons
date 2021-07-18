<template>
  <div class="loader"></div> 
</template>

<script>
    export default {
        name:"Loading"
    }
</script>

<style scoped>
.loader {
  border: 50px solid #f3f3f3; /* Light grey */
  border-top: 50px solid #777;
  border-right: 50px solid #888;
  border-bottom: 50px solid #777;
  border-left: 50px solid #888;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>