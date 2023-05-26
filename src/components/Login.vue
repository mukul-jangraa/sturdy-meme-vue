<template>
  <v-container  class="text-center elevation-10 mt-16">
    <h1 class="my-3">
      Welcome To अनन्तब्रह्माण्ड
    </h1>
    <p class="my-8">
      Take Your First Step Towards अनन्तब्रह्माण्ड!
    </p>
    <form class="text-start" @submit.prevent="submit">

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password.value.value"
        :counter="7"
        :error-messages="password.errorMessage.value"
        label="Password"
      ></v-text-field>

      <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        value="1"
        label="I Agree to T&C"
        type="checkbox"
      ></v-checkbox>

      <div class="text-right">
        <v-btn class="me-4 bg-grey-darken-3" :loading="inProcess"  type="submit"> submit </v-btn>

<v-btn @click="handleReset" color="grey-darken-3" variant="outlined"> clear </v-btn>
</div>
    </form>
  </v-container>
</template>

<script setup>
import { ref ,watch } from "vue";
import { useField, useForm } from "vee-validate";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from "axios";


//  ************************ Form Validation
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        password(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

          return "password number needs to be at least 9 digits.";
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

          return "Must be a valid e-mail.";
        },
        // select(value) {
        //   if (value) return true;

        //   return "Select an item.";
        // },
        checkbox(value) {
          if (value === "1") return true;

          return "Must be checked.";
        },
      },
    });
    const password = useField("password");
    const email = useField("email");
    // const select = useField("select");
    const checkbox = useField("checkbox");

    const items = ref(["Male", "Female", "You Dont Exists"]);
    let inProcess = ref(false)
    const submit = handleSubmit(async (values) => {
      console.log("111111")
      try {
        inProcess = true
        let data = {
        password: values.password,
        email: values.email,
      }
      
      const response = await axios.post("http://localhost:6969/api/login", data)
      if(response.data.success) {
        toast("Account Created Successfully", {
        autoClose: 1000,
      });
      } else {
        toast("Please Try again Something went Wrong", {
        autoClose: 1000,
      });
      }
      } catch (e) {
        console.log(e.message)
        
      }
    });
    //  ****************************** form validation Ends 
  
 

</script>

<style scoped>
.v-container {
  max-width: 600px;
  background-color: rgb(252, 252, 252);
}


</style>
