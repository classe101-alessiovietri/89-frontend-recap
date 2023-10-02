<script>
import axios from 'axios';

export default {
    name: "ContactPage",
    data() {
        return {
            contactData: {
                name: '',
                email: '',
                message: '',
            }
        }
    },
    computed: {
        submitDisabled() {
            let disabled = true;

            if (
                this.contactData.name != ''
                &&
                this.contactData.email != ''
                // &&
                // verifica che contactData.email sia effettivamente una mail
                &&
                this.contactData.message != ''
                &&
                this.contactData.name.length >= 5
                &&
                this.contactData.message.length >= 15
            ) {
                disabled = false;
            }

            return disabled;
        }
    },
    methods: {
        sendMessage() {
            axios
                .post('http://localhost:8000/api/contacts', this.contactData)
                .then(response => {
                    console.log(response);

                    this.contactData.name = '';
                    this.contactData.email = '';
                    this.contactData.message = '';

                    alert('Message sent successfully!');
                })
                .catch(err => {
                    console.log(err.response.data);

                    alert('Invalid data');
                });
        }
    }
}
</script>

<template>
    <h1>
        Contact
    </h1>
    <div>

        <form @submit.prevent="sendMessage()">
            <div>
                <label for="name">
                    Your name
                    <span>
                        *
                    </span>
                </label>
                <input type="text" name="name" id="name" minlength="5" placeholder="Enter your name..." v-model="contactData.name" required>
            </div>

            <div>
                <label for="email">
                    Your email
                    <span>
                        *
                    </span>
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email..." v-model="contactData.email" required>
            </div>

            <div>
                <label for="message">
                    Your message
                    <span>
                        *
                    </span>
                </label>
                <textarea name="message" id="message" rows="5" minlength="15" placeholder="Enter your message..." v-model="contactData.message"></textarea>
            </div>

            <div>
                <button type="submit" :disabled="submitDisabled">
                    Send >
                </button>
            </div>
        </form>

    </div>
</template>

<style lang="scss" scoped>
label {
    display: block;

    > span {
        font-weight: bold;
        color: red;
    }
}
</style>