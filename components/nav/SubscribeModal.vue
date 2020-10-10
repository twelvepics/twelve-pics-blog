<template>
  <!-- SUBSCRIBE MODAL -->
  <div class="modal" id="subscribe-modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <form class="message" @submit.prevent="onSubmit" novalidate>
        <div class="message-header">
          <p class="is-1">Subscribe</p>
          <button
            class="delete is-medium"
            id="login-close"
            @click.prevent="closeModal"
          ></button>
        </div>
        <div class="message-body" style="padding-top: 0">
          <!-- API ERROR -->
          <div class="explain done" v-if="registrationDone">
            Thank you for registering!
          </div>
          <div class="explain" v-else>
            Want to know about my new blog posts and zines? Subscribe and stay
            tuned.
          </div>
          <div class="field">
            <label class="label isError" v-if="$v.email.$error">
              Please Enter a valid email address
            </label>
            <label class="label isError" v-else-if="apiError">
              {{ apiErrorMessage }}
            </label>
            <label class="label done" v-else-if="registrationDone">
              We have sent you a confirmation request email. Please validate
              your registration with it.
            </label>
            <label class="label" v-else> Your email address: </label>

            <div class="control">
              <input
                class="input"
                :class="{ 'is-danger': $v.email.$error }"
                ref="email"
                type="text"
                placeholder="Enter Email address"
                v-model="email"
                @input="resetApiError()"
                @keydown.enter.prevent="onEnterSubmit"
                @blur="$v.email.$touch()"
              />
              <!--  -->
            </div>
          </div>
          <div class="field is-grouped submit-buttons">
            <div class="control">
              <button
                type="submit"
                class="button is-link"
                :class="{'is-loading': sending}"
                :disabled="$v.$invalid || registrationDone"
              >
                Submit
              </button>
            </div>
            <div class="control">
              <button
                class="button is-light"
                @click.prevent="closeModal"
                :disabled="registrationDone"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- END LOGIN MODAL -->
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      apiError: null,
      apiErrorMessage: "",
      apiUrl: this.$config.apiBaseURL,
      registrationDone: false,
      sending: false
    };
  },
  props: ["isActive"],
  methods: {
    closeModal() {
      // this.$refs.email.blur();
      this.resetForm();
      this.$emit("subscribeModalClosed");
    },
    resetForm() {
      this.resetApiError();
      this.registrationDone = false;
      // this.loading = false;
      this.email = "";
      this.$v.email.$reset();
      this.sending = false;
    },
    resetApiError() {
      this.apiError = null;
      this.apiErrorMessage = "";
    },
    async onEnterSubmit() {
      this.$v.email.$touch();
      if (!this.$v.email.$error) {
        this.onSubmit();
      }
    },
    async onSubmit() {
      console.log(`=> ${this.apiUrl}`);
      this.sending = true;
      this.apiError = null;
      // this.loading = true;
      const email = this.email;
      try {
        const res = await this.$http.$post(`${this.apiUrl}/subscribers`, {
          email: this.email,
        });
        const data = await res;
        console.log(res);
        this.sending = false;
        this.registrationDone = true;
        setTimeout(() => this.$emit("subscribeModalClosed"), 3000);
        // ;
      } catch (error) {
        this.apiError = true;
        this.sending = false;
        if (error.statusCode === 400) {
          console.log(error.response.data);
          this.apiErrorMessage = error.response.data.errors.email;
        } else {
          // 500, 404?
          this.apiErrorMessage = "Server error, sorry :( Will fix.";
        }
        // this.loading = false;
      }
    },
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  // mounted() {
  //   console.log("Modal mounted");
  //   this.$nextTick(() => {
  //     this.$refs.email.focus();
  //   });
  // },
  fetchOnServer: false,
};
</script>

<style scoped>
.modal {
  font-family: "Palanquin", Sans-serif;
  padding-bottom: 20%;
}
.modal-content {
  overflow: hidden;
}
.modal .explain {
  margin-top: 1em;
}
.explain {
  margin-bottom: 0.6rem;
  font-size: 1em;
  line-height: 1.3em;
  color: #333;
}
.message-body {
  padding-bottom: 0.6rem;
}
label.label {
  margin-bottom: 0.3rem !important;
}

.label.isError {
  color: red;
}
.label.done {
  color: green;
}
.explain.done {
  color: green;
  font-weight: 700;
}
.field {
  margin-bottom: 1rem !important;
}
.rem-rec {
  display: flex;
  justify-content: space-between;
}
.submit-buttons {
  margin-top: 1.5rem;
}
.button.is-light {
  background-color: #cccccc;
  font-weight: bold;
}
label {
  line-height: 1.4em;
  padding-bottom: 0.1em;
}
@media only screen and (max-width: 999px) {
  .modal {
    justify-content: start;
  }
  .modal-content {
    max-height: 100%;
  }
}
</style>
