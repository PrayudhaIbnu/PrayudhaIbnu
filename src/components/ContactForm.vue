<template>
  <form @submit.prevent="sendEmail" class="max-w-md mx-auto bg-base-200 p-6 rounded-lg shadow-xl border border-base-100 space-y-4">
    <h2 class="text-2xl font-bold text-center text-accent">Hubungi Saya</h2>

    <input
      type="text"
      v-model="form.name"
      placeholder="Nama"
      required
      class="input input-bordered bg-base-100 w-full "
    />

    <input
      type="email"
      v-model="form.email"
      placeholder="Email"
      required
      class="input input-bordered bg-base-100 w-full "
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
    }
  },
  methods: {
    sendEmail() {
      const templateParams = {
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message,
      }

      emailjs
        .send('service_36zghpv', 'template_xvpagr6', templateParams, 'ymrlpEMLEgrK3li1r')
        .then(() => {
          alert('✅ Email berhasil dikirim!');
          this.form.name = ''
          this.form.email = ''
          this.form.message = ''
        })
        .catch((error) => {
          console.error('Email gagal dikirim:', error)
          alert('❌ Gagal mengirim email. Silakan coba lagi.')
        })
    },
  },
}
</script>
