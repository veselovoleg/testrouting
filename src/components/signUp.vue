<template>
    <div id="signup">
      <h1>Registration form</h1>
      <ul>
        <li class="username">
          <label for="uname">Username:</label>
        </li>
        <li class="username"> 
            <input type="text" id="uname" name="uname" required
                minlength="4" maxlength="8" size="30"
                placeholder="4 to 8 characters long" v-model="userInfo.username"/>
            <span v-if="userInfo.username != ''" class="validity"></span>
        </li>
        <li class="login">
          <label for="logn">Login:</label>
        </li>
        <li class="login"> 
          <input type="text" id="logn" name="logn" required minlength="4" maxlength="8"
                placeholder="4 to 8 characters long" size="30" v-model="userInfo.login" />
          <span v-if="userInfo.login != ''" class="validity"></span>
        </li>
        <li class="password">
          <label for="pswd">Password:</label>
        </li>
        <li class="password">
            <input type="text" id="pswd" name="pswd" required minlength="6"
                placeholder="Min 6 characters long" size="30" v-model="userInfo.password"/>
            <span v-if="userInfo.password != ''"  class="validity"></span>
        </li>
        <li class="registration" @click="sendUserData">
          <h2 title="Send your data for registration">Sign up</h2> 
        </li>
      </ul>

    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userInfo: {
        username: "",
        login: "",
        password: ""
      },
      users: []
    };
  },
  methods: {
    sendUserData() {
      
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  padding: 5px;
  margin: auto;
  width: 40%;
}

.registration {
  background-color: aliceblue;
  cursor: pointer;
}

.registration:hover {
  background-color: #39d475;
  color: azure;
}

.output {
  font: 13pt "Fira Sans", sans-serif;
}

legend {
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

.username .login .password {
  margin: 1rem 0;
}

label {
  font-size: 14pt;
}

input:invalid + span:after {
  content: "✖";
  color: #f00;
  padding-left: 5px;
}

input:valid + span:after {
  content: "✓";
  color: #26b72b;
  padding-left: 5px;
}
</style>


