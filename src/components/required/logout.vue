


<script>
export default {
    beforeCreate() {
        window.localStorage.removeItem("tocken");
        window.location = window.location.origin + "/login"
    }
}
</script>