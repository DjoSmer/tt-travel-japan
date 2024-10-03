<script setup lang="ts">
import { ref } from 'vue'
import TextField from '@/components/TextField.vue';
import Button from '@/components/Button.vue';
import type { ApiPayment, ApiResponse } from '@/types/payment';

const apiUrl = import.meta.env.VITE_API_URL;

const formRef = ref<HTMLFormElement>();

type StateType = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
}

const state = ref<StateType>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
});

const stateError = ref<Partial<StateType>>({});

const submit = async () => {
    if (!formRef.value?.reportValidity()) return false;

    stateError.value = {};
    try {
        const res = await fetch(`${apiUrl}/payment`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state.value)
        });
        const json = await res.json() as ApiResponse<ApiPayment, StateType>;

        if (!json.success) {
            json.message.forEach(({ property, message }) => {
                stateError.value[property] = message;
            });

            return;
        }

        window.location.href = json.result.redirectUrl;
    }
    catch (e) {
        console.log(e);
    }
}
</script>


<template>
    <form ref="formRef">
        <div class="row">
            <div class="col">
                <TextField v-model="state.firstName" label="First Name" name="firstName" placeholder="John" required
                    :error="stateError.firstName" />
            </div>
            <div class="col">
                <TextField v-model="state.lastName" label="Last name" name="lastName" placeholder="Show" required
                    :error="stateError.lastName" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TextField v-model="state.phone" label="Phone" name="phone" placeholder="7 9851112233" required
                    :error="stateError.phone" />
            </div>
            <div class="col">
                <TextField v-model="state.email" name="email" type="email" placeholder="name@example.com" label="Email"
                    :error="stateError.email" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TextField v-model="state.addressLine1" name="addressLine1" placeholder="Street name and number"
                    label="Address line 1" :error="stateError.addressLine1" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TextField v-model="state.addressLine2" name="addressLine2"
                    placeholder="Apartment, suite, unit, etc. (optional)" label="Address line 2"
                    :error="stateError.addressLine2" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TextField v-model="state.city" label="City" name="city" placeholder="Moscow"
                    :error="stateError.city" />
            </div>
            <div class="col">
                <TextField v-model="state.state" name="state" placeholder="Moscow" label="State"
                    :error="stateError.state" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <TextField v-model="state.postalCode" name="postalCode" placeholder="12345" label="Zip / Postal code"
                    :error="stateError.postalCode" />
            </div>
            <div class="col">
                <TextField v-model="state.country" name="country" placeholder="RU" label="Country"
                    :error="stateError.country" />
            </div>
        </div>

        <div class="row">
            <div class="col"></div>
            <Button type="button" label="Place order" @click="submit" />
        </div>
    </form>
</template>

<style scoped>
.row {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
}

.col {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>
