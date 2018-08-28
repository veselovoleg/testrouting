<template>
    <div>
        <h1>{{ msg }}</h1>
        <ul>
            <a href="/#/signup">
              <li>
                <h2 title="Create new user">New user</h2> 
              </li>
            </a>
            <a href="/#/login">
              <li>
               <h2 title="Log in site">Login</h2>        
              </li>
            </a>              
        </ul>
    </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "Welcome to this amazing site!"
    };
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

li {
  background-color: aliceblue;
  list-style-type: none;
}

li:hover {
    background-color: #3a6b4d;
    cursor: pointer;
    color: azure;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: white; /* Ссылка красного цвета */
}
</style>

