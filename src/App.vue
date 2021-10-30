<template>
  <div id="app">
    <div class="row" style="margin:0">
      <div class="col-md-2 col-sm-3">
        <Aside/>
      </div>
      <div class="col-md-10 col-sm-9">
        <NavBare/>
        <router-view />
      </div>

    </div>
  </div>
</template>

<style scoped >

  #app .row > div {
    padding-right: 0 !important;
    padding-left: 0 !important
  }
</style>

<script>
import NavBare from "@/components/required/navePare.vue"
import aside from "@/components/required/aside.vue"
export default {
  components : {
    NavBare,
    Aside : aside
  },
}
</script>