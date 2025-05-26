<template>
  <div class="relative">
    <!-- NOTIFIKASI POPUP -->
    <div v-if="notification.message" :class="['toast toast-top toast-center', notification.type === 'success' ? 'text-success' : 'text-error']">
      <div :class="['alert', notification.type === 'success' ? 'alert-success alert-soft' : 'alert-error']">
        <span>{{ notification.message }}</span>
      </div>
    </div>

    <!-- FORM KONTAK -->
    <form @submit.prevent="sendEmail" class="max-w-md mx-auto bg-base-200 p-6 rounded-lg shadow-xl border border-base-100 space-y-4">
      <h2 class="text-2xl font-bold text-center text-accent">Hubungi Saya</h2>

      <input
        type="text"
        v-model="form.name"
        placeholder="Nama"
        required
        class="input input-bordered bg-base-100 w-full"
      />

      <input
        type="email"
        v-model="form.email"
        placeholder="Email"
        required
        class="input input-bordered bg-base-100 w-full"
      />

      <textarea
        v-model="form.message"
        placeholder="Pesan"
        required
        class="textarea textarea-bordered bg-base-100 w-full h-32"
      ></textarea>

      <button type="submit" class="btn btn-soft btn-accent rounded-full w-full">Kirim Pesan</button>
      <p class="text-xs italic opacity-35 text-center">Integrated with <span class="text-accent">emailJS</span></p>
    </form>
  </div>
</template>


<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      notification: {
        message: '',
        type: '', // 'success' or 'error'
      },
    }
  },
  methods: {
    showNotification(message, type = 'success') {
      this.notification.message = message
      this.notification.type = type
      setTimeout(() => {
        this.notification.message = ''
      }, 3000) // hide after 3 seconds
    },

    sendEmail() {
      const templateParams = {
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message,
      }

      emailjs
        .send('service_36zghpv', 'template_xvpagr6', templateParams, 'ymrlpEMLEgrK3li1r')
        .then(() => {
          this.showNotification('Email berhasil dikirim!', 'success')
          this.form.name = ''
          this.form.email = ''
          this.form.message = ''
        })
        .catch((error) => {
          console.error('Email gagal dikirim:', error)
          this.showNotification('❌ Gagal mengirim email. Silakan coba lagi.', 'error')
        })
    },
  },
}
</script>
