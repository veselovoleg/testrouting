<template>
    <ul>
        <li>
            <h1>Login form</h1>
        </li>
        <li>
            Your login or email:
        </li>
        <li>
            <input type="text">
        </li>
        <li>
            Password:
        </li>
        <li>
            <input type="text">
        </li>
        <li class="login">
          <h2 title="Send your data for registration">Login</h2> 
        </li>
    </ul>
</template>


<script>
export default {
    
}
</script>

<style scoped>
li {
    list-style: none;
    padding: 5px;
    width: 40%;
    margin: auto;
}

.login {
  background-color: aliceblue;
  cursor: pointer;
}

.login:hover {
    background-color: #39d475;
    color: azure;
}
</style>

